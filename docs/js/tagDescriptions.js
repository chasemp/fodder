/**
 * Fodder - Tag Descriptions and Metadata
 * 
 * This file contains descriptions for each tag used in the prompts database.
 * These descriptions help users understand what kinds of questions each tag represents.
 */

const TAG_DESCRIPTIONS = {
    // ==========================================
    // TOPIC TAGS
    // ==========================================
    "food": {
        name: "Food",
        category: "topic",
        description: "Questions about meals, cooking, favorite dishes, and culinary experiences.",
        icon: "🍽️"
    },
    "travel": {
        name: "Travel",
        category: "topic",
        description: "Adventures, vacations, destinations, and exploring the world.",
        icon: "✈️"
    },
    "career": {
        name: "Career",
        category: "topic",
        description: "Jobs, work experiences, professional life, and ambitions.",
        icon: "💼"
    },
    "memories": {
        name: "Memories",
        category: "topic",
        description: "Nostalgic questions about the past, childhood, and life experiences.",
        icon: "📷"
    },
    "holidays": {
        name: "Holidays",
        category: "topic",
        description: "Seasonal celebrations, traditions, and festive occasions.",
        icon: "🎄"
    },
    "family": {
        name: "Family",
        category: "topic",
        description: "Questions about relatives, family dynamics, and home life.",
        icon: "👨‍👩‍👧‍👦"
    },
    "friends": {
        name: "Friends",
        category: "topic",
        description: "Friendships, social connections, and relationships outside family.",
        icon: "👫"
    },
    "hobbies": {
        name: "Hobbies",
        category: "topic",
        description: "Leisure activities, interests, and how people spend free time.",
        icon: "🎨"
    },
    "entertainment": {
        name: "Entertainment",
        category: "topic",
        description: "Movies, music, TV shows, books, and pop culture.",
        icon: "🎬"
    },
    "nature": {
        name: "Nature",
        category: "topic",
        description: "The outdoors, animals, environment, and natural world.",
        icon: "🌿"
    },
    "home": {
        name: "Home",
        category: "topic",
        description: "Living spaces, domestic life, and what makes a house a home.",
        icon: "🏠"
    },
    "school": {
        name: "School",
        category: "topic",
        description: "Education, learning, teachers, and academic experiences.",
        icon: "📚"
    },
    "sports": {
        name: "Sports",
        category: "topic",
        description: "Athletics, games, competitions, and physical activities.",
        icon: "⚽"
    },
    "identity": {
        name: "Identity",
        category: "topic",
        description: "Self-perception, personality traits, and what makes you 'you'.",
        icon: "🪞"
    },

    // ==========================================
    // TYPE TAGS
    // ==========================================
    "preference": {
        name: "Preference",
        category: "type",
        description: "Your favorites, opinions, and personal tastes. Low-stakes questions about what you like.",
        icon: "❤️"
    },
    "experience": {
        name: "Experience",
        category: "type",
        description: "Things you've done, places you've been, and stories from your life.",
        icon: "🎯"
    },
    "hypothetical": {
        name: "Hypothetical",
        category: "type",
        description: "'What if' scenarios and imaginary situations that reveal how you think.",
        icon: "💭"
    },
    "reflection": {
        name: "Reflection",
        category: "type",
        description: "Looking back on life, lessons learned, and personal growth.",
        icon: "🔍"
    },
    "aspiration": {
        name: "Aspiration",
        category: "type",
        description: "Goals, dreams, bucket lists, and what you hope for the future.",
        icon: "🌟"
    },
    "opinion": {
        name: "Opinion",
        category: "type",
        description: "Your views on topics, debates, and what you believe.",
        icon: "💬"
    },
    "creative": {
        name: "Creative",
        category: "type",
        description: "Imaginative scenarios that encourage playful thinking and storytelling.",
        icon: "🎭"
    },

    // ==========================================
    // MOOD TAGS
    // ==========================================
    "fun": {
        name: "Fun",
        category: "mood",
        description: "Light, playful questions perfect for casual conversation.",
        icon: "🎉"
    },
    "silly": {
        name: "Silly",
        category: "mood",
        description: "Absurd, goofy questions that make everyone laugh.",
        icon: "🤪"
    },
    "deep": {
        name: "Deep",
        category: "mood",
        description: "Thoughtful questions about values, meaning, and significant life topics.",
        icon: "🌊"
    },
    "heartwarming": {
        name: "Heartwarming",
        category: "mood",
        description: "Questions that bring out gratitude, love, and positive emotions.",
        icon: "💖"
    },
    "nostalgic": {
        name: "Nostalgic",
        category: "mood",
        description: "Questions that transport you back to cherished moments.",
        icon: "📼"
    },
    "thoughtful": {
        name: "Thoughtful",
        category: "mood",
        description: "Questions that make you pause and really think before answering.",
        icon: "🤔"
    },
    "adventurous": {
        name: "Adventurous",
        category: "mood",
        description: "Questions about risk, exploration, and stepping outside comfort zones.",
        icon: "🧭"
    },
    "cozy": {
        name: "Cozy",
        category: "mood",
        description: "Warm, comforting questions perfect for intimate gatherings.",
        icon: "☕"
    },

    // ==========================================
    // AUDIENCE TAGS
    // ==========================================
    "all-ages": {
        name: "All Ages",
        category: "audience",
        description: "Appropriate and engaging for everyone from kids to grandparents.",
        icon: "👨‍👩‍👧‍👦"
    },
    "teens": {
        name: "Teens",
        category: "audience",
        description: "Questions that particularly resonate with teenagers.",
        icon: "🎧"
    },
    "adults": {
        name: "Adults",
        category: "audience",
        description: "Questions better suited for mature discussions.",
        icon: "👔"
    },
    "family-friendly": {
        name: "Family Friendly",
        category: "audience",
        description: "Safe for mixed-age family gatherings.",
        icon: "🏡"
    },

    // ==========================================
    // SPECIAL CONTENT TAGS (from research)
    // ==========================================
    "vulnerability": {
        name: "Vulnerability",
        category: "depth",
        description: "Questions that encourage sharing personal struggles, fears, or regrets. These build deep trust but should be used carefully.",
        icon: "💔"
    },
    "values": {
        name: "Values",
        category: "depth",
        description: "Questions about ethics, beliefs, and what matters most to you.",
        icon: "⚖️"
    },
    "digitalethics": {
        name: "Digital Ethics",
        category: "special",
        description: "Questions about technology's impact on relationships, AI, social media, and online life.",
        icon: "🤖"
    },
    "stewardship": {
        name: "Environmental Stewardship",
        category: "special",
        description: "Questions about nature, climate, sustainability, and our relationship with the planet.",
        icon: "🌍"
    },
    "globalcitizen": {
        name: "Global Citizenship",
        category: "special",
        description: "Questions about culture, traditions, and what connects us across borders.",
        icon: "🌐"
    },
    "bravespace": {
        name: "Brave Space",
        category: "special",
        description: "Questions designed for difficult but important conversations about diversity, inclusion, and social issues. Requires psychological safety.",
        icon: "🛡️"
    },
    "selfawareness": {
        name: "Self-Awareness",
        category: "emotional",
        description: "Questions that help you identify your emotions, patterns, and triggers.",
        icon: "🧘"
    },
    "gratitude": {
        name: "Gratitude",
        category: "emotional",
        description: "Questions that focus on thankfulness and appreciation.",
        icon: "🙏"
    },
    "legacy": {
        name: "Legacy",
        category: "depth",
        description: "Questions about how you want to be remembered and what you want to pass on.",
        icon: "📜"
    },
    "risky": {
        name: "Risky/Mischief",
        category: "mood",
        description: "Questions about rule-breaking, embarrassing moments, and minor failures. Great for bonding through shared imperfection.",
        icon: "🎲"
    },
    "gross": {
        name: "Gross/Absurd",
        category: "mood",
        description: "Intentionally disgusting or bizarre hypotheticals. Popular with teens and those who enjoy shock humor.",
        icon: "🤢"
    }
};

// Category metadata for grouping tags in the UI
const TAG_CATEGORIES = {
    topic: {
        name: "Topics",
        description: "What the question is about",
        order: 1
    },
    type: {
        name: "Question Types",
        description: "The style of question being asked",
        order: 2
    },
    mood: {
        name: "Mood & Tone",
        description: "The emotional feel of the question",
        order: 3
    },
    audience: {
        name: "Audience",
        description: "Who the question is best suited for",
        order: 4
    },
    depth: {
        name: "Depth & Values",
        description: "Questions that go deeper into character and beliefs",
        order: 5
    },
    emotional: {
        name: "Emotional Intelligence",
        description: "Questions focused on feelings and self-understanding",
        order: 6
    },
    special: {
        name: "Special Topics",
        description: "Specific thematic areas for targeted discussions",
        order: 7
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.TAG_DESCRIPTIONS = TAG_DESCRIPTIONS;
    window.TAG_CATEGORIES = TAG_CATEGORIES;
}

