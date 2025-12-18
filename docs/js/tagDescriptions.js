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
        description: "Nostalgic questions about the past, childhood, cherished moments, and life experiences.",
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
        name: "Nature & Outdoors",
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
        description: "Looking back on life, identifying emotions and patterns, lessons learned, and personal growth.",
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
        description: "Thoughtful questions that make you pause and think about values, meaning, vulnerability, and significant life topics.",
        icon: "🌊"
    },
    "heartwarming": {
        name: "Heartwarming",
        category: "mood",
        description: "Warm, comforting questions that bring out gratitude, love, and positive emotions. Perfect for intimate gatherings.",
        icon: "💖"
    },
    "adventurous": {
        name: "Adventurous",
        category: "mood",
        description: "Questions about risk, exploration, mischief, and stepping outside comfort zones.",
        icon: "🧭"
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
    "adults": {
        name: "Adults",
        category: "audience",
        description: "Questions better suited for mature discussions.",
        icon: "👔"
    },

    // ==========================================
    // DEPTH TAGS
    // ==========================================
    "values": {
        name: "Values",
        category: "depth",
        description: "Questions about ethics, beliefs, stewardship, global citizenship, and what matters most to you.",
        icon: "⚖️"
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
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.TAG_DESCRIPTIONS = TAG_DESCRIPTIONS;
    window.TAG_CATEGORIES = TAG_CATEGORIES;
}

