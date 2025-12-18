/**
 * Fodder - Conversation Starters App
 * A PWA for family conversation prompts with tag-based filtering
 */

(function() {
    'use strict';

    // ============================================
    // State Management
    // ============================================
    const state = {
        prompts: [],
        filteredPrompts: [],
        includeTags: new Set(),
        excludeTags: new Set(),
        persistentExcludedTags: new Set(), // Tags excluded via settings page
        currentMode: 'include', // 'include' or 'exclude'
        currentPromptIndex: -1,
        allTags: new Map(), // tag -> count
        touchStartX: 0,
        touchStartY: 0,
        swipeHintShown: false
    };

    // ============================================
    // DOM Elements
    // ============================================
    const elements = {
        tagCloud: document.getElementById('tag-cloud'),
        includeTagsDisplay: document.querySelector('#include-tags .filter-tags'),
        excludeTagsDisplay: document.querySelector('#exclude-tags .filter-tags'),
        includeTagsGroup: document.getElementById('include-tags'),
        excludeTagsGroup: document.getElementById('exclude-tags'),
        modeInclude: document.getElementById('mode-include'),
        modeExclude: document.getElementById('mode-exclude'),
        clearFilters: document.getElementById('clear-filters'),
        randomBtn: document.getElementById('random-btn'),
        shuffleBtn: document.getElementById('shuffle-btn'),
        promptCard: document.getElementById('prompt-card'),
        promptText: document.querySelector('.prompt-text'),
        cardTags: document.getElementById('card-tags'),
        filteredCount: document.getElementById('filtered-count'),
        totalCount: document.getElementById('total-count'),
        viewListBtn: document.getElementById('view-list-btn'),
        listView: document.getElementById('list-view'),
        closeList: document.getElementById('close-list'),
        promptList: document.getElementById('prompt-list'),
        swipeHint: document.getElementById('swipe-hint'),
        installPrompt: document.getElementById('install-prompt'),
        installBtn: document.getElementById('install-btn'),
        dismissInstall: document.getElementById('dismiss-install'),
        // Filter toggle elements
        filterToggle: document.getElementById('filter-toggle'),
        filterContent: document.getElementById('filter-content'),
        filterArrow: document.getElementById('filter-arrow'),
        filterBadge: document.getElementById('filter-badge'),
        activeFilters: document.getElementById('active-filters')
    };

    // ============================================
    // Initialization
    // ============================================
    function init() {
        // Load prompts from prompts.js (must be loaded before this script)
        if (typeof PROMPTS !== 'undefined') {
            state.prompts = PROMPTS;
            state.filteredPrompts = [...PROMPTS];
        } else {
            console.error('Prompts not loaded! Make sure prompts.js is included before app.js');
            return;
        }

        buildTagCloud();
        updateCounts();
        loadSavedState();
        attachEventListeners();
        registerServiceWorker();
        setupInstallPrompt();
        
        // Show a random prompt on load
        showRandomPrompt();
    }

    // ============================================
    // Tag Cloud Building
    // ============================================
    function buildTagCloud() {
        // Count tags
        state.allTags.clear();
        state.prompts.forEach(prompt => {
            prompt.tags.forEach(tag => {
                state.allTags.set(tag, (state.allTags.get(tag) || 0) + 1);
            });
        });

        // Sort tags by count (descending), then alphabetically
        const sortedTags = Array.from(state.allTags.entries())
            .sort((a, b) => {
                if (b[1] !== a[1]) return b[1] - a[1];
                return a[0].localeCompare(b[0]);
            });

        // Render tags
        elements.tagCloud.innerHTML = sortedTags.map(([tag, count]) => `
            <button class="tag" data-tag="${escapeHtml(tag)}">
                ${escapeHtml(tag)}
                <span class="tag-count">(${count})</span>
            </button>
        `).join('');

        // Update total count
        elements.totalCount.textContent = state.prompts.length;
    }

    // ============================================
    // Filtering Logic
    // ============================================
    function filterPrompts() {
        state.filteredPrompts = state.prompts.filter(prompt => {
            // First check persistent exclusions from settings page
            if (state.persistentExcludedTags.size > 0) {
                const hasPersistentExclude = prompt.tags.some(tag => state.persistentExcludedTags.has(tag));
                if (hasPersistentExclude) return false;
            }

            // If include tags exist, prompt must have at least one
            if (state.includeTags.size > 0) {
                const hasIncludedTag = prompt.tags.some(tag => state.includeTags.has(tag));
                if (!hasIncludedTag) return false;
            }

            // If exclude tags exist (from filter panel), prompt must not have any
            if (state.excludeTags.size > 0) {
                const hasExcludedTag = prompt.tags.some(tag => state.excludeTags.has(tag));
                if (hasExcludedTag) return false;
            }

            return true;
        });

        updateCounts();
        updateTagCloudStyles();
        updateActiveFiltersDisplay();
        saveState();
    }

    function updateCounts() {
        // Show current card number out of total (e.g., "42/475")
        const currentNum = state.currentPromptIndex >= 0 ? state.currentPromptIndex + 1 : 0;
        elements.filteredCount.textContent = currentNum;
        elements.totalCount.textContent = state.filteredPrompts.length;
    }

    function updateTagCloudStyles() {
        const tagButtons = elements.tagCloud.querySelectorAll('.tag');
        tagButtons.forEach(btn => {
            const tag = btn.dataset.tag;
            btn.classList.remove('included', 'excluded');
            
            if (state.includeTags.has(tag)) {
                btn.classList.add('included');
            } else if (state.excludeTags.has(tag)) {
                btn.classList.add('excluded');
            }
        });
    }

    function updateActiveFiltersDisplay() {
        const totalFilters = state.includeTags.size + state.excludeTags.size;
        
        // Update filter badge
        if (totalFilters > 0) {
            elements.filterBadge.textContent = totalFilters;
            elements.filterBadge.classList.add('visible');
        } else {
            elements.filterBadge.classList.remove('visible');
        }

        // Update include tags display
        if (state.includeTags.size > 0) {
            elements.includeTagsGroup.classList.add('has-tags');
            elements.includeTagsDisplay.innerHTML = Array.from(state.includeTags).map(tag => `
                <span class="filter-tag">
                    ${escapeHtml(tag)}
                    <span class="filter-tag-remove" data-tag="${escapeHtml(tag)}" data-type="include">×</span>
                </span>
            `).join('');
        } else {
            elements.includeTagsGroup.classList.remove('has-tags');
            elements.includeTagsDisplay.innerHTML = '';
        }

        // Update exclude tags display
        if (state.excludeTags.size > 0) {
            elements.excludeTagsGroup.classList.add('has-tags');
            elements.excludeTagsDisplay.innerHTML = Array.from(state.excludeTags).map(tag => `
                <span class="filter-tag">
                    ${escapeHtml(tag)}
                    <span class="filter-tag-remove" data-tag="${escapeHtml(tag)}" data-type="exclude">×</span>
                </span>
            `).join('');
        } else {
            elements.excludeTagsGroup.classList.remove('has-tags');
            elements.excludeTagsDisplay.innerHTML = '';
        }
    }

    // ============================================
    // Filter Toggle
    // ============================================
    function toggleFilterPanel() {
        const isOpen = elements.filterContent.style.display !== 'none';
        elements.filterContent.style.display = isOpen ? 'none' : 'block';
        elements.filterArrow.classList.toggle('open', !isOpen);
    }

    // ============================================
    // Tag Toggle Logic
    // ============================================
    function toggleTag(tag) {
        if (state.currentMode === 'include') {
            // Remove from exclude if present
            state.excludeTags.delete(tag);
            
            // Toggle in include
            if (state.includeTags.has(tag)) {
                state.includeTags.delete(tag);
            } else {
                state.includeTags.add(tag);
            }
        } else {
            // Remove from include if present
            state.includeTags.delete(tag);
            
            // Toggle in exclude
            if (state.excludeTags.has(tag)) {
                state.excludeTags.delete(tag);
            } else {
                state.excludeTags.add(tag);
            }
        }

        filterPrompts();
    }

    function removeTag(tag, type) {
        if (type === 'include') {
            state.includeTags.delete(tag);
        } else {
            state.excludeTags.delete(tag);
        }
        filterPrompts();
    }

    function clearAllFilters() {
        state.includeTags.clear();
        state.excludeTags.clear();
        filterPrompts();
    }

    function setMode(mode) {
        state.currentMode = mode;
        elements.modeInclude.classList.toggle('active', mode === 'include');
        elements.modeExclude.classList.toggle('active', mode === 'exclude');
    }

    // ============================================
    // Prompt Display
    // ============================================
    function showRandomPrompt() {
        if (state.filteredPrompts.length === 0) {
            displayPrompt({
                text: "No prompts match your filters. Try adjusting your tag selection!",
                tags: []
            });
            return;
        }

        // Get a random prompt that's different from the current one (if possible)
        let newIndex;
        if (state.filteredPrompts.length === 1) {
            newIndex = 0;
        } else {
            do {
                newIndex = Math.floor(Math.random() * state.filteredPrompts.length);
            } while (newIndex === state.currentPromptIndex);
        }

        state.currentPromptIndex = newIndex;
        displayPrompt(state.filteredPrompts[newIndex]);
        updateCounts();
        animateCard();
    }

    function displayPrompt(prompt) {
        elements.promptText.textContent = prompt.text;
        
        // Display tags with ID
        const idBadge = prompt.id ? `<span class="card-tag card-tag-id">${prompt.id}</span>` : '';
        elements.cardTags.innerHTML = idBadge + prompt.tags.map(tag => 
            `<span class="card-tag">#${escapeHtml(tag)}</span>`
        ).join('');
    }

    function animateCard() {
        elements.promptCard.classList.remove('flip');
        // Trigger reflow
        void elements.promptCard.offsetWidth;
        elements.promptCard.classList.add('flip');
    }

    function shufflePrompts() {
        // Fisher-Yates shuffle
        const arr = [...state.filteredPrompts];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        state.filteredPrompts = arr;
        state.currentPromptIndex = -1;
        showRandomPrompt();
    }

    // ============================================
    // List View
    // ============================================
    function showListView() {
        renderPromptList();
        elements.listView.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function hideListView() {
        elements.listView.style.display = 'none';
        document.body.style.overflow = '';
    }

    function renderPromptList() {
        elements.promptList.innerHTML = state.filteredPrompts.map((prompt, index) => `
            <div class="prompt-list-item" data-index="${index}">
                <div class="prompt-list-header">
                    ${prompt.id ? `<span class="prompt-list-id">${prompt.id}</span>` : ''}
                    <p>${escapeHtml(prompt.text)}</p>
                </div>
                <div class="prompt-list-tags">
                    ${prompt.tags.map(tag => `<span class="prompt-list-tag">#${escapeHtml(tag)}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    function selectPromptFromList(index) {
        state.currentPromptIndex = index;
        displayPrompt(state.filteredPrompts[index]);
        updateCounts();
        hideListView();
        animateCard();
    }

    // ============================================
    // Touch/Swipe Handling
    // ============================================
    function handleTouchStart(e) {
        state.touchStartX = e.touches[0].clientX;
        state.touchStartY = e.touches[0].clientY;
    }

    function handleTouchEnd(e) {
        if (!state.touchStartX) return;

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = state.touchStartX - touchEndX;
        const diffY = state.touchStartY - touchEndY;

        // Only trigger swipe if horizontal movement is greater than vertical
        // and greater than threshold
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            showRandomPrompt();
            hideSwipeHint();
        }

        state.touchStartX = 0;
        state.touchStartY = 0;
    }

    function hideSwipeHint() {
        if (!state.swipeHintShown) {
            state.swipeHintShown = true;
            elements.swipeHint.style.display = 'none';
            localStorage.setItem('fodder_swipeHintShown', 'true');
        }
    }

    // ============================================
    // State Persistence
    // ============================================
    function saveState() {
        try {
            const stateToSave = {
                includeTags: Array.from(state.includeTags),
                excludeTags: Array.from(state.excludeTags)
            };
            localStorage.setItem('fodder_state', JSON.stringify(stateToSave));
        } catch (e) {
            console.warn('Could not save state to localStorage:', e);
        }
    }

    function loadSavedState() {
        try {
            // Load persistent tag exclusions from settings page
            const excludedTags = localStorage.getItem('fodder_excludedTags');
            if (excludedTags) {
                state.persistentExcludedTags = new Set(JSON.parse(excludedTags));
            }

            // Load session filter state
            const saved = localStorage.getItem('fodder_state');
            if (saved) {
                const parsed = JSON.parse(saved);
                state.includeTags = new Set(parsed.includeTags || []);
                state.excludeTags = new Set(parsed.excludeTags || []);
            }
            
            // Apply filters (including persistent exclusions)
            filterPrompts();

            // Check swipe hint
            if (localStorage.getItem('fodder_swipeHintShown') === 'true') {
                state.swipeHintShown = true;
                if (elements.swipeHint) {
                    elements.swipeHint.style.display = 'none';
                }
            }
        } catch (e) {
            console.warn('Could not load saved state:', e);
        }
    }

    // ============================================
    // PWA / Service Worker
    // ============================================
    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registered:', registration.scope);
                })
                .catch(error => {
                    console.warn('ServiceWorker registration failed:', error);
                });
        }
    }

    // ============================================
    // Install Prompt
    // ============================================
    let deferredPrompt = null;

    function setupInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            // Check if user has dismissed before
            if (localStorage.getItem('fodder_installDismissed') !== 'true') {
                elements.installPrompt.style.display = 'block';
            }
        });

        window.addEventListener('appinstalled', () => {
            elements.installPrompt.style.display = 'none';
            deferredPrompt = null;
        });
    }

    function handleInstallClick() {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted install prompt');
            }
            deferredPrompt = null;
            elements.installPrompt.style.display = 'none';
        });
    }

    function dismissInstall() {
        elements.installPrompt.style.display = 'none';
        localStorage.setItem('fodder_installDismissed', 'true');
    }

    // ============================================
    // Event Listeners
    // ============================================
    function attachEventListeners() {
        // Filter toggle
        elements.filterToggle.addEventListener('click', toggleFilterPanel);

        // Tag cloud clicks
        elements.tagCloud.addEventListener('click', (e) => {
            const tagBtn = e.target.closest('.tag');
            if (tagBtn) {
                toggleTag(tagBtn.dataset.tag);
            }
        });

        // Mode toggles
        elements.modeInclude.addEventListener('click', () => setMode('include'));
        elements.modeExclude.addEventListener('click', () => setMode('exclude'));

        // Clear filters
        elements.clearFilters.addEventListener('click', clearAllFilters);

        // Active filter tag removal
        [elements.includeTagsDisplay, elements.excludeTagsDisplay].forEach(el => {
            el.addEventListener('click', (e) => {
                const removeBtn = e.target.closest('.filter-tag-remove');
                if (removeBtn) {
                    removeTag(removeBtn.dataset.tag, removeBtn.dataset.type);
                }
            });
        });

        // Random and shuffle buttons
        elements.randomBtn.addEventListener('click', showRandomPrompt);
        elements.shuffleBtn.addEventListener('click', shufflePrompts);

        // Card tap for next prompt
        elements.promptCard.addEventListener('click', showRandomPrompt);

        // Touch events for swipe
        elements.promptCard.addEventListener('touchstart', handleTouchStart, { passive: true });
        elements.promptCard.addEventListener('touchend', handleTouchEnd, { passive: true });

        // List view
        elements.viewListBtn.addEventListener('click', showListView);
        elements.closeList.addEventListener('click', hideListView);
        elements.promptList.addEventListener('click', (e) => {
            const item = e.target.closest('.prompt-list-item');
            if (item) {
                selectPromptFromList(parseInt(item.dataset.index, 10));
            }
        });

        // Install prompt
        elements.installBtn.addEventListener('click', handleInstallClick);
        elements.dismissInstall.addEventListener('click', dismissInstall);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (elements.listView.style.display === 'block') {
                if (e.key === 'Escape') {
                    hideListView();
                }
                return;
            }

            if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
                e.preventDefault();
                showRandomPrompt();
            }
        });
    }

    // ============================================
    // Utility Functions
    // ============================================
    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ============================================
    // Start the app
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

