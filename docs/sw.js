/**
 * Fodder - Service Worker
 * Enables offline functionality for the PWA
 */

const CACHE_VERSION = '0.0.11';
const CACHE_NAME = `fodder-cache-${CACHE_VERSION}`;

// Assets to cache on install
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/tags.html',
    '/manifest.json',
    '/css/styles.css',
    '/js/app.js',
    '/js/prompts.js',
    '/js/tagDescriptions.js',
    '/assets/fodder_icon.png',
    '/assets/fodder_logo_transparent_bg.png',
    '/assets/fodder_splash.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(async (cache) => {
                console.log('[SW] Caching static assets...');
                
                // Cache each asset individually to handle failures gracefully
                for (const url of STATIC_ASSETS) {
                    try {
                        await cache.add(url);
                        console.log(`[SW] Cached: ${url}`);
                    } catch (error) {
                        console.warn(`[SW] Failed to cache ${url}:`, error.message);
                    }
                }
                
                console.log('[SW] Install complete');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('[SW] Install failed:', error);
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName.startsWith('fodder-') && cacheName !== CACHE_NAME) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[SW] Activated successfully');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip non-http(s) requests
    if (!url.protocol.startsWith('http')) {
        return;
    }
    
    // For navigation requests (HTML), try network first
    if (request.mode === 'navigate') {
        event.respondWith(networkFirst(request));
        return;
    }
    
    // For static assets, use cache first
    if (isStaticAsset(url.pathname)) {
        event.respondWith(cacheFirst(request));
        return;
    }
    
    // For everything else, try network first
    event.respondWith(networkFirst(request));
});

// Cache-first strategy
async function cacheFirst(request) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('[SW] Cache-first failed:', error);
        return new Response('Offline - Asset not available', { status: 503 });
    }
}

// Network-first strategy
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.log('[SW] Network failed, trying cache...');
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // Return offline page for navigation requests
        if (request.mode === 'navigate') {
            const offlinePage = await caches.match('/index.html');
            if (offlinePage) {
                return offlinePage;
            }
        }
        
        return new Response('Offline', { status: 503 });
    }
}

// Check if request is for a static asset
function isStaticAsset(pathname) {
    return pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

// Handle messages from the app
self.addEventListener('message', (event) => {
    const { action } = event.data;
    
    switch (action) {
        case 'SKIP_WAITING':
            self.skipWaiting();
            break;
            
        case 'CLEAR_CACHE':
            clearCache().then(() => {
                event.ports[0].postMessage({ success: true });
            });
            break;
    }
});

async function clearCache() {
    const cacheNames = await caches.keys();
    await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('[SW] All caches cleared');
}

console.log('[SW] Service worker loaded');

