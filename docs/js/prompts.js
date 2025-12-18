/**
 * Fodder - Conversation Prompts Database
 * A curated collection of family-friendly conversation starters
 * 
 * Each prompt has a unique 6-character hex ID for easy reference.
 * 
 * Tags are designed to overlap, allowing flexible filtering:
 * 
 * TOPIC TAGS:
 * - food, travel, career, memories, holidays, family, friends
 * - hobbies, entertainment, nature, home, school, sports
 * 
 * TYPE TAGS:
 * - preference (favorites, opinions)
 * - experience (things you've done)
 * - hypothetical (what if scenarios)
 * - reflection (looking back)
 * - aspiration (goals, dreams)
 * - opinion (views on topics)
 * 
 * MOOD TAGS:
 * - fun, silly, deep, heartwarming, nostalgic, creative
 * - thoughtful, adventurous, cozy
 * 
 * AUDIENCE TAGS:
 * - all-ages, teens, adults
 * - family-friendly
 */

const PROMPTS = [
    // ==========================================
    // FOOD & COOKING
    // ==========================================
    {
        id: "a1b2c3",
        text: "What's your favorite Thanksgiving side dish?",
        tags: ["food", "preference", "holidays", "family", "fun"]
    },
    {
        id: "d4e5f6",
        text: "If you could only eat one cuisine for the rest of your life, what would it be?",
        tags: ["food", "hypothetical", "preference", "fun"]
    },
    {
        id: "17a8b9",
        text: "What's a food you hated as a child but love now?",
        tags: ["food", "reflection", "experience", "nostalgic"]
    },
    {
        id: "2c3d4e",
        text: "What's your go-to comfort food when you're feeling down?",
        tags: ["food", "preference", "cozy", "heartwarming"]
    },
    {
        id: "5f6a7b",
        text: "If you could have dinner with any chef, living or dead, who would it be?",
        tags: ["food", "hypothetical", "fun", "creative"]
    },
    {
        id: "8c9d0e",
        text: "What's the most unusual food you've ever tried?",
        tags: ["food", "experience", "adventurous", "fun"]
    },
    {
        id: "1f2a3b",
        text: "What's a family recipe that's been passed down through generations?",
        tags: ["food", "family", "memories", "nostalgic", "heartwarming"]
    },
    {
        id: "4c5d6e",
        text: "What's your favorite thing to cook or bake?",
        tags: ["food", "preference", "hobbies", "creative"]
    },
    {
        id: "7f8a9b",
        text: "What food reminds you most of your childhood?",
        tags: ["food", "memories", "nostalgic", "reflection"]
    },
    {
        id: "0c1d2e",
        text: "What's the best meal someone has ever made for you?",
        tags: ["food", "memories", "heartwarming", "family"]
    },
    {
        id: "3f4a5b",
        text: "If you were a pizza topping, what would you be and why?",
        tags: ["food", "silly", "fun", "creative", "all-ages"]
    },
    {
        id: "6c7d8e",
        text: "What's a food trend you just don't understand?",
        tags: ["food", "opinion", "fun", "adults"]
    },
    {
        id: "9f0a1b",
        text: "What's your favorite holiday dessert?",
        tags: ["food", "preference", "holidays", "family", "cozy"]
    },
    {
        id: "2c3d4f",
        text: "If you had to give up coffee, tea, or soda forever, which would it be?",
        tags: ["food", "hypothetical", "preference", "fun"]
    },
    {
        id: "5e6f7a",
        text: "What's the best restaurant you've ever been to?",
        tags: ["food", "experience", "travel", "memories"]
    },

    // ==========================================
    // TRAVEL & PLACES
    // ==========================================
    {
        id: "8b9c0d",
        text: "What's the warmest place you've ever been on vacation?",
        tags: ["travel", "experience", "memories", "adventurous"]
    },
    {
        id: "1e2f3a",
        text: "If you could live anywhere in the world for a year, where would it be?",
        tags: ["travel", "hypothetical", "aspiration", "adventurous"]
    },
    {
        id: "4b5c6d",
        text: "What's the most beautiful place you've ever visited?",
        tags: ["travel", "experience", "memories", "nature"]
    },
    {
        id: "7e8f9a",
        text: "What destination is at the top of your bucket list?",
        tags: ["travel", "aspiration", "adventurous", "fun"]
    },
    {
        id: "0b1c2d",
        text: "What's your favorite family vacation memory?",
        tags: ["travel", "family", "memories", "nostalgic", "heartwarming"]
    },
    {
        id: "3e4f5a",
        text: "Road trip or flying - which do you prefer?",
        tags: ["travel", "preference", "opinion", "fun"]
    },
    {
        id: "6b7c8d",
        text: "What's the longest trip you've ever taken?",
        tags: ["travel", "experience", "memories", "adventurous"]
    },
    {
        id: "9e0f1a",
        text: "Beach vacation or mountain retreat?",
        tags: ["travel", "preference", "fun", "nature"]
    },
    {
        id: "2b3c4d",
        text: "What's the coldest place you've ever been?",
        tags: ["travel", "experience", "memories", "adventurous"]
    },
    {
        id: "5e6f7b",
        text: "If you could take a trip with anyone, past or present, who would it be?",
        tags: ["travel", "hypothetical", "deep", "heartwarming"]
    },
    {
        id: "8a9b0c",
        text: "What's a place you've visited that exceeded your expectations?",
        tags: ["travel", "experience", "memories", "thoughtful"]
    },
    {
        id: "1d2e3f",
        text: "Do you prefer planned itineraries or spontaneous adventures?",
        tags: ["travel", "preference", "opinion", "fun"]
    },
    {
        id: "4a5b6c",
        text: "What souvenir from a trip is most meaningful to you?",
        tags: ["travel", "memories", "heartwarming", "reflection"]
    },
    {
        id: "7d8e9f",
        text: "Where did your family go on vacation when you were a kid?",
        tags: ["travel", "family", "memories", "nostalgic", "reflection"]
    },
    {
        id: "0a1b2c",
        text: "What's a hidden gem of a place that most people don't know about?",
        tags: ["travel", "experience", "opinion", "fun"]
    },

    // ==========================================
    // CAREER & WORK
    // ==========================================
    {
        id: "3d4e5f",
        text: "What career would you be interested in shadowing for a day?",
        tags: ["career", "hypothetical", "aspiration", "thoughtful"]
    },
    {
        id: "6a7b8c",
        text: "What did you want to be when you grew up?",
        tags: ["career", "memories", "nostalgic", "reflection", "all-ages"]
    },
    {
        id: "9d0e1f",
        text: "What's the best job you've ever had?",
        tags: ["career", "experience", "reflection", "adults"]
    },
    {
        id: "2a3b4c",
        text: "If money wasn't a concern, what would you do for work?",
        tags: ["career", "hypothetical", "aspiration", "deep"]
    },
    {
        id: "5d6e7f",
        text: "What's a skill you wish you had learned earlier in your career?",
        tags: ["career", "reflection", "thoughtful", "adults"]
    },
    {
        id: "8a9b0d",
        text: "Who has been your most influential mentor?",
        tags: ["career", "reflection", "heartwarming", "deep"]
    },
    {
        id: "1c2d3e",
        text: "What's the most interesting job someone in our family has had?",
        tags: ["career", "family", "memories", "fun"]
    },
    {
        id: "4f5a6b",
        text: "If you could switch jobs with anyone for a week, who would it be?",
        tags: ["career", "hypothetical", "fun", "creative"]
    },
    {
        id: "7c8d9e",
        text: "What's the strangest job you've ever heard of?",
        tags: ["career", "fun", "silly", "opinion"]
    },
    {
        id: "0f1a2b",
        text: "What advice would you give your younger self about work?",
        tags: ["career", "reflection", "deep", "thoughtful", "adults"]
    },

    // ==========================================
    // MEMORIES & NOSTALGIA
    // ==========================================
    {
        id: "3c4d5e",
        text: "What's your earliest memory?",
        tags: ["memories", "reflection", "nostalgic", "deep"]
    },
    {
        id: "6f7a8b",
        text: "What was your favorite toy growing up?",
        tags: ["memories", "nostalgic", "fun", "all-ages"]
    },
    {
        id: "9c0d1e",
        text: "What's a tradition from your childhood that you miss?",
        tags: ["memories", "family", "nostalgic", "heartwarming"]
    },
    {
        id: "2f3a4b",
        text: "What was your favorite subject in school?",
        tags: ["memories", "school", "preference", "nostalgic", "all-ages"]
    },
    {
        id: "5c6d7e",
        text: "What's the best birthday you've ever had?",
        tags: ["memories", "experience", "fun", "heartwarming"]
    },
    {
        id: "8f9a0b",
        text: "What was your favorite game to play as a kid?",
        tags: ["memories", "nostalgic", "fun", "all-ages"]
    },
    {
        id: "1c2d3f",
        text: "Who was your childhood best friend?",
        tags: ["memories", "friends", "nostalgic", "heartwarming"]
    },
    {
        id: "4e5f6a",
        text: "What's a song that instantly takes you back in time?",
        tags: ["memories", "entertainment", "nostalgic", "fun"]
    },
    {
        id: "7b8c9d",
        text: "What was your favorite family tradition growing up?",
        tags: ["memories", "family", "holidays", "nostalgic", "heartwarming"]
    },
    {
        id: "0e1f2a",
        text: "What's the most trouble you ever got into as a kid?",
        tags: ["memories", "silly", "fun", "nostalgic"]
    },
    {
        id: "3b4c5d",
        text: "What was your first car?",
        tags: ["memories", "experience", "nostalgic", "adults"]
    },
    {
        id: "6e7f8a",
        text: "What fad from your youth do you wish would come back?",
        tags: ["memories", "nostalgic", "fun", "opinion"]
    },
    {
        id: "9b0c1d",
        text: "What's a smell that brings back strong memories?",
        tags: ["memories", "nostalgic", "reflection", "deep"]
    },
    {
        id: "2e3f4a",
        text: "What did you do during summer vacations as a kid?",
        tags: ["memories", "nostalgic", "family", "fun"]
    },
    {
        id: "5b6c7d",
        text: "What's a story from your grandparents that you love?",
        tags: ["memories", "family", "nostalgic", "heartwarming"]
    },

    // ==========================================
    // PREFERENCES & FAVORITES
    // ==========================================
    {
        id: "8e9f0a",
        text: "What's your favorite color?",
        tags: ["preference", "fun", "all-ages", "silly"]
    },
    {
        id: "1b2c3d",
        text: "What's your favorite season and why?",
        tags: ["preference", "nature", "opinion", "fun"]
    },
    {
        id: "4e5f6b",
        text: "What's your favorite holiday?",
        tags: ["preference", "holidays", "fun", "all-ages"]
    },
    {
        id: "7a8b9c",
        text: "Morning person or night owl?",
        tags: ["preference", "opinion", "fun", "all-ages"]
    },
    {
        id: "0d1e2f",
        text: "What's your favorite way to spend a rainy day?",
        tags: ["preference", "cozy", "fun", "hobbies"]
    },
    {
        id: "3a4b5c",
        text: "Dogs or cats?",
        tags: ["preference", "fun", "silly", "all-ages"]
    },
    {
        id: "6d7e8f",
        text: "What's your favorite book you've read this year?",
        tags: ["preference", "entertainment", "hobbies", "thoughtful"]
    },
    {
        id: "9a0b1c",
        text: "What's your favorite movie of all time?",
        tags: ["preference", "entertainment", "fun"]
    },
    {
        id: "2d3e4f",
        text: "What's your favorite family photo?",
        tags: ["preference", "family", "memories", "heartwarming"]
    },
    {
        id: "5a6b7c",
        text: "What's your favorite way to exercise?",
        tags: ["preference", "hobbies", "sports", "fun"]
    },
    {
        id: "8d9e0f",
        text: "What's your favorite thing about the holiday season?",
        tags: ["preference", "holidays", "cozy", "family", "heartwarming"]
    },
    {
        id: "1a2b3c",
        text: "Sweet or savory?",
        tags: ["preference", "food", "fun", "all-ages"]
    },
    {
        id: "4d5e6f",
        text: "What's your favorite board game?",
        tags: ["preference", "entertainment", "family", "fun", "all-ages"]
    },
    {
        id: "7a8b9d",
        text: "What's your favorite room in your house?",
        tags: ["preference", "home", "cozy", "fun"]
    },
    {
        id: "0c1d2f",
        text: "What's your favorite way to relax?",
        tags: ["preference", "hobbies", "cozy", "fun"]
    },

    // ==========================================
    // EXPERIENCES & ADVENTURES
    // ==========================================
    {
        id: "3a4b5d",
        text: "Have you ever fallen out of a tree?",
        tags: ["experience", "adventurous", "fun", "silly"]
    },
    {
        id: "6c7d8f",
        text: "What's the bravest thing you've ever done?",
        tags: ["experience", "adventurous", "deep", "reflection"]
    },
    {
        id: "9a0b1d",
        text: "What's the most spontaneous thing you've ever done?",
        tags: ["experience", "adventurous", "fun", "memories"]
    },
    {
        id: "2c3d4a",
        text: "Have you ever met anyone famous?",
        tags: ["experience", "fun", "entertainment", "memories"]
    },
    {
        id: "5f6a7c",
        text: "What's the scariest experience you've ever had?",
        tags: ["experience", "adventurous", "deep", "memories"]
    },
    {
        id: "8b9c0e",
        text: "What's something you've done that you never thought you could?",
        tags: ["experience", "reflection", "deep", "heartwarming"]
    },
    {
        id: "1e2f3b",
        text: "Have you ever won a contest or competition?",
        tags: ["experience", "fun", "memories", "sports"]
    },
    {
        id: "4a5b6d",
        text: "What's the longest you've ever stayed awake?",
        tags: ["experience", "fun", "silly", "memories"]
    },
    {
        id: "7d8e9a",
        text: "Have you ever been on TV or in the newspaper?",
        tags: ["experience", "fun", "memories", "entertainment"]
    },
    {
        id: "0b1c2e",
        text: "What's a skill you taught yourself?",
        tags: ["experience", "hobbies", "reflection", "creative"]
    },
    {
        id: "3e4f5b",
        text: "Have you ever had a paranormal experience?",
        tags: ["experience", "adventurous", "fun", "deep"]
    },
    {
        id: "6a7b8d",
        text: "What's the biggest risk you've ever taken?",
        tags: ["experience", "deep", "reflection", "adventurous"]
    },
    {
        id: "9d0e1a",
        text: "Have you ever saved someone's life?",
        tags: ["experience", "deep", "heartwarming", "reflection"]
    },
    {
        id: "2b3c4e",
        text: "What's the funniest thing that's ever happened to you?",
        tags: ["experience", "silly", "fun", "memories"]
    },
    {
        id: "5e6f7c",
        text: "What's something you've done once that you'd never do again?",
        tags: ["experience", "reflection", "fun", "adventurous"]
    },

    // ==========================================
    // HYPOTHETICAL & CREATIVE
    // ==========================================
    {
        id: "8a9b0e",
        text: "If you could have any superpower, what would it be?",
        tags: ["hypothetical", "fun", "creative", "all-ages"]
    },
    {
        id: "1d2e3a",
        text: "If you could time travel, would you go to the past or the future?",
        tags: ["hypothetical", "deep", "fun", "creative"]
    },
    {
        id: "4b5c6e",
        text: "If you could learn any language instantly, which would it be?",
        tags: ["hypothetical", "creative", "aspiration", "fun"]
    },
    {
        id: "7e8f9b",
        text: "If you could be any animal for a day, what would you be?",
        tags: ["hypothetical", "fun", "silly", "nature", "all-ages"]
    },
    {
        id: "0a1b2d",
        text: "If you won the lottery, what's the first thing you'd do?",
        tags: ["hypothetical", "fun", "aspiration"]
    },
    {
        id: "3d4e5a",
        text: "If you could have dinner with any historical figure, who would it be?",
        tags: ["hypothetical", "deep", "creative", "thoughtful"]
    },
    {
        id: "6b7c8e",
        text: "If you could relive one day of your life, which would it be?",
        tags: ["hypothetical", "memories", "deep", "nostalgic"]
    },
    {
        id: "9e0f1b",
        text: "If you could master any musical instrument overnight, which would you choose?",
        tags: ["hypothetical", "creative", "entertainment", "fun"]
    },
    {
        id: "2a3b4d",
        text: "If you had to give up one of your five senses, which would it be?",
        tags: ["hypothetical", "deep", "thoughtful", "creative"]
    },
    {
        id: "5d6e7a",
        text: "If you could be a character in any book or movie, who would you be?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "8b9c0f",
        text: "If you could know the answer to any question, what would you ask?",
        tags: ["hypothetical", "deep", "thoughtful", "creative"]
    },
    {
        id: "1e2f3c",
        text: "If you could pick a new first name, what would it be?",
        tags: ["hypothetical", "fun", "silly", "creative", "all-ages"]
    },
    {
        id: "4a5b6e",
        text: "If you could trade lives with anyone for a day, who would it be?",
        tags: ["hypothetical", "fun", "creative", "aspiration"]
    },
    {
        id: "7d8e9b",
        text: "If you found a genie, what three wishes would you make?",
        tags: ["hypothetical", "fun", "creative", "all-ages"]
    },
    {
        id: "0c1d2a",
        text: "If you could uninvent one thing, what would it be?",
        tags: ["hypothetical", "creative", "opinion", "fun"]
    },

    // ==========================================
    // FAMILY & RELATIONSHIPS
    // ==========================================
    {
        id: "3f4a5c",
        text: "What's something you learned from your parents that you'll always carry with you?",
        tags: ["family", "reflection", "deep", "heartwarming"]
    },
    {
        id: "6b7c8f",
        text: "What family tradition do you hope continues for generations?",
        tags: ["family", "holidays", "aspiration", "heartwarming"]
    },
    {
        id: "9e0f1c",
        text: "What's the best piece of advice a family member ever gave you?",
        tags: ["family", "reflection", "deep", "heartwarming"]
    },
    {
        id: "2a3b4e",
        text: "What's a funny story about our family that you love to tell?",
        tags: ["family", "memories", "fun", "silly"]
    },
    {
        id: "5d6e7b",
        text: "Who in our family are you most alike?",
        tags: ["family", "reflection", "fun", "thoughtful"]
    },
    {
        id: "8a9b0f",
        text: "What do you think makes our family unique?",
        tags: ["family", "reflection", "heartwarming", "deep"]
    },
    {
        id: "1c2d3a",
        text: "What's something about our family history you wish you knew more about?",
        tags: ["family", "memories", "reflection", "deep"]
    },
    {
        id: "4f5a6c",
        text: "If you could add any family member to our next gathering, living or passed, who would it be?",
        tags: ["family", "hypothetical", "heartwarming", "deep"]
    },
    {
        id: "7b8c9e",
        text: "What's your favorite holiday tradition we do as a family?",
        tags: ["family", "holidays", "preference", "heartwarming", "cozy"]
    },
    {
        id: "0e1f2b",
        text: "What's something you're grateful for about our family?",
        tags: ["family", "reflection", "heartwarming", "deep"]
    },
    {
        id: "3a4b5e",
        text: "How did your parents or grandparents meet?",
        tags: ["family", "memories", "nostalgic", "heartwarming"]
    },
    {
        id: "6d7e8a",
        text: "What trait do you hope future generations of our family inherit?",
        tags: ["family", "aspiration", "reflection", "deep"]
    },
    {
        id: "9b0c1e",
        text: "What's the best family vacation we've taken together?",
        tags: ["family", "travel", "memories", "fun"]
    },
    {
        id: "2e3f4b",
        text: "What do you remember about your grandparents' house?",
        tags: ["family", "memories", "nostalgic", "cozy"]
    },
    {
        id: "5a6b7d",
        text: "What's a family recipe that needs to be preserved?",
        tags: ["family", "food", "memories", "heartwarming"]
    },

    // ==========================================
    // ENTERTAINMENT & HOBBIES
    // ==========================================
    {
        id: "8d9e0a",
        text: "What show are you currently binge-watching?",
        tags: ["entertainment", "fun", "hobbies", "preference"]
    },
    {
        id: "1a2b3d",
        text: "What's the last concert you went to?",
        tags: ["entertainment", "experience", "memories", "fun"]
    },
    {
        id: "4d5e6a",
        text: "What's a hobby you'd like to pick up?",
        tags: ["hobbies", "aspiration", "creative", "fun"]
    },
    {
        id: "7b8c9f",
        text: "What's the first album you ever bought?",
        tags: ["entertainment", "memories", "nostalgic", "fun"]
    },
    {
        id: "0e1f2c",
        text: "What's a movie that always makes you cry?",
        tags: ["entertainment", "preference", "heartwarming", "deep"]
    },
    {
        id: "3a4b5f",
        text: "What's your guilty pleasure TV show?",
        tags: ["entertainment", "fun", "silly", "preference"]
    },
    {
        id: "6d7e8b",
        text: "What book has had the biggest impact on you?",
        tags: ["entertainment", "reflection", "deep", "hobbies"]
    },
    {
        id: "9a0b1e",
        text: "What's your go-to karaoke song?",
        tags: ["entertainment", "fun", "silly", "preference"]
    },
    {
        id: "2c3d4b",
        text: "What hobby did you try but just couldn't get into?",
        tags: ["hobbies", "experience", "fun", "reflection"]
    },
    {
        id: "5f6a7d",
        text: "What's a podcast or YouTube channel you're obsessed with?",
        tags: ["entertainment", "hobbies", "preference", "fun"]
    },
    {
        id: "8b9c0a",
        text: "What sport do you love to watch but not play?",
        tags: ["entertainment", "sports", "preference", "fun"]
    },
    {
        id: "1e2f3d",
        text: "What's the best live performance you've ever seen?",
        tags: ["entertainment", "experience", "memories", "fun"]
    },
    {
        id: "4a5b6f",
        text: "What game always causes the most drama in your family?",
        tags: ["entertainment", "family", "fun", "silly"]
    },
    {
        id: "7d8e9c",
        text: "What's a creative project you've been putting off?",
        tags: ["hobbies", "creative", "aspiration", "reflection"]
    },
    {
        id: "0b1c2f",
        text: "What's your unpopular opinion about a popular movie or show?",
        tags: ["entertainment", "opinion", "fun", "creative"]
    },

    // ==========================================
    // DEEP & THOUGHTFUL
    // ==========================================
    {
        id: "3e4f5c",
        text: "What's something you believe that you think few others do?",
        tags: ["deep", "opinion", "thoughtful", "reflection"]
    },
    {
        id: "6a7b8e",
        text: "What's the best compliment you've ever received?",
        tags: ["deep", "memories", "heartwarming", "reflection"]
    },
    {
        id: "9d0e1b",
        text: "What life lesson did you have to learn the hard way?",
        tags: ["deep", "reflection", "experience", "thoughtful", "adults"]
    },
    {
        id: "2b3c4f",
        text: "What are you most proud of?",
        tags: ["deep", "reflection", "heartwarming", "aspiration"]
    },
    {
        id: "5e6f7d",
        text: "What do you think is the meaning of life?",
        tags: ["deep", "reflection", "thoughtful", "opinion"]
    },
    {
        id: "8a9b0a",
        text: "What fear have you overcome?",
        tags: ["deep", "experience", "reflection", "heartwarming"]
    },
    {
        id: "1c2d3b",
        text: "What do you wish more people understood about you?",
        tags: ["deep", "reflection", "thoughtful", "heartwarming"]
    },
    {
        id: "4f5a6d",
        text: "What's a mistake you made that turned out to be a blessing?",
        tags: ["deep", "reflection", "experience", "thoughtful"]
    },
    {
        id: "7b8c9a",
        text: "What legacy do you want to leave behind?",
        tags: ["deep", "aspiration", "reflection", "thoughtful", "adults"]
    },
    {
        id: "0e1f2d",
        text: "What's the kindest thing a stranger has ever done for you?",
        tags: ["deep", "experience", "heartwarming", "memories"]
    },
    {
        id: "3a4b5a",
        text: "What do you think your purpose is?",
        tags: ["deep", "reflection", "thoughtful", "aspiration"]
    },
    {
        id: "6d7e8c",
        text: "What's a belief you held strongly that you've changed your mind about?",
        tags: ["deep", "reflection", "thoughtful", "experience", "adults"]
    },
    {
        id: "9b0c1f",
        text: "If you could give everyone in the world one piece of advice, what would it be?",
        tags: ["deep", "opinion", "thoughtful", "reflection"]
    },
    {
        id: "2e3f4c",
        text: "What makes you feel most alive?",
        tags: ["deep", "reflection", "heartwarming", "aspiration"]
    },
    {
        id: "5a6b7e",
        text: "What are you looking forward to in the coming year?",
        tags: ["deep", "aspiration", "reflection", "fun"]
    },

    // ==========================================
    // HOLIDAYS & CELEBRATIONS
    // ==========================================
    {
        id: "8d9e0b",
        text: "What's your favorite Christmas movie?",
        tags: ["holidays", "entertainment", "preference", "cozy", "fun"]
    },
    {
        id: "1a2b3e",
        text: "What's your favorite holiday song?",
        tags: ["holidays", "entertainment", "preference", "cozy"]
    },
    {
        id: "4d5e6b",
        text: "What's the best gift you've ever received?",
        tags: ["holidays", "memories", "heartwarming", "fun"]
    },
    {
        id: "7a8b9e",
        text: "What's the best gift you've ever given?",
        tags: ["holidays", "memories", "heartwarming", "reflection"]
    },
    {
        id: "0d1e2a",
        text: "What's your favorite thing about the holiday season?",
        tags: ["holidays", "preference", "cozy", "heartwarming"]
    },
    {
        id: "3b4c5e",
        text: "Do you prefer real or artificial Christmas trees?",
        tags: ["holidays", "preference", "opinion", "fun"]
    },
    {
        id: "6e7f8b",
        text: "What's your favorite holiday dessert?",
        tags: ["holidays", "food", "preference", "cozy"]
    },
    {
        id: "9a0b1f",
        text: "What's a holiday tradition you'd like to start?",
        tags: ["holidays", "family", "aspiration", "creative"]
    },
    {
        id: "2d3e4a",
        text: "What's your New Year's resolution this year?",
        tags: ["holidays", "aspiration", "reflection", "fun"]
    },
    {
        id: "5b6c7e",
        text: "What's your favorite memory from a past holiday celebration?",
        tags: ["holidays", "memories", "family", "nostalgic", "heartwarming"]
    },
    {
        id: "8e9f0b",
        text: "What holiday do you think is underrated?",
        tags: ["holidays", "opinion", "fun", "creative"]
    },
    {
        id: "1b2c3e",
        text: "What's your favorite thing to do on New Year's Eve?",
        tags: ["holidays", "preference", "fun", "family"]
    },
    {
        id: "4e5f6c",
        text: "Eggnog - love it or hate it?",
        tags: ["holidays", "food", "opinion", "fun", "silly"]
    },
    {
        id: "7a8b9f",
        text: "What's the worst gift you've ever received (but pretended to like)?",
        tags: ["holidays", "fun", "silly", "memories"]
    },
    {
        id: "0d1e2b",
        text: "What holiday decoration do you love putting up the most?",
        tags: ["holidays", "preference", "home", "cozy"]
    },

    // ==========================================
    // SILLY & FUN
    // ==========================================
    {
        id: "3a4b5b",
        text: "What's the weirdest dream you remember having?",
        tags: ["silly", "fun", "creative", "experience"]
    },
    {
        id: "6d7e8d",
        text: "If you had to wear one color for the rest of your life, what would it be?",
        tags: ["silly", "hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "9b0c1a",
        text: "What's your most irrational fear?",
        tags: ["silly", "fun", "deep", "reflection"]
    },
    {
        id: "2e3f4d",
        text: "What's the worst haircut you've ever had?",
        tags: ["silly", "fun", "memories", "nostalgic"]
    },
    {
        id: "5a6b7f",
        text: "What song do you secretly love but are embarrassed to admit?",
        tags: ["silly", "entertainment", "fun", "preference"]
    },
    {
        id: "8d9e0c",
        text: "What's your go-to dance move?",
        tags: ["silly", "fun", "entertainment", "all-ages"]
    },
    {
        id: "1a2b3f",
        text: "What's the most useless talent you have?",
        tags: ["silly", "fun", "creative", "experience"]
    },
    {
        id: "4d5e6c",
        text: "If you were a superhero, what would your weakness be?",
        tags: ["silly", "hypothetical", "fun", "creative", "all-ages"]
    },
    {
        id: "7a8b9a",
        text: "What's the strangest thing in your refrigerator right now?",
        tags: ["silly", "fun", "food", "home"]
    },
    {
        id: "0d1e2c",
        text: "What's your most embarrassing moment?",
        tags: ["silly", "fun", "experience", "memories"]
    },
    {
        id: "3b4c5f",
        text: "Would you rather fight one horse-sized duck or 100 duck-sized horses?",
        tags: ["silly", "hypothetical", "fun", "all-ages"]
    },
    {
        id: "6e7f8c",
        text: "What's a word you always mispronounce?",
        tags: ["silly", "fun", "experience", "all-ages"]
    },
    {
        id: "9a0b1a",
        text: "If you could have a theme song play every time you entered a room, what would it be?",
        tags: ["silly", "hypothetical", "fun", "entertainment"]
    },
    {
        id: "2d3e4b",
        text: "What's something you're terrible at but love doing anyway?",
        tags: ["silly", "fun", "hobbies", "reflection"]
    },
    {
        id: "5b6c7f",
        text: "What's the worst fashion choice you've ever made?",
        tags: ["silly", "fun", "memories", "nostalgic"]
    },

    // ==========================================
    // NATURE & OUTDOORS
    // ==========================================
    {
        id: "8e9f0c",
        text: "What's your favorite animal?",
        tags: ["nature", "preference", "fun", "all-ages"]
    },
    {
        id: "1b2c3f",
        text: "Sunrise or sunset?",
        tags: ["nature", "preference", "fun", "reflection"]
    },
    {
        id: "4e5f6d",
        text: "What's the most amazing natural phenomenon you've witnessed?",
        tags: ["nature", "experience", "memories", "adventurous"]
    },
    {
        id: "7a8b9b",
        text: "Camping - love it or hate it?",
        tags: ["nature", "opinion", "outdoors", "adventurous"]
    },
    {
        id: "0d1e2d",
        text: "What's your favorite outdoor activity?",
        tags: ["nature", "preference", "hobbies", "adventurous"]
    },
    {
        id: "3b4c5a",
        text: "What's the most beautiful flower or plant you've seen?",
        tags: ["nature", "experience", "preference", "creative"]
    },
    {
        id: "6e7f8d",
        text: "Have you ever had a memorable encounter with wildlife?",
        tags: ["nature", "experience", "adventurous", "memories"]
    },
    {
        id: "9a0b1b",
        text: "Do you believe in climate change?",
        tags: ["nature", "opinion", "deep", "thoughtful", "adults"]
    },
    {
        id: "2d3e4c",
        text: "What's your favorite national park?",
        tags: ["nature", "travel", "preference", "adventurous"]
    },
    {
        id: "5b6c7a",
        text: "If you could be any type of tree, which would you be?",
        tags: ["nature", "hypothetical", "silly", "creative"]
    },

    // ==========================================
    // HOME & LIFESTYLE
    // ==========================================
    {
        id: "8e9f0d",
        text: "What's your dream house like?",
        tags: ["home", "aspiration", "creative", "fun"]
    },
    {
        id: "1b2c3a",
        text: "Are you a minimalist or a collector?",
        tags: ["home", "preference", "opinion", "reflection"]
    },
    {
        id: "4e5f6e",
        text: "What's your favorite room in your childhood home?",
        tags: ["home", "memories", "nostalgic", "family"]
    },
    {
        id: "7a8b9c",
        text: "What's your most prized possession?",
        tags: ["home", "reflection", "memories", "heartwarming"]
    },
    {
        id: "0d1e2e",
        text: "Do you make your bed every morning?",
        tags: ["home", "fun", "opinion", "silly"]
    },
    {
        id: "3b4c5b",
        text: "What's one thing you couldn't live without?",
        tags: ["home", "preference", "reflection", "fun"]
    },
    {
        id: "6e7f8e",
        text: "City living or country living?",
        tags: ["home", "preference", "opinion", "aspiration"]
    },
    {
        id: "9a0b1c",
        text: "What's the craziest thing that's happened in your neighborhood?",
        tags: ["home", "experience", "fun", "memories"]
    },
    {
        id: "2d3e4d",
        text: "What would you change about your current living space?",
        tags: ["home", "aspiration", "creative", "reflection"]
    },
    {
        id: "5b6c7b",
        text: "What's the oldest thing you own?",
        tags: ["home", "memories", "nostalgic", "family"]
    },

    // ==========================================
    // FRIENDS & SOCIAL
    // ==========================================
    {
        id: "8e9f0e",
        text: "How did you meet your best friend?",
        tags: ["friends", "memories", "heartwarming", "reflection"]
    },
    {
        id: "1b2c3b",
        text: "What qualities do you value most in a friend?",
        tags: ["friends", "reflection", "deep", "opinion"]
    },
    {
        id: "4e5f6f",
        text: "What's the longest friendship you've maintained?",
        tags: ["friends", "experience", "heartwarming", "memories"]
    },
    {
        id: "7a8b9d",
        text: "Who's someone you lost touch with that you'd like to reconnect with?",
        tags: ["friends", "reflection", "nostalgic", "deep"]
    },
    {
        id: "0d1e2f",
        text: "What's the nicest thing a friend has ever done for you?",
        tags: ["friends", "memories", "heartwarming", "reflection"]
    },
    {
        id: "3b4c5c",
        text: "Do you prefer a few close friends or a large social circle?",
        tags: ["friends", "preference", "opinion", "reflection"]
    },
    {
        id: "6e7f8f",
        text: "What makes you a good friend?",
        tags: ["friends", "reflection", "deep", "thoughtful"]
    },
    {
        id: "9a0b1d",
        text: "What's an inside joke you have with your friends?",
        tags: ["friends", "fun", "silly", "memories"]
    },

    // ==========================================
    // ASPIRATIONS & GOALS
    // ==========================================
    {
        id: "2d3e4e",
        text: "What's on your bucket list?",
        tags: ["aspiration", "fun", "adventurous", "reflection"]
    },
    {
        id: "5b6c7c",
        text: "What's a goal you're currently working toward?",
        tags: ["aspiration", "reflection", "deep", "thoughtful"]
    },
    {
        id: "8e9f0f",
        text: "Where do you see yourself in 10 years?",
        tags: ["aspiration", "reflection", "deep", "hypothetical"]
    },
    {
        id: "1b2c3c",
        text: "What's something you want to accomplish before the year ends?",
        tags: ["aspiration", "reflection", "fun", "thoughtful"]
    },
    {
        id: "4e5f6a",
        text: "What would you do if you knew you couldn't fail?",
        tags: ["aspiration", "hypothetical", "deep", "creative"]
    },
    {
        id: "7a8b9e",
        text: "What skill are you currently trying to improve?",
        tags: ["aspiration", "hobbies", "reflection", "experience"]
    },
    {
        id: "0d1e2a",
        text: "What's a dream you've given up on that you'd like to revisit?",
        tags: ["aspiration", "reflection", "deep", "nostalgic"]
    },
    {
        id: "3b4c5d",
        text: "What would your perfect day look like?",
        tags: ["aspiration", "hypothetical", "fun", "creative"]
    },

    // ==========================================
    // SCHOOL & EDUCATION
    // ==========================================
    {
        id: "6e7f8a",
        text: "Who was your favorite teacher and why?",
        tags: ["school", "memories", "reflection", "heartwarming"]
    },
    {
        id: "9a0b1e",
        text: "What subject did you struggle with in school?",
        tags: ["school", "memories", "reflection", "experience"]
    },
    {
        id: "2d3e4f",
        text: "What extracurricular activity did you do in school?",
        tags: ["school", "experience", "memories", "hobbies"]
    },
    {
        id: "5b6c7d",
        text: "What's something you wish you had studied more?",
        tags: ["school", "reflection", "aspiration", "deep"]
    },
    {
        id: "8e9f0a",
        text: "What's your funniest school memory?",
        tags: ["school", "memories", "silly", "fun"]
    },
    {
        id: "1b2c3d",
        text: "Did you have a favorite spot at your school?",
        tags: ["school", "memories", "nostalgic", "reflection"]
    },
    {
        id: "4e5f6b",
        text: "What was your school mascot?",
        tags: ["school", "memories", "fun", "nostalgic"]
    },
    {
        id: "7a8b9f",
        text: "What clique were you part of in high school?",
        tags: ["school", "memories", "reflection", "nostalgic", "teens"]
    },

    // ==========================================
    // ADDITIONAL - IDENTITY & SELF-REFLECTION
    // ==========================================
    {
        id: "f0a1b2",
        text: "What three words best describe you?",
        tags: ["identity", "reflection", "thoughtful", "all-ages"]
    },
    {
        id: "c3d4e5",
        text: "How would you describe yourself to someone who has never met you?",
        tags: ["identity", "reflection", "thoughtful", "creative"]
    },
    {
        id: "f6a7b8",
        text: "What personality trait has gotten you into the most trouble?",
        tags: ["identity", "reflection", "fun", "deep"]
    },
    {
        id: "c9d0e1",
        text: "What do you love most about yourself?",
        tags: ["identity", "reflection", "heartwarming", "deep"]
    },
    {
        id: "f2a3b4",
        text: "What character traits do you admire most in others?",
        tags: ["identity", "reflection", "deep", "thoughtful"]
    },
    {
        id: "c5d6e7",
        text: "What would the title of your memoir be?",
        tags: ["identity", "creative", "fun", "reflection"]
    },
    {
        id: "f8a9b0",
        text: "What personality traits did you get from each of your parents?",
        tags: ["identity", "family", "reflection", "deep"]
    },
    {
        id: "c1d2e3",
        text: "What is something strangers often incorrectly assume about you?",
        tags: ["identity", "reflection", "fun", "thoughtful"]
    },

    // ==========================================
    // ADDITIONAL - WOULD YOU RATHER
    // ==========================================
    {
        id: "f4a5b6",
        text: "Would you rather be able to fly or breathe underwater?",
        tags: ["hypothetical", "fun", "all-ages", "silly"]
    },
    {
        id: "c7d8e9",
        text: "Would you rather be very tall or very short?",
        tags: ["hypothetical", "fun", "silly", "all-ages"]
    },
    {
        id: "f0a1b3",
        text: "Would you rather have super strength or be able to read minds?",
        tags: ["hypothetical", "fun", "all-ages", "creative"]
    },
    {
        id: "c3d4e6",
        text: "Would you rather be the smartest or the kindest person in your class?",
        tags: ["hypothetical", "deep", "thoughtful", "all-ages"]
    },
    {
        id: "f6a7b9",
        text: "Would you rather have total freedom or total safety?",
        tags: ["hypothetical", "deep", "thoughtful", "adults"]
    },
    {
        id: "c9d0e2",
        text: "Would you rather build a snowman or drink hot chocolate indoors?",
        tags: ["hypothetical", "holidays", "cozy", "all-ages", "fun"]
    },

    // ==========================================
    // ADDITIONAL - MOST LIKELY TO
    // ==========================================
    {
        id: "f2a3b5",
        text: "Who in our family is most likely to accidentally lock themselves out of the house?",
        tags: ["family", "fun", "silly", "all-ages"]
    },
    {
        id: "c5d6e8",
        text: "Who is most likely to survive on a deserted island?",
        tags: ["family", "fun", "adventurous", "hypothetical"]
    },
    {
        id: "f8a9b1",
        text: "Who is most likely to burst out laughing during a serious moment?",
        tags: ["family", "fun", "silly", "all-ages"]
    },
    {
        id: "c1d2e4",
        text: "Who is most likely to write a bestselling book?",
        tags: ["family", "fun", "aspiration", "creative"]
    },
    {
        id: "f4a5b7",
        text: "Who is the best cook in our family?",
        tags: ["family", "food", "fun", "preference"]
    },

    // ==========================================
    // ADDITIONAL - ETHICS & VALUES
    // ==========================================
    {
        id: "c7d8e0",
        text: "What would you do if you found a wallet full of cash on the street?",
        tags: ["deep", "thoughtful", "hypothetical", "reflection"]
    },
    {
        id: "f0a1b4",
        text: "What does it mean to be brave?",
        tags: ["deep", "thoughtful", "reflection", "all-ages"]
    },
    {
        id: "c3d4e7",
        text: "What do you think is the most important quality of a good person?",
        tags: ["deep", "thoughtful", "reflection", "opinion"]
    },
    {
        id: "f6a7b0",
        text: "What is a cause or charity that means a lot to you?",
        tags: ["deep", "reflection", "heartwarming", "opinion"]
    },
    {
        id: "c9d0e3",
        text: "If you could give everyone in the world one gift, what would it be?",
        tags: ["deep", "hypothetical", "heartwarming", "creative"]
    },
    {
        id: "f2a3b6",
        text: "What is one piece of advice you want to pass on to future generations?",
        tags: ["deep", "reflection", "family", "thoughtful"]
    },

    // ==========================================
    // ADDITIONAL - GROWTH & HABITS
    // ==========================================
    {
        id: "c5d6e9",
        text: "What is a habit you are currently trying to build or break?",
        tags: ["reflection", "aspiration", "deep", "thoughtful"]
    },
    {
        id: "f8a9b2",
        text: "What helps you fall asleep at night?",
        tags: ["preference", "cozy", "fun", "reflection"]
    },
    {
        id: "c1d2e5",
        text: "How do you calm down when you are feeling angry?",
        tags: ["reflection", "deep", "thoughtful", "all-ages"]
    },
    {
        id: "f4a5b8",
        text: "What is something you've always wanted to try but are too scared to do?",
        tags: ["aspiration", "adventurous", "reflection", "deep"]
    },
    {
        id: "c7d8e1",
        text: "What is a bad habit you have that you wish you could break?",
        tags: ["reflection", "deep", "thoughtful", "fun"]
    },

    // ==========================================
    // ADDITIONAL - IMAGINATION & CREATIVITY
    // ==========================================
    {
        id: "f0a1b5",
        text: "If you were invisible for a day, where would you go?",
        tags: ["hypothetical", "fun", "creative", "adventurous"]
    },
    {
        id: "c3d4e8",
        text: "If you were a great inventor, what would you invent?",
        tags: ["hypothetical", "creative", "aspiration", "fun"]
    },
    {
        id: "f6a7b1",
        text: "If you could live in any fictional world, which would you choose?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "c9d0e4",
        text: "If you were the leader of your country, what three laws would you pass?",
        tags: ["hypothetical", "deep", "creative", "thoughtful"]
    },
    {
        id: "f2a3b7",
        text: "If you could shrink any animal to keep in your pocket, what would it be?",
        tags: ["hypothetical", "fun", "silly", "nature", "all-ages"]
    },
    {
        id: "c5d6e0",
        text: "If you were a superhero, what would your name and costume look like?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "f8a9b3",
        text: "If you could talk to animals, what would you ask them?",
        tags: ["hypothetical", "fun", "nature", "creative", "all-ages"]
    },

    // ==========================================
    // ADDITIONAL - RELATIONSHIPS
    // ==========================================
    {
        id: "c1d2e6",
        text: "Who is the kindest person you know?",
        tags: ["reflection", "heartwarming", "deep", "family"]
    },
    {
        id: "f4a5b9",
        text: "Give the person to your left a genuine compliment.",
        tags: ["family", "heartwarming", "fun", "all-ages"]
    },
    {
        id: "c7d8e2",
        text: "What is a 'hidden light' or special quality you see in each person here?",
        tags: ["family", "heartwarming", "deep", "reflection"]
    },
    {
        id: "f0a1b6",
        text: "Have you ever felt misunderstood by the grown-ups in your life?",
        tags: ["reflection", "deep", "family", "teens"]
    },

    // ==========================================
    // ADDITIONAL - MISCHIEF & FUN STORIES
    // ==========================================
    {
        id: "c3d4e9",
        text: "Tell a story about a time when you got in trouble with your siblings.",
        tags: ["family", "memories", "fun", "silly"]
    },
    {
        id: "f6a7b2",
        text: "Did your parents ever catch you doing something sneaky?",
        tags: ["memories", "fun", "silly", "family"]
    },
    {
        id: "c9d0e5",
        text: "Have you ever sent a text to the wrong person that was embarrassing?",
        tags: ["silly", "fun", "experience", "memories"]
    },
    {
        id: "f2a3b8",
        text: "Have you ever faked being sick to get out of something?",
        tags: ["silly", "fun", "experience", "memories"]
    },
    {
        id: "c5d6e1",
        text: "Have you ever blamed something you did on someone else?",
        tags: ["silly", "fun", "experience", "reflection"]
    },

    // ==========================================
    // ADDITIONAL - HISTORY & LEGACY
    // ==========================================
    {
        id: "f8a9b4",
        text: "What historical event happened in your lifetime that you remember most?",
        tags: ["memories", "reflection", "deep", "experience"]
    },
    {
        id: "c1d2e7",
        text: "What was dating like when you were younger?",
        tags: ["memories", "nostalgic", "reflection", "adults"]
    },
    {
        id: "f4a5b0",
        text: "What religious or spiritual traditions did you grow up with?",
        tags: ["memories", "family", "reflection", "deep"]
    },
    {
        id: "c7d8e3",
        text: "What is the story behind your birth or how you were named?",
        tags: ["family", "memories", "heartwarming", "deep"]
    },
    {
        id: "f0a1b7",
        text: "What was the first time you flew on an airplane like?",
        tags: ["experience", "travel", "memories", "adventurous"]
    },
    {
        id: "c3d4e0",
        text: "Tell a story about the first time you felt truly brave.",
        tags: ["experience", "deep", "memories", "reflection"]
    },

    // ==========================================
    // ADDITIONAL - SENSORY & SIMPLE PLEASURES
    // ==========================================
    {
        id: "f6a7b3",
        text: "What is your favorite simple pleasure?",
        tags: ["preference", "cozy", "heartwarming", "fun"]
    },
    {
        id: "c9d0e6",
        text: "What is your favorite type of weather?",
        tags: ["preference", "nature", "fun", "all-ages"]
    },
    {
        id: "f2a3b9",
        text: "What was the house or neighborhood where you grew up like?",
        tags: ["memories", "nostalgic", "family", "reflection"]
    },
    {
        id: "c5d6e2",
        text: "What was your favorite childhood toy or game?",
        tags: ["memories", "nostalgic", "fun", "all-ages"]
    },

    // ==========================================
    // ADDITIONAL - HOLIDAY SPECIFIC
    // ==========================================
    {
        id: "f8a9b5",
        text: "What Christmas tree ornament do you put up every year that's special to you?",
        tags: ["holidays", "memories", "family", "cozy"]
    },
    {
        id: "c1d2e8",
        text: "If you were Santa for a day, what gifts would you give children?",
        tags: ["holidays", "hypothetical", "fun", "all-ages"]
    },
    {
        id: "f4a5b1",
        text: "What is that one holiday tradition you look forward to every year?",
        tags: ["holidays", "family", "heartwarming", "cozy"]
    },
    {
        id: "c7d8e4",
        text: "If you could pick one thing about Christmas that could last all year, what would it be?",
        tags: ["holidays", "hypothetical", "deep", "fun"]
    },
    {
        id: "f0a1b8",
        text: "Have you ever hosted a holiday event that went completely wrong?",
        tags: ["holidays", "fun", "silly", "memories"]
    },
    {
        id: "c3d4e1",
        text: "What was Christmas morning like for you when you were little?",
        tags: ["holidays", "memories", "nostalgic", "family"]
    },

    // ==========================================
    // ADDITIONAL - VULNERABILITY & GROWTH
    // ==========================================
    {
        id: "f6a7b4",
        text: "When in your life have you felt most alone?",
        tags: ["deep", "reflection", "heartwarming", "adults"]
    },
    {
        id: "c9d0e7",
        text: "When was the last time you cried, and why?",
        tags: ["deep", "reflection", "heartwarming", "adults"]
    },
    {
        id: "f2a3b0",
        text: "What is your biggest regret?",
        tags: ["deep", "reflection", "thoughtful", "adults"]
    },
    {
        id: "c5d6e3",
        text: "Tell a story about a time when you were so excited you couldn't sleep.",
        tags: ["experience", "memories", "fun", "heartwarming"]
    },
    {
        id: "f8a9b6",
        text: "What is the one thing you are most proud of that nobody knows?",
        tags: ["deep", "reflection", "heartwarming", "identity"]
    },
    {
        id: "c1d2e9",
        text: "Have you ever felt like you didn't belong?",
        tags: ["deep", "reflection", "teens", "heartwarming"]
    },

    // ==========================================
    // ADDITIONAL - REFLECTIVE QUESTIONS
    // ==========================================
    {
        id: "f4a5b2",
        text: "What was the biggest challenge you faced this year, and how did you handle it?",
        tags: ["reflection", "deep", "aspiration", "thoughtful"]
    },
    {
        id: "c7d8e5",
        text: "What was your 'high moment' and your 'low moment' of this year?",
        tags: ["reflection", "deep", "family", "thoughtful"]
    },
    {
        id: "f0a1b9",
        text: "What is one thing you learned about yourself this year?",
        tags: ["reflection", "deep", "aspiration", "thoughtful"]
    },
    {
        id: "c3d4e2",
        text: "What new family tradition would you like to start next year?",
        tags: ["family", "holidays", "aspiration", "creative"]
    },
    {
        id: "f6a7b5",
        text: "When was the last time you apologized for something?",
        tags: ["reflection", "deep", "thoughtful", "all-ages"]
    },

    // ==========================================
    // WOULD YOU RATHER - HYPOTHETICAL
    // ==========================================
    {
        id: "b1c2d3",
        text: "Would you rather be a genius or amazing at any activity?",
        tags: ["hypothetical", "aspiration", "fun", "all-ages"]
    },
    {
        id: "e4f5a6",
        text: "Would you rather meet your ancestors or your descendants?",
        tags: ["hypothetical", "deep", "family", "thoughtful"]
    },
    {
        id: "b7c8d9",
        text: "Would you rather have more money or more time?",
        tags: ["hypothetical", "deep", "thoughtful", "adults"]
    },
    {
        id: "e0f1a2",
        text: "Would you rather talk like Yoda or breathe like Darth Vader?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "b3c4d5",
        text: "Would you rather fight 100 duck-sized horses or one horse-sized duck?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "e6f7a8",
        text: "Would you rather have a rewind button or a pause button for life?",
        tags: ["hypothetical", "deep", "reflection", "thoughtful"]
    },
    {
        id: "b9c0d1",
        text: "Would you rather it rain marshmallows or skittles?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "e2f3a4",
        text: "Would you rather be a superhero or a wizard?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "b5c6d7",
        text: "Would you rather teleport or be able to fly?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "e8f9a0",
        text: "Would you rather own your own boat or your own plane?",
        tags: ["hypothetical", "aspiration", "fun", "adventurous"]
    },
    {
        id: "b1c2e3",
        text: "Would you rather win an Academy Award or an Olympic Gold?",
        tags: ["hypothetical", "aspiration", "fun", "thoughtful"]
    },
    {
        id: "e4f5b6",
        text: "Would you rather talk to animals or read minds?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "b7c8e9",
        text: "Would you rather have all lights be green or never stand in line?",
        tags: ["hypothetical", "fun", "silly", "all-ages"]
    },
    {
        id: "e0f1b2",
        text: "Would you rather live in an RV or on a sailboat?",
        tags: ["hypothetical", "travel", "adventurous", "fun"]
    },
    {
        id: "b3c4e5",
        text: "Would you rather know how you will die or when you will die?",
        tags: ["hypothetical", "deep", "thoughtful", "adults"]
    },
    {
        id: "e6f7b8",
        text: "Would you rather lose all money earned this year or all memories?",
        tags: ["hypothetical", "deep", "thoughtful", "adults"]
    },
    {
        id: "b9c0e1",
        text: "Would you rather have slow internet or always forget passwords?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "e2f3b4",
        text: "Would you rather live in a treehouse or a giant sandcastle?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "b5c6e7",
        text: "Would you rather wrap gifts for hours or untangle lights?",
        tags: ["hypothetical", "holidays", "fun", "all-ages"]
    },
    {
        id: "e8f9b0",
        text: "Would you rather build a snowman or drink hot chocolate indoors?",
        tags: ["hypothetical", "holidays", "cozy", "all-ages"]
    },

    // ==========================================
    // SENSORY & NOSTALGIA
    // ==========================================
    {
        id: "a1b2e3",
        text: "What is your favorite holiday smell?",
        tags: ["holidays", "preference", "memories", "cozy"]
    },
    {
        id: "d4e5b6",
        text: "What song brings back childhood memories?",
        tags: ["memories", "nostalgic", "fun", "all-ages"]
    },
    {
        id: "a7b8e9",
        text: "What sound triggers a sense of relief for you?",
        tags: ["preference", "deep", "cozy", "thoughtful"]
    },
    {
        id: "d0e1b2",
        text: "What texture do you find most comforting?",
        tags: ["preference", "cozy", "memories", "thoughtful"]
    },
    {
        id: "a3b4e5",
        text: "Describe the taste of your favorite childhood treat.",
        tags: ["food", "memories", "nostalgic", "fun"]
    },
    {
        id: "d6e7b8",
        text: "What scent instantly feels like 'home'?",
        tags: ["memories", "deep", "nostalgic", "cozy"]
    },
    {
        id: "a9b0e1",
        text: "Describe a specific sound that reminds you of childhood.",
        tags: ["memories", "nostalgic", "reflection", "thoughtful"]
    },
    {
        id: "d2e3b4",
        text: "What smell do you hate that others seem to like?",
        tags: ["preference", "fun", "silly", "opinion"]
    },

    // ==========================================
    // CAREER & ASPIRATION (from promptideas.txt)
    // ==========================================
    {
        id: "a5b6e7",
        text: "What was your dream job as a kid?",
        tags: ["career", "memories", "nostalgic", "fun"]
    },
    {
        id: "d8e9b0",
        text: "What is your go-to productivity hack?",
        tags: ["career", "aspiration", "fun", "adults"]
    },
    {
        id: "a1b2f3",
        text: "What is the best piece of career advice you've received?",
        tags: ["career", "deep", "thoughtful", "adults"]
    },
    {
        id: "d4e5c6",
        text: "If money were no object, what would you do?",
        tags: ["hypothetical", "aspiration", "deep", "thoughtful"]
    },
    {
        id: "a7b8f9",
        text: "What was the worst job you ever had?",
        tags: ["career", "experience", "fun", "adults"]
    },
    {
        id: "d0e1c2",
        text: "If you could switch jobs with anyone for a week, who?",
        tags: ["hypothetical", "career", "fun", "creative"]
    },
    {
        id: "a3b4f5",
        text: "What would you name your autobiography?",
        tags: ["creative", "fun", "identity", "thoughtful"]
    },
    {
        id: "d6e7c8",
        text: "What does your morning routine look like?",
        tags: ["preference", "fun", "all-ages"]
    },
    {
        id: "a9b0f1",
        text: "What is the weirdest job you have ever heard of?",
        tags: ["career", "fun", "silly", "all-ages"]
    },
    {
        id: "d2e3c4",
        text: "What is your dream workspace like?",
        tags: ["aspiration", "creative", "career", "fun"]
    },
    {
        id: "a5b6f7",
        text: "What topic could you give a 20-minute talk on without preparation?",
        tags: ["identity", "fun", "creative", "all-ages"]
    },
    {
        id: "d8e9c0",
        text: "What was the first way you ever made money?",
        tags: ["experience", "memories", "fun", "all-ages"]
    },

    // ==========================================
    // VALUES & DEEP REFLECTION
    // ==========================================
    {
        id: "a1b2g3",
        text: "What is one thing you're proud of that no one else noticed?",
        tags: ["reflection", "deep", "identity", "thoughtful"]
    },
    {
        id: "d4e5d6",
        text: "What message would you send to your future self?",
        tags: ["aspiration", "deep", "reflection", "thoughtful"]
    },
    {
        id: "a7b8g9",
        text: "What does 'home' mean to you right now?",
        tags: ["deep", "reflection", "home", "heartwarming"]
    },
    {
        id: "d0e1d2",
        text: "What is a big world problem you would like to change?",
        tags: ["aspiration", "deep", "thoughtful", "all-ages"]
    },
    {
        id: "a3b4g5",
        text: "What makes you feel most appreciated and understood?",
        tags: ["deep", "reflection", "heartwarming", "thoughtful"]
    },
    {
        id: "d6e7d8",
        text: "What makes a good friend?",
        tags: ["deep", "reflection", "friends", "thoughtful"]
    },
    {
        id: "a9b0g1",
        text: "What is the bravest thing you've ever done?",
        tags: ["experience", "deep", "reflection", "thoughtful"]
    },
    {
        id: "d2e3d4",
        text: "Who knows you best?",
        tags: ["reflection", "deep", "family", "friends"]
    },
    {
        id: "a5b6g7",
        text: "What makes you unique?",
        tags: ["identity", "reflection", "deep", "thoughtful"]
    },
    {
        id: "d8e9d0",
        text: "Whose opinion do you care most about?",
        tags: ["deep", "reflection", "thoughtful", "identity"]
    },
    {
        id: "a1b2h3",
        text: "What do you wish more people understood about you?",
        tags: ["deep", "reflection", "identity", "thoughtful"]
    },
    {
        id: "d4e5e6",
        text: "What book changed your life?",
        tags: ["preference", "deep", "reflection", "entertainment"]
    },
    {
        id: "a7b8h9",
        text: "What is your most meaningful gift given or received?",
        tags: ["memories", "deep", "heartwarming", "reflection"]
    },
    {
        id: "d0e1e2",
        text: "What is the best and worst advice you've ever received?",
        tags: ["reflection", "deep", "thoughtful", "fun"]
    },
    {
        id: "a3b4h5",
        text: "What is your definition of success?",
        tags: ["deep", "aspiration", "thoughtful", "reflection"]
    },
    {
        id: "d6e7e8",
        text: "What brings you joy in life?",
        tags: ["reflection", "deep", "heartwarming", "all-ages"]
    },
    {
        id: "a9b0h1",
        text: "In your own words, what does love mean?",
        tags: ["deep", "reflection", "heartwarming", "thoughtful"]
    },
    {
        id: "d2e3e4",
        text: "What helps you breathe easy?",
        tags: ["reflection", "cozy", "deep", "thoughtful"]
    },
    {
        id: "a5b6h7",
        text: "What would you like to be remembered for?",
        tags: ["deep", "reflection", "aspiration", "thoughtful"]
    },
    {
        id: "d8e9e0",
        text: "If you could ask God or the Universe one question, what would it be?",
        tags: ["deep", "hypothetical", "thoughtful", "reflection"]
    },

    // ==========================================
    // IDENTITY & PERSONALITY
    // ==========================================
    {
        id: "a1b2i3",
        text: "What three words best describe you?",
        tags: ["identity", "reflection", "fun", "all-ages"]
    },
    {
        id: "d4e5f7",
        text: "What is one thing you couldn't live without?",
        tags: ["preference", "identity", "deep", "fun"]
    },
    {
        id: "a7b8i9",
        text: "What is the best compliment you've ever received?",
        tags: ["memories", "heartwarming", "reflection", "fun"]
    },
    {
        id: "d0e1f2",
        text: "What personality trait has gotten you into the most trouble?",
        tags: ["identity", "fun", "reflection", "silly"]
    },
    {
        id: "a3b4i5",
        text: "What do you love most about yourself?",
        tags: ["identity", "deep", "reflection", "heartwarming"]
    },
    {
        id: "d6e7f8",
        text: "What helps you fall asleep at night?",
        tags: ["preference", "cozy", "fun", "all-ages"]
    },
    {
        id: "a9b0i1",
        text: "How do you calm down when you are feeling angry?",
        tags: ["reflection", "deep", "identity", "thoughtful"]
    },
    {
        id: "d2e3f4",
        text: "What is a surprising thing on your bucket list?",
        tags: ["aspiration", "fun", "adventurous", "creative"]
    },
    {
        id: "a5b6i7",
        text: "What is your most irrational fear?",
        tags: ["identity", "fun", "silly", "reflection"]
    },
    {
        id: "d8e9f0",
        text: "What would your personal theme song be?",
        tags: ["creative", "fun", "identity", "entertainment"]
    },
    {
        id: "a1b2j3",
        text: "What is your most treasured possession?",
        tags: ["preference", "deep", "memories", "identity"]
    },
    {
        id: "d4e5g6",
        text: "What would the title of your memoir be?",
        tags: ["creative", "fun", "identity", "reflection"]
    },
    {
        id: "a7b8j9",
        text: "What is a habit you are currently trying to build or break?",
        tags: ["aspiration", "reflection", "deep", "thoughtful"]
    },
    {
        id: "d0e1g2",
        text: "If you could be any age for a week, what age would you be?",
        tags: ["hypothetical", "reflection", "fun", "thoughtful"]
    },
    {
        id: "a3b4j5",
        text: "What is your favorite way to waste time?",
        tags: ["preference", "fun", "silly", "all-ages"]
    },
    {
        id: "d6e7g8",
        text: "What is the most beautiful place you have ever seen?",
        tags: ["experience", "travel", "memories", "thoughtful"]
    },

    // ==========================================
    // NEW YEAR'S & REFLECTION
    // ==========================================
    {
        id: "a9b0j1",
        text: "What was the funniest thing that happened this year?",
        tags: ["memories", "fun", "reflection", "all-ages"]
    },
    {
        id: "d2e3g4",
        text: "What is your #1 goal for next year?",
        tags: ["aspiration", "reflection", "thoughtful", "all-ages"]
    },
    {
        id: "a5b6j7",
        text: "What are three words to describe this past year?",
        tags: ["reflection", "deep", "thoughtful", "all-ages"]
    },
    {
        id: "d8e9g0",
        text: "What is a new skill you want to learn next year?",
        tags: ["aspiration", "creative", "thoughtful", "all-ages"]
    },
    {
        id: "a1b2k3",
        text: "What was the best piece of advice you got this year?",
        tags: ["reflection", "deep", "thoughtful", "fun"]
    },
    {
        id: "d4e5h6",
        text: "What is one thing you want to do differently next year?",
        tags: ["aspiration", "reflection", "thoughtful", "all-ages"]
    },
    {
        id: "a7b8k9",
        text: "What was the coolest place you visited this year?",
        tags: ["travel", "experience", "memories", "fun"]
    },
    {
        id: "d0e1h2",
        text: "What is your 'Word of the Year' for next year?",
        tags: ["aspiration", "reflection", "creative", "thoughtful"]
    },
    {
        id: "a3b4k5",
        text: "What skill did you learn this year that surprised you?",
        tags: ["reflection", "experience", "aspiration", "thoughtful"]
    },
    {
        id: "d6e7h8",
        text: "If this year were a movie, what genre would it be?",
        tags: ["creative", "fun", "reflection", "silly"]
    },
    {
        id: "a9b0k1",
        text: "What is one habit or routine you'd like to start?",
        tags: ["aspiration", "reflection", "thoughtful", "all-ages"]
    },
    {
        id: "d2e3h4",
        text: "What is one place you hope to visit in the next year?",
        tags: ["aspiration", "travel", "fun", "adventurous"]
    },

    // ==========================================
    // HOLIDAY EXPANSION
    // ==========================================
    {
        id: "a5b6k7",
        text: "What is a holiday song that makes you cringe?",
        tags: ["holidays", "fun", "silly", "opinion"]
    },
    {
        id: "d8e9h0",
        text: "What is the coolest gift you ever gave someone?",
        tags: ["holidays", "experience", "memories", "heartwarming"]
    },
    {
        id: "a1b2l3",
        text: "What kind of holiday shopper are you: Black Friday or Christmas Eve?",
        tags: ["holidays", "preference", "fun", "all-ages"]
    },
    {
        id: "d4e5i6",
        text: "What is the ugliest holiday ornament you have ever seen?",
        tags: ["holidays", "fun", "silly", "memories"]
    },
    {
        id: "a7b8l9",
        text: "Does your family have any unique or bizarre traditions?",
        tags: ["holidays", "family", "fun", "memories"]
    },
    {
        id: "d0e1i2",
        text: "What is the best $5 gift to give someone?",
        tags: ["holidays", "creative", "fun", "all-ages"]
    },
    {
        id: "a3b4l5",
        text: "Do you reuse bows and wrapping paper?",
        tags: ["holidays", "preference", "fun", "silly"]
    },
    {
        id: "d6e7i8",
        text: "Have you ever opened a gift before you were supposed to?",
        tags: ["holidays", "experience", "fun", "silly"]
    },
    {
        id: "a9b0l1",
        text: "If you could spend the holidays with any celebrity, who would it be?",
        tags: ["holidays", "hypothetical", "fun", "entertainment"]
    },
    {
        id: "d2e3i4",
        text: "Does your family use real or synthetic holiday trees?",
        tags: ["holidays", "preference", "family", "fun"]
    },
    {
        id: "a5b6l7",
        text: "What holiday task do you hate the most?",
        tags: ["holidays", "preference", "fun", "silly"]
    },
    {
        id: "d8e9i0",
        text: "Which holiday movie do you think is overrated?",
        tags: ["holidays", "opinion", "entertainment", "fun"]
    },
    {
        id: "a1b2m3",
        text: "If you had to design your own 'ugly holiday sweater,' what would it look like?",
        tags: ["holidays", "creative", "fun", "silly"]
    },
    {
        id: "d4e5j6",
        text: "Which holiday carol gets stuck in your head the most?",
        tags: ["holidays", "fun", "entertainment", "all-ages"]
    },
    {
        id: "a7b8m9",
        text: "How long does your holiday tree stay up after Christmas?",
        tags: ["holidays", "preference", "family", "fun"]
    },
    {
        id: "d0e1j2",
        text: "What gift would you love to unwrap this year?",
        tags: ["holidays", "aspiration", "fun", "all-ages"]
    },
    {
        id: "a3b4m5",
        text: "What is the silliest holiday present you have ever received?",
        tags: ["holidays", "fun", "silly", "memories"]
    },
    {
        id: "d6e7j8",
        text: "Do you buy holiday gifts for your pets?",
        tags: ["holidays", "preference", "fun", "family"]
    },
    {
        id: "a9b0m1",
        text: "Have you ever regifted a gift?",
        tags: ["holidays", "experience", "fun", "silly"]
    },
    {
        id: "d2e3j4",
        text: "When is it appropriate to start listening to holiday music?",
        tags: ["holidays", "preference", "opinion", "fun"]
    },
    {
        id: "a5b6m7",
        text: "What Thanksgiving food is seriously overrated?",
        tags: ["food", "holidays", "opinion", "fun"]
    },
    {
        id: "d8e9j0",
        text: "Finish the sentence: It wouldn't be the holidays without...",
        tags: ["holidays", "reflection", "family", "heartwarming"]
    },
    {
        id: "a1b2n3",
        text: "How many Hallmark movies do you watch in a season?",
        tags: ["holidays", "entertainment", "fun", "silly"]
    },
    {
        id: "d4e5k6",
        text: "What's your stance on matching holiday pajamas?",
        tags: ["holidays", "preference", "family", "fun"]
    },
    {
        id: "a7b8n9",
        text: "If you were an elf, what would your name be?",
        tags: ["holidays", "creative", "silly", "fun"]
    },
    {
        id: "d0e1k2",
        text: "What is your holiday guilty pleasure?",
        tags: ["holidays", "preference", "fun", "cozy"]
    },
    {
        id: "a3b4n5",
        text: "What is your best holiday hack?",
        tags: ["holidays", "aspiration", "creative", "fun"]
    },
    {
        id: "d6e7k8",
        text: "How old were you when you stopped believing in Santa?",
        tags: ["holidays", "memories", "nostalgic", "family"]
    },
    {
        id: "a9b0n1",
        text: "Do you send holiday cards?",
        tags: ["holidays", "preference", "family", "fun"]
    },
    {
        id: "d2e3k4",
        text: "Describe your ideal Christmas in three words.",
        tags: ["holidays", "reflection", "creative", "cozy"]
    },
    {
        id: "a5b6n7",
        text: "What Christmas miracle would you most like to see happen?",
        tags: ["holidays", "deep", "aspiration", "heartwarming"]
    },
    {
        id: "d8e9k0",
        text: "Is Die Hard a Christmas movie?",
        tags: ["holidays", "opinion", "fun", "entertainment"]
    },
    {
        id: "a1b2o3",
        text: "Which holiday character would win in a wrestling match?",
        tags: ["holidays", "silly", "fun", "creative"]
    },
    {
        id: "d4e5l6",
        text: "If you could create a new holiday, what would it celebrate?",
        tags: ["creative", "hypothetical", "fun", "aspiration"]
    },
    {
        id: "a7b8o9",
        text: "What is the strangest holiday tradition you've ever heard of?",
        tags: ["holidays", "fun", "experience", "silly"]
    },
    {
        id: "d0e1l2",
        text: "Do you prefer a white Christmas or a tropical getaway?",
        tags: ["holidays", "preference", "travel", "fun"]
    },
    {
        id: "a3b4o5",
        text: "Do you prefer the main holiday meal or the leftovers?",
        tags: ["food", "holidays", "preference", "fun"]
    },
    {
        id: "d6e7l8",
        text: "What is the craziest thing you've seen on Black Friday?",
        tags: ["holidays", "experience", "fun", "silly"]
    },
    {
        id: "a9b0o1",
        text: "What holiday dessert best describes you and why?",
        tags: ["food", "holidays", "creative", "fun"]
    },
    {
        id: "d2e3l4",
        text: "Who has it harder during the holidays: kids or parents?",
        tags: ["holidays", "opinion", "family", "fun"]
    },

    // ==========================================
    // IMAGINATION & SUPERPOWERS
    // ==========================================
    {
        id: "a5b6o7",
        text: "If you were an animal, what would you be and why?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "d8e9l0",
        text: "If you had a time machine for a day, what would you do with it?",
        tags: ["hypothetical", "creative", "deep", "fun"]
    },
    {
        id: "a1b2p3",
        text: "If you won a million dollars, what would you do with it?",
        tags: ["hypothetical", "aspiration", "fun", "all-ages"]
    },
    {
        id: "d4e5m6",
        text: "If you were invisible for a day, where would you go?",
        tags: ["hypothetical", "creative", "fun", "silly"]
    },
    {
        id: "a7b8p9",
        text: "If you could invite any person from history to dinner, who would it be?",
        tags: ["hypothetical", "deep", "creative", "fun"]
    },
    {
        id: "d0e1m2",
        text: "If you were a great inventor, what would you invent?",
        tags: ["hypothetical", "creative", "aspiration", "all-ages"]
    },
    {
        id: "a3b4p5",
        text: "If you were the leader of your country, what three laws would you pass?",
        tags: ["hypothetical", "deep", "creative", "thoughtful"]
    },
    {
        id: "d6e7m8",
        text: "If you could shrink any animal to keep in your pocket, what would it be?",
        tags: ["hypothetical", "silly", "creative", "fun"]
    },
    {
        id: "a9b0p1",
        text: "If you were a season, which season would you be?",
        tags: ["hypothetical", "identity", "creative", "fun"]
    },
    {
        id: "d2e3m4",
        text: "If you could instantly master any skill, what would it be?",
        tags: ["hypothetical", "aspiration", "creative", "thoughtful"]
    },
    {
        id: "a5b6p7",
        text: "If someone gave you $20 today, how would you spend it?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },

    // ==========================================
    // ETHICS & VALUES
    // ==========================================
    {
        id: "d8e9m0",
        text: "What would you do if you found a wallet full of cash on the street?",
        tags: ["deep", "hypothetical", "thoughtful", "reflection"]
    },
    {
        id: "a1b2q3",
        text: "What does it mean to be brave?",
        tags: ["deep", "reflection", "thoughtful", "all-ages"]
    },
    {
        id: "d4e5n6",
        text: "Do you think it's possible to change the world?",
        tags: ["deep", "reflection", "aspiration", "thoughtful"]
    },
    {
        id: "a7b8q9",
        text: "What is a cause or charity that means a lot to you?",
        tags: ["deep", "reflection", "aspiration", "heartwarming"]
    },
    {
        id: "d0e1n2",
        text: "What do you think is the most important quality of a good person?",
        tags: ["deep", "reflection", "thoughtful", "all-ages"]
    },
    {
        id: "a3b4q5",
        text: "What is one piece of advice you want to pass on to future generations?",
        tags: ["deep", "reflection", "family", "thoughtful"]
    },
    {
        id: "d6e7n8",
        text: "If you could give everyone in the world one gift, what would it be?",
        tags: ["hypothetical", "deep", "heartwarming", "creative"]
    },
    {
        id: "a9b0q1",
        text: "What do you think the meaning of life is?",
        tags: ["deep", "reflection", "thoughtful", "adults"]
    },

    // ==========================================
    // SCHOOL & CHILDHOOD
    // ==========================================
    {
        id: "d2e3n4",
        text: "If you were the principal of your school, what would you change?",
        tags: ["hypothetical", "school", "creative", "fun"]
    },
    {
        id: "a5b6q7",
        text: "Who was your most memorable teacher, and what did they teach you?",
        tags: ["school", "memories", "reflection", "heartwarming"]
    },
    {
        id: "d8e9n0",
        text: "If you could make up a brand-new school subject, what would it be?",
        tags: ["school", "creative", "fun", "all-ages"]
    },
    {
        id: "a1b2r3",
        text: "Did you ever get in trouble for something funny at school?",
        tags: ["school", "memories", "fun", "silly"]
    },
    {
        id: "d4e5o6",
        text: "What school subject do you think helps you the most in everyday life?",
        tags: ["school", "reflection", "thoughtful", "all-ages"]
    },
    {
        id: "a7b8r9",
        text: "What is the most embarrassing thing that happened to you at school?",
        tags: ["school", "memories", "fun", "silly"]
    },

    // ==========================================
    // SOCIAL & PERCEPTION
    // ==========================================
    {
        id: "d0e1o2",
        text: "Who is the kindest person you know?",
        tags: ["reflection", "deep", "heartwarming", "family"]
    },
    {
        id: "a3b4r5",
        text: "Who is most likely to accidentally lock themselves out of the house?",
        tags: ["fun", "silly", "family", "friends"]
    },
    {
        id: "d6e7o8",
        text: "Who is most likely to become a millionaire?",
        tags: ["fun", "aspiration", "family", "friends"]
    },
    {
        id: "a9b0r1",
        text: "Who is the best cook in the family?",
        tags: ["food", "family", "fun", "heartwarming"]
    },
    {
        id: "d2e3o4",
        text: "Who is most likely to survive on a deserted island?",
        tags: ["fun", "hypothetical", "family", "friends"]
    },
    {
        id: "a5b6r7",
        text: "Give the person to your left a genuine compliment.",
        tags: ["fun", "heartwarming", "family", "friends"]
    },
    {
        id: "d8e9o0",
        text: "Who is most likely to be the life of the party?",
        tags: ["fun", "family", "friends", "silly"]
    },
    {
        id: "a1b2s3",
        text: "Who is most likely to write a bestselling book?",
        tags: ["fun", "aspiration", "family", "friends"]
    },

    // ==========================================
    // RISKY & VULNERABILITY
    // ==========================================
    {
        id: "d4e5p6",
        text: "What is the most embarrassing thing that ever happened to you?",
        tags: ["experience", "fun", "silly", "reflection"]
    },
    {
        id: "a7b8s9",
        text: "Have you ever hidden a secret from your best friend?",
        tags: ["deep", "reflection", "friends", "thoughtful"]
    },
    {
        id: "d0e1p2",
        text: "What is a bad habit you have that you wish you could break?",
        tags: ["reflection", "aspiration", "thoughtful", "identity"]
    },
    {
        id: "a3b4s5",
        text: "Have you ever blamed something you did on someone else?",
        tags: ["reflection", "deep", "thoughtful", "fun"]
    },
    {
        id: "d6e7p8",
        text: "What is something you've always wanted to try but are too scared to do?",
        tags: ["aspiration", "reflection", "adventurous", "deep"]
    },
    {
        id: "a9b0s1",
        text: "Have you ever felt misunderstood by the grown-ups in your life?",
        tags: ["reflection", "deep", "teens", "thoughtful"]
    },
    {
        id: "d2e3p4",
        text: "Have you ever sent a text to the wrong person that was embarrassing?",
        tags: ["experience", "fun", "silly", "all-ages"]
    },
    {
        id: "a5b6s7",
        text: "What is the strangest rumor you've ever heard about yourself?",
        tags: ["fun", "silly", "reflection", "teens"]
    },

    // ==========================================
    // HISTORY & LIFE EXPERIENCES
    // ==========================================
    {
        id: "d8e9p0",
        text: "Did you have any nicknames as a child? How did you get them?",
        tags: ["memories", "identity", "fun", "family"]
    },
    {
        id: "a1b2t3",
        text: "Have you ever been in a situation where you thought you were in danger?",
        tags: ["experience", "deep", "reflection", "adventurous"]
    },
    {
        id: "d4e5q6",
        text: "Who was your best friend growing up, and are you still in touch?",
        tags: ["memories", "friends", "reflection", "nostalgic"]
    },
    {
        id: "a7b8t9",
        text: "What historical event happened in your lifetime that you remember most?",
        tags: ["memories", "deep", "reflection", "thoughtful"]
    },
    {
        id: "d0e1q2",
        text: "What was the first album, tape, or CD you ever bought?",
        tags: ["memories", "entertainment", "nostalgic", "fun"]
    },
    {
        id: "a3b4t5",
        text: "What did your parents do for a living when you were growing up?",
        tags: ["memories", "family", "reflection", "deep"]
    },
    {
        id: "d6e7q8",
        text: "Have you ever broken a bone or needed stitches?",
        tags: ["experience", "memories", "fun", "all-ages"]
    },
    {
        id: "a9b0t1",
        text: "What is a life lesson you wish you had learned sooner?",
        tags: ["reflection", "deep", "thoughtful", "adults"]
    },
    {
        id: "d2e3q4",
        text: "What was the happiest day of your life so far?",
        tags: ["memories", "deep", "heartwarming", "reflection"]
    },
    {
        id: "a5b6t7",
        text: "Did your parents ever catch you doing something sneaky?",
        tags: ["memories", "fun", "silly", "family"]
    },
    {
        id: "d8e9q0",
        text: "What is a song that instantly takes you back to a specific moment?",
        tags: ["memories", "entertainment", "nostalgic", "reflection"]
    },
    {
        id: "a1b2u3",
        text: "What was the first time you felt truly brave?",
        tags: ["experience", "deep", "reflection", "memories"]
    },
    {
        id: "d4e5r6",
        text: "What is the story behind your name or how you were named?",
        tags: ["identity", "family", "memories", "deep"]
    },
    {
        id: "a7b8u9",
        text: "How did you and your partner/spouse meet?",
        tags: ["memories", "family", "heartwarming", "adults"]
    },

    // ==========================================
    // DIGITAL ETHICS & TECHNOLOGY
    // ==========================================
    {
        id: "de01a2",
        text: "Can AI truly reduce loneliness, or does it merely mask it?",
        tags: ["digitalethics", "deep", "thoughtful", "adults"]
    },
    {
        id: "de03b4",
        text: "Should platforms be required to fact-check content?",
        tags: ["digitalethics", "opinion", "thoughtful", "adults"]
    },
    {
        id: "de05c6",
        text: "Is online dating ruining the traditional dating scene?",
        tags: ["digitalethics", "opinion", "deep", "adults"]
    },
    {
        id: "de07d8",
        text: "Would ending online anonymity make society more civil?",
        tags: ["digitalethics", "hypothetical", "opinion", "adults"]
    },
    {
        id: "de09e0",
        text: "Is it ethical to use AI tools for school assignments?",
        tags: ["digitalethics", "values", "opinion", "school"]
    },
    {
        id: "de11f2",
        text: "Do social movements need to go viral to have impact?",
        tags: ["digitalethics", "opinion", "thoughtful", "adults"]
    },
    {
        id: "de13g4",
        text: "Are influencers warping modern beauty standards?",
        tags: ["digitalethics", "opinion", "deep", "teens"]
    },
    {
        id: "de15h6",
        text: "Should AI be banned in competitive debate or art?",
        tags: ["digitalethics", "opinion", "creative", "thoughtful"]
    },

    // ==========================================
    // GLOBAL CITIZENSHIP & CULTURE
    // ==========================================
    {
        id: "gc01a2",
        text: "What local tradition in your country resonates with you most?",
        tags: ["globalcitizen", "preference", "deep", "family"]
    },
    {
        id: "gc03b4",
        text: "What is a common proverb or saying you find yourself using?",
        tags: ["globalcitizen", "reflection", "family", "thoughtful"]
    },
    {
        id: "gc05c6",
        text: "Is empathy a universal language across borders?",
        tags: ["globalcitizen", "deep", "values", "thoughtful"]
    },
    {
        id: "gc07d8",
        text: "How can people work together on global challenges?",
        tags: ["globalcitizen", "aspiration", "values", "thoughtful"]
    },
    {
        id: "gc09e0",
        text: "What does 'home' mean to you in a global context?",
        tags: ["globalcitizen", "deep", "reflection", "thoughtful"]
    },
    {
        id: "gc11f2",
        text: "What does it mean to be a 'world neighbor'?",
        tags: ["globalcitizen", "values", "deep", "thoughtful"]
    },
    {
        id: "gc13g4",
        text: "How do your daily choices affect people elsewhere in the world?",
        tags: ["globalcitizen", "reflection", "values", "deep"]
    },

    // ==========================================
    // ENVIRONMENTAL STEWARDSHIP
    // ==========================================
    {
        id: "st01a2",
        text: "Land, air, water, or fire: which element represents you best?",
        tags: ["stewardship", "creative", "identity", "fun"]
    },
    {
        id: "st03b4",
        text: "Name three sounds of nature and how they make you feel.",
        tags: ["stewardship", "reflection", "nature", "thoughtful"]
    },
    {
        id: "st05c6",
        text: "Tell the story of a special tree in your life.",
        tags: ["stewardship", "memories", "nature", "heartwarming"]
    },
    {
        id: "st07d8",
        text: "Have you noticed changes in the weather where you live?",
        tags: ["stewardship", "reflection", "nature", "thoughtful"]
    },
    {
        id: "st09e0",
        text: "Do you think convenience is a barrier to sustainability?",
        tags: ["stewardship", "opinion", "values", "deep"]
    },
    {
        id: "st11f2",
        text: "How do you feel about fast fashion?",
        tags: ["stewardship", "opinion", "values", "teens"]
    },
    {
        id: "st13g4",
        text: "Should companies be held responsible for pollution?",
        tags: ["stewardship", "opinion", "values", "thoughtful"]
    },
    {
        id: "st15h6",
        text: "Do humans have a responsibility to protect other species?",
        tags: ["stewardship", "values", "deep", "thoughtful"]
    },
    {
        id: "st17i8",
        text: "What is your relationship with nature right now?",
        tags: ["stewardship", "reflection", "nature", "deep"]
    },
    {
        id: "st19j0",
        text: "Where is your favorite place to explore nature?",
        tags: ["stewardship", "preference", "nature", "adventurous"]
    },

    // ==========================================
    // EMOTIONAL INTELLIGENCE & SELF-AWARENESS
    // ==========================================
    {
        id: "ei01a2",
        text: "What emotions did you feel most strongly today?",
        tags: ["selfawareness", "reflection", "deep", "all-ages"]
    },
    {
        id: "ei03b4",
        text: "How do you usually respond to difficult emotions?",
        tags: ["selfawareness", "reflection", "deep", "thoughtful"]
    },
    {
        id: "ei05c6",
        text: "What goals or values drive you the most?",
        tags: ["values", "reflection", "deep", "aspiration"]
    },
    {
        id: "ei07d8",
        text: "How did you show empathy toward others today?",
        tags: ["selfawareness", "reflection", "values", "heartwarming"]
    },
    {
        id: "ei09e0",
        text: "Did you communicate your needs effectively today?",
        tags: ["selfawareness", "reflection", "deep", "adults"]
    },
    {
        id: "ei11f2",
        text: "If your current emotions were weather, what's the forecast?",
        tags: ["selfawareness", "creative", "fun", "all-ages"]
    },
    {
        id: "ei13g4",
        text: "What topic or cause ignites a fire in you?",
        tags: ["values", "aspiration", "deep", "thoughtful"]
    },
    {
        id: "ei15h6",
        text: "Who do you admire and what qualities do they have?",
        tags: ["values", "reflection", "aspiration", "heartwarming"]
    },
    {
        id: "ei17i8",
        text: "When have you felt misunderstood by someone?",
        tags: ["vulnerability", "reflection", "deep", "thoughtful"]
    },
    {
        id: "ei19j0",
        text: "What's one small action you can take to care for yourself?",
        tags: ["selfawareness", "reflection", "aspiration", "cozy"]
    },

    // ==========================================
    // BRAVE SPACE - DEEPER CONVERSATIONS
    // ==========================================
    {
        id: "bs01a2",
        text: "What experience shaped your perspective on this topic?",
        tags: ["bravespace", "deep", "reflection", "adults"]
    },
    {
        id: "bs03b4",
        text: "What truth feels risky to speak in this moment?",
        tags: ["bravespace", "vulnerability", "deep", "adults"]
    },
    {
        id: "bs05c6",
        text: "What uncomfortable reality might we be avoiding?",
        tags: ["bravespace", "deep", "values", "adults"]
    },
    {
        id: "bs07d8",
        text: "How might our privileges influence our view?",
        tags: ["bravespace", "deep", "values", "reflection"]
    },
    {
        id: "bs09e0",
        text: "What new understanding are you taking from this conversation?",
        tags: ["bravespace", "reflection", "deep", "thoughtful"]
    },
    {
        id: "bs11f2",
        text: "What happens when someone is excluded from society?",
        tags: ["bravespace", "deep", "values", "thoughtful"]
    },
    {
        id: "bs13g4",
        text: "Have you ever been discriminated against?",
        tags: ["bravespace", "vulnerability", "experience", "deep"]
    },
    {
        id: "bs15h6",
        text: "What does it feel like not to belong?",
        tags: ["bravespace", "vulnerability", "deep", "reflection"]
    },
    {
        id: "bs17i8",
        text: "Who is missing from this conversation?",
        tags: ["bravespace", "deep", "values", "thoughtful"]
    },
    {
        id: "bs19j0",
        text: "What action does this insight invite you to take?",
        tags: ["bravespace", "aspiration", "values", "deep"]
    },

    // ==========================================
    // VULNERABILITY & RISKY EXPERIENCES
    // ==========================================
    {
        id: "vu01a2",
        text: "Do you feel hard to love sometimes?",
        tags: ["vulnerability", "deep", "reflection", "adults"]
    },
    {
        id: "vu03b4",
        text: "What choice had the greatest impact on your life?",
        tags: ["values", "deep", "reflection", "thoughtful"]
    },
    {
        id: "vu05c6",
        text: "What are your top five regrets in life?",
        tags: ["vulnerability", "deep", "reflection", "adults"]
    },
    {
        id: "vu07d8",
        text: "What roles do love and affection play in your life?",
        tags: ["values", "deep", "heartwarming", "adults"]
    },
    {
        id: "vu09e0",
        text: "When did you last cry in front of another person?",
        tags: ["vulnerability", "deep", "reflection", "adults"]
    },
    {
        id: "vu11f2",
        text: "What is one thing you wish people understood better about you?",
        tags: ["vulnerability", "deep", "reflection", "thoughtful"]
    },
    {
        id: "vu13g4",
        text: "What does forgiveness mean to you?",
        tags: ["values", "deep", "reflection", "thoughtful"]
    },
    {
        id: "vu15h6",
        text: "What makes you feel most alive and authentic?",
        tags: ["values", "deep", "reflection", "heartwarming"]
    },
    {
        id: "vu17i8",
        text: "Tell me about a time when you were truly understood.",
        tags: ["vulnerability", "deep", "heartwarming", "adults"]
    },
    {
        id: "vu19j0",
        text: "What is an unforgivable action to you?",
        tags: ["values", "deep", "opinion", "adults"]
    },
    {
        id: "vu21k2",
        text: "In what scenario is it okay to lie?",
        tags: ["values", "deep", "opinion", "thoughtful"]
    },
    {
        id: "vu23l4",
        text: "When in your life have you felt most alone?",
        tags: ["vulnerability", "deep", "reflection", "adults"]
    },

    // ==========================================
    // LEGACY & MEANING
    // ==========================================
    {
        id: "lg01a2",
        text: "What would you like to be remembered for?",
        tags: ["legacy", "deep", "values", "reflection"]
    },
    {
        id: "lg03b4",
        text: "If you could ask God or the Universe one question, what would it be?",
        tags: ["legacy", "deep", "values", "thoughtful"]
    },
    {
        id: "lg05c6",
        text: "What value do you hope to carry into your own family?",
        tags: ["legacy", "values", "family", "deep"]
    },
    {
        id: "lg07d8",
        text: "What is one piece of wisdom you'd leave behind?",
        tags: ["legacy", "deep", "values", "thoughtful"]
    },
    {
        id: "lg09e0",
        text: "What is the single most important thing you've learned in life?",
        tags: ["legacy", "deep", "reflection", "thoughtful"]
    },

    // ==========================================
    // GRATITUDE & POSITIVITY
    // ==========================================
    {
        id: "gr01a2",
        text: "What is something you are thankful for today?",
        tags: ["gratitude", "reflection", "heartwarming", "all-ages"]
    },
    {
        id: "gr03b4",
        text: "What are you most grateful your parents taught you?",
        tags: ["gratitude", "family", "reflection", "heartwarming"]
    },
    {
        id: "gr05c6",
        text: "What do you feel most grateful for this year?",
        tags: ["gratitude", "reflection", "heartwarming", "holidays"]
    },
    {
        id: "gr07d8",
        text: "What brings you joy in life?",
        tags: ["gratitude", "reflection", "heartwarming", "all-ages"]
    },
    {
        id: "gr09e0",
        text: "What makes you feel most appreciated and understood?",
        tags: ["gratitude", "reflection", "deep", "heartwarming"]
    },

    // ==========================================
    // GROSS & ABSURD (for teens/humor lovers)
    // ==========================================
    {
        id: "ga01a2",
        text: "Would you rather have see-through skin or bright red eyeballs?",
        tags: ["gross", "hypothetical", "silly", "teens"]
    },
    {
        id: "ga03b4",
        text: "Would you rather sweat melted cheese or always smell like skunk?",
        tags: ["gross", "hypothetical", "silly", "fun"]
    },
    {
        id: "ga05c6",
        text: "Would you rather shoot spaghetti out of your fingers or sneeze meatballs?",
        tags: ["gross", "hypothetical", "silly", "teens"]
    },
    {
        id: "ga07d8",
        text: "Would you rather have feet for hands or hands for feet?",
        tags: ["gross", "hypothetical", "silly", "fun"]
    },
    {
        id: "ga09e0",
        text: "Would you rather fart glitter or burp glitter?",
        tags: ["gross", "hypothetical", "silly", "fun"]
    },
    {
        id: "ga11f2",
        text: "Would you rather be covered in fur or scales?",
        tags: ["gross", "hypothetical", "silly", "fun"]
    },
    {
        id: "ga13g4",
        text: "What if it rained Jell-O instead of water?",
        tags: ["gross", "hypothetical", "creative", "silly"]
    },

    // ==========================================
    // MORE CREATIVE & IMAGINATIVE
    // ==========================================
    {
        id: "cr01a2",
        text: "If your life had a soundtrack, who would compose it?",
        tags: ["creative", "identity", "fun", "entertainment"]
    },
    {
        id: "cr03b4",
        text: "If you had to become a supervillain, who would be your nemesis?",
        tags: ["creative", "fun", "silly", "entertainment"]
    },
    {
        id: "cr05c6",
        text: "What if you could only speak in movie quotes for a week?",
        tags: ["creative", "fun", "silly", "entertainment"]
    },
    {
        id: "cr07d8",
        text: "What if you could instantly heal any person or animal?",
        tags: ["creative", "hypothetical", "heartwarming", "values"]
    },
    {
        id: "cr09e0",
        text: "If you could eliminate one food so no one could eat it, what would it be?",
        tags: ["creative", "food", "fun", "silly"]
    },
    {
        id: "cr11f2",
        text: "What if you discovered the world was a simulation?",
        tags: ["creative", "hypothetical", "deep", "thoughtful"]
    },
    {
        id: "cr13g4",
        text: "If you could meet your future self, what one question would you ask?",
        tags: ["creative", "hypothetical", "deep", "reflection"]
    },
    {
        id: "cr15h6",
        text: "What if animals could run the world instead of humans?",
        tags: ["creative", "hypothetical", "fun", "nature"]
    },
    {
        id: "cr17i8",
        text: "If you had to wear the same outfit forever, what would it be?",
        tags: ["creative", "preference", "fun", "identity"]
    },
    {
        id: "cr19j0",
        text: "If you were a ghost, who would you haunt?",
        tags: ["creative", "fun", "silly", "hypothetical"]
    },

    // ==========================================
    // MORE RISKY/MISCHIEF EXPERIENCES
    // ==========================================
    {
        id: "ri01a2",
        text: "Have you ever hidden a secret from your best friend?",
        tags: ["risky", "vulnerability", "friends", "deep"]
    },
    {
        id: "ri03b4",
        text: "Have you ever been jealous of a family member or friend?",
        tags: ["risky", "vulnerability", "reflection", "deep"]
    },
    {
        id: "ri05c6",
        text: "Have you ever blamed something you did on someone else?",
        tags: ["risky", "vulnerability", "reflection", "all-ages"]
    },
    {
        id: "ri07d8",
        text: "What is something you're glad your parents don't know about?",
        tags: ["risky", "fun", "silly", "teens"]
    },
    {
        id: "ri09e0",
        text: "Have you ever faked being sick to get out of something?",
        tags: ["risky", "experience", "fun", "all-ages"]
    },
    {
        id: "ri11f2",
        text: "Did you ever try to run away from home as a child?",
        tags: ["risky", "memories", "experience", "all-ages"]
    },
    {
        id: "ri13g4",
        text: "Have you ever gone skinny dipping?",
        tags: ["risky", "experience", "fun", "adults"]
    },

    // ==========================================
    // SENSORY & NOSTALGIA
    // ==========================================
    {
        id: "sn01a2",
        text: "What sound triggers a sense of relief for you?",
        tags: ["preference", "reflection", "cozy", "thoughtful"]
    },
    {
        id: "sn03b4",
        text: "What texture do you find most comforting?",
        tags: ["preference", "reflection", "cozy", "nostalgic"]
    },
    {
        id: "sn05c6",
        text: "Describe the taste of your favorite childhood treat.",
        tags: ["memories", "nostalgic", "food", "reflection"]
    },
    {
        id: "sn07d8",
        text: "What scent instantly feels like 'home' to you?",
        tags: ["memories", "nostalgic", "home", "reflection"]
    },
    {
        id: "sn09e0",
        text: "Describe a specific sound that reminds you of childhood.",
        tags: ["memories", "nostalgic", "reflection", "deep"]
    },

    // ==========================================
    // IDENTITY & PERCEPTION
    // ==========================================
    {
        id: "id01a2",
        text: "What three words best describe you?",
        tags: ["identity", "reflection", "deep", "all-ages"]
    },
    {
        id: "id03b4",
        text: "What is something strangers often incorrectly assume about you?",
        tags: ["identity", "reflection", "deep", "thoughtful"]
    },
    {
        id: "id05c6",
        text: "What personality trait has gotten you into the most trouble?",
        tags: ["identity", "reflection", "fun", "vulnerability"]
    },
    {
        id: "id07d8",
        text: "What helps you feel most like yourself?",
        tags: ["identity", "reflection", "deep", "cozy"]
    },
    {
        id: "id09e0",
        text: "What personality traits did you get from each of your parents?",
        tags: ["identity", "family", "reflection", "deep"]
    },

    // ==========================================
    // MORE HOLIDAY PROMPTS
    // ==========================================
    {
        id: "hd01a2",
        text: "What is a holiday song that makes you cringe?",
        tags: ["holidays", "fun", "preference", "entertainment"]
    },
    {
        id: "hd03b4",
        text: "What kind of holiday shopper are you: Black Friday or Christmas Eve?",
        tags: ["holidays", "preference", "fun", "all-ages"]
    },
    {
        id: "hd05c6",
        text: "Do you reuse bows and wrapping paper?",
        tags: ["holidays", "preference", "fun", "all-ages"]
    },
    {
        id: "hd07d8",
        text: "What Thanksgiving food is seriously overrated?",
        tags: ["holidays", "food", "opinion", "fun"]
    },
    {
        id: "hd09e0",
        text: "Finish the sentence: It wouldn't be the holidays without...",
        tags: ["holidays", "reflection", "heartwarming", "family"]
    },
    {
        id: "hd11f2",
        text: "What holiday treat should be available all year long?",
        tags: ["holidays", "food", "preference", "fun"]
    },
    {
        id: "hd13g4",
        text: "What's your stance on matching holiday pajamas?",
        tags: ["holidays", "preference", "fun", "family"]
    },
    {
        id: "hd15h6",
        text: "Is Die Hard a Christmas movie?",
        tags: ["holidays", "entertainment", "opinion", "fun"]
    },
    {
        id: "hd17i8",
        text: "Which holiday character would win in a wrestling match?",
        tags: ["holidays", "fun", "silly", "creative"]
    },
    {
        id: "hd19j0",
        text: "Who has it harder during the holidays: kids or parents?",
        tags: ["holidays", "opinion", "family", "fun"]
    },
    {
        id: "hd21k2",
        text: "Eggnog: love it or hate it?",
        tags: ["holidays", "food", "preference", "fun"]
    },
    {
        id: "hd23l4",
        text: "If your life were a holiday movie, what would the title be?",
        tags: ["holidays", "creative", "fun", "identity"]
    },
    {
        id: "hd25m6",
        text: "If you were stuck in a snow globe, what scene would be in it?",
        tags: ["holidays", "creative", "fun", "cozy"]
    },
    {
        id: "hd27n8",
        text: "Have you ever celebrated Christmas in July?",
        tags: ["holidays", "experience", "fun", "silly"]
    }
];

// Make PROMPTS available globally
if (typeof window !== 'undefined') {
    window.PROMPTS = PROMPTS;
}
