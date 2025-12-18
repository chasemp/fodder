// Conversation prompts database
// Each prompt has a unique 6-character hex ID for easy reference
// Tags can be used for filtering (include/exclude)

function generateUniqueId() {
    return Math.random().toString(16).substring(2, 8).toUpperCase();
}

const PROMPTS = [
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
        tags: ["food", "reflection", "experience", "memories"]
    },
    {
        id: "2c3d4e",
        text: "What's your go-to comfort food when you're feeling down?",
        tags: ["food", "preference", "heartwarming"]
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
        tags: ["food", "family", "memories", "heartwarming"]
    },
    {
        id: "4c5d6e",
        text: "What's your favorite thing to cook or bake?",
        tags: ["food", "preference", "hobbies", "creative"]
    },
    {
        id: "7f8a9b",
        text: "What food reminds you most of your childhood?",
        tags: ["food", "memories", "reflection"]
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
        tags: ["food", "preference", "holidays", "family", "heartwarming"]
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
        id: "0b1c2d",
        text: "What's your favorite family vacation memory?",
        tags: ["travel", "family", "memories", "heartwarming"]
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
        tags: ["travel", "experience", "memories", "deep"]
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
        tags: ["travel", "family", "memories", "reflection"]
    },
    {
        id: "0a1b2c",
        text: "What's a hidden gem of a place that most people don't know about?",
        tags: ["travel", "experience", "opinion", "fun"]
    },
    {
        id: "3d4e5f",
        text: "What career would you be interested in shadowing for a day?",
        tags: ["career", "hypothetical", "aspiration", "deep"]
    },
    {
        id: "6a7b8c",
        text: "What did you want to be when you grew up?",
        tags: ["career", "memories", "reflection", "all-ages"]
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
        tags: ["career", "reflection", "deep", "adults"]
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
        tags: ["career", "reflection", "deep", "adults"]
    },
    {
        id: "3c4d5e",
        text: "What's your earliest memory?",
        tags: ["memories", "reflection", "deep"]
    },
    {
        id: "9c0d1e",
        text: "What's a tradition from your childhood that you miss?",
        tags: ["memories", "family", "heartwarming"]
    },
    {
        id: "2f3a4b",
        text: "What was your favorite subject in school?",
        tags: ["memories", "school", "preference", "all-ages"]
    },
    {
        id: "5c6d7e",
        text: "What's the best birthday you've ever had?",
        tags: ["memories", "experience", "fun", "heartwarming"]
    },
    {
        id: "8f9a0b",
        text: "What was your favorite game to play as a kid?",
        tags: ["memories", "fun", "all-ages"]
    },
    {
        id: "1c2d3f",
        text: "Who was your childhood best friend?",
        tags: ["memories", "friends", "heartwarming"]
    },
    {
        id: "4e5f6a",
        text: "What's a song that instantly takes you back in time?",
        tags: ["memories", "entertainment", "fun"]
    },
    {
        id: "7b8c9d",
        text: "What was your favorite family tradition growing up?",
        tags: ["memories", "family", "holidays", "heartwarming"]
    },
    {
        id: "0e1f2a",
        text: "What's the most trouble you ever got into as a kid?",
        tags: ["memories", "silly", "fun"]
    },
    {
        id: "3b4c5d",
        text: "What was your first car?",
        tags: ["memories", "experience", "adults"]
    },
    {
        id: "6e7f8a",
        text: "What fad from your youth do you wish would come back?",
        tags: ["memories", "fun", "opinion"]
    },
    {
        id: "9b0c1d",
        text: "What's a smell that brings back strong memories?",
        tags: ["memories", "reflection", "deep"]
    },
    {
        id: "2e3f4a",
        text: "What did you do during summer vacations as a kid?",
        tags: ["memories", "family", "fun"]
    },
    {
        id: "5b6c7d",
        text: "What's a story from your grandparents that you love?",
        tags: ["memories", "family", "heartwarming"]
    },
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
        id: "7a8b9c",
        text: "Morning person or night owl?",
        tags: ["preference", "opinion", "fun", "all-ages"]
    },
    {
        id: "0d1e2f",
        text: "What's your favorite way to spend a rainy day?",
        tags: ["preference", "heartwarming", "fun", "hobbies"]
    },
    {
        id: "3a4b5c",
        text: "Dogs or cats?",
        tags: ["preference", "fun", "silly", "all-ages"]
    },
    {
        id: "6d7e8f",
        text: "What's your favorite book you've read this year?",
        tags: ["preference", "entertainment", "hobbies", "deep"]
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
        tags: ["preference", "holidays", "heartwarming", "family"]
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
        tags: ["preference", "home", "heartwarming", "fun"]
    },
    {
        id: "0c1d2f",
        text: "What's your favorite way to relax?",
        tags: ["preference", "hobbies", "heartwarming", "fun"]
    },
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
        tags: ["hypothetical", "deep", "creative"]
    },
    {
        id: "9e0f1b",
        text: "If you could master any musical instrument overnight, which would you choose?",
        tags: ["hypothetical", "creative", "entertainment", "fun"]
    },
    {
        id: "2a3b4d",
        text: "If you had to give up one of your five senses, which would it be?",
        tags: ["hypothetical", "deep", "creative"]
    },
    {
        id: "5d6e7a",
        text: "If you could be a character in any book or movie, who would you be?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "8b9c0f",
        text: "If you could know the answer to any question, what would you ask?",
        tags: ["hypothetical", "deep", "creative"]
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
        tags: ["family", "reflection", "fun", "deep"]
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
        tags: ["family", "holidays", "preference", "heartwarming"]
    },
    {
        id: "0e1f2b",
        text: "What's something you're grateful for about our family?",
        tags: ["family", "reflection", "heartwarming", "deep"]
    },
    {
        id: "3a4b5e",
        text: "How did your parents or grandparents meet?",
        tags: ["family", "memories", "heartwarming"]
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
        tags: ["family", "memories", "heartwarming"]
    },
    {
        id: "5a6b7d",
        text: "What's a family recipe that needs to be preserved?",
        tags: ["family", "food", "memories", "heartwarming"]
    },
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
        tags: ["entertainment", "memories", "fun"]
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
    {
        id: "3e4f5c",
        text: "What's something you believe that you think few others do?",
        tags: ["deep", "opinion", "reflection"]
    },
    {
        id: "6a7b8e",
        text: "What's the best compliment you've ever received?",
        tags: ["deep", "memories", "heartwarming", "reflection"]
    },
    {
        id: "9d0e1b",
        text: "What life lesson did you have to learn the hard way?",
        tags: ["deep", "reflection", "experience", "adults"]
    },
    {
        id: "2b3c4f",
        text: "What are you most proud of?",
        tags: ["deep", "reflection", "heartwarming", "aspiration"]
    },
    {
        id: "5e6f7d",
        text: "What do you think is the meaning of life?",
        tags: ["deep", "reflection", "opinion"]
    },
    {
        id: "8a9b0a",
        text: "What fear have you overcome?",
        tags: ["deep", "experience", "reflection", "heartwarming"]
    },
    {
        id: "1c2d3b",
        text: "What do you wish more people understood about you?",
        tags: ["deep", "reflection", "heartwarming"]
    },
    {
        id: "4f5a6d",
        text: "What's a mistake you made that turned out to be a blessing?",
        tags: ["deep", "reflection", "experience"]
    },
    {
        id: "7b8c9a",
        text: "What legacy do you want to leave behind?",
        tags: ["deep", "aspiration", "reflection", "adults"]
    },
    {
        id: "0e1f2d",
        text: "What's the kindest thing a stranger has ever done for you?",
        tags: ["deep", "experience", "heartwarming", "memories"]
    },
    {
        id: "3a4b5a",
        text: "What do you think your purpose is?",
        tags: ["deep", "reflection", "aspiration"]
    },
    {
        id: "6d7e8c",
        text: "What's a belief you held strongly that you've changed your mind about?",
        tags: ["deep", "reflection", "experience", "adults"]
    },
    {
        id: "9b0c1f",
        text: "If you could give everyone in the world one piece of advice, what would it be?",
        tags: ["deep", "opinion", "reflection"]
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
    {
        id: "8d9e0b",
        text: "What's your favorite Christmas movie?",
        tags: ["holidays", "entertainment", "preference", "heartwarming", "fun"]
    },
    {
        id: "1a2b3e",
        text: "What's your favorite holiday song?",
        tags: ["holidays", "entertainment", "preference", "heartwarming"]
    },
    {
        id: "4d5e6b",
        text: "What's the best gift you've ever received?",
        tags: ["holidays", "memories", "heartwarming", "fun"]
    },
    {
        id: "3b4c5e",
        text: "Do you prefer real or artificial Christmas trees?",
        tags: ["holidays", "preference", "opinion", "fun"]
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
        tags: ["holidays", "memories", "family", "heartwarming"]
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
        tags: ["holidays", "preference", "home", "heartwarming"]
    },
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
        tags: ["silly", "fun", "memories"]
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
        tags: ["silly", "fun", "memories"]
    },
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
        tags: ["nature", "opinion", "adventurous"]
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
        tags: ["nature", "opinion", "deep", "adults"]
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
        tags: ["home", "memories", "family"]
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
        tags: ["home", "memories", "family"]
    },
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
        tags: ["friends", "reflection", "memories", "deep"]
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
        tags: ["friends", "reflection", "deep"]
    },
    {
        id: "9a0b1d",
        text: "What's an inside joke you have with your friends?",
        tags: ["friends", "fun", "silly", "memories"]
    },
    {
        id: "2d3e4e",
        text: "What's on your bucket list?",
        tags: ["aspiration", "fun", "adventurous", "reflection"]
    },
    {
        id: "5b6c7c",
        text: "What's a goal you're currently working toward?",
        tags: ["aspiration", "reflection", "deep"]
    },
    {
        id: "8e9f0f",
        text: "Where do you see yourself in 10 years?",
        tags: ["aspiration", "reflection", "deep", "hypothetical"]
    },
    {
        id: "1b2c3c",
        text: "What's something you want to accomplish before the year ends?",
        tags: ["aspiration", "reflection", "fun", "deep"]
    },
    {
        id: "4e5f6a",
        text: "What would you do if you knew you couldn't fail?",
        tags: ["aspiration", "hypothetical", "deep", "creative"]
    },
    {
        id: "3b4c5d",
        text: "What would your perfect day look like?",
        tags: ["aspiration", "hypothetical", "fun", "creative"]
    },
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
        tags: ["school", "memories", "reflection"]
    },
    {
        id: "7a8b9f",
        text: "What clique were you part of in high school?",
        tags: ["school", "memories", "reflection", "all-ages"]
    },
    {
        id: "f0a1b2",
        text: "What three words best describe you?",
        tags: ["identity", "reflection", "deep", "all-ages"]
    },
    {
        id: "c3d4e5",
        text: "How would you describe yourself to someone who has never met you?",
        tags: ["identity", "reflection", "deep", "creative"]
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
        tags: ["identity", "reflection", "deep"]
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
        tags: ["identity", "reflection", "fun", "deep"]
    },
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
        tags: ["hypothetical", "deep", "all-ages"]
    },
    {
        id: "f6a7b9",
        text: "Would you rather have total freedom or total safety?",
        tags: ["hypothetical", "deep", "adults"]
    },
    {
        id: "c9d0e2",
        text: "Would you rather build a snowman or drink hot chocolate indoors?",
        tags: ["hypothetical", "holidays", "heartwarming", "all-ages", "fun"]
    },
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
    {
        id: "c7d8e0",
        text: "What would you do if you found a wallet full of cash on the street?",
        tags: ["deep", "hypothetical", "reflection"]
    },
    {
        id: "f0a1b4",
        text: "What does it mean to be brave?",
        tags: ["deep", "reflection", "all-ages"]
    },
    {
        id: "c3d4e7",
        text: "What do you think is the most important quality of a good person?",
        tags: ["deep", "reflection", "opinion"]
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
        tags: ["deep", "reflection", "family"]
    },
    {
        id: "c5d6e9",
        text: "What is a habit you are currently trying to build or break?",
        tags: ["reflection", "aspiration", "deep"]
    },
    {
        id: "f8a9b2",
        text: "What helps you fall asleep at night?",
        tags: ["preference", "heartwarming", "fun", "reflection"]
    },
    {
        id: "c1d2e5",
        text: "How do you calm down when you are feeling angry?",
        tags: ["reflection", "deep", "all-ages"]
    },
    {
        id: "f4a5b8",
        text: "What is something you've always wanted to try but are too scared to do?",
        tags: ["aspiration", "adventurous", "reflection", "deep"]
    },
    {
        id: "c7d8e1",
        text: "What is a bad habit you have that you wish you could break?",
        tags: ["reflection", "deep", "fun"]
    },
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
        tags: ["hypothetical", "deep", "creative"]
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
        tags: ["reflection", "deep", "family", "all-ages"]
    },
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
    {
        id: "f8a9b4",
        text: "What historical event happened in your lifetime that you remember most?",
        tags: ["memories", "reflection", "deep", "experience"]
    },
    {
        id: "c1d2e7",
        text: "What was dating like when you were younger?",
        tags: ["memories", "reflection", "adults"]
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
    {
        id: "f6a7b3",
        text: "What is your favorite simple pleasure?",
        tags: ["preference", "heartwarming", "fun"]
    },
    {
        id: "c9d0e6",
        text: "What is your favorite type of weather?",
        tags: ["preference", "nature", "fun", "all-ages"]
    },
    {
        id: "f2a3b9",
        text: "What was the house or neighborhood where you grew up like?",
        tags: ["memories", "family", "reflection"]
    },
    {
        id: "c5d6e2",
        text: "What was your favorite childhood toy or game?",
        tags: ["memories", "fun", "all-ages"]
    },
    {
        id: "f8a9b5",
        text: "What Christmas tree ornament do you put up every year that's special to you?",
        tags: ["holidays", "memories", "family", "heartwarming"]
    },
    {
        id: "c1d2e8",
        text: "If you were Santa for a day, what gifts would you give children?",
        tags: ["holidays", "hypothetical", "fun", "all-ages"]
    },
    {
        id: "f4a5b1",
        text: "What is that one holiday tradition you look forward to every year?",
        tags: ["holidays", "family", "heartwarming"]
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
        tags: ["holidays", "memories", "family"]
    },
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
        tags: ["deep", "reflection", "adults"]
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
        tags: ["deep", "reflection", "all-ages", "heartwarming"]
    },
    {
        id: "f4a5b2",
        text: "What was the biggest challenge you faced this year, and how did you handle it?",
        tags: ["reflection", "deep", "aspiration"]
    },
    {
        id: "c7d8e5",
        text: "What was your 'high moment' and your 'low moment' of this year?",
        tags: ["reflection", "deep", "family"]
    },
    {
        id: "f0a1b9",
        text: "What is one thing you learned about yourself this year?",
        tags: ["reflection", "deep", "aspiration"]
    },
    {
        id: "c3d4e2",
        text: "What new family tradition would you like to start next year?",
        tags: ["family", "holidays", "aspiration", "creative"]
    },
    {
        id: "f6a7b5",
        text: "When was the last time you apologized for something?",
        tags: ["reflection", "deep", "all-ages"]
    },
    {
        id: "b1c2d3",
        text: "Would you rather be a genius or amazing at any activity?",
        tags: ["hypothetical", "aspiration", "fun", "all-ages"]
    },
    {
        id: "e4f5a6",
        text: "Would you rather meet your ancestors or your descendants?",
        tags: ["hypothetical", "deep", "family"]
    },
    {
        id: "b7c8d9",
        text: "Would you rather have more money or more time?",
        tags: ["hypothetical", "deep", "adults"]
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
        tags: ["hypothetical", "deep", "reflection"]
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
        tags: ["hypothetical", "aspiration", "fun", "deep"]
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
        tags: ["hypothetical", "deep", "adults"]
    },
    {
        id: "e6f7b8",
        text: "Would you rather lose all money earned this year or all memories?",
        tags: ["hypothetical", "deep", "adults"]
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
        id: "a1b2e3",
        text: "What is your favorite holiday smell?",
        tags: ["holidays", "preference", "memories", "heartwarming"]
    },
    {
        id: "d4e5b6",
        text: "What song brings back childhood memories?",
        tags: ["memories", "fun", "all-ages"]
    },
    {
        id: "a7b8e9",
        text: "What sound triggers a sense of relief for you?",
        tags: ["preference", "deep", "heartwarming"]
    },
    {
        id: "d0e1b2",
        text: "What texture do you find most comforting?",
        tags: ["preference", "heartwarming", "memories", "deep"]
    },
    {
        id: "a3b4e5",
        text: "Describe the taste of your favorite childhood treat.",
        tags: ["food", "memories", "fun"]
    },
    {
        id: "a9b0e1",
        text: "Describe a specific sound that reminds you of childhood.",
        tags: ["memories", "reflection", "deep"]
    },
    {
        id: "d2e3b4",
        text: "What smell do you hate that others seem to like?",
        tags: ["preference", "fun", "silly", "opinion"]
    },
    {
        id: "a5b6e7",
        text: "What was your dream job as a kid?",
        tags: ["career", "memories", "fun"]
    },
    {
        id: "d8e9b0",
        text: "What is your go-to productivity hack?",
        tags: ["career", "aspiration", "fun", "adults"]
    },
    {
        id: "a1b2f3",
        text: "What is the best piece of career advice you've received?",
        tags: ["career", "deep", "adults"]
    },
    {
        id: "d4e5c6",
        text: "If money were no object, what would you do?",
        tags: ["hypothetical", "aspiration", "deep"]
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
        tags: ["creative", "fun", "identity", "deep"]
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
    {
        id: "a1b2g3",
        text: "What is one thing you're proud of that no one else noticed?",
        tags: ["reflection", "deep", "identity"]
    },
    {
        id: "d4e5d6",
        text: "What message would you send to your future self?",
        tags: ["aspiration", "deep", "reflection"]
    },
    {
        id: "a7b8g9",
        text: "What does 'home' mean to you right now?",
        tags: ["deep", "reflection", "home", "heartwarming"]
    },
    {
        id: "d0e1d2",
        text: "What is a big world problem you would like to change?",
        tags: ["aspiration", "deep", "all-ages"]
    },
    {
        id: "a3b4g5",
        text: "What makes you feel most appreciated and understood?",
        tags: ["deep", "reflection", "heartwarming"]
    },
    {
        id: "d6e7d8",
        text: "What makes a good friend?",
        tags: ["deep", "reflection", "friends"]
    },
    {
        id: "a9b0g1",
        text: "What is the bravest thing you've ever done?",
        tags: ["experience", "deep", "reflection"]
    },
    {
        id: "d2e3d4",
        text: "Who knows you best?",
        tags: ["reflection", "deep", "family", "friends"]
    },
    {
        id: "a5b6g7",
        text: "What makes you unique?",
        tags: ["identity", "reflection", "deep"]
    },
    {
        id: "d8e9d0",
        text: "Whose opinion do you care most about?",
        tags: ["deep", "reflection", "identity"]
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
        tags: ["reflection", "deep", "fun"]
    },
    {
        id: "a3b4h5",
        text: "What is your definition of success?",
        tags: ["deep", "aspiration", "reflection"]
    },
    {
        id: "d6e7e8",
        text: "What brings you joy in life?",
        tags: ["reflection", "deep", "heartwarming", "all-ages"]
    },
    {
        id: "a9b0h1",
        text: "In your own words, what does love mean?",
        tags: ["deep", "reflection", "heartwarming"]
    },
    {
        id: "d2e3e4",
        text: "What helps you breathe easy?",
        tags: ["reflection", "heartwarming", "deep"]
    },
    {
        id: "a5b6h7",
        text: "What would you like to be remembered for?",
        tags: ["deep", "reflection", "aspiration"]
    },
    {
        id: "d8e9e0",
        text: "If you could ask God or the Universe one question, what would it be?",
        tags: ["deep", "hypothetical", "reflection"]
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
        id: "d0e1g2",
        text: "If you could be any age for a week, what age would you be?",
        tags: ["hypothetical", "reflection", "fun", "deep"]
    },
    {
        id: "a3b4j5",
        text: "What is your favorite way to waste time?",
        tags: ["preference", "fun", "silly", "all-ages"]
    },
    {
        id: "d6e7g8",
        text: "What is the most beautiful place you have ever seen?",
        tags: ["experience", "travel", "memories", "deep"]
    },
    {
        id: "a9b0j1",
        text: "What was the funniest thing that happened this year?",
        tags: ["memories", "fun", "reflection", "all-ages"]
    },
    {
        id: "d2e3g4",
        text: "What is your #1 goal for next year?",
        tags: ["aspiration", "reflection", "deep", "all-ages"]
    },
    {
        id: "a5b6j7",
        text: "What are three words to describe this past year?",
        tags: ["reflection", "deep", "all-ages"]
    },
    {
        id: "d8e9g0",
        text: "What is a new skill you want to learn next year?",
        tags: ["aspiration", "creative", "deep", "all-ages"]
    },
    {
        id: "a1b2k3",
        text: "What was the best piece of advice you got this year?",
        tags: ["reflection", "deep", "fun"]
    },
    {
        id: "d4e5h6",
        text: "What is one thing you want to do differently next year?",
        tags: ["aspiration", "reflection", "deep", "all-ages"]
    },
    {
        id: "a7b8k9",
        text: "What was the coolest place you visited this year?",
        tags: ["travel", "experience", "memories", "fun"]
    },
    {
        id: "d0e1h2",
        text: "What is your 'Word of the Year' for next year?",
        tags: ["aspiration", "reflection", "creative", "deep"]
    },
    {
        id: "a3b4k5",
        text: "What skill did you learn this year that surprised you?",
        tags: ["reflection", "experience", "aspiration", "deep"]
    },
    {
        id: "d6e7h8",
        text: "If this year were a movie, what genre would it be?",
        tags: ["creative", "fun", "reflection", "silly"]
    },
    {
        id: "a9b0k1",
        text: "What is one habit or routine you'd like to start?",
        tags: ["aspiration", "reflection", "deep", "all-ages"]
    },
    {
        id: "d2e3h4",
        text: "What is one place you hope to visit in the next year?",
        tags: ["aspiration", "travel", "fun", "adventurous"]
    },
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
        tags: ["holidays", "preference", "fun", "heartwarming"]
    },
    {
        id: "a3b4n5",
        text: "What is your best holiday hack?",
        tags: ["holidays", "aspiration", "creative", "fun"]
    },
    {
        id: "d6e7k8",
        text: "How old were you when you stopped believing in Santa?",
        tags: ["holidays", "memories", "family"]
    },
    {
        id: "a9b0n1",
        text: "Do you send holiday cards?",
        tags: ["holidays", "preference", "family", "fun"]
    },
    {
        id: "d2e3k4",
        text: "Describe your ideal Christmas in three words.",
        tags: ["holidays", "reflection", "creative", "heartwarming"]
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
        id: "a7b8p9",
        text: "If you could invite any person from history to dinner, who would it be?",
        tags: ["hypothetical", "deep", "creative", "fun"]
    },
    {
        id: "a9b0p1",
        text: "If you were a season, which season would you be?",
        tags: ["hypothetical", "identity", "creative", "fun"]
    },
    {
        id: "a5b6p7",
        text: "If someone gave you $20 today, how would you spend it?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "d4e5n6",
        text: "Do you think it's possible to change the world?",
        tags: ["deep", "reflection", "aspiration"]
    },
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
        tags: ["school", "reflection", "deep", "all-ages"]
    },
    {
        id: "a7b8r9",
        text: "What is the most embarrassing thing that happened to you at school?",
        tags: ["school", "memories", "fun", "silly"]
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
        id: "d8e9o0",
        text: "Who is most likely to be the life of the party?",
        tags: ["fun", "family", "friends", "silly"]
    },
    {
        id: "d4e5p6",
        text: "What is the most embarrassing thing that ever happened to you?",
        tags: ["experience", "fun", "silly", "reflection"]
    },
    {
        id: "a7b8s9",
        text: "Have you ever hidden a secret from your best friend?",
        tags: ["deep", "reflection", "friends"]
    },
    {
        id: "a5b6s7",
        text: "What is the strangest rumor you've ever heard about yourself?",
        tags: ["fun", "silly", "reflection", "all-ages"]
    },
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
        tags: ["memories", "friends", "reflection"]
    },
    {
        id: "d0e1q2",
        text: "What was the first album, tape, or CD you ever bought?",
        tags: ["memories", "entertainment", "fun"]
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
        tags: ["reflection", "deep", "adults"]
    },
    {
        id: "d2e3q4",
        text: "What was the happiest day of your life so far?",
        tags: ["memories", "deep", "heartwarming", "reflection"]
    },
    {
        id: "d8e9q0",
        text: "What is a song that instantly takes you back to a specific moment?",
        tags: ["memories", "entertainment", "reflection"]
    },
    {
        id: "a1b2u3",
        text: "What was the first time you felt truly brave?",
        tags: ["experience", "deep", "reflection", "memories"]
    },
    {
        id: "a7b8u9",
        text: "How did you and your partner/spouse meet?",
        tags: ["memories", "family", "heartwarming", "adults"]
    },
    {
        id: "de01a2",
        text: "Can AI truly reduce loneliness, or does it merely mask it?",
        tags: ["values", "deep", "adults"]
    },
    {
        id: "de03b4",
        text: "Should platforms be required to fact-check content?",
        tags: ["values", "opinion", "deep", "adults"]
    },
    {
        id: "de05c6",
        text: "Is online dating ruining the traditional dating scene?",
        tags: ["values", "opinion", "deep", "adults"]
    },
    {
        id: "de07d8",
        text: "Would ending online anonymity make society more civil?",
        tags: ["values", "hypothetical", "opinion", "adults"]
    },
    {
        id: "de09e0",
        text: "Is it ethical to use AI tools for school assignments?",
        tags: ["values", "opinion", "school"]
    },
    {
        id: "de11f2",
        text: "Do social movements need to go viral to have impact?",
        tags: ["values", "opinion", "deep", "adults"]
    },
    {
        id: "de13g4",
        text: "Are influencers warping modern beauty standards?",
        tags: ["values", "opinion", "deep", "all-ages"]
    },
    {
        id: "de15h6",
        text: "Should AI be banned in competitive debate or art?",
        tags: ["values", "opinion", "creative", "deep"]
    },
    {
        id: "gc01a2",
        text: "What local tradition in your country resonates with you most?",
        tags: ["values", "preference", "deep", "family"]
    },
    {
        id: "gc03b4",
        text: "What is a common proverb or saying you find yourself using?",
        tags: ["values", "reflection", "family", "deep"]
    },
    {
        id: "gc05c6",
        text: "Is empathy a universal language across borders?",
        tags: ["values", "deep"]
    },
    {
        id: "gc07d8",
        text: "How can people work together on global challenges?",
        tags: ["values", "aspiration", "deep"]
    },
    {
        id: "gc09e0",
        text: "What does 'home' mean to you in a global context?",
        tags: ["values", "deep", "reflection"]
    },
    {
        id: "gc11f2",
        text: "What does it mean to be a 'world neighbor'?",
        tags: ["values", "deep"]
    },
    {
        id: "gc13g4",
        text: "How do your daily choices affect people elsewhere in the world?",
        tags: ["values", "reflection", "deep"]
    },
    {
        id: "st01a2",
        text: "Land, air, water, or fire: which element represents you best?",
        tags: ["values", "creative", "identity", "fun"]
    },
    {
        id: "st03b4",
        text: "Name three sounds of nature and how they make you feel.",
        tags: ["values", "reflection", "nature", "deep"]
    },
    {
        id: "st05c6",
        text: "Tell the story of a special tree in your life.",
        tags: ["values", "memories", "nature", "heartwarming"]
    },
    {
        id: "st07d8",
        text: "Have you noticed changes in the weather where you live?",
        tags: ["values", "reflection", "nature", "deep"]
    },
    {
        id: "st09e0",
        text: "Do you think convenience is a barrier to sustainability?",
        tags: ["values", "opinion", "deep"]
    },
    {
        id: "st11f2",
        text: "How do you feel about fast fashion?",
        tags: ["values", "opinion", "all-ages"]
    },
    {
        id: "st13g4",
        text: "Should companies be held responsible for pollution?",
        tags: ["values", "opinion", "deep"]
    },
    {
        id: "st15h6",
        text: "Do humans have a responsibility to protect other species?",
        tags: ["values", "deep"]
    },
    {
        id: "st17i8",
        text: "What is your relationship with nature right now?",
        tags: ["values", "reflection", "nature", "deep"]
    },
    {
        id: "st19j0",
        text: "Where is your favorite place to explore nature?",
        tags: ["values", "preference", "nature", "adventurous"]
    },
    {
        id: "ei01a2",
        text: "What emotions did you feel most strongly today?",
        tags: ["reflection", "deep", "all-ages"]
    },
    {
        id: "ei03b4",
        text: "How do you usually respond to difficult emotions?",
        tags: ["reflection", "deep"]
    },
    {
        id: "ei05c6",
        text: "What goals or values drive you the most?",
        tags: ["values", "reflection", "deep", "aspiration"]
    },
    {
        id: "ei07d8",
        text: "How did you show empathy toward others today?",
        tags: ["reflection", "values", "heartwarming"]
    },
    {
        id: "ei09e0",
        text: "Did you communicate your needs effectively today?",
        tags: ["reflection", "deep", "adults"]
    },
    {
        id: "ei11f2",
        text: "If your current emotions were weather, what's the forecast?",
        tags: ["reflection", "creative", "fun", "all-ages"]
    },
    {
        id: "ei13g4",
        text: "What topic or cause ignites a fire in you?",
        tags: ["values", "aspiration", "deep"]
    },
    {
        id: "ei15h6",
        text: "Who do you admire and what qualities do they have?",
        tags: ["values", "reflection", "aspiration", "heartwarming"]
    },
    {
        id: "ei17i8",
        text: "When have you felt misunderstood by someone?",
        tags: ["deep", "reflection"]
    },
    {
        id: "ei19j0",
        text: "What's one small action you can take to care for yourself?",
        tags: ["reflection", "aspiration", "heartwarming"]
    },
    {
        id: "bs01a2",
        text: "What experience shaped your perspective on this topic?",
        tags: ["deep", "deep", "reflection", "adults"]
    },
    {
        id: "bs03b4",
        text: "What truth feels risky to speak in this moment?",
        tags: ["deep", "deep", "adults"]
    },
    {
        id: "bs05c6",
        text: "What uncomfortable reality might we be avoiding?",
        tags: ["deep", "deep", "values", "adults"]
    },
    {
        id: "bs07d8",
        text: "How might our privileges influence our view?",
        tags: ["deep", "deep", "values", "reflection"]
    },
    {
        id: "bs09e0",
        text: "What new understanding are you taking from this conversation?",
        tags: ["deep", "reflection", "deep"]
    },
    {
        id: "bs11f2",
        text: "What happens when someone is excluded from society?",
        tags: ["deep", "deep", "values"]
    },
    {
        id: "bs13g4",
        text: "Have you ever been discriminated against?",
        tags: ["deep", "deep", "experience"]
    },
    {
        id: "bs15h6",
        text: "What does it feel like not to belong?",
        tags: ["deep", "deep", "reflection"]
    },
    {
        id: "bs17i8",
        text: "Who is missing from this conversation?",
        tags: ["deep", "deep", "values"]
    },
    {
        id: "bs19j0",
        text: "What action does this insight invite you to take?",
        tags: ["deep", "aspiration", "values", "deep"]
    },
    {
        id: "vu01a2",
        text: "Do you feel hard to love sometimes?",
        tags: ["deep", "reflection", "adults"]
    },
    {
        id: "vu03b4",
        text: "What choice had the greatest impact on your life?",
        tags: ["values", "deep", "reflection"]
    },
    {
        id: "vu05c6",
        text: "What are your top five regrets in life?",
        tags: ["deep", "reflection", "adults"]
    },
    {
        id: "vu07d8",
        text: "What roles do love and affection play in your life?",
        tags: ["values", "deep", "heartwarming", "adults"]
    },
    {
        id: "vu09e0",
        text: "When did you last cry in front of another person?",
        tags: ["deep", "reflection", "adults"]
    },
    {
        id: "vu11f2",
        text: "What is one thing you wish people understood better about you?",
        tags: ["deep", "reflection"]
    },
    {
        id: "vu13g4",
        text: "What does forgiveness mean to you?",
        tags: ["values", "deep", "reflection"]
    },
    {
        id: "vu15h6",
        text: "What makes you feel most alive and authentic?",
        tags: ["values", "deep", "reflection", "heartwarming"]
    },
    {
        id: "vu17i8",
        text: "Tell me about a time when you were truly understood.",
        tags: ["deep", "heartwarming", "adults"]
    },
    {
        id: "vu19j0",
        text: "What is an unforgivable action to you?",
        tags: ["values", "deep", "opinion", "adults"]
    },
    {
        id: "vu21k2",
        text: "In what scenario is it okay to lie?",
        tags: ["values", "deep", "opinion"]
    },
    {
        id: "lg05c6",
        text: "What value do you hope to carry into your own family?",
        tags: ["aspiration", "values", "family", "deep"]
    },
    {
        id: "lg07d8",
        text: "What is one piece of wisdom you'd leave behind?",
        tags: ["aspiration", "deep", "values"]
    },
    {
        id: "lg09e0",
        text: "What is the single most important thing you've learned in life?",
        tags: ["aspiration", "deep", "reflection"]
    },
    {
        id: "gr01a2",
        text: "What is something you are thankful for today?",
        tags: ["heartwarming", "reflection", "all-ages"]
    },
    {
        id: "gr03b4",
        text: "What are you most grateful your parents taught you?",
        tags: ["heartwarming", "family", "reflection"]
    },
    {
        id: "gr05c6",
        text: "What do you feel most grateful for this year?",
        tags: ["heartwarming", "reflection", "holidays"]
    },
    {
        id: "ga01a2",
        text: "Would you rather have see-through skin or bright red eyeballs?",
        tags: ["silly", "hypothetical", "all-ages"]
    },
    {
        id: "ga03b4",
        text: "Would you rather sweat melted cheese or always smell like skunk?",
        tags: ["silly", "hypothetical", "fun"]
    },
    {
        id: "ga05c6",
        text: "Would you rather shoot spaghetti out of your fingers or sneeze meatballs?",
        tags: ["silly", "hypothetical", "all-ages"]
    },
    {
        id: "ga07d8",
        text: "Would you rather have feet for hands or hands for feet?",
        tags: ["silly", "hypothetical", "fun"]
    },
    {
        id: "ga09e0",
        text: "Would you rather fart glitter or burp glitter?",
        tags: ["silly", "hypothetical", "fun"]
    },
    {
        id: "ga11f2",
        text: "Would you rather be covered in fur or scales?",
        tags: ["silly", "hypothetical", "fun"]
    },
    {
        id: "ga13g4",
        text: "What if it rained Jell-O instead of water?",
        tags: ["silly", "hypothetical", "creative"]
    },
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
        tags: ["creative", "hypothetical", "deep"]
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
    {
        id: "ri03b4",
        text: "Have you ever been jealous of a family member or friend?",
        tags: ["adventurous", "deep", "reflection"]
    },
    {
        id: "ri07d8",
        text: "What is something you're glad your parents don't know about?",
        tags: ["adventurous", "fun", "silly", "all-ages"]
    },
    {
        id: "ri11f2",
        text: "Did you ever try to run away from home as a child?",
        tags: ["adventurous", "memories", "experience", "all-ages"]
    },
    {
        id: "ri13g4",
        text: "Have you ever gone skinny dipping?",
        tags: ["adventurous", "experience", "fun", "adults"]
    },
    {
        id: "sn07d8",
        text: "What scent instantly feels like 'home' to you?",
        tags: ["memories", "home", "reflection"]
    },
    {
        id: "id07d8",
        text: "What helps you feel most like yourself?",
        tags: ["identity", "reflection", "deep", "heartwarming"]
    },
    {
        id: "hd11f2",
        text: "What holiday treat should be available all year long?",
        tags: ["holidays", "food", "preference", "fun"]
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
        tags: ["holidays", "creative", "fun", "heartwarming"]
    },
    {
        id: "hd27n8",
        text: "Have you ever celebrated Christmas in July?",
        tags: ["holidays", "experience", "fun", "silly"]
    },
    {
        id: "wyr001",
        text: "Would you rather never do laundry again or never wash dishes again?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr002",
        text: "Would you rather always be 10 minutes early or 20 minutes late?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr003",
        text: "Would you rather have unlimited coffee or unlimited snacks?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr004",
        text: "Would you rather have a self-driving car or a personal chef?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr005",
        text: "Would you rather always have perfect Wi-Fi or unlimited phone battery?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr006",
        text: "Would you rather never lose your keys again or never lose your phone again?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr007",
        text: "Would you rather live without music or without movies?",
        tags: ["hypothetical", "entertainment", "preference", "deep"]
    },
    {
        id: "wyr008",
        text: "Would you rather have to cook every meal or never be allowed to cook again?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr009",
        text: "Would you rather only whisper or only shout?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr010",
        text: "Would you rather have to wear formal clothes every day or pajamas every day?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr011",
        text: "Would you rather be able to function on 2 hours of sleep or never need caffeine again?",
        tags: ["hypothetical", "preference", "fun", "adults"]
    },
    {
        id: "wyr012",
        text: "Would you rather give up salty food or sweet food?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr013",
        text: "Would you rather always hit red lights or always be stuck in slow internet?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr014",
        text: "Would you rather live without air conditioning or without heating?",
        tags: ["hypothetical", "preference", "home", "fun"]
    },
    {
        id: "wyr015",
        text: "Would you rather have no sense of taste or no sense of smell?",
        tags: ["hypothetical", "preference", "deep"]
    },
    {
        id: "wyr016",
        text: "Would you rather always feel slightly too warm or slightly too cold?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr017",
        text: "Would you rather move to a new city every year or never leave your hometown?",
        tags: ["hypothetical", "travel", "preference", "deep"]
    },
    {
        id: "wyr018",
        text: "Would you rather never have to clean your house or never have to pay bills?",
        tags: ["hypothetical", "preference", "fun", "adults"]
    },
    {
        id: "wyr019",
        text: "Would you rather have a loud neighbor or a nosy neighbor?",
        tags: ["hypothetical", "preference", "fun", "home"]
    },
    {
        id: "wyr020",
        text: "Would you rather be unable to use GPS or unable to use search engines?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr021",
        text: "Would you rather have spaghetti for hair or marshmallows for fingers?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr023",
        text: "Would you rather always laugh loudly or never laugh at all?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr024",
        text: "Would you rather hiccup every hour or sneeze twice every hour?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr025",
        text: "Would you rather wear clown shoes every day or a clown wig every day?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr026",
        text: "Would you rather only be able to walk backward or only be able to walk sideways?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr027",
        text: "Would you rather sound like a cartoon character or move like one?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr028",
        text: "Would you rather have to rhyme everything you say or sing everything you say?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr029",
        text: "Would you rather have a tail you can't hide or ears that wiggle uncontrollably?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr030",
        text: "Would you rather be chased by one horse-sized duck or 100 duck-sized horses?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr031",
        text: "Would you rather burp confetti or sneeze glitter?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr032",
        text: "Would you rather have to wear wet socks forever or wear winter gloves all the time?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr033",
        text: "Would you rather your voice crack constantly or your shoes squeak constantly?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr034",
        text: "Would you rather blink loudly or sneeze silently?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr035",
        text: "Would you rather have to hop everywhere or crawl everywhere?",
        tags: ["hypothetical", "silly", "fun", "all-ages"]
    },
    {
        id: "wyr036",
        text: "Would you rather your hair glow like a neon sign or change color every hour?",
        tags: ["hypothetical", "silly", "creative", "fun"]
    },
    {
        id: "wyr037",
        text: "Would you rather always smell like fresh cookies or always smell like fresh flowers?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr038",
        text: "Would you rather only eat foods that are blue or only eat foods that are green?",
        tags: ["hypothetical", "food", "silly", "fun"]
    },
    {
        id: "wyr039",
        text: "Would you rather be able to talk to bananas or understand squirrels?",
        tags: ["hypothetical", "silly", "nature", "fun"]
    },
    {
        id: "wyr040",
        text: "Would you rather travel the world for free or have a mansion in your favorite place?",
        tags: ["hypothetical", "travel", "preference", "aspiration"]
    },
    {
        id: "wyr041",
        text: "Would you rather go to space or explore the deep sea?",
        tags: ["hypothetical", "travel", "adventurous", "fun"]
    },
    {
        id: "wyr042",
        text: "Would you rather teleport anywhere or fly (but slowly)?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr043",
        text: "Would you rather live on a beach or in the mountains?",
        tags: ["hypothetical", "travel", "preference", "nature"]
    },
    {
        id: "wyr044",
        text: "Would you rather never experience jet lag again or never wait in airport lines again?",
        tags: ["hypothetical", "travel", "preference", "fun"]
    },
    {
        id: "wyr045",
        text: "Would you rather take a road trip across your country or backpack across another?",
        tags: ["hypothetical", "travel", "adventurous", "fun"]
    },
    {
        id: "wyr046",
        text: "Would you rather explore a rainforest or a desert?",
        tags: ["hypothetical", "travel", "nature", "adventurous"]
    },
    {
        id: "wyr047",
        text: "Would you rather camp under the stars or stay in a luxury hotel?",
        tags: ["hypothetical", "travel", "preference", "fun"]
    },
    {
        id: "wyr048",
        text: "Would you rather swim with dolphins or hike with llamas?",
        tags: ["hypothetical", "nature", "adventurous", "fun"]
    },
    {
        id: "wyr049",
        text: "Would you rather visit every national park or every major city?",
        tags: ["hypothetical", "travel", "preference", "aspiration"]
    },
    {
        id: "wyr050",
        text: "Would you rather travel only by ship or only by train?",
        tags: ["hypothetical", "travel", "preference", "fun"]
    },
    {
        id: "wyr051",
        text: "Would you rather be able to speak every language or be able to play every instrument?",
        tags: ["hypothetical", "creative", "preference", "aspiration"]
    },
    {
        id: "wyr052",
        text: "Would you rather take an endless free vacation or have a 4-day workweek forever?",
        tags: ["hypothetical", "career", "preference", "fun"]
    },
    {
        id: "wyr053",
        text: "Would you rather experience ancient history firsthand or visit the future?",
        tags: ["hypothetical", "creative", "deep", "fun"]
    },
    {
        id: "wyr054",
        text: "Would you rather travel with friends or travel alone with unlimited money?",
        tags: ["hypothetical", "travel", "friends", "preference"]
    },
    {
        id: "wyr055",
        text: "Would you rather go on a safari or visit Antarctica?",
        tags: ["hypothetical", "travel", "nature", "adventurous"]
    },
    {
        id: "wyr056",
        text: "Would you rather stay in an underwater hotel or a treehouse hotel?",
        tags: ["hypothetical", "travel", "creative", "fun"]
    },
    {
        id: "wyr057",
        text: "Would you rather live abroad for a year or take a year-long cruise?",
        tags: ["hypothetical", "travel", "preference", "adventurous"]
    },
    {
        id: "wyr058",
        text: "Would you rather never use planes again or never use cars again?",
        tags: ["hypothetical", "travel", "preference", "deep"]
    },
    {
        id: "wyr059",
        text: "Would you rather see the northern lights or a full solar eclipse?",
        tags: ["hypothetical", "nature", "travel", "preference"]
    },
    {
        id: "wyr060",
        text: "Would you rather have super strength or super speed?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr061",
        text: "Would you rather be invisible for a day or able to fly for a day?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr062",
        text: "Would you rather read minds or control time?",
        tags: ["hypothetical", "creative", "deep", "fun"]
    },
    {
        id: "wyr063",
        text: "Would you rather talk to animals or speak every human language?",
        tags: ["hypothetical", "creative", "nature", "fun"]
    },
    {
        id: "wyr064",
        text: "Would you rather have a photographic memory or the ability to forget anything at will?",
        tags: ["hypothetical", "creative", "deep"]
    },
    {
        id: "wyr065",
        text: "Would you rather breathe underwater or survive extreme temperatures?",
        tags: ["hypothetical", "creative", "adventurous", "fun"]
    },
    {
        id: "wyr066",
        text: "Would you rather teleport anywhere instantly or be able to freeze time?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr067",
        text: "Would you rather be able to clone yourself or shapeshift?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr068",
        text: "Would you rather control fire or control water?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr069",
        text: "Would you rather have night vision or X-ray vision?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr070",
        text: "Would you rather be able to heal others or heal yourself?",
        tags: ["hypothetical", "creative", "deep", "values"]
    },
    {
        id: "wyr071",
        text: "Would you rather be able to shrink or grow super tall at will?",
        tags: ["hypothetical", "creative", "silly", "fun"]
    },
    {
        id: "wyr072",
        text: "Would you rather have super luck or super intelligence?",
        tags: ["hypothetical", "creative", "preference", "deep"]
    },
    {
        id: "wyr073",
        text: "Would you rather always know the truth or always be believed?",
        tags: ["hypothetical", "deep", "values"]
    },
    {
        id: "wyr074",
        text: "Would you rather control plants or control animals?",
        tags: ["hypothetical", "creative", "nature", "fun"]
    },
    {
        id: "wyr075",
        text: "Would you rather be a master of every skill or a master of one?",
        tags: ["hypothetical", "deep", "preference"]
    },
    {
        id: "wyr076",
        text: "Would you rather be immune to injury or immune to embarrassment?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr077",
        text: "Would you rather switch places with your past self or future self for a day?",
        tags: ["hypothetical", "creative", "deep", "reflection"]
    },
    {
        id: "wyr078",
        text: "Would you rather rewind 30 seconds or fast-forward 30 seconds?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr079",
        text: "Would you rather be able to pause your emotions or amplify the positive ones?",
        tags: ["hypothetical", "deep", "reflection"]
    },
    {
        id: "wyr080",
        text: "Would you rather live in a superhero universe or a fantasy universe?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr081",
        text: "Would you rather attend Hogwarts or Jedi training?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr082",
        text: "Would you rather be a Pokémon trainer or a pirate in One Piece?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr083",
        text: "Would you rather wield a lightsaber or a magical staff?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr084",
        text: "Would you rather be in The Lord of the Rings or Star Wars?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr085",
        text: "Would you rather be a detective in a mystery novel or a hero in an adventure novel?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr086",
        text: "Would you rather be a character in a sitcom or an action movie?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr087",
        text: "Would you rather have a robot sidekick or a dragon sidekick?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr088",
        text: "Would you rather ride a flying broom or a flying carpet?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr089",
        text: "Would you rather visit Jurassic Park or Willy Wonka's factory?",
        tags: ["hypothetical", "entertainment", "fun", "all-ages"]
    },
    {
        id: "wyr090",
        text: "Would you rather live in the Mario world or the Zelda world?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr091",
        text: "Would you rather be a famous movie star or a famous musician?",
        tags: ["hypothetical", "entertainment", "career", "aspiration"]
    },
    {
        id: "wyr092",
        text: "Would you rather be in a time-loop movie or a treasure hunt movie?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr093",
        text: "Would you rather fight zombies or aliens (in PG-13 style!)?",
        tags: ["hypothetical", "entertainment", "silly", "fun"]
    },
    {
        id: "wyr094",
        text: "Would you rather join the Avengers or the Justice League?",
        tags: ["hypothetical", "entertainment", "fun", "all-ages"]
    },
    {
        id: "wyr095",
        text: "Would you rather star in a comedy or an action movie?",
        tags: ["hypothetical", "entertainment", "preference", "fun"]
    },
    {
        id: "wyr096",
        text: "Would you rather have a theme song play every time you walk in a room or dramatic lighting?",
        tags: ["hypothetical", "silly", "creative", "fun"]
    },
    {
        id: "wyr097",
        text: "Would you rather be a wizard with weak spells or a knight with no armor?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr098",
        text: "Would you rather be able to travel into books or into video games?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr099",
        text: "Would you rather have a cameo in your favorite movie or meet the cast?",
        tags: ["hypothetical", "entertainment", "preference", "fun"]
    },
    {
        id: "wyr100",
        text: "Would you rather work a job you love for average pay or a job you tolerate for high pay?",
        tags: ["hypothetical", "career", "values", "deep"]
    },
    {
        id: "wyr101",
        text: "Would you rather never have to work again or work your dream job forever?",
        tags: ["hypothetical", "career", "aspiration", "deep"]
    },
    {
        id: "wyr102",
        text: "Would you rather get a guaranteed yearly raise or random yearly bonuses?",
        tags: ["hypothetical", "career", "preference", "adults"]
    },
    {
        id: "wyr103",
        text: "Would you rather start your own company or run a large existing one?",
        tags: ["hypothetical", "career", "aspiration", "adults"]
    },
    {
        id: "wyr104",
        text: "Would you rather receive $1,000 instantly or flip a coin for $10,000?",
        tags: ["hypothetical", "preference", "fun", "adventurous"]
    },
    {
        id: "wyr105",
        text: "Would you rather have free groceries for life or free travel for life?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr106",
        text: "Would you rather be famous in your industry or famous worldwide for something random?",
        tags: ["hypothetical", "career", "aspiration", "fun"]
    },
    {
        id: "wyr107",
        text: "Would you rather have a personal assistant or a personal trainer?",
        tags: ["hypothetical", "preference", "fun", "adults"]
    },
    {
        id: "wyr108",
        text: "Would you rather take a month off paid or get a one-time $10k bonus?",
        tags: ["hypothetical", "career", "preference", "adults"]
    },
    {
        id: "wyr109",
        text: "Would you rather be extremely productive or extremely creative?",
        tags: ["hypothetical", "career", "preference", "deep"]
    },
    {
        id: "wyr110",
        text: "Would you rather have a four-day weekend or a four-day workweek?",
        tags: ["hypothetical", "career", "preference", "fun"]
    },
    {
        id: "wyr111",
        text: "Would you rather work remotely forever or have a beautiful office space?",
        tags: ["hypothetical", "career", "preference", "adults"]
    },
    {
        id: "wyr112",
        text: "Would you rather retire at 40 or work part-time forever?",
        tags: ["hypothetical", "career", "aspiration", "adults"]
    },
    {
        id: "wyr113",
        text: "Would you rather be known as the best leader or the best teammate?",
        tags: ["hypothetical", "career", "values", "deep"]
    },
    {
        id: "wyr114",
        text: "Would you rather be paid in cash or paid in perks?",
        tags: ["hypothetical", "career", "preference", "adults"]
    },
    {
        id: "wyr115",
        text: "Would you rather have perfect financial knowledge or perfect emotional intelligence?",
        tags: ["hypothetical", "deep", "values"]
    },
    {
        id: "wyr116",
        text: "Would you rather win a big award or invent something useful?",
        tags: ["hypothetical", "aspiration", "values", "deep"]
    },
    {
        id: "wyr117",
        text: "Would you rather have unlimited paid vacation or unlimited sick days?",
        tags: ["hypothetical", "career", "preference", "adults"]
    },
    {
        id: "wyr118",
        text: "Would you rather get promoted every year or switch careers every five?",
        tags: ["hypothetical", "career", "preference", "adults"]
    },
    {
        id: "wyr119",
        text: "Would you rather be a great mentor or have a great mentor?",
        tags: ["hypothetical", "career", "values", "deep"]
    },
    {
        id: "wyr120",
        text: "Would you rather have a small, close group of friends or a large group of acquaintances?",
        tags: ["hypothetical", "friends", "preference", "deep"]
    },
    {
        id: "wyr121",
        text: "Would you rather host every party or attend every party?",
        tags: ["hypothetical", "friends", "preference", "fun"]
    },
    {
        id: "wyr122",
        text: "Would you rather be great at giving gifts or great at receiving them?",
        tags: ["hypothetical", "friends", "preference", "fun"]
    },
    {
        id: "wyr123",
        text: "Would you rather go on a blind date or go on a group date?",
        tags: ["hypothetical", "friends", "preference", "adults"]
    },
    {
        id: "wyr124",
        text: "Would you rather have deep conversations or fun, lighthearted conversations?",
        tags: ["hypothetical", "friends", "preference", "deep"]
    },
    {
        id: "wyr125",
        text: "Would you rather text someone or call them?",
        tags: ["hypothetical", "friends", "preference", "all-ages"]
    },
    {
        id: "wyr126",
        text: "Would you rather forget someone's name or forget their birthday?",
        tags: ["hypothetical", "friends", "fun", "all-ages"]
    },
    {
        id: "wyr127",
        text: "Would you rather have a friend who always runs late or a friend who always cancels?",
        tags: ["hypothetical", "friends", "preference", "fun"]
    },
    {
        id: "wyr128",
        text: "Would you rather have to apologize first or wait for the other person forever?",
        tags: ["hypothetical", "friends", "values", "deep"]
    },
    {
        id: "wyr129",
        text: "Would you rather be known for your kindness or your humor?",
        tags: ["hypothetical", "identity", "values", "deep"]
    },
    {
        id: "wyr130",
        text: "Would you rather always know the right thing to say or the right gift to give?",
        tags: ["hypothetical", "friends", "preference", "fun"]
    },
    {
        id: "wyr131",
        text: "Would you rather be too honest or too polite?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr132",
        text: "Would you rather make new friends easily or keep old friends forever?",
        tags: ["hypothetical", "friends", "preference", "deep"]
    },
    {
        id: "wyr133",
        text: "Would you rather be the funniest person in the room or the smartest?",
        tags: ["hypothetical", "identity", "preference", "fun"]
    },
    {
        id: "wyr134",
        text: "Would you rather everyone trust you or everyone admire you?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr135",
        text: "Would you rather spend a day with family or a day with friends?",
        tags: ["hypothetical", "family", "friends", "preference"]
    },
    {
        id: "wyr136",
        text: "Would you rather get surprise visits or surprise messages?",
        tags: ["hypothetical", "friends", "preference", "fun"]
    },
    {
        id: "wyr137",
        text: "Would you rather give great advice or always follow great advice?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr138",
        text: "Would you rather resolve conflict quickly or avoid conflict entirely?",
        tags: ["hypothetical", "friends", "values", "deep"]
    },
    {
        id: "wyr139",
        text: "Would you rather always be invited or always be the host?",
        tags: ["hypothetical", "friends", "preference", "fun"]
    },
    {
        id: "wyr140",
        text: "Would you rather see your future or change one decision from your past?",
        tags: ["hypothetical", "deep", "reflection"]
    },
    {
        id: "wyr141",
        text: "Would you rather be misunderstood or ignored?",
        tags: ["hypothetical", "deep", "reflection"]
    },
    {
        id: "wyr142",
        text: "Would you rather know how every story ends or never be spoiled again?",
        tags: ["hypothetical", "entertainment", "preference", "fun"]
    },
    {
        id: "wyr143",
        text: "Would you rather create something that changes the world or something that lasts forever?",
        tags: ["hypothetical", "aspiration", "deep", "values"]
    },
    {
        id: "wyr144",
        text: "Would you rather be known for your art or your ideas?",
        tags: ["hypothetical", "aspiration", "creative", "deep"]
    },
    {
        id: "wyr145",
        text: "Would you rather feel every emotion deeply or feel only the positive ones lightly?",
        tags: ["hypothetical", "deep", "reflection"]
    },
    {
        id: "wyr146",
        text: "Would you rather explore outer space or explore your own subconscious?",
        tags: ["hypothetical", "deep", "creative"]
    },
    {
        id: "wyr147",
        text: "Would you rather understand the meaning of life or understand how the universe began?",
        tags: ["hypothetical", "deep", "values"]
    },
    {
        id: "wyr148",
        text: "Would you rather write a book or direct a movie?",
        tags: ["hypothetical", "creative", "aspiration", "entertainment"]
    },
    {
        id: "wyr149",
        text: "Would you rather inspire millions or help a few people deeply?",
        tags: ["hypothetical", "aspiration", "values", "deep"]
    },
    {
        id: "wyr150",
        text: "Would you rather forget your worst memory or relive your best memory?",
        tags: ["hypothetical", "memories", "deep", "reflection"]
    },
    {
        id: "wyr151",
        text: "Would you rather always dream vividly or rarely dream at all?",
        tags: ["hypothetical", "preference", "creative", "fun"]
    },
    {
        id: "wyr152",
        text: "Would you rather have infinite creativity or infinite patience?",
        tags: ["hypothetical", "creative", "preference", "deep"]
    },
    {
        id: "wyr153",
        text: "Would you rather have a brilliant idea once or decent ideas forever?",
        tags: ["hypothetical", "creative", "preference", "deep"]
    },
    {
        id: "wyr154",
        text: "Would you rather travel to the past to witness something or to the future to learn something?",
        tags: ["hypothetical", "creative", "deep", "fun"]
    },
    {
        id: "wyr155",
        text: "Would you rather know every truth or maintain some comforting illusions?",
        tags: ["hypothetical", "deep", "values"]
    },
    {
        id: "wyr156",
        text: "Would you rather be a philosopher or an inventor?",
        tags: ["hypothetical", "creative", "career", "deep"]
    },
    {
        id: "wyr157",
        text: "Would you rather live a simple but peaceful life or an exciting but stressful one?",
        tags: ["hypothetical", "deep", "values", "reflection"]
    },
    {
        id: "wyr158",
        text: "Would you rather make art no one sees or make art you don't like but everyone loves?",
        tags: ["hypothetical", "creative", "values", "deep"]
    },
    {
        id: "wyr159",
        text: "Would you rather be remembered for a single great achievement or many small ones?",
        tags: ["hypothetical", "aspiration", "values", "deep"]
    },
    {
        id: "wyr160",
        text: "Would you rather win every game you play or enjoy every game you lose?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "wyr161",
        text: "Would you rather be the funniest person at the party or the best dancer?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "wyr162",
        text: "Would you rather only eat party food or only eat healthy food forever?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr163",
        text: "Would you rather host karaoke or do stand-up comedy?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "wyr164",
        text: "Would you rather always get the last slice of pizza or always pick the movie?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "wyr165",
        text: "Would you rather sing a solo or dance a solo?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "wyr166",
        text: "Would you rather go to a costume party or a fancy gala?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "wyr167",
        text: "Would you rather play board games or video games?",
        tags: ["hypothetical", "entertainment", "preference", "all-ages"]
    },
    {
        id: "wyr168",
        text: "Would you rather stay up all night socializing or leave early and sleep well?",
        tags: ["hypothetical", "friends", "preference", "fun"]
    },
    {
        id: "wyr169",
        text: "Would you rather meet someone famous or someone incredibly wise?",
        tags: ["hypothetical", "preference", "fun", "deep"]
    },
    {
        id: "wyr170",
        text: "Would you rather have a DJ remember your favorite song or a chef remember your favorite dish?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr171",
        text: "Would you rather be great at charades or great at trivia?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "wyr172",
        text: "Would you rather start a group tradition or revive an old one?",
        tags: ["hypothetical", "family", "friends", "heartwarming"]
    },
    {
        id: "wyr173",
        text: "Would you rather be the photographer or the one photographed?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr174",
        text: "Would you rather have unlimited snacks at a party or unlimited drinks (nonalcoholic)?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr175",
        text: "Would you rather attend a game night or a movie night?",
        tags: ["hypothetical", "entertainment", "preference", "all-ages"]
    },
    {
        id: "wyr176",
        text: "Would you rather tell an embarrassing story or listen to one?",
        tags: ["hypothetical", "fun", "adventurous", "all-ages"]
    },
    {
        id: "wyr177",
        text: "Would you rather always be asked to plan the event or never be asked at all?",
        tags: ["hypothetical", "friends", "preference", "fun"]
    },
    {
        id: "wyr178",
        text: "Would you rather play the villain in a group game or the hero?",
        tags: ["hypothetical", "fun", "preference", "all-ages"]
    },
    {
        id: "wyr179",
        text: "Would you rather win a prize or give a prize?",
        tags: ["hypothetical", "values", "preference", "heartwarming"]
    },
    {
        id: "wyr180",
        text: "Would you rather never eat dessert again or never eat fast food again?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr181",
        text: "Would you rather only eat spicy food or only eat bland food?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr182",
        text: "Would you rather give up chocolate or cheese?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr183",
        text: "Would you rather have free pizza for life or free burgers for life?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr184",
        text: "Would you rather drink only iced drinks or only hot drinks?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr185",
        text: "Would you rather eat breakfast foods for every meal or dinner foods for every meal?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr186",
        text: "Would you rather never drink soda again or never drink juice again?",
        tags: ["hypothetical", "food", "preference", "all-ages"]
    },
    {
        id: "wyr187",
        text: "Would you rather have to try a new food every day or never try new foods again?",
        tags: ["hypothetical", "food", "preference", "adventurous"]
    },
    {
        id: "wyr188",
        text: "Would you rather cook everything from scratch or eat pre-made meals forever?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr189",
        text: "Would you rather only eat sweet things or only eat savory things?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr190",
        text: "Would you rather eat with chopsticks forever or eat with a spoon only?",
        tags: ["hypothetical", "food", "silly", "fun"]
    },
    {
        id: "wyr191",
        text: "Would you rather give up snacks or give up full meals?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr192",
        text: "Would you rather eat only your favorite food forever or never eat it again?",
        tags: ["hypothetical", "food", "preference", "deep"]
    },
    {
        id: "wyr193",
        text: "Would you rather have unlimited ice cream or unlimited cookies?",
        tags: ["hypothetical", "food", "preference", "all-ages"]
    },
    {
        id: "wyr194",
        text: "Would you rather eat something too cold or something too hot?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr195",
        text: "Would you rather eat at home always or eat out always?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr196",
        text: "Would you rather never season your food or always over-season it?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr197",
        text: "Would you rather have a food named after you or invent a new flavor?",
        tags: ["hypothetical", "food", "creative", "fun"]
    },
    {
        id: "wyr198",
        text: "Would you rather eat fruits only or vegetables only for a week?",
        tags: ["hypothetical", "food", "preference", "fun"]
    },
    {
        id: "wyr199",
        text: "Would you rather grow your own food or hunt/fish for it?",
        tags: ["hypothetical", "food", "nature", "preference"]
    },
    {
        id: "wyr200",
        text: "Would you rather have a pet dolphin or a pet eagle?",
        tags: ["hypothetical", "nature", "preference", "fun"]
    },
    {
        id: "wyr201",
        text: "Would you rather talk to dogs or talk to cats?",
        tags: ["hypothetical", "nature", "preference", "fun"]
    },
    {
        id: "wyr202",
        text: "Would you rather ride a giant turtle or a giant rabbit?",
        tags: ["hypothetical", "nature", "silly", "fun"]
    },
    {
        id: "wyr203",
        text: "Would you rather have a pet that can fly or a pet that can swim underwater forever?",
        tags: ["hypothetical", "nature", "creative", "fun"]
    },
    {
        id: "wyr204",
        text: "Would you rather be able to run like a cheetah or swim like a dolphin?",
        tags: ["hypothetical", "nature", "creative", "fun"]
    },
    {
        id: "wyr205",
        text: "Would you rather cuddle a panda or cuddle a koala?",
        tags: ["hypothetical", "nature", "preference", "heartwarming"]
    },
    {
        id: "wyr206",
        text: "Would you rather be followed by ducks or followed by kittens all day?",
        tags: ["hypothetical", "nature", "silly", "fun"]
    },
    {
        id: "wyr207",
        text: "Would you rather own a horse or own a parrot?",
        tags: ["hypothetical", "nature", "preference", "fun"]
    },
    {
        id: "wyr208",
        text: "Would you rather meet a friendly shark or a friendly bear?",
        tags: ["hypothetical", "nature", "adventurous", "fun"]
    },
    {
        id: "wyr209",
        text: "Would you rather protect endangered species or discover new species?",
        tags: ["hypothetical", "nature", "values"]
    },
    {
        id: "wyr210",
        text: "Would you rather have a tiny pet elephant or a giant pet hamster?",
        tags: ["hypothetical", "nature", "silly", "fun"]
    },
    {
        id: "wyr211",
        text: "Would you rather be able to mimic any animal sound or any musical instrument?",
        tags: ["hypothetical", "creative", "preference", "fun"]
    },
    {
        id: "wyr212",
        text: "Would you rather be able to tame wild animals or train domestic animals perfectly?",
        tags: ["hypothetical", "nature", "creative", "fun"]
    },
    {
        id: "wyr213",
        text: "Would you rather have a pet that never gets sick or a pet that never makes a mess?",
        tags: ["hypothetical", "nature", "preference", "fun"]
    },
    {
        id: "wyr214",
        text: "Would you rather ride a lion (friendly!) or a dragon (small and peaceful)?",
        tags: ["hypothetical", "creative", "adventurous", "fun"]
    },
    {
        id: "wyr215",
        text: "Would you rather swim with sea turtles or climb with mountain goats?",
        tags: ["hypothetical", "nature", "adventurous", "fun"]
    },
    {
        id: "wyr216",
        text: "Would you rather see extinct animals return or see endangered ones saved?",
        tags: ["hypothetical", "nature", "values", "deep"]
    },
    {
        id: "wyr217",
        text: "Would you rather have a pet that talks or a pet that does chores?",
        tags: ["hypothetical", "nature", "silly", "fun"]
    },
    {
        id: "wyr218",
        text: "Would you rather have bees make honey just for you or birds sing when you enter a room?",
        tags: ["hypothetical", "nature", "creative", "heartwarming"]
    },
    {
        id: "wyr219",
        text: "Would you rather volunteer at a zoo or volunteer at an animal rescue?",
        tags: ["hypothetical", "nature", "values", "heartwarming"]
    },
    {
        id: "wyr220",
        text: "Would you rather solve a mystery or solve a puzzle?",
        tags: ["hypothetical", "preference", "fun", "deep"]
    },
    {
        id: "wyr221",
        text: "Would you rather have an answer to every question or be able to ask perfect questions?",
        tags: ["hypothetical", "deep", "creative"]
    },
    {
        id: "wyr222",
        text: "Would you rather be unbeatable at chess or unbeatable at strategy games?",
        tags: ["hypothetical", "preference", "fun", "deep"]
    },
    {
        id: "wyr223",
        text: "Would you rather always win arguments or never get into arguments at all?",
        tags: ["hypothetical", "preference", "values", "deep"]
    },
    {
        id: "wyr224",
        text: "Would you rather have to make decisions instantly or take hours to decide everything?",
        tags: ["hypothetical", "preference", "fun", "deep"]
    },
    {
        id: "wyr225",
        text: "Would you rather know all trivia or know all practical skills?",
        tags: ["hypothetical", "preference", "fun", "deep"]
    },
    {
        id: "wyr226",
        text: "Would you rather solve a crime or prevent one?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr227",
        text: "Would you rather understand every math concept or every language concept?",
        tags: ["hypothetical", "school", "preference", "deep"]
    },
    {
        id: "wyr228",
        text: "Would you rather have perfect intuition or perfect logic?",
        tags: ["hypothetical", "deep", "preference"]
    },
    {
        id: "wyr229",
        text: "Would you rather remember everything or remember only what matters?",
        tags: ["hypothetical", "deep", "preference"]
    },
    {
        id: "wyr230",
        text: "Would you rather be able to estimate perfectly or measure perfectly?",
        tags: ["hypothetical", "preference", "fun", "deep"]
    },
    {
        id: "wyr231",
        text: "Would you rather always know if someone is lying or always know what they're feeling?",
        tags: ["hypothetical", "deep", "creative"]
    },
    {
        id: "wyr232",
        text: "Would you rather take on a challenge alone or with a team?",
        tags: ["hypothetical", "preference", "friends", "fun"]
    },
    {
        id: "wyr233",
        text: "Would you rather escape a maze or solve a riddle to earn your freedom?",
        tags: ["hypothetical", "creative", "fun", "adventurous"]
    },
    {
        id: "wyr234",
        text: "Would you rather complete a quest or complete a collection?",
        tags: ["hypothetical", "preference", "fun", "hobbies"]
    },
    {
        id: "wyr235",
        text: "Would you rather predict the weather or predict people's behavior?",
        tags: ["hypothetical", "creative", "fun", "deep"]
    },
    {
        id: "wyr236",
        text: "Would you rather have unlimited curiosity or unlimited patience?",
        tags: ["hypothetical", "deep", "preference", "values"]
    },
    {
        id: "wyr237",
        text: "Would you rather think faster or think deeper?",
        tags: ["hypothetical", "deep", "preference"]
    },
    {
        id: "wyr238",
        text: "Would you rather solve a world problem or solve a personal problem instantly?",
        tags: ["hypothetical", "deep", "values"]
    },
    {
        id: "wyr239",
        text: "Would you rather learn anything instantly or teach anything easily?",
        tags: ["hypothetical", "preference", "school", "values"]
    },
    {
        id: "wyr240",
        text: "Would you rather wake up early every day or stay up late every night?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr241",
        text: "Would you rather live somewhere always cold or always warm?",
        tags: ["hypothetical", "preference", "home", "fun"]
    },
    {
        id: "wyr242",
        text: "Would you rather read books or watch movies?",
        tags: ["hypothetical", "entertainment", "preference", "all-ages"]
    },
    {
        id: "wyr243",
        text: "Would you rather work out in the morning or the evening?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr244",
        text: "Would you rather dress formally or dress casually forever?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr245",
        text: "Would you rather live in a tiny home or a huge house with empty rooms?",
        tags: ["hypothetical", "home", "preference", "fun"]
    },
    {
        id: "wyr246",
        text: "Would you rather spend your day outdoors or indoors?",
        tags: ["hypothetical", "preference", "nature", "fun"]
    },
    {
        id: "wyr247",
        text: "Would you rather live without social media or without TV?",
        tags: ["hypothetical", "entertainment", "preference", "values"]
    },
    {
        id: "wyr248",
        text: "Would you rather decorate your home in bright colors or neutral tones?",
        tags: ["hypothetical", "home", "preference", "fun"]
    },
    {
        id: "wyr249",
        text: "Would you rather have a minimalist lifestyle or a cozy, cluttered one?",
        tags: ["hypothetical", "home", "preference", "fun"]
    },
    {
        id: "wyr250",
        text: "Would you rather sleep with no pillow or sleep with too many pillows?",
        tags: ["hypothetical", "preference", "silly", "fun"]
    },
    {
        id: "wyr251",
        text: "Would you rather use candles for lighting or fairy lights?",
        tags: ["hypothetical", "home", "preference", "heartwarming"]
    },
    {
        id: "wyr252",
        text: "Would you rather only buy handmade items or only buy mass-produced items?",
        tags: ["hypothetical", "preference", "values", "fun"]
    },
    {
        id: "wyr253",
        text: "Would you rather have an endless wardrobe or an endlessly clean house?",
        tags: ["hypothetical", "preference", "home", "fun"]
    },
    {
        id: "wyr254",
        text: "Would you rather spend money on experiences or on things?",
        tags: ["hypothetical", "values", "preference", "deep"]
    },
    {
        id: "wyr255",
        text: "Would you rather garden or bake?",
        tags: ["hypothetical", "hobbies", "preference", "fun"]
    },
    {
        id: "wyr256",
        text: "Would you rather live near water or near forests?",
        tags: ["hypothetical", "nature", "home", "preference"]
    },
    {
        id: "wyr257",
        text: "Would you rather do chores quickly or do them perfectly?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr258",
        text: "Would you rather have a home theater or a home library?",
        tags: ["hypothetical", "home", "entertainment", "preference"]
    },
    {
        id: "wyr259",
        text: "Would you rather live alone in peace or with roommates who are fun but messy?",
        tags: ["hypothetical", "home", "preference", "fun"]
    },
    {
        id: "wyr260",
        text: "Would you rather teleport objects or duplicate objects?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr261",
        text: "Would you rather always get free upgrades or always get free samples?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr262",
        text: "Would you rather see colors no one else can see or hear sounds no one else can hear?",
        tags: ["hypothetical", "creative", "deep", "fun"]
    },
    {
        id: "wyr263",
        text: "Would you rather discover buried treasure or hidden knowledge?",
        tags: ["hypothetical", "adventurous", "preference", "fun"]
    },
    {
        id: "wyr264",
        text: "Would you rather live 200 years in the past or 200 years in the future?",
        tags: ["hypothetical", "creative", "deep", "fun"]
    },
    {
        id: "wyr265",
        text: "Would you rather have a pause button for life or a rewind button?",
        tags: ["hypothetical", "creative", "deep", "fun"]
    },
    {
        id: "wyr266",
        text: "Would you rather always know where everything you lost is or never lose anything again?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr267",
        text: "Would you rather always say what you're thinking or never speak your mind again?",
        tags: ["hypothetical", "deep", "values"]
    },
    {
        id: "wyr268",
        text: "Would you rather live underwater or in the sky?",
        tags: ["hypothetical", "creative", "fun", "all-ages"]
    },
    {
        id: "wyr269",
        text: "Would you rather survive in a fantasy world or thrive in a sci-fi world?",
        tags: ["hypothetical", "entertainment", "creative", "fun"]
    },
    {
        id: "wyr270",
        text: "Would you rather swap lives with someone for a week or swap jobs with someone for a week?",
        tags: ["hypothetical", "creative", "fun", "career"]
    },
    {
        id: "wyr271",
        text: "Would you rather always feel lucky or always feel happy?",
        tags: ["hypothetical", "deep", "preference"]
    },
    {
        id: "wyr272",
        text: "Would you rather stretch your limbs like elastic or bounce like a trampoline?",
        tags: ["hypothetical", "silly", "creative", "fun"]
    },
    {
        id: "wyr273",
        text: "Would you rather live in a world with no noise or a world with no color?",
        tags: ["hypothetical", "deep", "creative"]
    },
    {
        id: "wyr274",
        text: "Would you rather control your dreams or remember every dream vividly?",
        tags: ["hypothetical", "creative", "preference", "fun"]
    },
    {
        id: "wyr275",
        text: "Would you rather time travel but only forward or only backward?",
        tags: ["hypothetical", "creative", "deep", "fun"]
    },
    {
        id: "wyr276",
        text: "Would you rather live in a world where everyone sings or everyone dances?",
        tags: ["hypothetical", "silly", "creative", "fun"]
    },
    {
        id: "wyr277",
        text: "Would you rather know every answer on a test or win a random lottery?",
        tags: ["hypothetical", "preference", "fun", "school"]
    },
    {
        id: "wyr278",
        text: "Would you rather be able to rewind conversations or listen to thoughts as music?",
        tags: ["hypothetical", "creative", "deep", "fun"]
    },
    {
        id: "wyr279",
        text: "Would you rather have a magic fridge that refills itself or a magic wallet that always has $10?",
        tags: ["hypothetical", "preference", "fun", "all-ages"]
    },
    {
        id: "wyr280",
        text: "Would you rather know a difficult truth or believe a comforting lie?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr281",
        text: "Would you rather always take responsibility or always be forgiven?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr282",
        text: "Would you rather be feared or respected?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr283",
        text: "Would you rather sacrifice time or money to help someone?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr284",
        text: "Would you rather save one person you know or many people you don't?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr285",
        text: "Would you rather have others depend on you or depend on others?",
        tags: ["hypothetical", "values", "deep", "reflection"]
    },
    {
        id: "wyr286",
        text: "Would you rather be honest and hurt feelings or stay quiet and avoid hurt?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr287",
        text: "Would you rather lose something valuable or break a promise?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr288",
        text: "Would you rather forgive easily or forget easily?",
        tags: ["hypothetical", "values", "deep", "reflection"]
    },
    {
        id: "wyr289",
        text: "Would you rather help others anonymously or be known for helping?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr290",
        text: "Would you rather be seen as too trusting or too skeptical?",
        tags: ["hypothetical", "values", "identity", "deep"]
    },
    {
        id: "wyr291",
        text: "Would you rather do the right thing and be doubted or do nothing and be praised?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr292",
        text: "Would you rather give second chances or not risk being hurt again?",
        tags: ["hypothetical", "values", "deep", "reflection"]
    },
    {
        id: "wyr293",
        text: "Would you rather learn from mistakes or never make mistakes?",
        tags: ["hypothetical", "values", "deep", "reflection"]
    },
    {
        id: "wyr294",
        text: "Would you rather be responsible for a team or be part of one?",
        tags: ["hypothetical", "career", "preference", "deep"]
    },
    {
        id: "wyr295",
        text: "Would you rather guide someone younger or learn from someone older?",
        tags: ["hypothetical", "values", "family", "reflection"]
    },
    {
        id: "wyr296",
        text: "Would you rather choose fairness or loyalty?",
        tags: ["hypothetical", "values", "deep"]
    },
    {
        id: "wyr297",
        text: "Would you rather lose an argument or lose a friend?",
        tags: ["hypothetical", "values", "friends", "deep"]
    },
    {
        id: "wyr298",
        text: "Would you rather speak up against injustice or stay safe by staying quiet?",
        tags: ["hypothetical", "values", "deep", "deep"]
    },
    {
        id: "wyr299",
        text: "Would you rather be remembered as kind or as brave?",
        tags: ["hypothetical", "aspiration", "values", "deep"]
    },
    {
        id: "08d422",
        text: "If you could instantly become an expert in anything, what would it be?",
        tags: ["hypothetical"]
    },
    {
        id: "c517bc",
        text: "What’s your go-to comfort TV show or movie?",
        tags: ["entertainment"]
    },
    {
        id: "2aa30c",
        text: "What food could you eat every day and never get tired of?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "40f25d",
        text: "What’s the most interesting thing you’ve read or watched lately?",
        tags: ["hobbies"]
    },
    {
        id: "20e263",
        text: "If you had a time machine but could only travel once, where would you go?",
        tags: ["travel", "hypothetical"]
    },
    {
        id: "c22d38",
        text: "What’s a silly hill you’re willing to die on?",
        tags: ["silly"]
    },
    {
        id: "b084d0",
        text: "What absolutely iconic snack do you miss from childhood?",
        tags: ["memories", "food"]
    },
    {
        id: "ad8756",
        text: "If animals could talk, which species would be the sassiest?",
        tags: ["nature"]
    },
    {
        id: "85af5f",
        text: "What’s the weirdest compliment you’ve ever received?",
        tags: ["silly"]
    },
    {
        id: "72e04a",
        text: "What’s the best place you’ve ever visited?",
        tags: ["travel", "preference"]
    },
    {
        id: "b7972a",
        text: "Do you prefer trips that are relaxing or adventurous?",
        tags: ["travel", "preference"]
    },
    {
        id: "77579f",
        text: "What’s an underrated city people should visit?",
        tags: ["travel"]
    },
    {
        id: "7b49bf",
        text: "What’s the most memorable meal you’ve had while traveling?",
        tags: ["food", "travel"]
    },
    {
        id: "cbd361",
        text: "Mountains, beaches, or cities—what’s your ideal vacation vibe?",
        tags: ["nature", "travel"]
    },
    {
        id: "6b3439",
        text: "What destination is currently at the top of your bucket list?",
        tags: ["travel", "aspiration"]
    },
    {
        id: "9082b0",
        text: "What’s one place you’ve been that you’d love to return to?",
        tags: ["heartwarming", "fun"]
    },
    {
        id: "7cc77a",
        text: "Have you ever traveled somewhere that completely surprised you?",
        tags: ["travel", "experience"]
    },
    {
        id: "19021f",
        text: "What’s your most “travel-fail” story?",
        tags: ["travel"]
    },
    {
        id: "b3dd7d",
        text: "If you could live abroad for a year, where would you pick?",
        tags: ["travel", "hypothetical"]
    },
    {
        id: "6b854b",
        text: "What song do you currently have on repeat?",
        tags: ["food", "entertainment"]
    },
    {
        id: "61b6e3",
        text: "Which artist or band would you love to see live?",
        tags: ["heartwarming", "fun", "entertainment"]
    },
    {
        id: "7ad7f5",
        text: "What book has stayed with you long after finishing it?",
        tags: ["entertainment"]
    },
    {
        id: "3fdfec",
        text: "What’s a movie you think everyone should watch at least once?",
        tags: ["opinion", "entertainment"]
    },
    {
        id: "f3c18b",
        text: "If you could have dinner with any fictional character, who would it be?",
        tags: ["food", "identity", "hypothetical"]
    },
    {
        id: "f6c98a",
        text: "What’s the last great podcast episode you listened to?",
        tags: ["food", "entertainment"]
    },
    {
        id: "1dd772",
        text: "What’s your favorite creative outlet?",
        tags: ["food", "preference", "fun"]
    },
    {
        id: "fddae3",
        text: "Are you currently obsessed with any show?",
        tags: ["entertainment"]
    },
    {
        id: "cb58c7",
        text: "What movie quote do you use way too often?",
        tags: ["entertainment"]
    },
    {
        id: "f9a074",
        text: "What’s a niche hobby or fandom you secretly (or not so secretly) love?",
        tags: ["heartwarming", "hobbies", "fun"]
    },
    {
        id: "1d468c",
        text: "What’s the best piece of career advice you’ve ever received?",
        tags: ["heartwarming", "preference", "career"]
    },
    {
        id: "20633b",
        text: "What’s one skill you think everyone should learn?",
        tags: ["reflection", "school", "opinion"]
    },
    {
        id: "ac0d6b",
        text: "What part of your job do you enjoy the most?",
        tags: ["career", "fun"]
    },
    {
        id: "d1af9c",
        text: "What tech tool could you not live without?",
        tags: ["hypothetical"]
    },
    {
        id: "0678db",
        text: "What’s a small daily habit that makes you more productive?",
        tags: ["fun", "preference"]
    },
    {
        id: "5c9a1b",
        text: "What’s something in your industry people often misunderstand?",
        tags: ["fun", "preference"]
    },
    {
        id: "7dc2c5",
        text: "What’s the most memorable project you’ve worked on?",
        tags: ["career"]
    },
    {
        id: "086f87",
        text: "Who has been an influential mentor in your life?",
        tags: ["deep"]
    },
    {
        id: "9ecaee",
        text: "What’s your favorite way to decompress after a busy day?",
        tags: ["preference", "fun"]
    },
    {
        id: "5d4db4",
        text: "If you could redesign meetings, what would you change?",
        tags: ["reflection", "creative", "career", "hypothetical"]
    },
    {
        id: "f9c3fa",
        text: "What’s something people are always surprised to learn about you?",
        tags: ["reflection", "school"]
    },
    {
        id: "0d137c",
        text: "What’s your love language—friendship edition?",
        tags: ["heartwarming", "fun", "friends"]
    },
    {
        id: "464644",
        text: "What’s a tradition you grew up with that you cherish?",
        tags: ["memories", "holidays"]
    },
    {
        id: "34d367",
        text: "What’s the best compliment someone could give you?",
        tags: ["preference"]
    },
    {
        id: "23a929",
        text: "What instantly makes you feel comfortable around someone?",
        tags: ["fun", "preference"]
    },
    {
        id: "d98b20",
        text: "What’s a simple thing that makes your day every time?",
        tags: ["fun", "preference"]
    },
    {
        id: "9b1eb4",
        text: "What’s something you’re currently working on improving about yourself?",
        tags: ["identity", "career"]
    },
    {
        id: "dfee8a",
        text: "What’s the nicest thing someone has done for you recently?",
        tags: ["fun", "preference"]
    },
    {
        id: "36d3e4",
        text: "What’s something that always makes you laugh?",
        tags: ["silly"]
    },
    {
        id: "b17928",
        text: "What’s a belief you’ve changed your mind about recently?",
        tags: ["reflection"]
    },
    {
        id: "9f0e17",
        text: "What’s the best decision you ever made?",
        tags: ["preference"]
    },
    {
        id: "f97e9d",
        text: "What’s something you wish everyone understood about you?",
        tags: ["fun", "preference"]
    },
    {
        id: "2a0180",
        text: "What’s a lesson you learned the hard way?",
        tags: ["reflection", "school"]
    },
    {
        id: "8db56a",
        text: "What’s a dream you’ve let go of—and a dream you still chase?",
        tags: ["aspiration"]
    },
    {
        id: "4b2a1e",
        text: "What single event has shaped you the most?",
        tags: ["reflection"]
    },
    {
        id: "6ec637",
        text: "What’s an unpopular opinion you actually stand by?",
        tags: ["preference"]
    },
    {
        id: "a8d9ed",
        text: "What’s something you’re grateful for today?",
        tags: ["heartwarming"]
    },
    {
        id: "8b0e33",
        text: "What’s a philosophy or quote that guides you?",
        tags: ["deep"]
    },
    {
        id: "f6e03a",
        text: "If our team were a sitcom, who would play you?",
        tags: ["sports"]
    },
    {
        id: "df04f4",
        text: "What’s the most unusual job you’ve ever had?",
        tags: ["career"]
    },
    {
        id: "dd806f",
        text: "What’s a talent you have that most people don’t know about?",
        tags: ["fun", "preference"]
    },
    {
        id: "9fa90e",
        text: "How would you describe your personality in three words?",
        tags: ["identity", "creative"]
    },
    {
        id: "2dc592",
        text: "What’s your favorite way to celebrate wins?",
        tags: ["sports", "preference", "fun"]
    },
    {
        id: "cbbb1d",
        text: "What’s your go-to karaoke song?",
        tags: ["entertainment"]
    },
    {
        id: "d87075",
        text: "Coffee, tea, or something else entirely?",
        tags: ["fun", "deep"]
    },
    {
        id: "ad0867",
        text: "Are you an early bird, night owl, or permanently exhausted pigeon?",
        tags: ["fun", "deep"]
    },
    {
        id: "f9dbf2",
        text: "What’s one tool or app you recommend to everyone?",
        tags: ["fun", "preference"]
    },
    {
        id: "93e9d1",
        text: "If you were a fruit, which one would you be and why?",
        tags: ["hypothetical"]
    },
    {
        id: "b25811",
        text: "What random fact do you love sharing?",
        tags: ["heartwarming", "fun"]
    },
    {
        id: "94d847",
        text: "What’s your most irrational fear?",
        tags: ["fun", "preference"]
    },
    {
        id: "c0558d",
        text: "If you could delete one everyday inconvenience forever, what would it be?",
        tags: ["hypothetical"]
    },
    {
        id: "3e8871",
        text: "What’s the dumbest argument you’ve ever had?",
        tags: ["silly", "preference"]
    },
    {
        id: "bba8b3",
        text: "What’s the most bizarre thing you believed as a kid?",
        tags: ["deep", "memories", "opinion", "silly"]
    },
    {
        id: "989d8f",
        text: "If your life had a narrator, who would it be?",
        tags: ["deep", "hypothetical"]
    },
    {
        id: "c3d171",
        text: "What would be your entrance theme song?",
        tags: ["entertainment"]
    },
    {
        id: "34c2fc",
        text: "What’s the funniest Wi-Fi network name you’ve seen?",
        tags: ["creative", "career", "fun"]
    },
    {
        id: "55bb90",
        text: "What’s a household chore you dramatically hate?",
        tags: ["home"]
    },
    {
        id: "f25f7d",
        text: "What’s something you’re looking forward to this week?",
        tags: ["fun", "preference"]
    },
    {
        id: "de9785",
        text: "What was the highlight of your day?",
        tags: ["fun", "preference"]
    },
    {
        id: "9300c5",
        text: "What’s a hobby you’ve always wanted to try?",
        tags: ["hobbies"]
    },
    {
        id: "bbabeb",
        text: "What’s your favorite season and why?",
        tags: ["preference", "fun"]
    },
    {
        id: "be25a8",
        text: "Do you prefer staying in or going out on weekends?",
        tags: ["preference"]
    },
    {
        id: "315590",
        text: "What’s the best meal you’ve had this month?",
        tags: ["food", "preference"]
    },
    {
        id: "e2f82b",
        text: "What’s your current phone wallpaper and why?",
        tags: ["fun", "preference"]
    },
    {
        id: "d6ce0e",
        text: "What’s one small thing that improves your life?",
        tags: ["deep"]
    },
    {
        id: "79c5d3",
        text: "What smell instantly brings back memories?",
        tags: ["fun", "preference"]
    },
    {
        id: "b582d5",
        text: "What’s a product you’ve bought recently that you love?",
        tags: ["heartwarming", "fun"]
    },
    {
        id: "39a6b7",
        text: "If you woke up with a superpower tomorrow, what would you want it to be?",
        tags: ["hypothetical"]
    },
    {
        id: "3dec61",
        text: "If you could relive one day of your life, which would you pick?",
        tags: ["deep", "hypothetical"]
    },
    {
        id: "354b73",
        text: "If you had to move to another planet, which friend are you bringing and why?",
        tags: ["friends", "hypothetical"]
    },
    {
        id: "e88136",
        text: "If you could master any language instantly, which one would you choose?",
        tags: ["hypothetical"]
    },
    {
        id: "7000d5",
        text: "If you were an inventor, what problem would you solve first?",
        tags: ["creative", "hypothetical"]
    },
    {
        id: "6c1cfb",
        text: "If you had a personal mascot, what would it be?",
        tags: ["hypothetical"]
    },
    {
        id: "fd6f14",
        text: "If you could teleport anywhere for lunch right now, where would you go?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "c8ff11",
        text: "If you were famous, what would you be famous for?",
        tags: ["hypothetical"]
    },
    {
        id: "303545",
        text: "If you had to describe your life as a movie genre, what would it be?",
        tags: ["creative", "deep", "hypothetical", "entertainment"]
    },
    {
        id: "f66ce3",
        text: "What’s one thing on your desk that makes you happy?",
        tags: ["fun"]
    },
    {
        id: "216e9f",
        text: "What’s your current work-from-home beverage of choice?",
        tags: ["career", "home"]
    },
    {
        id: "e5c810",
        text: "What’s the weather like where you are?",
        tags: ["food", "nature"]
    },
    {
        id: "e579f4",
        text: "What’s a small win you had recently?",
        tags: ["sports"]
    },
    {
        id: "2a01ef",
        text: "What emoji best describes your mood today?",
        tags: ["preference", "creative"]
    },
    {
        id: "429f54",
        text: "What’s your go-to morning ritual?",
        tags: ["fun", "preference"]
    },
    {
        id: "7bf3b9",
        text: "What’s something you learned recently that surprised you?",
        tags: ["reflection", "school"]
    },
    {
        id: "5c026d",
        text: "What’s your favorite type of break during the workday?",
        tags: ["preference", "career", "fun"]
    },
    {
        id: "ba2344",
        text: "What’s one non-work thing you’re excited about right now?",
        tags: ["career", "fun"]
    },
    {
        id: "ed348d",
        text: "What’s your ideal remote-work setup?",
        tags: ["career"]
    },
    {
        id: "9a3461",
        text: "What’s one WFH tip that made your life easier?",
        tags: ["deep"]
    },
    {
        id: "1eb296",
        text: "What background noise do you work best with—silence, music, or something else?",
        tags: ["preference", "career", "entertainment"]
    },
    {
        id: "2d2aa0",
        text: "Do you prefer video on or off for meetings?",
        tags: ["preference", "career"]
    },
    {
        id: "058f4f",
        text: "What’s your favorite comfy work-from-home outfit?",
        tags: ["preference", "fun", "career", "home"]
    },
    {
        id: "8ee8b5",
        text: "What’s the most unique item in your workspace?",
        tags: ["career"]
    },
    {
        id: "6c1447",
        text: "What’s your biggest remote-work pet peeve?",
        tags: ["career"]
    },
    {
        id: "84f2c0",
        text: "What’s your favorite productivity tool?",
        tags: ["preference", "fun"]
    },
    {
        id: "f9cf27",
        text: "What’s one thing you’d add to your workspace if money were no object?",
        tags: ["career"]
    },
    {
        id: "5922a8",
        text: "What time of day are you most productive?",
        tags: ["fun", "preference"]
    },
    {
        id: "e0598a",
        text: "What’s your favorite snack during the workday?",
        tags: ["food", "preference", "career", "fun"]
    },
    {
        id: "643953",
        text: "Are you a coffee person, tea person, or neither?",
        tags: ["fun", "deep"]
    },
    {
        id: "8b540b",
        text: "What music do you like to work to?",
        tags: ["career", "entertainment"]
    },
    {
        id: "f4a0d0",
        text: "What’s your favorite weekend activity?",
        tags: ["preference", "fun"]
    },
    {
        id: "86d9dd",
        text: "What’s something you’re currently enjoying—show, book, hobby?",
        tags: ["hobbies", "fun", "entertainment"]
    },
    {
        id: "d0ccc7",
        text: "What’s your favorite holiday?",
        tags: ["preference", "fun", "holidays"]
    },
    {
        id: "0eec9d",
        text: "What’s your most-used phone app?",
        tags: ["fun", "preference"]
    },
    {
        id: "ce655d",
        text: "What’s your favorite comfort food?",
        tags: ["food", "preference", "fun"]
    },
    {
        id: "194902",
        text: "What’s your ideal way to spend a Friday night?",
        tags: ["fun", "preference"]
    },
    {
        id: "3ca463",
        text: "What’s something unique about where you live?",
        tags: ["fun", "preference"]
    },
    {
        id: "e8456d",
        text: "What’s a great local restaurant you’d recommend?",
        tags: ["food"]
    },
    {
        id: "dfa08d",
        text: "What’s the best thing about your city?",
        tags: ["travel", "preference"]
    },
    {
        id: "5e60e5",
        text: "What’s an underrated spot in your area?",
        tags: ["fun", "preference"]
    },
    {
        id: "82c9e7",
        text: "What’s a local tradition you enjoy?",
        tags: ["fun", "holidays"]
    },
    {
        id: "ea3bdf",
        text: "What’s the most beautiful place near you?",
        tags: ["fun", "preference"]
    },
    {
        id: "a3f236",
        text: "What’s a fun fact about your region?",
        tags: ["fun"]
    },
    {
        id: "d530e9",
        text: "What’s one place in your city everyone should visit?",
        tags: ["travel"]
    },
    {
        id: "087ae8",
        text: "What’s something your area is famous for?",
        tags: ["fun", "preference"]
    },
    {
        id: "3c67d1",
        text: "What’s a nearby destination you love escaping to?",
        tags: ["travel", "fun", "heartwarming"]
    },
    {
        id: "7c1cfe",
        text: "What fictional workplace would you want to join?",
        tags: ["career", "aspiration"]
    },
    {
        id: "7ec87e",
        text: "If you were a cereal, which one would you be?",
        tags: ["hypothetical"]
    },
    {
        id: "850d15",
        text: "What’s a weird food combination you actually love?",
        tags: ["food", "silly", "fun", "heartwarming"]
    },
    {
        id: "9a1442",
        text: "What’s the most useless talent you have?",
        tags: ["silly"]
    },
    {
        id: "50d198",
        text: "If you were in a video game, what power-up would you provide?",
        tags: ["sports", "hypothetical", "entertainment"]
    },
    {
        id: "c3585e",
        text: "What’s the funniest Zoom mishap you’ve experienced (or witnessed)?",
        tags: ["experience", "fun"]
    },
    {
        id: "73b3ad",
        text: "What’s your go-to meme or GIF reaction?",
        tags: ["fun", "preference"]
    },
    {
        id: "849bf7",
        text: "If you had to choose a mascot for your personality, what would it be?",
        tags: ["identity", "hypothetical"]
    },
    {
        id: "82d0f7",
        text: "What’s the silliest thing you believed as a kid?",
        tags: ["deep", "memories", "opinion"]
    },
    {
        id: "daa7b9",
        text: "What’s the best Wi-Fi network name you’ve seen?",
        tags: ["preference", "creative", "career"]
    },
    {
        id: "9f24f7",
        text: "What hobby would you pick up if you had unlimited time?",
        tags: ["hobbies", "hypothetical"]
    },
    {
        id: "6a9ed0",
        text: "What’s a skill you’re currently learning or want to learn?",
        tags: ["reflection", "school", "aspiration"]
    },
    {
        id: "a11cb8",
        text: "What’s your all-time favorite game (video, board, card, etc.)?",
        tags: ["sports", "preference", "fun", "entertainment"]
    },
    {
        id: "14d654",
        text: "What’s one hobby you tried and realized wasn’t for you?",
        tags: ["reflection", "hobbies"]
    },
    {
        id: "7fca0f",
        text: "What’s a hobby you could talk about for hours?",
        tags: ["hobbies"]
    },
    {
        id: "b83d63",
        text: "What’s your favorite way to relax after work?",
        tags: ["preference", "career", "fun"]
    },
    {
        id: "818052",
        text: "What’s something creative you enjoy doing?",
        tags: ["food", "fun"]
    },
    {
        id: "061ecb",
        text: "What show or movie have you watched most recently?",
        tags: ["entertainment"]
    },
    {
        id: "49e777",
        text: "What genre of music is your go-to lately?",
        tags: ["entertainment"]
    },
    {
        id: "228841",
        text: "What’s your favorite book or the best you’ve read recently?",
        tags: ["preference", "fun", "entertainment"]
    },
    {
        id: "cd1d64",
        text: "What’s one thing you appreciate about your work style?",
        tags: ["heartwarming", "career"]
    },
    {
        id: "308a72",
        text: "What’s something people would be surprised to learn about you?",
        tags: ["reflection", "school"]
    },
    {
        id: "b84628",
        text: "What’s a value you care deeply about at work?",
        tags: ["deep", "heartwarming", "career"]
    },
    {
        id: "6f28d2",
        text: "What’s the best advice you’ve ever received?",
        tags: ["preference"]
    },
    {
        id: "2fe511",
        text: "What’s a productivity hack that actually works for you?",
        tags: ["career"]
    },
    {
        id: "0ae86c",
        text: "What’s one thing your past self would be proud of today?",
        tags: ["memories", "identity"]
    },
    {
        id: "8211ce",
        text: "What’s something that motivates you?",
        tags: ["fun", "preference"]
    },
    {
        id: "e6f066",
        text: "What’s a small thing that always improves your mood?",
        tags: ["fun", "preference"]
    },
    {
        id: "a92117",
        text: "What’s a recent moment that made you feel proud?",
        tags: ["family"]
    },
    {
        id: "0c65dd",
        text: "What’s a lesson you learned the hard way (but are glad you did)?",
        tags: ["reflection", "school"]
    },
    {
        id: "860c71",
        text: "If your life had a theme song, what would it be?",
        tags: ["deep", "hypothetical", "entertainment"]
    },
    {
        id: "9697c8",
        text: "If you could relocate anywhere for a month, where would you go?",
        tags: ["hypothetical"]
    },
    {
        id: "b6ac94",
        text: "If you had a personal assistant for one task, what would you assign them?",
        tags: ["hypothetical"]
    },
    {
        id: "a011bd",
        text: "If we could teleport the team somewhere for a retreat, where are we going?",
        tags: ["sports", "food"]
    },
    {
        id: "9b4cea",
        text: "If you could redesign Slack emojis, what would you add?",
        tags: ["creative", "hypothetical"]
    },
    {
        id: "8dbacf",
        text: "If your workspace had a magical feature, what would it do?",
        tags: ["food", "career", "hypothetical"]
    },
    {
        id: "ac4f3f",
        text: "If you could speak any language fluently tomorrow, which would you pick?",
        tags: ["hypothetical"]
    },
    {
        id: "8aa3e6",
        text: "If you could have one superpower only for work, what would it be?",
        tags: ["career", "hypothetical"]
    },
    {
        id: "561faf",
        text: "If you could star in any movie, which one would you choose?",
        tags: ["hypothetical", "entertainment"]
    },
    {
        id: "242094",
        text: "What’s one thing you appreciate about this team?",
        tags: ["sports", "heartwarming"]
    },
    {
        id: "e74477",
        text: "What’s a quality you admire in teammates?",
        tags: ["sports", "friends"]
    },
    {
        id: "f468fe",
        text: "What’s one thing that helps you feel included remotely?",
        tags: ["fun", "preference"]
    },
    {
        id: "12c65b",
        text: "What’s the best team experience you’ve had?",
        tags: ["sports", "preference", "experience"]
    },
    {
        id: "a4637d",
        text: "What type of praise or recognition feels most meaningful to you?",
        tags: ["deep"]
    },
    {
        id: "ce1350",
        text: "What’s one habit that makes collaboration easier?",
        tags: ["fun", "preference"]
    },
    {
        id: "d326e1",
        text: "What’s something a teammate has done recently that impressed you?",
        tags: ["sports", "friends"]
    },
    {
        id: "8a5e56",
        text: "What’s your favorite way teams build trust remotely?",
        tags: ["sports", "preference", "fun", "values"]
    },
    {
        id: "bc26c3",
        text: "What’s a meeting format you actually enjoy?",
        tags: ["career", "fun"]
    },
    {
        id: "727f20",
        text: "What’s one thing you’d love every team to do more often?",
        tags: ["sports", "heartwarming", "fun"]
    },
    {
        id: "4338b9",
        text: "Cats or dogs?",
        tags: ["fun", "deep"]
    },
    {
        id: "c8d0b1",
        text: "Sweet or salty snacks?",
        tags: ["food"]
    },
    {
        id: "a13da6",
        text: "Coffee, tea, or water?",
        tags: ["fun", "deep"]
    },
    {
        id: "82bf89",
        text: "Introvert, extrovert, or somewhere in the middle?",
        tags: ["fun", "preference"]
    },
    {
        id: "65a32c",
        text: "Plan everything or wing it?",
        tags: ["sports"]
    },
    {
        id: "f9a289",
        text: "Texting or talking?",
        tags: ["fun", "deep"]
    },
    {
        id: "e62063",
        text: "Winter, spring, summer, or fall?",
        tags: ["sports"]
    },
    {
        id: "91c328",
        text: "Would you rather always speak in rhyme or only be able to whisper?",
        tags: ["hypothetical"]
    },
    {
        id: "5c48d5",
        text: "Would you rather be able to talk to animals or speak every language?",
        tags: ["nature", "hypothetical"]
    },
    {
        id: "8b5e43",
        text: "Would you rather have unlimited snacks or unlimited vacation days?",
        tags: ["food", "travel", "hypothetical"]
    },
    {
        id: "b2e709",
        text: "Would you rather teleport anywhere or be able to fly (slowly)?",
        tags: ["hypothetical"]
    },
    {
        id: "debf23",
        text: "Would you rather have to sing everything or dance everywhere?",
        tags: ["hypothetical"]
    },
    {
        id: "ab15e5",
        text: "Would you rather have a personal theme song or laugh track follow you?",
        tags: ["silly", "hypothetical", "entertainment"]
    },
    {
        id: "d1c654",
        text: "Would you rather live in a treehouse or a floating bubble house?",
        tags: ["hypothetical", "home"]
    },
    {
        id: "a6d963",
        text: "If your pet (or imaginary pet) could text you right now, what would it say?",
        tags: ["hypothetical"]
    },
    {
        id: "830bc6",
        text: "If you had a magical button that did one silly thing, what would it do?",
        tags: ["silly", "hypothetical"]
    },
    {
        id: "78c1d2",
        text: "If you had a mascot that followed you everywhere, what would it be?",
        tags: ["hypothetical"]
    },
    {
        id: "58fd89",
        text: "If you were a breakfast food, which one would you be?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "ae9017",
        text: "If your personality were a weather pattern, what would it be?",
        tags: ["food", "identity", "hypothetical", "nature"]
    },
    {
        id: "f2c547",
        text: "If your office chair could talk, what would it complain about?",
        tags: ["career", "hypothetical"]
    },
    {
        id: "b005d2",
        text: "If you could rename Monday, what would you call it?",
        tags: ["creative", "hypothetical"]
    },
    {
        id: "90970d",
        text: "If you had to choose a superpower that is useless but fun, what would it be?",
        tags: ["silly", "fun", "hypothetical"]
    },
    {
        id: "a55166",
        text: "If your life had a narrator, who would you cast?",
        tags: ["deep", "hypothetical"]
    },
    {
        id: "fb8b9e",
        text: "What snack do you eat that others think is weird?",
        tags: ["food", "opinion", "silly"]
    },
    {
        id: "190f64",
        text: "What food would you ban forever if you had the power?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "2b9740",
        text: "What’s a food you loved as a kid but refuse to eat now?",
        tags: ["memories", "food", "heartwarming", "fun"]
    },
    {
        id: "95ee17",
        text: "What’s your strongest food opinion?",
        tags: ["food", "preference"]
    },
    {
        id: "e3853a",
        text: "What’s your go-to “desk lunch”?",
        tags: ["food"]
    },
    {
        id: "e56d1e",
        text: "If you could have any meal appear in front of you right now, what would it be?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "904896",
        text: "What’s a food hill you’d die on?",
        tags: ["food"]
    },
    {
        id: "46dd77",
        text: "What’s a dish you wish you could master?",
        tags: ["food"]
    },
    {
        id: "d156ea",
        text: "What’s the most elite chip flavor?",
        tags: ["food"]
    },
    {
        id: "2e2e56",
        text: "Pineapple on pizza: yes or no?",
        tags: ["food"]
    },
    {
        id: "c86db1",
        text: "What was your favorite cartoon growing up?",
        tags: ["sports", "preference", "reflection", "fun"]
    },
    {
        id: "4a9bc5",
        text: "What toy did you absolutely wear out as a kid?",
        tags: ["memories", "experience"]
    },
    {
        id: "f1cc5e",
        text: "What was your favorite after-school snack?",
        tags: ["food", "school", "preference", "fun"]
    },
    {
        id: "a343a4",
        text: "What fictional character scared you as a child?",
        tags: ["heartwarming", "identity"]
    },
    {
        id: "2a4a22",
        text: "What childhood trend are you glad is gone?",
        tags: ["memories"]
    },
    {
        id: "1b9ec8",
        text: "What school lunch item do you miss?",
        tags: ["food", "school"]
    },
    {
        id: "981d5a",
        text: "What was your favorite video game growing up?",
        tags: ["reflection", "fun", "sports", "preference", "entertainment"]
    },
    {
        id: "43e0c3",
        text: "Did you have a favorite book series as a kid?",
        tags: ["fun", "preference", "memories", "experience", "entertainment"]
    },
    {
        id: "cf71ae",
        text: "What was your first big “kid fail” moment you still laugh about?",
        tags: ["family", "memories", "silly"]
    },
    {
        id: "91614a",
        text: "Which outdated tech do you secretly miss?",
        tags: ["fun", "preference"]
    },
    {
        id: "65828a",
        text: "What’s the most random thing you’ve bought online?",
        tags: ["fun", "preference"]
    },
    {
        id: "08caa9",
        text: "What’s the weirdest app notification you’ve ever gotten?",
        tags: ["silly"]
    },
    {
        id: "3b909b",
        text: "What’s your completely unnecessary but beloved daily ritual?",
        tags: ["heartwarming", "fun"]
    },
    {
        id: "f9c28d",
        text: "What smell makes you instantly happy?",
        tags: ["fun"]
    },
    {
        id: "f65a20",
        text: "What’s your favorite ridiculous holiday (e.g., Talk Like a Pirate Day)?",
        tags: ["silly", "preference", "fun", "holidays"]
    },
    {
        id: "ba46a7",
        text: "What’s a trend you swore you’d never join but eventually did?",
        tags: ["fun", "preference"]
    },
    {
        id: "6e0ccf",
        text: "What’s your most unpopular opinion about extremely popular things?",
        tags: ["preference"]
    },
    {
        id: "8e3838",
        text: "Do you have a favorite “lazy person hack”?",
        tags: ["preference", "fun"]
    },
    {
        id: "c85528",
        text: "What’s the funniest nickname you’ve ever been given?",
        tags: ["creative", "fun"]
    },
    {
        id: "c341df",
        text: "What’s your most impulsive but great decision?",
        tags: ["food"]
    },
    {
        id: "cb59ed",
        text: "What would your warning label say?",
        tags: ["fun", "preference"]
    },
    {
        id: "e4839b",
        text: "If you were a household appliance, which would you be?",
        tags: ["hypothetical", "home"]
    },
    {
        id: "d626a1",
        text: "What’s the most useless fact you know?",
        tags: ["silly"]
    },
    {
        id: "332094",
        text: "If your life were a video game, what would the loading screen tip say?",
        tags: ["sports", "deep", "hypothetical", "entertainment"]
    },
    {
        id: "6d92db",
        text: "What’s your go-to “pretend you’re busy” move on camera?",
        tags: ["fun", "preference"]
    },
    {
        id: "82ad08",
        text: "What animal do you think you could probably outrun?",
        tags: ["nature", "opinion"]
    },
    {
        id: "43c0ea",
        text: "What’s your signature dance move?",
        tags: ["nature"]
    },
    {
        id: "c11255",
        text: "If you had a personal jingle, what would it sound like?",
        tags: ["hypothetical"]
    },
    {
        id: "f76fbe",
        text: "What’s your secret irrational fear?",
        tags: ["fun", "preference"]
    },
    {
        id: "ef7249",
        text: "What silly thing instantly makes you laugh?",
        tags: ["silly"]
    },
    {
        id: "efa621",
        text: "What movie quote lives in your head rent-free?",
        tags: ["entertainment"]
    },
    {
        id: "6d271d",
        text: "What TV show would you happily reboot?",
        tags: ["entertainment"]
    },
    {
        id: "63d1d7",
        text: "Who is your favorite “chaotic energy” character of all time?",
        tags: ["silly", "preference", "fun", "identity"]
    },
    {
        id: "92714e",
        text: "What movie would you erase from your memory just to experience again?",
        tags: ["memories", "experience", "entertainment"]
    },
    {
        id: "120a21",
        text: "What fictional duo best matches you and your best friend?",
        tags: ["preference", "friends"]
    },
    {
        id: "6e77f6",
        text: "If you could cameo in any TV show, which would it be?",
        tags: ["hypothetical", "entertainment"]
    },
    {
        id: "19323f",
        text: "What’s a theme song you would adopt as your own?",
        tags: ["entertainment"]
    },
    {
        id: "7fcb72",
        text: "Who would play you in a sitcom about your life?",
        tags: ["sports", "deep"]
    },
    {
        id: "964081",
        text: "What movie should get a sequel but never did?",
        tags: ["entertainment"]
    },
    {
        id: "862da6",
        text: "What movie ending would you rewrite?",
        tags: ["creative", "entertainment"]
    },
    {
        id: "639958",
        text: "What’s the strangest thing you’ve ever eaten?",
        tags: ["food", "silly"]
    },
    {
        id: "cd2323",
        text: "What’s something that should be simple, but never is?",
        tags: ["fun", "preference"]
    },
    {
        id: "8cb8b8",
        text: "What’s an item you lose constantly?",
        tags: ["fun", "preference"]
    },
    {
        id: "2e9063",
        text: "What’s the weirdest thing that’s ever happened on a video call?",
        tags: ["silly"]
    },
    {
        id: "087c58",
        text: "What conspiracy theory do you absolutely not believe but love to discuss?",
        tags: ["deep", "opinion", "fun", "heartwarming"]
    },
    {
        id: "34aad0",
        text: "What celebrity would you want to narrate your dreams?",
        tags: ["aspiration"]
    },
    {
        id: "0d254b",
        text: "What imaginary creature would improve life if it existed?",
        tags: ["deep", "food"]
    },
    {
        id: "0c0f4b",
        text: "What’s your most dramatic reaction to a minor inconvenience?",
        tags: ["fun", "preference"]
    },
    {
        id: "3b93e8",
        text: "What’s a word you consistently mispronounce?",
        tags: ["fun", "preference"]
    },
    {
        id: "d6dd39",
        text: "What is the dumbest argument you’ve ever been part of?",
        tags: ["silly", "preference"]
    },
    {
        id: "dcf044",
        text: "If your day had a slogan, what would it be?",
        tags: ["hypothetical"]
    },
    {
        id: "d85ea1",
        text: "Invent a new ice cream flavor—what’s in it?",
        tags: ["food", "creative"]
    },
    {
        id: "5452f3",
        text: "What’s the name of your alter ego?",
        tags: ["creative"]
    },
    {
        id: "b7d07a",
        text: "If you had to create a holiday, what would it celebrate?",
        tags: ["creative", "food", "hypothetical", "holidays"]
    },
    {
        id: "8332a1",
        text: "What everyday item should be redesigned?",
        tags: ["creative"]
    },
    {
        id: "3b0929",
        text: "What fictional gadget do you wish was real?",
        tags: ["fun", "preference"]
    },
    {
        id: "bdf8d5",
        text: "Create a new emoji—what does it look like?",
        tags: ["food", "creative"]
    },
    {
        id: "2ef803",
        text: "If your Wi-Fi had a personality, what would it be?",
        tags: ["identity", "hypothetical"]
    },
    {
        id: "2bc2cc",
        text: "What household chore is absolutely the worst?",
        tags: ["silly", "preference", "home"]
    },
    {
        id: "54e377",
        text: "What movie is super overrated?",
        tags: ["entertainment"]
    },
    {
        id: "82e345",
        text: "What snack is underrated?",
        tags: ["food"]
    },
    {
        id: "e4816b",
        text: "What’s the superior breakfast food?",
        tags: ["food"]
    },
    {
        id: "cdea4c",
        text: "What trend needs to make a comeback?",
        tags: ["fun", "preference"]
    },
    {
        id: "43d65d",
        text: "What trend needs to stop immediately?",
        tags: ["fun", "preference"]
    },
    {
        id: "ffa057",
        text: "What song is catchy but drives you nuts?",
        tags: ["entertainment"]
    },
    {
        id: "f93c7e",
        text: "What’s the worst seat on an airplane?",
        tags: ["food", "silly", "preference"]
    },
    {
        id: "a7e806",
        text: "What’s a lie we all believed for way too long?",
        tags: ["deep", "opinion"]
    },
    {
        id: "392eba",
        text: "What everyday thing do you think is secretly a scam?",
        tags: ["opinion"]
    },
    {
        id: "0890fd",
        text: "What’s the most unnecessary thing you’re oddly good at?",
        tags: ["fun", "preference"]
    },
    {
        id: "d17095",
        text: "If you had a warning label, what would it say?",
        tags: ["hypothetical"]
    },
    {
        id: "7eeaa5",
        text: "What’s the strangest thing you believed as a kid?",
        tags: ["deep", "memories", "opinion", "silly"]
    },
    {
        id: "6ae5e8",
        text: "What’s your go-to move when your camera freezes on Zoom?",
        tags: ["fun", "preference"]
    },
    {
        id: "ab599d",
        text: "What’s a food you’d fight someone over (lovingly, of course)?",
        tags: ["food"]
    },
    {
        id: "10efaf",
        text: "If your life were a sitcom, what would the laugh track sound like?",
        tags: ["deep", "silly", "hypothetical"]
    },
    {
        id: "ba18c1",
        text: "What’s your most chaotic cooking story?",
        tags: ["food", "silly"]
    },
    {
        id: "be7beb",
        text: "What’s the most hilarious autocorrect fail you’ve had?",
        tags: ["silly"]
    },
    {
        id: "65b029",
        text: "What’s something silly that you refuse to apologize for?",
        tags: ["silly"]
    },
    {
        id: "62be41",
        text: "Which animal would be the absolute worst at customer service?",
        tags: ["nature", "silly", "preference"]
    },
    {
        id: "cdf65d",
        text: "Which animal do you think is secretly judging us the most?",
        tags: ["nature", "opinion"]
    },
    {
        id: "0602ad",
        text: "If you had a pet dragon, what would you name it?",
        tags: ["creative", "hypothetical"]
    },
    {
        id: "73e4d0",
        text: "What animal would you want as your tiny pocket-sized companion?",
        tags: ["nature"]
    },
    {
        id: "c750cb",
        text: "What’s the most “dog” thing you’ve done recently?",
        tags: ["fun", "preference"]
    },
    {
        id: "a33207",
        text: "What animal describes your morning energy level?",
        tags: ["nature", "creative"]
    },
    {
        id: "ddb29d",
        text: "Which animal would make the funniest roommate?",
        tags: ["nature", "fun", "home"]
    },
    {
        id: "484596",
        text: "If you could train a squirrel to do one useful job, what would it be?",
        tags: ["career", "hypothetical"]
    },
    {
        id: "4ffbfd",
        text: "Which animal would replace you on a day where you can’t even?",
        tags: ["nature"]
    },
    {
        id: "86bb31",
        text: "Which animal looks like it knows all your secrets?",
        tags: ["nature"]
    },
    {
        id: "8175d6",
        text: "What’s the most chaotic pizza topping combination you’ve tried?",
        tags: ["food", "silly"]
    },
    {
        id: "f4f031",
        text: "What food do you irrationally love more than you should?",
        tags: ["food", "heartwarming", "fun"]
    },
    {
        id: "0a9708",
        text: "What snack would absolutely betray you in a crisis?",
        tags: ["food"]
    },
    {
        id: "9760dd",
        text: "What’s the most “this is fine” meal you’ve eaten lately?",
        tags: ["food"]
    },
    {
        id: "1a30af",
        text: "What food do you always misjudge the temperature of?",
        tags: ["food"]
    },
    {
        id: "8c07d0",
        text: "If your personality were a sauce, what would it be?",
        tags: ["identity", "hypothetical"]
    },
    {
        id: "81b20b",
        text: "What condiment can you simply not trust?",
        tags: ["values"]
    },
    {
        id: "1e9b17",
        text: "Which food would you haunt people with if you were a ghost?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "da249b",
        text: "What’s your most controversial snack opinion?",
        tags: ["food", "preference"]
    },
    {
        id: "b5d0a9",
        text: "What food makes you question your life decisions?",
        tags: ["deep", "food"]
    },
    {
        id: "2f8588",
        text: "What’s your “I’m busy” face on Zoom?",
        tags: ["fun", "preference"]
    },
    {
        id: "1a224f",
        text: "What’s the most dramatic thing you’ve done before 9am?",
        tags: ["fun", "preference"]
    },
    {
        id: "01ec38",
        text: "What’s your corporate superpower?",
        tags: ["fun", "preference"]
    },
    {
        id: "93b7b3",
        text: "What’s the funniest thing your brain has said during a meeting?",
        tags: ["career", "fun"]
    },
    {
        id: "84a4d9",
        text: "What office supply would you choose as a weapon in an apocalypse?",
        tags: ["career"]
    },
    {
        id: "52fbdb",
        text: "What productivity hack works zero percent of the time?",
        tags: ["career"]
    },
    {
        id: "bde1e9",
        text: "What meeting could’ve been a viral TikTok instead?",
        tags: ["career"]
    },
    {
        id: "66b0b8",
        text: "What email sign-off should be illegal?",
        tags: ["fun", "preference"]
    },
    {
        id: "bd101f",
        text: "What’s your “I’m totally fine” red flag at work?",
        tags: ["career"]
    },
    {
        id: "b24b51",
        text: "If your elbows bent the other way, what would be harder to do?",
        tags: ["hypothetical"]
    },
    {
        id: "939870",
        text: "If you had to wear a fruit as a hat, which one would be most stylish?",
        tags: ["hypothetical"]
    },
    {
        id: "8d6c50",
        text: "If you became a meme, what would it be called?",
        tags: ["hypothetical"]
    },
    {
        id: "c20f2f",
        text: "If you could only speak in movie quotes for a day, how would you greet people?",
        tags: ["hypothetical", "entertainment"]
    },
    {
        id: "c79aaa",
        text: "If you could replace your hands with kitchen tools, what would you pick?",
        tags: ["hypothetical"]
    },
    {
        id: "ca93a6",
        text: "If your life had a blooper reel, what would be the opening scene?",
        tags: ["deep", "hypothetical"]
    },
    {
        id: "b87341",
        text: "If you had to smell like one thing forever, what scent would you NOT choose?",
        tags: ["hypothetical"]
    },
    {
        id: "b51e3b",
        text: "If gravity stopped working for 10 seconds, what’s the first thing you’d do?",
        tags: ["career"]
    },
    {
        id: "c15b63",
        text: "If you had a magical button that did something useless, what would it do?",
        tags: ["silly", "hypothetical"]
    },
    {
        id: "c34e7d",
        text: "If you could eliminate one everyday annoyance, what would it be?",
        tags: ["hypothetical"]
    },
    {
        id: "177426",
        text: "What’s your go-to awkward smile?",
        tags: ["fun", "preference"]
    },
    {
        id: "8cbbf6",
        text: "What’s the weirdest greeting you’ve accidentally used?",
        tags: ["silly"]
    },
    {
        id: "1b7428",
        text: "What’s your most impressive but deeply unhelpful talent?",
        tags: ["fun", "preference"]
    },
    {
        id: "f800f7",
        text: "What’s a compliment you received that confused you?",
        tags: ["fun", "preference"]
    },
    {
        id: "117e6f",
        text: "What’s your best “pretend you didn’t trip” recovery?",
        tags: ["travel", "preference"]
    },
    {
        id: "8064b5",
        text: "What’s your most iconic fashion mistake?",
        tags: ["fun", "preference"]
    },
    {
        id: "8073b6",
        text: "What’s your most embarrassing autocorrect moment?",
        tags: ["family"]
    },
    {
        id: "5e28ff",
        text: "What’s a phrase you tried to use to sound cool but failed?",
        tags: ["fun", "preference"]
    },
    {
        id: "5e7dc5",
        text: "What’s your “panic small talk” line?",
        tags: ["fun", "preference"]
    },
    {
        id: "21bd3b",
        text: "Why do we press harder on the remote when it doesn’t work?",
        tags: ["career"]
    },
    {
        id: "ab031a",
        text: "Why is yawning contagious?",
        tags: ["fun", "deep"]
    },
    {
        id: "e2ec2d",
        text: "Why do things disappear and reappear only after you’ve given up?",
        tags: ["fun", "deep"]
    },
    {
        id: "c391ed",
        text: "Why do socks go missing and where do they go?",
        tags: ["fun", "preference"]
    },
    {
        id: "e722c7",
        text: "Why can we remember song lyrics but not why we walked into a room?",
        tags: ["memories", "home", "entertainment"]
    },
    {
        id: "0b78a7",
        text: "Why does food taste better when someone else makes it?",
        tags: ["food"]
    },
    {
        id: "13e843",
        text: "Why do dogs tilt their heads like they’re judging our life choices?",
        tags: ["deep"]
    },
    {
        id: "bcdd2b",
        text: "Why is the last 10% of loading always the slowest?",
        tags: ["fun", "deep"]
    },
    {
        id: "266ac6",
        text: "Why does every group have one person who always freezes on Zoom?",
        tags: ["friends"]
    },
    {
        id: "14edc9",
        text: "Why do cravings hit hardest at the most inconvenient times?",
        tags: ["fun", "deep"]
    },
    {
        id: "5ba122",
        text: "Invent a new holiday—what ridiculous thing does it celebrate?",
        tags: ["silly", "creative", "holidays"]
    },
    {
        id: "81c384",
        text: "What’s the smallest petty revenge you’ve ever taken?",
        tags: ["fun", "preference"]
    },
    {
        id: "a7e446",
        text: "What’s a hill you’d die on that absolutely does not matter?",
        tags: ["deep", "opinion"]
    },
    {
        id: "5bea1a",
        text: "What’s the silliest thing you’ve ever panic-bought?",
        tags: ["fun", "preference"]
    },
    {
        id: "b32b3d",
        text: "What’s your pettiest dealbreaker?",
        tags: ["fun", "preference"]
    },
    {
        id: "2abe60",
        text: "What small thing immediately sparks chaos in your brain?",
        tags: ["fun", "preference"]
    },
    {
        id: "646754",
        text: "What smell instantly triggers your fight-or-flight response?",
        tags: ["travel"]
    },
    {
        id: "fa974f",
        text: "What ordinary task do you overcomplicate for no reason?",
        tags: ["fun", "preference"]
    },
    {
        id: "e87b17",
        text: "What’s your funniest grocery store moment?",
        tags: ["family", "fun"]
    },
    {
        id: "3ee37a",
        text: "What’s something you’ve dramatically overreacted to?",
        tags: ["fun", "preference"]
    },
    {
        id: "1531ff",
        text: "What’s the funniest lie you believed for way too long?",
        tags: ["deep", "opinion", "fun"]
    },
    {
        id: "63cf31",
        text: "What’s a word you always say wrong, no matter how hard you try?",
        tags: ["deep", "opinion"]
    },
    {
        id: "2c96c3",
        text: "What movie villain actually had a good point?",
        tags: ["entertainment"]
    },
    {
        id: "eb89a8",
        text: "What’s the funniest thing your brain has convinced you to worry about?",
        tags: ["fun"]
    },
    {
        id: "1c34c1",
        text: "What fictional character do you accidentally act like?",
        tags: ["identity"]
    },
    {
        id: "5d0e31",
        text: "What’s your most chaotic “oops” moment in the kitchen?",
        tags: ["family", "silly"]
    },
    {
        id: "6c3d70",
        text: "What fashion trend should never come back?",
        tags: ["fun", "preference"]
    },
    {
        id: "397ab7",
        text: "What fashion trend absolutely should come back?",
        tags: ["fun", "preference"]
    },
    {
        id: "6129bc",
        text: "What animal do you relate to on an emotional level?",
        tags: ["nature"]
    },
    {
        id: "2c41d5",
        text: "What’s the weirdest compliment you’ve ever given someone?",
        tags: ["silly"]
    },
    {
        id: "12c84c",
        text: "What is your best “I give up” meal?",
        tags: ["food", "preference"]
    },
    {
        id: "d329ea",
        text: "What’s the most pointless thing you’ve memorized?",
        tags: ["fun", "preference"]
    },
    {
        id: "5ff2ba",
        text: "What’s your most irrational pet peeve?",
        tags: ["fun", "preference"]
    },
    {
        id: "4f0c5b",
        text: "What’s a hobby you’d be banned from the Olympics for attempting?",
        tags: ["hobbies"]
    },
    {
        id: "f41775",
        text: "What’s the weirdest thing you’ve done half-asleep?",
        tags: ["silly"]
    },
    {
        id: "10a3ce",
        text: "What’s your funniest “I misunderstood the assignment” moment?",
        tags: ["family", "fun"]
    },
    {
        id: "792abd",
        text: "What’s something you’re convinced you do better than 97% of the population for no reason?",
        tags: ["fun", "preference"]
    },
    {
        id: "19f89f",
        text: "What’s the dumbest injury you’ve ever gotten?",
        tags: ["silly", "preference"]
    },
    {
        id: "0f7bde",
        text: "What’s a sound that instantly makes you laugh?",
        tags: ["silly"]
    },
    {
        id: "3292b9",
        text: "What everyday object has personally wronged you the most?",
        tags: ["fun", "preference"]
    },
    {
        id: "547a19",
        text: "If you woke up as a household appliance, which one would you be?",
        tags: ["hypothetical", "home"]
    },
    {
        id: "3baa97",
        text: "If you had to pick one noise to play every time you blinked, what would it be?",
        tags: ["sports", "hypothetical"]
    },
    {
        id: "bf8bef",
        text: "If you were a ghost, what weirdly specific thing would you haunt?",
        tags: ["silly", "hypothetical"]
    },
    {
        id: "bc8b03",
        text: "If you had a narrator like in a nature documentary, how would they describe your Monday mornings?",
        tags: ["nature", "creative", "hypothetical"]
    },
    {
        id: "3f3828",
        text: "If you had to replace your hands with random objects, what would you choose?",
        tags: ["hypothetical"]
    },
    {
        id: "0370ff",
        text: "If your life had a loading screen, what tip would it show?",
        tags: ["deep", "hypothetical", "entertainment"]
    },
    {
        id: "9bfb83",
        text: "If you could instantly summon any item, but only things under $5, what would you choose?",
        tags: ["hypothetical"]
    },
    {
        id: "cded72",
        text: "If you could add one completely useless feature to your body, what would it be?",
        tags: ["food", "silly", "hypothetical"]
    },
    {
        id: "bc9ab0",
        text: "If your voice changed to match your mood, which mood would be funniest?",
        tags: ["reflection", "fun", "hypothetical"]
    },
    {
        id: "4d6ee5",
        text: "If you could rename Earth to something silly, what would it be?",
        tags: ["silly", "creative", "hypothetical"]
    },
    {
        id: "60b851",
        text: "Which animal would make the worst coworker?",
        tags: ["nature", "silly", "preference", "career"]
    },
    {
        id: "2e79f2",
        text: "Which animal seems like it gossips the most?",
        tags: ["nature"]
    },
    {
        id: "0b6aad",
        text: "What animal would be unstoppable if it had thumbs?",
        tags: ["nature"]
    },
    {
        id: "22e6e3",
        text: "Which animal would you most trust with your secrets?",
        tags: ["nature", "values"]
    },
    {
        id: "fc116b",
        text: "Which animal looks like it’s late for a meeting?",
        tags: ["nature", "career"]
    },
    {
        id: "1bc348",
        text: "Which animal would be the best stand-up comedian?",
        tags: ["nature", "preference"]
    },
    {
        id: "65cb21",
        text: "If you had to train a raccoon to do one task for you, what would it be?",
        tags: ["hypothetical"]
    },
    {
        id: "48208e",
        text: "Which animal do you think hates mornings the most?",
        tags: ["nature", "opinion"]
    },
    {
        id: "80b72b",
        text: "Which animal would make the funniest CEO?",
        tags: ["nature", "fun"]
    },
    {
        id: "bd88aa",
        text: "Which animal would be the worst Uber driver?",
        tags: ["nature", "silly", "preference"]
    },
    {
        id: "111805",
        text: "What’s the rudest food?",
        tags: ["food"]
    },
    {
        id: "4c7cdf",
        text: "What food do you always drop on yourself?",
        tags: ["food", "identity"]
    },
    {
        id: "ba9856",
        text: "What food always betrays you by being way too hot?",
        tags: ["food"]
    },
    {
        id: "653c99",
        text: "What snack is elite, no questions asked?",
        tags: ["food"]
    },
    {
        id: "1db101",
        text: "What food could cure all sadness if delivered instantly?",
        tags: ["food"]
    },
    {
        id: "146947",
        text: "What’s a food combo you love that others would arrest you for?",
        tags: ["food", "heartwarming", "fun"]
    },
    {
        id: "604370",
        text: "What’s the most dramatic food to spill?",
        tags: ["food"]
    },
    {
        id: "b0d4f2",
        text: "What’s the most “I give up” meal you’ve ever prepared?",
        tags: ["food"]
    },
    {
        id: "e65522",
        text: "What food should come with a user manual?",
        tags: ["food"]
    },
    {
        id: "2879e4",
        text: "What condiment has the most chaotic energy?",
        tags: ["silly"]
    },
    {
        id: "7c255c",
        text: "What’s your most “I’m totally paying attention” Zoom face?",
        tags: ["fun", "preference"]
    },
    {
        id: "a94137",
        text: "What’s your most polite way of saying “I have no idea what you’re talking about”?",
        tags: ["fun", "preference"]
    },
    {
        id: "80f906",
        text: "What’s the most chaotic email you’ve ever accidentally sent?",
        tags: ["silly"]
    },
    {
        id: "696058",
        text: "What’s the funniest meeting comment you’ve heard?",
        tags: ["career", "fun"]
    },
    {
        id: "8934a4",
        text: "If meetings had theme music, what would yours be?",
        tags: ["career", "entertainment"]
    },
    {
        id: "f16a35",
        text: "What’s your go-to “corporate survival skill”?",
        tags: ["fun", "preference"]
    },
    {
        id: "068265",
        text: "What office supply would you pick as your sidekick in a heist?",
        tags: ["career"]
    },
    {
        id: "7435e4",
        text: "What’s the most dramatic thing you’ve done to avoid work for 30 seconds?",
        tags: ["career"]
    },
    {
        id: "370975",
        text: "What’s your “meeting bingo” free space?",
        tags: ["career"]
    },
    {
        id: "83b99d",
        text: "What’s your favorite phrase that means absolutely nothing but sounds professional?",
        tags: ["preference", "career", "fun"]
    },
    {
        id: "aea911",
        text: "What’s your go-to “nervous laugh”?",
        tags: ["silly"]
    },
    {
        id: "fb93d3",
        text: "What’s the most awkward small-talk topic you’ve accidentally chosen?",
        tags: ["fun", "preference"]
    },
    {
        id: "39862d",
        text: "What’s an embarrassing thing you learned way too late?",
        tags: ["reflection", "school"]
    },
    {
        id: "7db69c",
        text: "What word do you always mispronounce, no matter what?",
        tags: ["deep", "opinion"]
    },
    {
        id: "66fb67",
        text: "What’s your funniest moment pretending to understand something?",
        tags: ["family", "fun"]
    },
    {
        id: "127598",
        text: "What fashion trend have you personally committed crimes against?",
        tags: ["fun", "preference"]
    },
    {
        id: "746c4a",
        text: "What’s the most unnecessary apology you’ve ever given?",
        tags: ["fun", "preference"]
    },
    {
        id: "1421a3",
        text: "What’s your go-to move when someone waves and you think it’s for you?",
        tags: ["opinion"]
    },
    {
        id: "5574cf",
        text: "What’s your most iconic “trying to play it cool” fail?",
        tags: ["sports"]
    },
    {
        id: "8947d0",
        text: "What would be the tagline of the movie about your morning?",
        tags: ["entertainment"]
    },
    {
        id: "e73341",
        text: "What’s the name of the world’s worst theme park ride?",
        tags: ["silly", "preference", "creative"]
    },
    {
        id: "fc03f5",
        text: "What object should be given a dramatic backstory?",
        tags: ["fun", "preference"]
    },
    {
        id: "ec1ccf",
        text: "What tiny inconvenience deserves jail time?",
        tags: ["fun", "preference"]
    },
    {
        id: "ddc9d4",
        text: "What everyday object is secretly plotting against you?",
        tags: ["fun", "preference"]
    },
    {
        id: "227d6f",
        text: "What small thing do you always lose but swear you just had?",
        tags: ["fun", "preference"]
    },
    {
        id: "5a03ea",
        text: "What’s the most dramatic way you’ve reacted to a bug?",
        tags: ["fun", "preference"]
    },
    {
        id: "a6171f",
        text: "What’s the most “this is fine” thing you do regularly?",
        tags: ["fun", "preference"]
    },
    {
        id: "5585dc",
        text: "What’s the most unnecessary thing you’ve overexplained?",
        tags: ["fun", "preference"]
    },
    {
        id: "22dddf",
        text: "What’s your funniest grocery store fail?",
        tags: ["fun"]
    },
    {
        id: "09a380",
        text: "What’s a rule you constantly break even though you know better?",
        tags: ["fun", "preference"]
    },
    {
        id: "3d6cd3",
        text: "What’s a smell that instantly triggers fight-or-flight?",
        tags: ["travel"]
    },
    {
        id: "eb737a",
        text: "What mildly infuriating moment ruined your entire day?",
        tags: ["family"]
    },
    {
        id: "6b51e4",
        text: "What’s the most inconvenient superpower you can think of?",
        tags: ["opinion"]
    },
    {
        id: "5a1d57",
        text: "What’s a superpower you’d only use for petty reasons?",
        tags: ["fun", "preference"]
    },
    {
        id: "63f182",
        text: "What superpower would dramatically improve your laziness?",
        tags: ["fun", "preference"]
    },
    {
        id: "04da80",
        text: "What superpower would your coworkers say you already have (good or bad)?",
        tags: ["career"]
    },
    {
        id: "6fbc14",
        text: "What superpower would be great in theory but annoying in practice?",
        tags: ["food"]
    },
    {
        id: "4ecdac",
        text: "If you could have a superpower only during meetings, what would it be?",
        tags: ["career", "hypothetical"]
    },
    {
        id: "2a62b6",
        text: "If you had a superpower that only worked once a year, what would you choose?",
        tags: ["career", "hypothetical"]
    },
    {
        id: "c91166",
        text: "If your superpower were based on your mood, what would it do?",
        tags: ["hypothetical"]
    },
    {
        id: "bc49a7",
        text: "If you could give someone a useless superpower, what would it be?",
        tags: ["silly", "hypothetical"]
    },
    {
        id: "8c1c3a",
        text: "If your pet got a superpower, what chaos would follow?",
        tags: ["hypothetical"]
    },
    {
        id: "58e92b",
        text: "What’s your go-to “I’m done with today” phrase?",
        tags: ["fun", "preference"]
    },
    {
        id: "a2c596",
        text: "What’s your funniest “auto-pilot brain” moment?",
        tags: ["family", "fun"]
    },
    {
        id: "73671c",
        text: "What’s something you tried once that you will never attempt again?",
        tags: ["fun", "preference"]
    },
    {
        id: "ed7b81",
        text: "What simple task makes you feel like a genius?",
        tags: ["fun", "preference"]
    },
    {
        id: "0cf430",
        text: "What simple task makes you feel defeated?",
        tags: ["food"]
    },
    {
        id: "73ca80",
        text: "What’s the funniest lie you believed as a kid?",
        tags: ["deep", "memories", "opinion", "fun"]
    },
    {
        id: "589a3d",
        text: "What song completely changes your mood when it comes on?",
        tags: ["reflection", "entertainment"]
    },
    {
        id: "39c418",
        text: "What’s a phrase you swear you invented?",
        tags: ["creative"]
    },
    {
        id: "0de33c",
        text: "What’s something you’re embarrassed you’re this passionate about?",
        tags: ["hobbies"]
    },
    {
        id: "2c0144",
        text: "What’s your most unhinged but harmless opinion?",
        tags: ["preference"]
    },
    {
        id: "152eee",
        text: "If your shadow suddenly started acting independently, what would it do first?",
        tags: ["values", "hypothetical"]
    },
    {
        id: "5d10f3",
        text: "If you woke up with elbows that bent the wrong way, what’s the first thing you’d try?",
        tags: ["hypothetical"]
    },
    {
        id: "4637a5",
        text: "If gravity worked sideways for one hour a day, how would your morning routine change?",
        tags: ["reflection", "career"]
    },
    {
        id: "e6757e",
        text: "If you had a personal cloud that followed you, what weather would it make?",
        tags: ["food", "hypothetical", "nature"]
    },
    {
        id: "244d38",
        text: "If your reflection winked at you, what would you do?",
        tags: ["sports", "reflection", "hypothetical"]
    },
    {
        id: "6071de",
        text: "If you were a door in a cartoon, what sound effect would you make?",
        tags: ["hypothetical"]
    },
    {
        id: "694c8e",
        text: "If socks were sentient, what would yours complain about?",
        tags: ["fun", "preference"]
    },
    {
        id: "fe2a1a",
        text: "If you could only walk in slow motion or fast-forward, which would you choose?",
        tags: ["hypothetical"]
    },
    {
        id: "cd9fd4",
        text: "If your hair changed color based on your thoughts, what color would you try to avoid?",
        tags: ["reflection", "hypothetical"]
    },
    {
        id: "616901",
        text: "If your index finger shot confetti every time you snapped, how chaotic would your life be?",
        tags: ["deep", "silly", "hypothetical"]
    },
    {
        id: "e63d17",
        text: "If gravity reversed randomly for 3 seconds a day, what would you hold onto?",
        tags: ["fun", "preference"]
    },
    {
        id: "300984",
        text: "If you had to replace your eyebrows with any object, what would you choose?",
        tags: ["hypothetical"]
    },
    {
        id: "903558",
        text: "If you had to ride a giant animal to work, which one would you pick?",
        tags: ["nature", "career", "hypothetical"]
    },
    {
        id: "329fbf",
        text: "If you could speak any language except human, which species would you talk to first?",
        tags: ["hypothetical"]
    },
    {
        id: "dfd62b",
        text: "If you had to smell like a specific food forever, which one would be least terrible?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "567441",
        text: "If your voice narrated your life like a documentary, which celebrity would narrate the worst moments?",
        tags: ["silly", "hypothetical", "family", "preference", "deep"]
    },
    {
        id: "9a9b8b",
        text: "If you had a button that summoned a llama, how often would you press it?",
        tags: ["hypothetical"]
    },
    {
        id: "aa1eba",
        text: "If you could teleport but only to places you’ve complained about, where would you go most?",
        tags: ["hypothetical"]
    },
    {
        id: "230d25",
        text: "If everything you touched turned into Jell-O for 5 minutes, how would you cope?",
        tags: ["heartwarming"]
    },
    {
        id: "e644d1",
        text: "If you could shoot one condiment from your fingertip, which one and why?",
        tags: ["hypothetical"]
    },
    {
        id: "ee8b8b",
        text: "If chairs disappeared every time someone said your name, where would you sit?",
        tags: ["creative"]
    },
    {
        id: "6a51bc",
        text: "If you could only communicate through interpretive dance for a day, how would you ask for coffee?",
        tags: ["hypothetical"]
    },
    {
        id: "440363",
        text: "If you swapped lives with your houseplants, what would be your first complaint?",
        tags: ["nature", "hypothetical", "home"]
    },
    {
        id: "112550",
        text: "If you could only travel by hopping, what would your commute look like?",
        tags: ["travel", "hypothetical"]
    },
    {
        id: "33df9f",
        text: "If you lived in a video game, which bug would you be known for?",
        tags: ["sports", "hypothetical", "entertainment"]
    },
    {
        id: "00afb0",
        text: "If you could hear animals’ inner thoughts for 24 hours, whose would be the most chaotic?",
        tags: ["nature", "silly", "hypothetical"]
    },
    {
        id: "4d4a5e",
        text: "If you had to name your life story after a kitchen utensil, which one?",
        tags: ["deep", "creative", "hypothetical"]
    },
    {
        id: "9662a1",
        text: "If you could ask your future self one ridiculous question, what would it be?",
        tags: ["identity", "silly", "aspiration", "hypothetical"]
    },
    {
        id: "d434eb",
        text: "If you turned into a balloon animal whenever stressed, what shape would you become most?",
        tags: ["nature", "hypothetical"]
    },
    {
        id: "a4985a",
        text: "If your laugh summoned a random object, what would you hope it spits out?",
        tags: ["silly", "aspiration", "hypothetical"]
    },
    {
        id: "10a900",
        text: "If every sneeze teleported you 3 feet, how would that affect meetings?",
        tags: ["career"]
    },
    {
        id: "c4a523",
        text: "If bananas had personalities, which fruit would be the biggest drama queen?",
        tags: ["fun", "preference"]
    },
    {
        id: "48e5d6",
        text: "If you had a tail, what kind would you want and why?",
        tags: ["heartwarming", "hypothetical"]
    },
    {
        id: "72b986",
        text: "If you could swap sounds—like footsteps sounding like applause—what would you switch?",
        tags: ["hypothetical"]
    },
    {
        id: "f75578",
        text: "If you had to wear a vegetable as a hat daily, which one?",
        tags: ["hypothetical"]
    },
    {
        id: "e5a303",
        text: "If your phone could talk, what gossip would it reveal about you?",
        tags: ["hypothetical"]
    },
    {
        id: "7496b5",
        text: "If pillows were inflatable and occasionally popped, what’s your backup strategy?",
        tags: ["fun", "preference"]
    },
    {
        id: "76a622",
        text: "If oceans suddenly turned into sparkling water, what would be the biggest inconvenience?",
        tags: ["nature"]
    },
    {
        id: "50633d",
        text: "If clouds were made of cotton candy, how would society collapse?",
        tags: ["fun", "preference"]
    },
    {
        id: "f8b008",
        text: "If your pets were actually undercover spies, which one would blow their cover first?",
        tags: ["hypothetical"]
    },
    {
        id: "90b94e",
        text: "If every time you blinked, a random object moved an inch, how long until chaos?",
        tags: ["fun", "preference"]
    },
    {
        id: "e69902",
        text: "If your footsteps left glowing footprints for 24 hours, where would you NOT go?",
        tags: ["sports", "hypothetical"]
    },
    {
        id: "7287a2",
        text: "If you had to replace handshakes with another greeting, what absurd gesture would you choose?",
        tags: ["silly", "hypothetical"]
    },
    {
        id: "f113f9",
        text: "If your thoughts played out loud like a radio, what station name would it be?",
        tags: ["sports", "creative", "hypothetical"]
    },
    {
        id: "7b14bd",
        text: "If your hair grew one inch every time someone said “okay,” how long would it be by Friday?",
        tags: ["hypothetical"]
    },
    {
        id: "15f120",
        text: "If you could instantly learn any skill but forget your name, would you do it?",
        tags: ["reflection", "school", "creative", "hypothetical"]
    },
    {
        id: "3e3972",
        text: "If emotions came with cartoon sound effects, which emotion would be funniest?",
        tags: ["fun"]
    },
    {
        id: "e3d4b9",
        text: "If all birds suddenly learned to politely knock on windows, what would you do?",
        tags: ["sports", "school", "reflection"]
    },
    {
        id: "fb1df7",
        text: "If your bed could drive like a car, where would you take it?",
        tags: ["hypothetical"]
    },
    {
        id: "c1c021",
        text: "If your keyboard rearranged itself daily, how long before you scream?",
        tags: ["identity", "hypothetical"]
    },
    {
        id: "0615df",
        text: "If you became 1% more inflatable every year, what would you look like at 80?",
        tags: ["hypothetical"]
    },
    {
        id: "e78022",
        text: "If squirrels were six feet tall, how would humanity adapt?",
        tags: ["fun", "preference"]
    },
    {
        id: "eaeae8",
        text: "If your fridge randomly switched your leftovers’ flavors, how betrayed would you feel?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "749684",
        text: "If you could shoot glitter from your feet, when would you use it?",
        tags: ["hypothetical"]
    },
    {
        id: "53be5a",
        text: "If every outfit looked formal except pajamas, how would society shift?",
        tags: ["fun", "preference"]
    },
    {
        id: "82ed4c",
        text: "If alarm clocks sometimes screamed compliments instead of beeping, how would you wake up?",
        tags: ["fun", "preference"]
    },
    {
        id: "1c54ae",
        text: "If your coffee cup refilled itself unpredictably all day, blessing or curse?",
        tags: ["identity", "hypothetical"]
    },
    {
        id: "43c5cd",
        text: "If plants could walk slowly at night, what would worry you most?",
        tags: ["nature"]
    },
    {
        id: "3d3add",
        text: "If maps were drawn wrong but in fun ways, what chaos would ensue?",
        tags: ["fun"]
    },
    {
        id: "69ddaf",
        text: "If shoes had personalities, which pair of yours hates you most?",
        tags: ["fun", "preference"]
    },
    {
        id: "0567c8",
        text: "If every time you yawned, someone else nearby rapped a line, how weird would life get?",
        tags: ["deep", "silly"]
    },
    {
        id: "03c1e4",
        text: "If your phone only unlocked after telling a joke, how often would you be locked out?",
        tags: ["hypothetical"]
    },
    {
        id: "9c726e",
        text: "If you had a clone for 24 hours but it was mildly rebellious, what would it ruin?",
        tags: ["hypothetical"]
    },
    {
        id: "f6ef0a",
        text: "If you could command pigeons, what would your first order be?",
        tags: ["hypothetical"]
    },
    {
        id: "e4bf85",
        text: "If bubbles were currency, what would inflation look like?",
        tags: ["fun", "preference"]
    },
    {
        id: "9163de",
        text: "If elevators roasted you before taking you to your floor, what insult would yours use?",
        tags: ["fun", "preference"]
    },
    {
        id: "8ce68e",
        text: "If trees whispered opinions, what would they say about your lawn care?",
        tags: ["heartwarming", "preference"]
    },
    {
        id: "443d3e",
        text: "If you could breathe underwater but only in bathtubs, useful or not?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "a72fb5",
        text: "If socks randomly teleported off your feet once a week, how would you plan for it?",
        tags: ["fun", "preference"]
    },
    {
        id: "50cbd9",
        text: "If your digital calendar made snarky remarks, what would it say today?",
        tags: ["hypothetical"]
    },
    {
        id: "9862ef",
        text: "If people glowed when lying, how bright would the world be?",
        tags: ["fun", "preference"]
    },
    {
        id: "4a6395",
        text: "If clouds rearranged themselves to send messages, what would they say to you?",
        tags: ["fun", "preference"]
    },
    {
        id: "afc8e0",
        text: "If you had to wear clown shoes once a month—randomly—how would you cope?",
        tags: ["hypothetical"]
    },
    {
        id: "d91cfe",
        text: "If mirrors showed your mood instead of your reflection, what would yours show today?",
        tags: ["reflection", "entertainment"]
    },
    {
        id: "01668b",
        text: "If fish learned to scream (politely), what would you change about beach visits?",
        tags: ["reflection", "nature", "travel", "school"]
    },
    {
        id: "0a3e80",
        text: "If bread could text you, what would your toaster say?",
        tags: ["fun", "preference"]
    },
    {
        id: "3aab88",
        text: "If all drinks made cartoon gulping sounds, what beverage would you avoid in meetings?",
        tags: ["career"]
    },
    {
        id: "832b09",
        text: "If teleportation existed but only worked while sneezing, how dangerous?",
        tags: ["career"]
    },
    {
        id: "57639c",
        text: "If you had to swap your voice with a musical instrument, which instrument?",
        tags: ["hypothetical", "entertainment"]
    },
    {
        id: "6cd23d",
        text: "If doors randomly opened to the wrong room in your house, would you stay?",
        tags: ["home"]
    },
    {
        id: "5816ef",
        text: "If your hair acted like Wi-Fi antennas, what would your signal strength be?",
        tags: ["hypothetical"]
    },
    {
        id: "52b1c1",
        text: "If the moon had seasonal wardrobe changes, what should it wear?",
        tags: ["reflection"]
    },
    {
        id: "a38fd3",
        text: "If you had to speak in pirate slang once a day for 10 minutes, when would you use it?",
        tags: ["hypothetical"]
    },
    {
        id: "403618",
        text: "If the wind could whisper secrets, what would it say about your neighborhood?",
        tags: ["sports", "home"]
    },
    {
        id: "e449ee",
        text: "If notebooks could judge your handwriting, what insult would they give you?",
        tags: ["entertainment"]
    },
    {
        id: "58a7b7",
        text: "If robots started wearing wigs, what style would trend?",
        tags: ["fun", "preference"]
    },
    {
        id: "e113f8",
        text: "If your shoes announced every step (“Step!”), what would you do?",
        tags: ["hypothetical"]
    },
    {
        id: "eb6b69",
        text: "If your microwave required emotional validation before heating food, what would you say to it?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "7924a1",
        text: "If raindrops had flavors, what flavor would today’s weather be?",
        tags: ["food", "nature"]
    },
    {
        id: "87256f",
        text: "If your GPS gave emotional support instead of directions, what would it tell you?",
        tags: ["heartwarming", "hypothetical"]
    },
    {
        id: "05189f",
        text: "If your house suddenly sprouted wheels GTA-style, where would it roll off to?",
        tags: ["hypothetical", "home"]
    },
    {
        id: "f07300",
        text: "If half the world floated 3 inches off the ground, what social chaos would erupt?",
        tags: ["friends"]
    },
    {
        id: "83e2b6",
        text: "If teeth grew back like shark teeth weekly, what hairstyle would now matter more?",
        tags: ["deep", "opinion"]
    },
    {
        id: "6fa9de",
        text: "If keyboards made animal noises instead of clicks, which noise would annoy you most?",
        tags: ["nature"]
    },
    {
        id: "c6afb7",
        text: "If your clothes matched your mood automatically, what outfit would you be wearing today?",
        tags: ["hypothetical"]
    },
    {
        id: "f39f44",
        text: "If cartoon physics applied only to you, how would your morning go?",
        tags: ["fun", "preference"]
    },
    {
        id: "6e57bc",
        text: "If chairs moved slightly every time you sat, how paranoid would you get?",
        tags: ["fun", "preference"]
    },
    {
        id: "f53b5a",
        text: "If you could shoot tiny laser beams but they only toasted bread, powerful or useless?",
        tags: ["silly", "hypothetical"]
    },
    {
        id: "840cd3",
        text: "If every sneeze made confetti appear, where would you stop sneezing forever?",
        tags: ["fun", "preference"]
    },
    {
        id: "08e59f",
        text: "If today were narrated by Morgan Freeman, what dramatic moment would he highlight?",
        tags: ["family"]
    },
    {
        id: "d8d53b",
        text: "What’s the most suspiciously polite inanimate object?",
        tags: ["fun", "preference"]
    },
    {
        id: "ac6dc6",
        text: "What would you do if your furniture started slightly rearranging itself only when you weren’t looking?",
        tags: ["memories", "identity", "hypothetical", "home"]
    },
    {
        id: "0713d4",
        text: "What smell would you give to thunder just to confuse everyone?",
        tags: ["fun", "preference"]
    },
    {
        id: "707d1b",
        text: "What’s the most chaotic color?",
        tags: ["silly"]
    },
    {
        id: "3adc26",
        text: "What would you name the tiny creature that lives in your keyboard and steals your vowels?",
        tags: ["food", "creative"]
    },
    {
        id: "f334a1",
        text: "What would you do if your socks suddenly gained diplomatic immunity?",
        tags: ["hypothetical"]
    },
    {
        id: "801981",
        text: "What’s the most “the simulation is glitching” moment you’ve had?",
        tags: ["family"]
    },
    {
        id: "c982bc",
        text: "What would be the worst thing to find in a piñata?",
        tags: ["silly", "preference"]
    },
    {
        id: "b0f900",
        text: "What law would you pass if you were president of a small island named “Snorkelburg”?",
        tags: ["creative", "hypothetical"]
    },
    {
        id: "dd472f",
        text: "If vegetables started holding grudges, which one would hate you most?",
        tags: ["fun", "preference"]
    },
    {
        id: "c79035",
        text: "What animal looks like it’s been photoshopped onto itself?",
        tags: ["nature", "identity"]
    },
    {
        id: "d63deb",
        text: "Which cloud is giving off weird vibes today?",
        tags: ["silly"]
    },
    {
        id: "53b05d",
        text: "If worms organized a protest, what would their signs say?",
        tags: ["fun", "preference"]
    },
    {
        id: "4cd995",
        text: "What would you do if your shadow took a vacation?",
        tags: ["travel", "hypothetical"]
    },
    {
        id: "d321f7",
        text: "What’s the creepiest wholesome thing you could whisper to a plant?",
        tags: ["nature"]
    },
    {
        id: "ca476e",
        text: "If a vending machine offered unsolicited advice instead of snacks, what advice would it give you?",
        tags: ["food"]
    },
    {
        id: "6999b0",
        text: "If toothbrushes had personalities, which one would be feral?",
        tags: ["fun", "preference"]
    },
    {
        id: "aba47d",
        text: "If puddles were portals, where would today’s puddle lead?",
        tags: ["fun", "preference"]
    },
    {
        id: "5167fd",
        text: "If grass made sarcastic remarks when stepped on, what would it say to you?",
        tags: ["fun", "preference"]
    },
    {
        id: "0139bf",
        text: "What crime would a squirrel most likely commit?",
        tags: ["fun", "preference"]
    },
    {
        id: "0d6a04",
        text: "What would you do if spaghetti started whispering when overcooked?",
        tags: ["food"]
    },
    {
        id: "a88065",
        text: "If the moon refused to come out one night, what excuse would it give?",
        tags: ["memories"]
    },
    {
        id: "b5c36a",
        text: "If every emoji came to life for 30 seconds, which would cause the most chaos?",
        tags: ["deep"]
    },
    {
        id: "7f8710",
        text: "What object in your house absolutely has ancient secrets?",
        tags: ["home"]
    },
    {
        id: "3889ee",
        text: "What’s the most untrustworthy fruit?",
        tags: ["values"]
    },
    {
        id: "115128",
        text: "If your pillow adopted a sleep schedule opposite yours, how would you negotiate?",
        tags: ["hypothetical"]
    },
    {
        id: "1075d1",
        text: "If dust bunnies unionized, what would be their demands?",
        tags: ["fun", "preference"]
    },
    {
        id: "15e196",
        text: "If socks multiplied when left alone too long, what would the population be?",
        tags: ["fun", "preference"]
    },
    {
        id: "474269",
        text: "What noise would you assign to blinking just to mess with society?",
        tags: ["fun", "preference"]
    },
    {
        id: "d4782e",
        text: "What vegetable would make the worst spy?",
        tags: ["silly", "preference"]
    },
    {
        id: "2d9d0f",
        text: "What would you do if mirrors started offering unsolicited fashion critiques?",
        tags: ["fun", "preference"]
    },
    {
        id: "9270cb",
        text: "If your eyebrows could detach and float above you, what would you use them for?",
        tags: ["hypothetical"]
    },
    {
        id: "f53fb9",
        text: "What mundane object would you make illegal just to confuse people?",
        tags: ["fun", "preference"]
    },
    {
        id: "dd7ac7",
        text: "If alarms only played whale sounds, how would mornings change?",
        tags: ["sports", "reflection"]
    },
    {
        id: "b5e28c",
        text: "If you could hear plants humming at night, what genre would they sing?",
        tags: ["nature", "hypothetical"]
    },
    {
        id: "2c50eb",
        text: "If ceiling fans were secretly time travelers, why are they here?",
        tags: ["travel"]
    },
    {
        id: "f9cd79",
        text: "If pants could argue, what would they argue about?",
        tags: ["fun", "preference"]
    },
    {
        id: "b0a674",
        text: "If your houseplants held elections, who would win?",
        tags: ["sports", "nature", "hypothetical", "home"]
    },
    {
        id: "7be917",
        text: "If your shower water turned different colors based on your mood, what color is it today?",
        tags: ["hypothetical", "entertainment"]
    },
    {
        id: "af4095",
        text: "What mundane item would be terrifying if it were 10% larger?",
        tags: ["fun", "preference"]
    },
    {
        id: "ee430b",
        text: "What would you do if a tiny wizard lived in your desk drawer?",
        tags: ["fun", "preference"]
    },
    {
        id: "166656",
        text: "If your pillow tried to break up with you, what would it say?",
        tags: ["hypothetical"]
    },
    {
        id: "9c7074",
        text: "If your reflection rolled its eyes at you, how would you respond?",
        tags: ["reflection", "hypothetical"]
    },
    {
        id: "47ac9a",
        text: "If your slippers developed sentience and opinions, what would they judge you for?",
        tags: ["preference", "hypothetical"]
    },
    {
        id: "7d8b6d",
        text: "If your coffee mug had a mysterious past, what is it hiding?",
        tags: ["memories", "hypothetical"]
    },
    {
        id: "92e5e4",
        text: "What would your stapler confess during an emotional breakdown?",
        tags: ["fun", "preference"]
    },
    {
        id: "f8a578",
        text: "If your coat hanger suddenly needed therapy, what caused it?",
        tags: ["hypothetical"]
    },
    {
        id: "28a012",
        text: "If a polite ghost insisted on sharing your bathroom, how would you negotiate?",
        tags: ["home"]
    },
    {
        id: "a725fd",
        text: "What’s the vibe of the imaginary creature under your bed today?",
        tags: ["food"]
    },
    {
        id: "e60dba",
        text: "If your keyboard developed anxiety, what key would be its trigger?",
        tags: ["hypothetical"]
    },
    {
        id: "e6bb5f",
        text: "If Tuesdays had a flavor, what would it be?",
        tags: ["food"]
    },
    {
        id: "5bed4c",
        text: "What sound would you give colors if you had the power?",
        tags: ["hypothetical"]
    },
    {
        id: "87dd5f",
        text: "What’s the least trustworthy part of a sandwich?",
        tags: ["values"]
    },
    {
        id: "640c04",
        text: "Which jar in your kitchen is plotting a coup?",
        tags: ["fun", "preference"]
    },
    {
        id: "023453",
        text: "What’s the most chaotic way to butter toast?",
        tags: ["silly"]
    },
    {
        id: "5475c0",
        text: "If your reflection could make one sarcastic comment per day, what would today’s be?",
        tags: ["reflection", "hypothetical"]
    },
    {
        id: "64147d",
        text: "What’s the most suspiciously heavy object you own?",
        tags: ["fun", "preference"]
    },
    {
        id: "41b0a7",
        text: "If clouds occasionally fell from the sky, how would society prepare?",
        tags: ["fun", "preference"]
    },
    {
        id: "ace408",
        text: "What sauce should never have existed?",
        tags: ["fun", "preference"]
    },
    {
        id: "16b16a",
        text: "What in your house would probably win an argument against you?",
        tags: ["sports", "home"]
    },
    {
        id: "295d80",
        text: "Why does cereal taste different depending on the bowl?",
        tags: ["food", "values"]
    },
    {
        id: "ffb642",
        text: "What item in your home has the most chaotic energy?",
        tags: ["silly", "home"]
    },
    {
        id: "ab7255",
        text: "What vegetable is clearly hiding something?",
        tags: ["fun", "preference"]
    },
    {
        id: "831ec9",
        text: "Which utensil would win in a fight?",
        tags: ["sports"]
    },
    {
        id: "56e0be",
        text: "If ghosts could only haunt fruit, which fruit would be the most dramatic?",
        tags: ["fun", "preference"]
    },
    {
        id: "8311d7",
        text: "What holiday should exist purely for chaos?",
        tags: ["holidays"]
    },
    {
        id: "9e5a42",
        text: "Which shoe is the alpha of your shoe rack?",
        tags: ["fun", "preference"]
    },
    {
        id: "66761d",
        text: "What snack has the worst attitude?",
        tags: ["food", "silly", "preference"]
    },
    {
        id: "f88e04",
        text: "What would chairs gossip about if they could talk?",
        tags: ["fun", "preference"]
    },
    {
        id: "6c5211",
        text: "What kitchen appliance would betray you first in an uprising?",
        tags: ["fun", "preference"]
    },
    {
        id: "5918c8",
        text: "What if your shadow came back wearing a different outfit—what does that mean?",
        tags: ["hypothetical"]
    },
    {
        id: "86815a",
        text: "What would you do if all clocks suddenly counted backward?",
        tags: ["fun", "preference"]
    },
    {
        id: "295aaf",
        text: "If soap could scream (but politely), would you still use it?",
        tags: ["fun", "deep"]
    },
    {
        id: "40ac6c",
        text: "If stairs occasionally turned into slides, blessing or curse?",
        tags: ["fun", "deep"]
    },
    {
        id: "d6ae0f",
        text: "If your clothing occasionally turned invisible, which item would betray you first?",
        tags: ["hypothetical"]
    },
    {
        id: "f34575",
        text: "If storms whispered insults, what would today’s storm say?",
        tags: ["fun", "preference"]
    },
    {
        id: "ab5f2f",
        text: "If fruit started rating you at the grocery store, what score would you get?",
        tags: ["fun", "preference"]
    },
    {
        id: "b3c476",
        text: "If your house grew one extra random room overnight, what’s inside?",
        tags: ["hypothetical", "home"]
    },
    {
        id: "7a2d5a",
        text: "If butterflies yelled when flying, how would that change nature?",
        tags: ["reflection", "nature"]
    },
    {
        id: "1cdc96",
        text: "If you had a coat that occasionally teleported you one foot sideways, how long until chaos?",
        tags: ["hypothetical"]
    },
    {
        id: "0ed189",
        text: "If your phone gained free will, what would it refuse to do?",
        tags: ["hypothetical"]
    },
    {
        id: "1bc633",
        text: "If your dreams sent you invoices, what would you owe?",
        tags: ["aspiration", "hypothetical"]
    },
    {
        id: "6e809d",
        text: "If clouds stored memories, what would today’s cloud remember?",
        tags: ["memories"]
    },
    {
        id: "f7a28b",
        text: "If you could hear people blinking, how would society collapse?",
        tags: ["hypothetical"]
    },
    {
        id: "2da4ef",
        text: "If pets could suddenly use sarcasm, what would yours say first?",
        tags: ["fun", "preference"]
    },
    {
        id: "7514db",
        text: "If your curtains started flapping aggressively for no reason, how concerned would you be?",
        tags: ["hypothetical"]
    },
    {
        id: "916531",
        text: "If your shadow could snore, would you let it sleep in your bed?",
        tags: ["hypothetical"]
    },
    {
        id: "46bfaa",
        text: "If coffee cups evaporated after use, how fast would you panic?",
        tags: ["fun", "preference"]
    },
    {
        id: "e353ac",
        text: "If keyboards tired out and needed naps, what hours would yours refuse to work?",
        tags: ["career"]
    },
    {
        id: "2a10ff",
        text: "If you had to introduce yourself with a plot twist, what would it be?",
        tags: ["identity", "hypothetical"]
    },
    {
        id: "5fa02b",
        text: "What nightmare creature would actually be kind of helpful in daily life?",
        tags: ["deep", "food", "heartwarming"]
    },
    {
        id: "ed0035",
        text: "If water occasionally forgot how to be wet, what happens?",
        tags: ["fun", "preference"]
    },
    {
        id: "055c0f",
        text: "If music started physically moving objects, which song would cause the most chaos?",
        tags: ["entertainment"]
    },
    {
        id: "0f735b",
        text: "If your furniture occasionally levitated to stretch, how normal would you consider it?",
        tags: ["hypothetical", "home"]
    },
    {
        id: "66b873",
        text: "If your tears changed flavor, what flavor would stress be?",
        tags: ["reflection", "food", "hypothetical"]
    },
    {
        id: "a00bd4",
        text: "If trash cans judged trash before accepting it, what item of yours would get rejected?",
        tags: ["fun", "preference"]
    },
    {
        id: "33473a",
        text: "If socks loudly announced when they had holes, what would yours say today?",
        tags: ["fun", "preference"]
    },
    {
        id: "0bf5f9",
        text: "If car horns sang instead of honked, what genre would morning traffic be?",
        tags: ["fun", "preference"]
    },
    {
        id: "4a5e77",
        text: "If the sun sneezed once a year, what would the sky do?",
        tags: ["fun", "preference"]
    },
    {
        id: "144a17",
        text: "If your pillow gave you a daily prophecy, what would today’s overly dramatic one be?",
        tags: ["hypothetical"]
    },
    {
        id: "525a38",
        text: "What’s something you’ve learned about yourself recently?",
        tags: ["reflection", "school", "identity"]
    },
    {
        id: "887088",
        text: "What habit has genuinely improved your life?",
        tags: ["deep"]
    },
    {
        id: "de4595",
        text: "What’s a belief you changed your mind about in the last few years?",
        tags: ["reflection"]
    },
    {
        id: "6fde62",
        text: "What’s a skill you wish you had learned earlier in life?",
        tags: ["reflection", "school", "deep"]
    },
    {
        id: "14cfcd",
        text: "What do you need more of in your life right now?",
        tags: ["deep"]
    },
    {
        id: "f19cf6",
        text: "What’s an area of your life you’re currently trying to improve?",
        tags: ["deep"]
    },
    {
        id: "3ab158",
        text: "What’s the best decision you’ve made for your well-being?",
        tags: ["preference"]
    },
    {
        id: "6dec19",
        text: "What’s something you’re proud of that you rarely talk about?",
        tags: ["fun", "preference"]
    },
    {
        id: "72038b",
        text: "What’s one challenge you overcame that shaped you?",
        tags: ["reflection", "adventurous"]
    },
    {
        id: "38a365",
        text: "What’s a mistake you’re grateful for?",
        tags: ["heartwarming"]
    },
    {
        id: "0282ca",
        text: "What value guides most of your decisions?",
        tags: ["deep"]
    },
    {
        id: "312a4a",
        text: "What’s something you refuse to compromise on?",
        tags: ["fun", "preference"]
    },
    {
        id: "241ab6",
        text: "What does “success” look like to you now, versus years ago?",
        tags: ["fun", "preference"]
    },
    {
        id: "60bd9f",
        text: "What’s the most meaningful compliment someone could give you?",
        tags: ["deep"]
    },
    {
        id: "074690",
        text: "What’s a non-negotiable boundary in your life?",
        tags: ["deep"]
    },
    {
        id: "5f8076",
        text: "What’s a value you admire in others but find difficult to practice yourself?",
        tags: ["deep", "identity"]
    },
    {
        id: "cb892d",
        text: "What’s a life principle you try to live by?",
        tags: ["deep"]
    },
    {
        id: "a07b4d",
        text: "What responsibility do you take very seriously?",
        tags: ["fun", "preference"]
    },
    {
        id: "7f6fad",
        text: "What’s a decision you made for the right reasons, even if it was hard?",
        tags: ["fun", "preference"]
    },
    {
        id: "52b9dd",
        text: "What’s something that instantly makes you trust someone?",
        tags: ["values"]
    },
    {
        id: "1400c7",
        text: "What’s a quality you admire in a great friend?",
        tags: ["food", "friends"]
    },
    {
        id: "408cdb",
        text: "What makes you feel genuinely appreciated?",
        tags: ["heartwarming"]
    },
    {
        id: "4e4315",
        text: "What’s something you’ve learned about relationships over the years?",
        tags: ["reflection", "school"]
    },
    {
        id: "0ec587",
        text: "What’s your communication style in conflict?",
        tags: ["values"]
    },
    {
        id: "fbf992",
        text: "What’s a trait you inherited (or learned) from your family that you value?",
        tags: ["family", "school", "deep", "reflection"]
    },
    {
        id: "e3c3b3",
        text: "What type of person do you feel most at ease around?",
        tags: ["fun", "preference"]
    },
    {
        id: "785bfe",
        text: "How do you show people you care?",
        tags: ["heartwarming", "entertainment"]
    },
    {
        id: "4cc64b",
        text: "What’s one boundary that improved your relationships?",
        tags: ["fun", "preference"]
    },
    {
        id: "6025c4",
        text: "What does a healthy relationship look like to you?",
        tags: ["fun", "preference"]
    },
    {
        id: "b843fd",
        text: "What life experience changed your perspective the most?",
        tags: ["reflection", "deep", "experience"]
    },
    {
        id: "44495d",
        text: "What’s something you experienced that felt small but left a big impact?",
        tags: ["experience"]
    },
    {
        id: "2e5b7b",
        text: "What’s a moment you realized you were growing up?",
        tags: ["family", "reflection", "sports"]
    },
    {
        id: "de6cfc",
        text: "What’s something you used to fear that no longer scares you?",
        tags: ["memories", "heartwarming"]
    },
    {
        id: "ec51bf",
        text: "What’s an experience that helped you understand yourself better?",
        tags: ["identity", "experience"]
    },
    {
        id: "74425a",
        text: "What’s something you’ve done that you didn’t think you were capable of?",
        tags: ["opinion"]
    },
    {
        id: "62cfc1",
        text: "What’s a choice you made that younger you would be proud of?",
        tags: ["memories"]
    },
    {
        id: "91be0f",
        text: "What’s a memory you revisit often?",
        tags: ["memories", "travel"]
    },
    {
        id: "a6398f",
        text: "What’s something you wish you could experience again for the first time?",
        tags: ["experience"]
    },
    {
        id: "a48297",
        text: "What motivates you during difficult times?",
        tags: ["fun", "preference"]
    },
    {
        id: "807820",
        text: "What part of your life feels most meaningful right now?",
        tags: ["deep"]
    },
    {
        id: "10991c",
        text: "What’s a dream you haven’t let go of?",
        tags: ["aspiration"]
    },
    {
        id: "8fe64e",
        text: "What’s something you aspire to, outside of career success?",
        tags: ["heartwarming", "career", "aspiration"]
    },
    {
        id: "6ffe97",
        text: "What’s a personal project you hope to return to?",
        tags: ["career", "aspiration"]
    },
    {
        id: "82f284",
        text: "What’s something you’d love to master someday?",
        tags: ["heartwarming", "fun", "aspiration"]
    },
    {
        id: "91a2cc",
        text: "What’s one way you hope your life looks different five years from now?",
        tags: ["deep", "aspiration"]
    },
    {
        id: "aa5b97",
        text: "What’s something you hope future-you thanks you for?",
        tags: ["aspiration"]
    },
    {
        id: "23ad2e",
        text: "What does “living intentionally” mean to you?",
        tags: ["home"]
    },
    {
        id: "3d2896",
        text: "What’s one step you want to take toward a long-term goal?",
        tags: ["aspiration"]
    },
    {
        id: "0381e4",
        text: "What emotion do you find hardest to express?",
        tags: ["fun", "preference"]
    },
    {
        id: "b16f0b",
        text: "What emotion comes easiest for you?",
        tags: ["fun", "preference"]
    },
    {
        id: "2e43b8",
        text: "What helps you feel grounded when life gets overwhelming?",
        tags: ["deep"]
    },
    {
        id: "3121da",
        text: "What’s something that brings you unexpected joy?",
        tags: ["fun"]
    },
    {
        id: "eeef8b",
        text: "What’s your go-to strategy for emotional reset?",
        tags: ["fun", "preference"]
    },
    {
        id: "ee5455",
        text: "What’s a feeling you’ve learned to embrace instead of fight?",
        tags: ["reflection", "school"]
    },
    {
        id: "71fb82",
        text: "What’s a fear you’ve outgrown?",
        tags: ["reflection"]
    },
    {
        id: "a4398b",
        text: "What brings you a sense of peace?",
        tags: ["fun", "preference"]
    },
    {
        id: "e2b3cf",
        text: "What emotion has taught you the most?",
        tags: ["reflection"]
    },
    {
        id: "5ba361",
        text: "What feeling is most closely tied to your sense of purpose?",
        tags: ["deep"]
    },
    {
        id: "21a075",
        text: "What decision would you make differently if you had the chance?",
        tags: ["hypothetical"]
    },
    {
        id: "9b4a4f",
        text: "What’s a decision you’re glad you made quickly?",
        tags: ["fun", "preference"]
    },
    {
        id: "046e40",
        text: "What’s one choice that shaped your identity the most?",
        tags: ["reflection", "identity"]
    },
    {
        id: "52142f",
        text: "What’s something you’re still deciding about in your life?",
        tags: ["deep"]
    },
    {
        id: "537dcf",
        text: "How do you approach big decisions?",
        tags: ["fun", "preference"]
    },
    {
        id: "c8cb33",
        text: "What’s a time you trusted your intuition and were right?",
        tags: ["values"]
    },
    {
        id: "1bddb4",
        text: "What’s a risk you’re glad you took?",
        tags: ["adventurous"]
    },
    {
        id: "c843f9",
        text: "What’s a time you waited too long to act?",
        tags: ["fun", "preference"]
    },
    {
        id: "31c1e5",
        text: "What helps you stay true to your values under pressure?",
        tags: ["deep"]
    },
    {
        id: "05893f",
        text: "What’s something you learned from a decision you regret?",
        tags: ["reflection", "school"]
    },
    {
        id: "243b0f",
        text: "What’s something difficult you’ve learned to accept?",
        tags: ["reflection", "school"]
    },
    {
        id: "1e9e2f",
        text: "What’s a challenge that ultimately strengthened you?",
        tags: ["adventurous"]
    },
    {
        id: "50ef8d",
        text: "What’s something you’re proud of surviving?",
        tags: ["fun", "preference"]
    },
    {
        id: "e70432",
        text: "What’s your approach to handling change?",
        tags: ["reflection"]
    },
    {
        id: "2a0cb6",
        text: "What’s one obstacle you overcame that surprised you?",
        tags: ["fun", "preference"]
    },
    {
        id: "bfa125",
        text: "What’s something you’re still learning to let go of?",
        tags: ["reflection", "school"]
    },
    {
        id: "eb400d",
        text: "What’s the most valuable lesson a failure taught you?",
        tags: ["reflection"]
    },
    {
        id: "ab4eb7",
        text: "What’s a struggle that led to an unexpected opportunity?",
        tags: ["fun", "preference"]
    },
    {
        id: "56803b",
        text: "What’s a challenge you’re facing right now that’s teaching you something?",
        tags: ["adventurous"]
    },
    {
        id: "300678",
        text: "What’s never as hard as it seems?",
        tags: ["fun", "preference"]
    },
    {
        id: "2accda",
        text: "What’s something small that consistently makes your life better?",
        tags: ["deep"]
    },
    {
        id: "74120b",
        text: "What moment from the past week are you grateful for?",
        tags: ["family", "memories", "heartwarming"]
    },
    {
        id: "2e5e44",
        text: "What’s a simple pleasure you treasure?",
        tags: ["fun", "preference"]
    },
    {
        id: "641223",
        text: "What’s something you appreciate now that you didn’t before?",
        tags: ["heartwarming"]
    },
    {
        id: "f6ed4d",
        text: "What’s a moment recently that made you smile unexpectedly?",
        tags: ["family"]
    },
    {
        id: "4e5e3b",
        text: "What’s something ordinary that feels magical when you pay attention?",
        tags: ["fun", "preference"]
    },
    {
        id: "576b1b",
        text: "What’s a daily ritual you enjoy?",
        tags: ["fun"]
    },
    {
        id: "3523a4",
        text: "What’s something you’d miss if it disappeared from your routine?",
        tags: ["fun", "preference"]
    },
    {
        id: "811186",
        text: "What’s something you’re thankful to your past self for doing?",
        tags: ["memories", "heartwarming", "identity"]
    },
    {
        id: "296812",
        text: "What’s a joy you want to protect in your life?",
        tags: ["deep", "fun", "aspiration"]
    },
    {
        id: "66e826",
        text: "What’s something that restores your faith in people?",
        tags: ["fun", "preference"]
    },
    {
        id: "5ffa86",
        text: "What’s a moment when someone showed you unexpected kindness?",
        tags: ["family", "heartwarming", "experience", "entertainment"]
    },
    {
        id: "5323d8",
        text: "What do you think people need more of right now?",
        tags: ["opinion"]
    },
    {
        id: "4f548d",
        text: "What’s a way you try to contribute positively to the world?",
        tags: ["fun", "preference"]
    },
    {
        id: "2ed5a4",
        text: "What makes you feel connected to others, even strangers?",
        tags: ["silly"]
    },
    {
        id: "9c112b",
        text: "What’s something you hope people remember you for?",
        tags: ["memories", "aspiration"]
    },
    {
        id: "7aa611",
        text: "What’s a way you try to make life a little easier for people around you?",
        tags: ["deep"]
    },
    {
        id: "18324f",
        text: "What do you appreciate most about the people in your life?",
        tags: ["deep", "heartwarming"]
    },
    {
        id: "ea15e7",
        text: "What’s something that brings out the best in you?",
        tags: ["preference"]
    },
    {
        id: "fe82d3",
        text: "What’s one truth you feel you’ve earned?",
        tags: ["fun", "preference"]
    },
    {
        id: "8ee2d6",
        text: "What helps you feel understood?",
        tags: ["fun", "preference"]
    },
    {
        id: "fca998",
        text: "What’s something important about you that most people don’t immediately notice?",
        tags: ["deep"]
    },
    {
        id: "500cd9",
        text: "What’s a preference you have that makes your day go smoother?",
        tags: ["preference"]
    },
    {
        id: "c71af0",
        text: "What’s something you value in a working relationship?",
        tags: ["deep", "career"]
    },
    {
        id: "8f20b5",
        text: "How do you prefer people approach you when they need something?",
        tags: ["preference"]
    },
    {
        id: "fd9420",
        text: "What’s one thing that always makes you feel at ease with someone?",
        tags: ["fun", "preference"]
    },
    {
        id: "1e4dcc",
        text: "What’s a communication habit of yours that people should know?",
        tags: ["values"]
    },
    {
        id: "7e9a29",
        text: "What motivates you in collaborative work?",
        tags: ["career"]
    },
    {
        id: "3eb6aa",
        text: "What’s something you appreciate when others do for you?",
        tags: ["heartwarming"]
    },
    {
        id: "22df1c",
        text: "What’s a small sign that someone “gets” you?",
        tags: ["fun", "preference"]
    },
    {
        id: "57c7aa",
        text: "How do you prefer to receive feedback?",
        tags: ["preference"]
    },
    {
        id: "c5ab4d",
        text: "What’s a way people accidentally misunderstand you?",
        tags: ["fun", "preference"]
    },
    {
        id: "c09bf3",
        text: "What’s a communication style you admire in others?",
        tags: ["values"]
    },
    {
        id: "b3280c",
        text: "What helps you feel comfortable speaking honestly?",
        tags: ["values"]
    },
    {
        id: "556f2c",
        text: "What’s one phrase that always encourages you?",
        tags: ["adventurous"]
    },
    {
        id: "0414f7",
        text: "What’s something people can do to make conflict conversations feel safe?",
        tags: ["fun", "preference"]
    },
    {
        id: "b23234",
        text: "What helps you stay open during difficult conversations?",
        tags: ["fun", "preference"]
    },
    {
        id: "01b988",
        text: "What do you appreciate most when someone disagrees respectfully?",
        tags: ["heartwarming"]
    },
    {
        id: "2d7a6a",
        text: "What kind of communicator do you see yourself as?",
        tags: ["heartwarming", "identity"]
    },
    {
        id: "ec874e",
        text: "What is your ideal work environment?",
        tags: ["career"]
    },
    {
        id: "ce1376",
        text: "What’s one thing that helps you work at your best?",
        tags: ["preference", "career"]
    },
    {
        id: "a18064",
        text: "What tends to derail your productivity?",
        tags: ["fun", "preference"]
    },
    {
        id: "de879a",
        text: "What’s your preferred style for problem-solving?",
        tags: ["preference"]
    },
    {
        id: "c1e02b",
        text: "How do you typically make decisions — fast or deliberate?",
        tags: ["fun", "preference"]
    },
    {
        id: "fabe54",
        text: "What’s something that makes teamwork easier for you?",
        tags: ["sports", "career"]
    },
    {
        id: "2bb320",
        text: "What does “dependability” look like to you?",
        tags: ["values"]
    },
    {
        id: "cd9d46",
        text: "What helps you trust someone’s judgment?",
        tags: ["values"]
    },
    {
        id: "35053f",
        text: "What’s a strength you bring to collaborations?",
        tags: ["fun", "preference"]
    },
    {
        id: "11919f",
        text: "What’s something you’re working to improve in group settings?",
        tags: ["career", "friends"]
    },
    {
        id: "22fad1",
        text: "What’s something you wish more people asked you about?",
        tags: ["fun", "preference"]
    },
    {
        id: "98f99b",
        text: "What’s a time when someone supported you in a memorable way?",
        tags: ["heartwarming", "experience"]
    },
    {
        id: "2d1a78",
        text: "What’s a challenge you’ve overcome that shaped how you show up?",
        tags: ["reflection", "adventurous", "entertainment"]
    },
    {
        id: "10e9a3",
        text: "What’s a value you try to embody in your relationships?",
        tags: ["deep"]
    },
    {
        id: "cbf032",
        text: "What’s something you’ve learned about trusting others?",
        tags: ["reflection", "school", "values"]
    },
    {
        id: "b14e2f",
        text: "What tends to help you open up to people?",
        tags: ["fun", "preference"]
    },
    {
        id: "8276c6",
        text: "What’s an experience that taught you the importance of empathy?",
        tags: ["reflection", "experience"]
    },
    {
        id: "1d3de1",
        text: "What’s a misconception people sometimes have about you?",
        tags: ["fun", "preference"]
    },
    {
        id: "7df8ff",
        text: "What’s a moment you felt seen or understood recently?",
        tags: ["family"]
    },
    {
        id: "d5be09",
        text: "What helps you feel safe enough to be honest?",
        tags: ["values"]
    },
    {
        id: "6f5054",
        text: "What helps you follow through consistently?",
        tags: ["fun", "preference"]
    },
    {
        id: "69d914",
        text: "What’s something that earns your trust quickly?",
        tags: ["values"]
    },
    {
        id: "70802f",
        text: "What breaks trust for you, even in small ways?",
        tags: ["values"]
    },
    {
        id: "81861c",
        text: "What’s a sign someone is reliable in your eyes?",
        tags: ["values"]
    },
    {
        id: "951dad",
        text: "How do you show others they can depend on you?",
        tags: ["values", "entertainment"]
    },
    {
        id: "29e740",
        text: "What’s one thing you always try to deliver on?",
        tags: ["fun", "preference"]
    },
    {
        id: "5baffb",
        text: "What’s something that makes working with someone feel stable?",
        tags: ["career"]
    },
    {
        id: "c2a470",
        text: "What’s your personal definition of “accountability”?",
        tags: ["fun", "preference"]
    },
    {
        id: "c6c9ec",
        text: "What expectation do you like to set early in a partnership?",
        tags: ["fun", "preference"]
    },
    {
        id: "445c58",
        text: "What’s the best way someone can demonstrate commitment to a shared goal?",
        tags: ["preference", "aspiration"]
    },
    {
        id: "7125f7",
        text: "What’s something that makes you feel genuinely supported?",
        tags: ["heartwarming"]
    },
    {
        id: "8a84d1",
        text: "What’s a way you like to support others?",
        tags: ["heartwarming"]
    },
    {
        id: "2a9c8d",
        text: "What’s something small that people can do that makes a big difference to you?",
        tags: ["fun", "preference"]
    },
    {
        id: "36fb46",
        text: "What’s a way people unintentionally hurt your feelings?",
        tags: ["fun", "preference"]
    },
    {
        id: "b64bd6",
        text: "What helps you bounce back after a tough moment?",
        tags: ["family"]
    },
    {
        id: "07897b",
        text: "What’s something you often wish people understood better?",
        tags: ["fun", "preference"]
    },
    {
        id: "00a160",
        text: "What kind of encouragement impacts you the most?",
        tags: ["heartwarming", "adventurous"]
    },
    {
        id: "287bcb",
        text: "What’s your favorite way to show appreciation for someone?",
        tags: ["preference", "fun", "entertainment"]
    },
    {
        id: "6f6144",
        text: "What role does empathy play in trust for you?",
        tags: ["sports", "values"]
    },
    {
        id: "728a5d",
        text: "What’s something that helps you feel connected to your team?",
        tags: ["sports"]
    },
    {
        id: "283bcb",
        text: "What’s something that makes working relationships difficult for you?",
        tags: ["career"]
    },
    {
        id: "7de970",
        text: "What’s an expectation you tend to set for yourself in group work?",
        tags: ["identity", "career", "friends"]
    },
    {
        id: "8ccbd6",
        text: "What’s a need you have that you sometimes hesitate to express?",
        tags: ["fun", "preference"]
    },
    {
        id: "a0af40",
        text: "What’s something that helps you reset when overwhelmed?",
        tags: ["fun", "preference"]
    },
    {
        id: "ee813b",
        text: "What’s something you appreciate when people clarify upfront?",
        tags: ["heartwarming"]
    },
    {
        id: "4ec81f",
        text: "What’s a personal boundary you try to keep?",
        tags: ["fun", "preference"]
    },
    {
        id: "f95b13",
        text: "What’s something you wish teams talked about more openly?",
        tags: ["sports"]
    },
    {
        id: "c99165",
        text: "What’s a type of situation where you need extra clarity?",
        tags: ["fun", "preference"]
    },
    {
        id: "9281d6",
        text: "What’s something you’d like teammates to understand about your workflow?",
        tags: ["sports", "career", "friends"]
    },
    {
        id: "3da3f5",
        text: "What kind of partnership brings out your best?",
        tags: ["heartwarming", "preference"]
    },
    {
        id: "2a65f1",
        text: "What’s something you’re currently learning about yourself?",
        tags: ["reflection", "school", "identity"]
    },
    {
        id: "cdddf0",
        text: "What’s a belief that guides how you treat people?",
        tags: ["food"]
    },
    {
        id: "4d5c7e",
        text: "What’s something you deeply appreciate in colleagues?",
        tags: ["heartwarming", "career"]
    },
    {
        id: "c38808",
        text: "What pushes you to be the best version of yourself?",
        tags: ["identity", "preference"]
    },
    {
        id: "004a82",
        text: "What’s a moment when you felt unexpectedly grateful for someone?",
        tags: ["family", "heartwarming", "experience"]
    },
    {
        id: "47fef9",
        text: "What’s a simple act of kindness that left a deep impression on you?",
        tags: ["heartwarming"]
    },
    {
        id: "2f4226",
        text: "What’s something you admire in people who earn trust easily?",
        tags: ["values"]
    },
    {
        id: "a8b4d6",
        text: "What’s one thing you hope people feel when working with you?",
        tags: ["career", "aspiration"]
    },
    {
        id: "623bf2",
        text: "What’s a principle you turn to during uncertain times?",
        tags: ["fun", "preference"]
    },
    {
        id: "94b6e6",
        text: "What gives you hope about people?",
        tags: ["aspiration"]
    },
    {
        id: "5d01c9",
        text: "How do you like to approach misunderstandings?",
        tags: ["fun", "preference"]
    },
    {
        id: "f13db4",
        text: "What helps you stay patient under stress?",
        tags: ["fun", "preference"]
    },
    {
        id: "c3e623",
        text: "What mindset helps you during disagreements?",
        tags: ["fun", "preference"]
    },
    {
        id: "9ac8f7",
        text: "What’s something you find effective in resolving conflict?",
        tags: ["fun", "preference"]
    },
    {
        id: "6524e0",
        text: "What’s a strategy that helps you communicate clearly when things get tense?",
        tags: ["fun", "preference"]
    },
    {
        id: "c1cbeb",
        text: "What’s the best way for someone to point out a mistake you made?",
        tags: ["preference"]
    },
    {
        id: "59ad79",
        text: "What helps you move on after conflict is resolved?",
        tags: ["fun", "preference"]
    },
    {
        id: "1e8826",
        text: "What do you appreciate when someone apologizes?",
        tags: ["heartwarming"]
    },
    {
        id: "a0f011",
        text: "How do you show others you’re willing to repair trust?",
        tags: ["values", "entertainment"]
    },
    {
        id: "00e8f6",
        text: "What’s something that turns conflict into growth for you?",
        tags: ["reflection"]
    },
    {
        id: "47b2a4",
        text: "What’s one thing that deepens your trust in someone over time?",
        tags: ["values"]
    },
    {
        id: "80b8e9",
        text: "What does loyalty mean to you in a professional context?",
        tags: ["career", "values"]
    },
    {
        id: "05b8f6",
        text: "What makes a long-term working relationship fulfilling?",
        tags: ["career"]
    },
    {
        id: "76867e",
        text: "What’s something you hope people remember about collaborating with you?",
        tags: ["memories", "aspiration"]
    },
    {
        id: "232b37",
        text: "What’s your approach to maintaining trust after it’s built?",
        tags: ["values"]
    },
    {
        id: "bae83d",
        text: "What’s one commitment you always try to uphold?",
        tags: ["fun", "preference"]
    },
    {
        id: "6dc5b5",
        text: "What makes you feel like part of a team rather than just a coworker?",
        tags: ["sports", "career"]
    },
    {
        id: "0ae12d",
        text: "What’s an experience that strengthened a professional relationship for you?",
        tags: ["experience", "career"]
    },
    {
        id: "a7fd76",
        text: "What’s a quality you believe is essential for long-lasting trust?",
        tags: ["deep", "opinion", "values"]
    },
    {
        id: "2d9ff7",
        text: "What’s something you value more and more as you build relationships over time?",
        tags: ["deep"]
    },
    {
        id: "a70c75",
        text: "What’s your favorite place you’ve traveled to so far?",
        tags: ["travel", "preference", "fun"]
    },
    {
        id: "5c4783",
        text: "Do you prefer mountains, beaches, or cities when you travel?",
        tags: ["nature", "travel", "preference"]
    },
    {
        id: "8059e3",
        text: "What’s the shortest but most memorable trip you’ve had?",
        tags: ["travel"]
    },
    {
        id: "68a186",
        text: "What’s your favorite season to travel in?",
        tags: ["travel", "preference", "fun"]
    },
    {
        id: "68b9fa",
        text: "What’s a city you could visit over and over again?",
        tags: ["travel"]
    },
    {
        id: "235b06",
        text: "Where did you take your last vacation?",
        tags: ["travel", "experience"]
    },
    {
        id: "22cc14",
        text: "What’s your dream weekend getaway?",
        tags: ["aspiration"]
    },
    {
        id: "62bac0",
        text: "Are you more of a planner traveler or a spontaneous one?",
        tags: ["travel"]
    },
    {
        id: "74763c",
        text: "What’s the best meal you’ve ever had while traveling?",
        tags: ["food", "travel", "preference"]
    },
    {
        id: "7ce275",
        text: "What’s a local dish you tried but would never eat again?",
        tags: ["food"]
    },
    {
        id: "0c8d75",
        text: "What’s a food you didn’t expect to love but did?",
        tags: ["food", "heartwarming", "fun"]
    },
    {
        id: "cca164",
        text: "What country has your favorite cuisine?",
        tags: ["travel", "preference", "fun"]
    },
    {
        id: "15214b",
        text: "What’s the most unusual food you’ve eaten abroad?",
        tags: ["food", "travel"]
    },
    {
        id: "5d21de",
        text: "What’s a museum or cultural site you really loved?",
        tags: ["heartwarming", "fun"]
    },
    {
        id: "f70cb4",
        text: "What’s a cultural tradition you found fascinating?",
        tags: ["holidays"]
    },
    {
        id: "bac696",
        text: "What drink or snack abroad should everyone try?",
        tags: ["food", "travel"]
    },
    {
        id: "e8753b",
        text: "What’s a local festival you’d love to experience?",
        tags: ["heartwarming", "experience", "fun"]
    },
    {
        id: "6904de",
        text: "What souvenir food do you always bring back?",
        tags: ["food"]
    },
    {
        id: "6e7444",
        text: "What’s the funniest travel mishap you’ve had?",
        tags: ["travel", "fun"]
    },
    {
        id: "c2fb55",
        text: "What’s the most unexpected thing that happened to you on a trip?",
        tags: ["travel"]
    },
    {
        id: "6d0d22",
        text: "What’s the most beautiful scenery you’ve ever seen?",
        tags: ["fun", "preference"]
    },
    {
        id: "fc27aa",
        text: "What’s a travel moment that still makes you smile?",
        tags: ["family", "travel"]
    },
    {
        id: "170e29",
        text: "What’s a moment on a trip where you felt truly peaceful?",
        tags: ["family", "travel"]
    },
    {
        id: "8ad18e",
        text: "What’s the most chaotic journey you’ve survived?",
        tags: ["silly", "travel"]
    },
    {
        id: "c9e895",
        text: "What’s the most wholesome encounter you’ve had with locals?",
        tags: ["fun", "preference"]
    },
    {
        id: "7ffedc",
        text: "What’s a place that surprised you in a good way?",
        tags: ["fun", "preference"]
    },
    {
        id: "15d3b3",
        text: "What’s a travel story that never gets old?",
        tags: ["travel"]
    },
    {
        id: "5d81d4",
        text: "What’s your favorite mode of transportation when traveling?",
        tags: ["sports", "travel", "preference", "fun"]
    },
    {
        id: "ebf572",
        text: "What’s the most unusual way you’ve gotten from point A to point B?",
        tags: ["fun", "preference"]
    },
    {
        id: "cdd076",
        text: "What’s the longest flight you’ve ever taken?",
        tags: ["travel"]
    },
    {
        id: "f75ecc",
        text: "What’s your favorite way to pass time on a plane?",
        tags: ["preference", "fun"]
    },
    {
        id: "9f18ef",
        text: "What’s the most scenic train ride you’ve taken?",
        tags: ["fun", "preference"]
    },
    {
        id: "4bf667",
        text: "Have you ever missed a flight or train? What happened?",
        tags: ["travel", "experience"]
    },
    {
        id: "c5163a",
        text: "What’s your favorite airport you’ve been through?",
        tags: ["travel", "preference", "fun"]
    },
    {
        id: "37c932",
        text: "What’s the worst travel delay you’ve endured?",
        tags: ["silly", "travel", "preference"]
    },
    {
        id: "5a6d01",
        text: "What’s your favorite road-trip memory?",
        tags: ["memories", "travel", "preference", "fun"]
    },
    {
        id: "61ef4f",
        text: "What country felt the most different from home?",
        tags: ["travel", "home"]
    },
    {
        id: "230547",
        text: "What’s your favorite UNESCO World Heritage Site you’ve visited?",
        tags: ["travel", "preference", "fun"]
    },
    {
        id: "a0b1a2",
        text: "What’s the most breathtaking nature spot you’ve seen?",
        tags: ["food", "nature"]
    },
    {
        id: "d4837f",
        text: "What’s a landmark that did NOT live up to the hype?",
        tags: ["fun", "preference"]
    },
    {
        id: "bb1ec0",
        text: "What’s a city you think everyone should visit at least once?",
        tags: ["travel", "opinion"]
    },
    {
        id: "d065c6",
        text: "What’s an underrated travel destination you recommend?",
        tags: ["travel"]
    },
    {
        id: "3d0a26",
        text: "What’s an overrated travel destination in your opinion?",
        tags: ["travel", "preference"]
    },
    {
        id: "302ca0",
        text: "What’s a place you’d love to explore more deeply?",
        tags: ["heartwarming", "fun", "adventurous"]
    },
    {
        id: "9411e6",
        text: "What’s a place you’ve visited that you’d love to live in temporarily?",
        tags: ["travel", "fun", "heartwarming"]
    },
    {
        id: "f37295",
        text: "Are you a light packer or an over-packer?",
        tags: ["fun", "deep"]
    },
    {
        id: "1ac4ad",
        text: "What’s one item you always take when traveling?",
        tags: ["travel"]
    },
    {
        id: "da5adf",
        text: "What’s a travel accessory you swear by?",
        tags: ["travel"]
    },
    {
        id: "42d2a7",
        text: "Do you prefer guided tours or exploring on your own?",
        tags: ["preference"]
    },
    {
        id: "6c0440",
        text: "What’s your ideal length for a vacation?",
        tags: ["travel"]
    },
    {
        id: "329206",
        text: "Do you enjoy revisiting favorite places or discovering new ones?",
        tags: ["travel", "preference", "fun"]
    },
    {
        id: "743598",
        text: "What’s the best travel advice you’ve received?",
        tags: ["travel", "preference"]
    },
    {
        id: "10b507",
        text: "What’s your biggest packing mistake ever?",
        tags: ["fun", "preference"]
    },
    {
        id: "842e60",
        text: "What’s your must-have entertainment on long trips?",
        tags: ["travel"]
    },
    {
        id: "230e30",
        text: "What’s your favorite travel ritual?",
        tags: ["travel", "preference", "fun"]
    },
    {
        id: "20ac75",
        text: "What’s the nicest place you’ve stayed?",
        tags: ["fun", "preference"]
    },
    {
        id: "d646da",
        text: "What’s the weirdest place you’ve stayed?",
        tags: ["silly"]
    },
    {
        id: "81e210",
        text: "What’s your favorite type of accommodation (hotel, rental, hostel, cabin, etc.)?",
        tags: ["preference", "fun"]
    },
    {
        id: "368c51",
        text: "Have you ever been upgraded unexpectedly?",
        tags: ["school", "experience"]
    },
    {
        id: "78b5cb",
        text: "What’s your best “hotel breakfast” experience?",
        tags: ["food", "preference", "experience"]
    },
    {
        id: "334aeb",
        text: "What’s the coolest Airbnb or stay you’ve had?",
        tags: ["fun", "preference"]
    },
    {
        id: "39220a",
        text: "What’s the most important amenity for you when booking a stay?",
        tags: ["deep", "entertainment"]
    },
    {
        id: "b158de",
        text: "What’s a unique place you’d love to stay (treehouse, igloo, etc.)?",
        tags: ["heartwarming", "fun", "home"]
    },
    {
        id: "e685bf",
        text: "What’s your best tip for sleeping well when traveling?",
        tags: ["travel", "preference"]
    },
    {
        id: "3913a3",
        text: "What’s a country you want to visit for the scenery?",
        tags: ["travel", "aspiration"]
    },
    {
        id: "0bd960",
        text: "What’s a country you want to visit for the food?",
        tags: ["food", "travel", "aspiration"]
    },
    {
        id: "36b5d9",
        text: "What’s a city you’d love to get lost in?",
        tags: ["travel", "fun", "heartwarming"]
    },
    {
        id: "ad9d79",
        text: "What’s a natural wonder you hope to see?",
        tags: ["aspiration"]
    },
    {
        id: "f0d3cc",
        text: "What’s an adventure activity on your bucket list?",
        tags: ["adventurous", "aspiration"]
    },
    {
        id: "c99883",
        text: "What’s a dream travel splurge you’d love to do someday?",
        tags: ["travel", "fun", "heartwarming", "aspiration"]
    },
    {
        id: "da65f2",
        text: "What’s a place you’d love to take someone special?",
        tags: ["heartwarming", "fun"]
    },
    {
        id: "a4e5cd",
        text: "What’s a “before I die” destination?",
        tags: ["travel"]
    },
    {
        id: "15e860",
        text: "What travel dream have you had since childhood?",
        tags: ["memories", "travel", "aspiration"]
    },
    {
        id: "b6acd6",
        text: "What’s your most iconic travel photo fail?",
        tags: ["travel"]
    },
    {
        id: "2e93a2",
        text: "What’s a view you wish you could see again?",
        tags: ["opinion"]
    },
    {
        id: "040202",
        text: "What’s a moment you wish you’d photographed?",
        tags: ["family"]
    },
    {
        id: "df0ae1",
        text: "What trip gave you the best stories?",
        tags: ["travel", "preference"]
    },
    {
        id: "360406",
        text: "What’s a travel moment you wish you could re-live?",
        tags: ["family", "travel"]
    },
    {
        id: "096499",
        text: "What’s a souvenir you actually cherish?",
        tags: ["fun", "preference"]
    },
    {
        id: "18ef02",
        text: "What’s a travel sound or smell you remember vividly?",
        tags: ["memories", "travel"]
    },
    {
        id: "114789",
        text: "What’s a moment from a trip that changed how you see the world?",
        tags: ["family", "travel", "reflection"]
    },
    {
        id: "372bf9",
        text: "What’s a memory that you think about more often than you expected to?",
        tags: ["memories", "opinion", "preference"]
    },
    {
        id: "eb139d",
        text: "What’s your go-to airport snack?",
        tags: ["food", "travel"]
    },
    {
        id: "f822ae",
        text: "What’s a silly travel superstition you follow?",
        tags: ["silly", "travel"]
    },
    {
        id: "864794",
        text: "What city has the best people-watching?",
        tags: ["travel", "preference"]
    },
    {
        id: "f3d3d6",
        text: "What’s the funniest thing you’ve overheard in an airport?",
        tags: ["travel", "fun"]
    },
    {
        id: "15b0e1",
        text: "What’s your biggest travel pet peeve?",
        tags: ["travel"]
    },
    {
        id: "e19c97",
        text: "If you could teleport to any country for lunch today, where are you eating?",
        tags: ["food", "travel", "hypothetical"]
    },
    {
        id: "e863c4",
        text: "If your passport had a personality, what would it be like?",
        tags: ["sports", "identity", "travel", "hypothetical"]
    },
    {
        id: "93dcc1",
        text: "If you could create a new airline rule, what would it be?",
        tags: ["food", "creative", "hypothetical"]
    },
    {
        id: "136a63",
        text: "If luggage could talk, what would yours complain about most?",
        tags: ["fun", "preference"]
    },
    {
        id: "926b1c",
        text: "If you could time-travel to witness any historical place in its prime, where would you go?",
        tags: ["travel", "hypothetical"]
    },
    {
        id: "640fa7",
        text: "What sparked your love for adventure travel?",
        tags: ["travel", "fun", "heartwarming", "adventurous"]
    },
    {
        id: "f98ad6",
        text: "What’s the first truly adventurous thing you ever did?",
        tags: ["fun", "preference"]
    },
    {
        id: "48310c",
        text: "Who inspired you to explore the world in a bolder way?",
        tags: ["adventurous"]
    },
    {
        id: "277657",
        text: "What’s a moment when you realized you were more adventurous than you thought?",
        tags: ["family", "reflection", "experience"]
    },
    {
        id: "f94ea1",
        text: "What’s an adventure you did as a kid that felt epic?",
        tags: ["memories", "adventurous"]
    },
    {
        id: "72d354",
        text: "What movie, book, or show most inspires your wanderlust?",
        tags: ["entertainment"]
    },
    {
        id: "1a86d1",
        text: "What’s a place that ignited your passion for exploring?",
        tags: ["hobbies"]
    },
    {
        id: "f74ddb",
        text: "Who is the most adventurous person you know?",
        tags: ["fun", "preference"]
    },
    {
        id: "b7abe6",
        text: "What’s an adventure you’ve always wanted to try but haven’t yet?",
        tags: ["adventurous"]
    },
    {
        id: "005fa9",
        text: "How do you define “adventure” in your own life?",
        tags: ["deep", "adventurous"]
    },
    {
        id: "e9521d",
        text: "What’s the most beautiful hike you’ve ever done?",
        tags: ["nature"]
    },
    {
        id: "aaa40f",
        text: "What’s the toughest trail you’ve completed?",
        tags: ["fun", "preference"]
    },
    {
        id: "f13eaa",
        text: "What mountain would you climb if you had unlimited skill?",
        tags: ["nature", "hypothetical"]
    },
    {
        id: "251cb3",
        text: "What’s the best unexpected moment you’ve had on a hike?",
        tags: ["family", "nature", "preference"]
    },
    {
        id: "d24ef7",
        text: "What’s your dream multi-day trekking route?",
        tags: ["aspiration"]
    },
    {
        id: "55c899",
        text: "Have you ever gotten completely lost on a trail?",
        tags: ["experience"]
    },
    {
        id: "2aa61e",
        text: "What makes a great trail for you—views, challenge, solitude, wildlife?",
        tags: ["opinion", "food", "adventurous", "deep", "nature"]
    },
    {
        id: "ef5a41",
        text: "What’s the best sunrise or sunset you’ve seen outdoors?",
        tags: ["nature", "preference"]
    },
    {
        id: "869659",
        text: "What’s the most “I can’t believe I’m here” hiking moment you’ve had?",
        tags: ["family", "opinion", "deep"]
    },
    {
        id: "6d00ca",
        text: "What’s the longest hike you’d be willing to attempt?",
        tags: ["nature"]
    },
    {
        id: "c9893f",
        text: "What’s your favorite water-based adventure—rafting, kayaking, diving, etc.?",
        tags: ["preference", "fun", "adventurous"]
    },
    {
        id: "2873c0",
        text: "What’s the most memorable ocean you’ve swum in?",
        tags: ["nature"]
    },
    {
        id: "28b85f",
        text: "Have you tried scuba diving or snorkeling? What did you see?",
        tags: ["experience"]
    },
    {
        id: "4e20d7",
        text: "What’s a dream dive location you’d love to explore?",
        tags: ["heartwarming", "adventurous", "fun", "aspiration"]
    },
    {
        id: "b570ab",
        text: "What’s the biggest wave you’ve ever faced (surfing or life)?",
        tags: ["deep"]
    },
    {
        id: "cf073b",
        text: "What’s the most beautiful water clarity you’ve witnessed?",
        tags: ["fun", "preference"]
    },
    {
        id: "dc7b02",
        text: "What’s your most dramatic water adventure mishap?",
        tags: ["adventurous"]
    },
    {
        id: "53cf38",
        text: "What’s the coolest underwater creature you’ve encountered?",
        tags: ["food"]
    },
    {
        id: "10cc4e",
        text: "What’s a lake or river that left you speechless?",
        tags: ["fun", "preference"]
    },
    {
        id: "fbe7d8",
        text: "What water activity pushes you out of your comfort zone?",
        tags: ["fun", "preference"]
    },
    {
        id: "a96fe4",
        text: "What’s the most adrenaline-filled adventure you’ve done?",
        tags: ["adventurous"]
    },
    {
        id: "7e0b12",
        text: "Have you ever gone canyoning, bouldering, or mountaineering?",
        tags: ["nature", "experience"]
    },
    {
        id: "2f4ffa",
        text: "What’s the most extreme environment you’ve explored?",
        tags: ["adventurous"]
    },
    {
        id: "fe14b7",
        text: "Have you tried sandboarding, dune bashing, or desert trekking?",
        tags: ["fun", "deep"]
    },
    {
        id: "39cd67",
        text: "What wildlife encounter changed your perspective?",
        tags: ["reflection", "nature", "deep"]
    },
    {
        id: "e13b3b",
        text: "What’s the most remote place you’ve ever visited?",
        tags: ["travel"]
    },
    {
        id: "4b7572",
        text: "Have you ever done an overnight desert, jungle, or tundra trip?",
        tags: ["travel", "experience"]
    },
    {
        id: "6d269f",
        text: "What’s the coldest place you’ve ever been adventuring?",
        tags: ["fun", "preference"]
    },
    {
        id: "d1c5d9",
        text: "What’s the hottest?",
        tags: ["fun", "preference"]
    },
    {
        id: "8e5bfd",
        text: "What terrain—desert, forest, tundra, jungle—fascinates you most?",
        tags: ["nature"]
    },
    {
        id: "310852",
        text: "Have you ever gone skydiving, paragliding, or bungee jumping?",
        tags: ["experience"]
    },
    {
        id: "eb650e",
        text: "What’s the most breathtaking aerial view you’ve seen?",
        tags: ["food", "opinion"]
    },
    {
        id: "a4a6b3",
        text: "What’s a high-altitude location that amazed you?",
        tags: ["fun", "preference"]
    },
    {
        id: "c7791f",
        text: "Would you try wingsuit flying if it were 100% safe?",
        tags: ["sports"]
    },
    {
        id: "732b98",
        text: "What’s your biggest altitude-related challenge?",
        tags: ["adventurous"]
    },
    {
        id: "dc690d",
        text: "What’s the coolest flight path or landing you’ve experienced?",
        tags: ["travel", "experience"]
    },
    {
        id: "0e4017",
        text: "Would you try hot air ballooning in Cappadocia or Luxor?",
        tags: ["fun", "deep"]
    },
    {
        id: "896b23",
        text: "What’s a summit moment you’ll never forget?",
        tags: ["family"]
    },
    {
        id: "ad5583",
        text: "What’s the highest elevation you’ve ever reached on foot?",
        tags: ["fun", "preference"]
    },
    {
        id: "3d0276",
        text: "What’s your dream “above the clouds” adventure?",
        tags: ["adventurous", "aspiration"]
    },
    {
        id: "3a2c5d",
        text: "What’s the wildest place you’ve ever slept?",
        tags: ["fun", "preference"]
    },
    {
        id: "0eeb59",
        text: "What’s the harshest environment you’ve willingly entered?",
        tags: ["fun", "preference"]
    },
    {
        id: "6973ec",
        text: "What remote village or town surprised you most?",
        tags: ["fun", "preference"]
    },
    {
        id: "e9be91",
        text: "What’s the most otherworldly landscape you’ve seen?",
        tags: ["fun", "preference"]
    },
    {
        id: "14bf59",
        text: "What extreme-weather adventure have you taken?",
        tags: ["food", "adventurous", "nature"]
    },
    {
        id: "557738",
        text: "Would you visit Antarctica or the Arctic?",
        tags: ["travel"]
    },
    {
        id: "a69be5",
        text: "Would you hike into an active volcanic zone?",
        tags: ["nature"]
    },
    {
        id: "f119a9",
        text: "What’s a wilderness area you’d love to explore deeper?",
        tags: ["nature", "heartwarming", "fun", "adventurous"]
    },
    {
        id: "473fac",
        text: "What’s the most isolated spot you’ve ever stood in?",
        tags: ["fun", "preference"]
    },
    {
        id: "9063a5",
        text: "Where in the world felt the most untouched?",
        tags: ["heartwarming"]
    },
    {
        id: "5f11c8",
        text: "What’s your favorite camping memory?",
        tags: ["memories", "preference", "fun", "nature"]
    },
    {
        id: "777078",
        text: "What’s your most chaotic camping fail?",
        tags: ["nature", "silly"]
    },
    {
        id: "db5ed7",
        text: "What’s the most beautiful campsite you’ve stayed at?",
        tags: ["fun", "preference"]
    },
    {
        id: "4626d2",
        text: "What’s one creature comfort you always bring camping?",
        tags: ["food", "nature"]
    },
    {
        id: "5d25ba",
        text: "Have you ever camped in extreme weather?",
        tags: ["food", "experience", "nature"]
    },
    {
        id: "2aede8",
        text: "What’s the longest you’ve gone without cell service on a trip?",
        tags: ["travel"]
    },
    {
        id: "4fa146",
        text: "What survival skill would you want to master?",
        tags: ["aspiration"]
    },
    {
        id: "f22e5e",
        text: "What’s your wildest “sounds in the dark” story?",
        tags: ["fun", "preference"]
    },
    {
        id: "f93ba4",
        text: "What’s the most satisfying meal you’ve eaten outdoors?",
        tags: ["food", "nature"]
    },
    {
        id: "0d01b7",
        text: "Would you try a true survival challenge with limited supplies?",
        tags: ["adventurous"]
    },
    {
        id: "806a21",
        text: "What’s an adventure that changed you?",
        tags: ["reflection", "adventurous"]
    },
    {
        id: "43f95e",
        text: "What’s a fear you overcame while traveling?",
        tags: ["travel"]
    },
    {
        id: "358643",
        text: "What’s an adventure that pushed you way outside your comfort zone?",
        tags: ["adventurous"]
    },
    {
        id: "d97a7c",
        text: "What’s something you discovered about yourself while adventuring?",
        tags: ["identity"]
    },
    {
        id: "afa923",
        text: "What’s the biggest lesson travel has taught you?",
        tags: ["reflection", "travel"]
    },
    {
        id: "70bd63",
        text: "What adventure moment gave you the deepest sense of gratitude?",
        tags: ["family", "adventurous"]
    },
    {
        id: "12d7ed",
        text: "What’s an adventure you took that felt healing?",
        tags: ["adventurous"]
    },
    {
        id: "ed7825",
        text: "What’s a risk you took that totally paid off?",
        tags: ["adventurous"]
    },
    {
        id: "10f9f2",
        text: "What’s something you learned from nature?",
        tags: ["reflection", "nature", "school"]
    },
    {
        id: "88ba33",
        text: "What’s a moment of awe that you’ll never forget?",
        tags: ["family"]
    },
    {
        id: "769c18",
        text: "What country would you travel to purely for adventure experiences?",
        tags: ["travel", "experience", "adventurous"]
    },
    {
        id: "617e86",
        text: "What’s your dream national park to explore?",
        tags: ["adventurous", "aspiration"]
    },
    {
        id: "7f41fb",
        text: "What’s a bucket-list trail you want to hike?",
        tags: ["nature", "aspiration"]
    },
    {
        id: "c8d524",
        text: "What’s an adventure you’ve seen online that you want to try?",
        tags: ["adventurous", "aspiration"]
    },
    {
        id: "69ed4b",
        text: "Which continent would you explore the most thoroughly?",
        tags: ["adventurous"]
    },
    {
        id: "5776fc",
        text: "What’s the next adventure trip you’re planning?",
        tags: ["travel", "adventurous"]
    },
    {
        id: "d8b1e3",
        text: "What adventure destination feels “out of reach” but still tempting?",
        tags: ["travel", "adventurous"]
    },
    {
        id: "92a6e1",
        text: "What’s your ultimate “once in a lifetime” journey?",
        tags: ["deep", "travel"]
    },
    {
        id: "a3b299",
        text: "What’s an adventure you’d love to experience with friends or family?",
        tags: ["fun", "heartwarming", "family", "friends", "adventurous", "experience"]
    },
    {
        id: "f60ea5",
        text: "What adventure would you choose if you could only pick one for the rest of your life?",
        tags: ["deep", "adventurous", "hypothetical"]
    },
    {
        id: "16fce1",
        text: "What’s the funniest thing that happened to you outdoors?",
        tags: ["nature", "fun"]
    },
    {
        id: "dc3055",
        text: "What gear failure gave you the wildest story?",
        tags: ["fun", "preference"]
    },
    {
        id: "2567be",
        text: "What’s the most “I’m definitely not in my home country anymore” moment you’ve had?",
        tags: ["family", "travel", "home"]
    },
    {
        id: "b782cb",
        text: "What wild animal appearance surprised you?",
        tags: ["nature"]
    },
    {
        id: "7da95a",
        text: "What’s the most adrenaline you’ve felt in nature?",
        tags: ["nature", "adventurous"]
    },
    {
        id: "a11852",
        text: "What’s the best “accidentally epic” moment you’ve experienced?",
        tags: ["family", "preference", "experience"]
    },
    {
        id: "6d4648",
        text: "What’s a place where the photos didn’t do it justice?",
        tags: ["fun", "preference"]
    },
    {
        id: "a07fd4",
        text: "What’s a moment you realized you were braver than you thought?",
        tags: ["family", "reflection", "adventurous"]
    },
    {
        id: "5cc18b",
        text: "What adventure do you think everyone should try once?",
        tags: ["opinion", "adventurous"]
    },
    {
        id: "c8609c",
        text: "What’s the next big adventure you hope you get to take?",
        tags: ["adventurous", "aspiration"]
    },
    {
        id: "cc9a2f",
        text: "What’s the most unforgettable wildlife encounter you’ve ever had?",
        tags: ["deep", "nature"]
    },
    {
        id: "f47362",
        text: "What’s the closest you’ve ever been to a wild animal?",
        tags: ["nature"]
    },
    {
        id: "362742",
        text: "What’s the funniest wildlife moment you’ve witnessed?",
        tags: ["family", "nature", "deep", "fun"]
    },
    {
        id: "aee3e4",
        text: "What animal interaction surprised you the most?",
        tags: ["nature"]
    },
    {
        id: "b95dfa",
        text: "What’s the most peaceful animal encounter you’ve experienced?",
        tags: ["nature", "experience"]
    },
    {
        id: "897494",
        text: "What wild animal have you seen that instantly took your breath away?",
        tags: ["food", "nature"]
    },
    {
        id: "3badd7",
        text: "What’s the most majestic animal you’ve encountered in nature?",
        tags: ["nature"]
    },
    {
        id: "96b625",
        text: "What’s the smallest wild creature that made a big impact on you?",
        tags: ["food"]
    },
    {
        id: "bcd8ff",
        text: "What’s an animal encounter that still makes you laugh?",
        tags: ["nature", "silly"]
    },
    {
        id: "781e4c",
        text: "What wildlife moment felt almost magical?",
        tags: ["family", "nature", "deep"]
    },
    {
        id: "47685e",
        text: "What’s the wildest “I was NOT prepared for this” wildlife moment?",
        tags: ["family", "nature", "deep"]
    },
    {
        id: "d7daee",
        text: "Have you ever had an animal steal something from you?",
        tags: ["nature", "experience"]
    },
    {
        id: "604793",
        text: "What’s the most chaotic wildlife moment you’ve survived?",
        tags: ["family", "nature", "silly", "deep"]
    },
    {
        id: "9faac4",
        text: "What’s the most mischievous animal you’ve met?",
        tags: ["nature"]
    },
    {
        id: "54ddbd",
        text: "What’s the scariest wild animal you’ve encountered (in a safe way)?",
        tags: ["nature"]
    },
    {
        id: "b9fb0a",
        text: "What’s the loudest animal you’ve heard up close?",
        tags: ["nature"]
    },
    {
        id: "a40f1d",
        text: "What’s a moment where wildlife surprised you with boldness?",
        tags: ["family", "nature", "deep"]
    },
    {
        id: "fe0445",
        text: "What’s the strangest place you’ve discovered an animal?",
        tags: ["nature", "silly"]
    },
    {
        id: "515075",
        text: "Have you ever accidentally startled an animal?",
        tags: ["nature", "experience"]
    },
    {
        id: "0ef8d9",
        text: "What wildlife encounter changed your plans unexpectedly?",
        tags: ["reflection", "nature", "deep"]
    },
    {
        id: "b6fbd1",
        text: "What large animal encounter left you in awe?",
        tags: ["nature"]
    },
    {
        id: "9471a7",
        text: "What’s the closest you’ve been to an elephant, moose, bison, or similar giant?",
        tags: ["fun", "preference"]
    },
    {
        id: "641540",
        text: "Have you ever felt intimidated by an animal’s size alone?",
        tags: ["nature", "experience"]
    },
    {
        id: "5d3b4b",
        text: "What’s a big animal encounter you’d love to experience someday?",
        tags: ["fun", "heartwarming", "nature", "experience", "aspiration"]
    },
    {
        id: "6577b3",
        text: "What’s a moment a large animal behaved unexpectedly gentle?",
        tags: ["family", "nature"]
    },
    {
        id: "f774a3",
        text: "What’s a moment where you realized you were WAY smaller than the wildlife around you?",
        tags: ["family", "nature", "deep", "reflection"]
    },
    {
        id: "e48306",
        text: "What big animal sighting would you travel far to experience?",
        tags: ["nature", "travel", "experience"]
    },
    {
        id: "f56795",
        text: "What large animal would you NOT want to surprise on a trail?",
        tags: ["nature", "aspiration"]
    },
    {
        id: "fa78f5",
        text: "What big creature impressed you with its calmness?",
        tags: ["food"]
    },
    {
        id: "566632",
        text: "What’s the most photogenic big animal you’ve seen?",
        tags: ["nature"]
    },
    {
        id: "ee1375",
        text: "What’s the wildest predator you’ve seen in person?",
        tags: ["fun", "preference"]
    },
    {
        id: "2b90ec",
        text: "Have you ever seen a big cat in the wild?",
        tags: ["experience"]
    },
    {
        id: "3a60c2",
        text: "What predator encounter felt surreal rather than scary?",
        tags: ["fun", "preference"]
    },
    {
        id: "aeead4",
        text: "What’s the most beautiful predatory animal you’ve spotted?",
        tags: ["nature"]
    },
    {
        id: "a1e579",
        text: "What apex predator fascinates you most?",
        tags: ["fun", "preference"]
    },
    {
        id: "01815c",
        text: "Have you heard a predator vocalize in the wild?",
        tags: ["fun", "deep"]
    },
    {
        id: "36e179",
        text: "What predator encounter did you appreciate from a very safe distance?",
        tags: ["opinion", "experience", "heartwarming"]
    },
    {
        id: "5cda04",
        text: "What predator would you be amazed—but nervous—to see in the wild?",
        tags: ["fun", "preference"]
    },
    {
        id: "f43388",
        text: "Have you ever seen predator tracks that made your heart race?",
        tags: ["deep", "experience"]
    },
    {
        id: "c594f1",
        text: "What’s a predatory animal you’d love to photograph someday?",
        tags: ["nature", "heartwarming", "fun", "aspiration"]
    },
    {
        id: "8a965b",
        text: "What was your most memorable safari moment?",
        tags: ["family"]
    },
    {
        id: "b425c1",
        text: "What’s an animal you didn’t expect to see on safari but did?",
        tags: ["nature"]
    },
    {
        id: "b2e190",
        text: "What’s the best wildlife moment you captured on camera?",
        tags: ["family", "nature", "deep", "preference"]
    },
    {
        id: "3d405f",
        text: "What’s a safari animal you were stunned to see up close?",
        tags: ["nature"]
    },
    {
        id: "887e39",
        text: "What’s the most dramatic animal behavior you witnessed in the wild?",
        tags: ["nature"]
    },
    {
        id: "2222fc",
        text: "What’s an animal you had to wait a long time to see—but it was worth it?",
        tags: ["nature"]
    },
    {
        id: "b79b8b",
        text: "What safari moment made you feel deeply connected to nature?",
        tags: ["family", "nature"]
    },
    {
        id: "769d1f",
        text: "What’s the most playful animal behavior you saw on safari?",
        tags: ["sports", "nature"]
    },
    {
        id: "c6a619",
        text: "What’s an animal you thought was “common” until you saw its wild side?",
        tags: ["nature"]
    },
    {
        id: "086ced",
        text: "What safari experience is still on your bucket list?",
        tags: ["experience", "aspiration"]
    },
    {
        id: "fcba1f",
        text: "What’s the most extraordinary bird you’ve seen in the wild?",
        tags: ["fun", "preference"]
    },
    {
        id: "a9d5d0",
        text: "What bird call or song caught your attention instantly?",
        tags: ["entertainment"]
    },
    {
        id: "bd39c2",
        text: "What’s the closest you’ve been to a bird of prey?",
        tags: ["fun", "preference"]
    },
    {
        id: "78196b",
        text: "What’s the funniest bird behavior you’ve witnessed?",
        tags: ["fun"]
    },
    {
        id: "7017d9",
        text: "What bird encounter made you stop and stare?",
        tags: ["fun", "preference"]
    },
    {
        id: "e6cf77",
        text: "What bird migration or flock moment impressed you the most?",
        tags: ["family"]
    },
    {
        id: "7059ac",
        text: "What’s a bird you’d love to see in its natural habitat?",
        tags: ["heartwarming", "fun"]
    },
    {
        id: "187f9d",
        text: "What’s a bird encounter that surprised you because of size or color?",
        tags: ["fun", "preference"]
    },
    {
        id: "e69331",
        text: "Have you ever been followed by a bird?",
        tags: ["experience"]
    },
    {
        id: "174c0a",
        text: "What bird encounter felt almost cinematic?",
        tags: ["fun", "preference"]
    },
    {
        id: "f56018",
        text: "What’s the coolest marine animal you’ve seen while swimming or diving?",
        tags: ["nature"]
    },
    {
        id: "495822",
        text: "What sea creature encounter amazed you the most?",
        tags: ["food"]
    },
    {
        id: "b41ad8",
        text: "What’s the most colorful underwater wildlife you’ve seen?",
        tags: ["deep", "nature"]
    },
    {
        id: "83196e",
        text: "What marine animal surprised you with its size?",
        tags: ["nature"]
    },
    {
        id: "cd7d8d",
        text: "What underwater encounter made you feel calm and weightless?",
        tags: ["fun", "preference"]
    },
    {
        id: "0917b7",
        text: "What’s a marine creature you’d love to see someday?",
        tags: ["food", "heartwarming", "fun", "aspiration"]
    },
    {
        id: "af8769",
        text: "Have you ever had a funny underwater moment?",
        tags: ["family", "silly", "experience", "fun"]
    },
    {
        id: "4cfc1b",
        text: "What marine animal would you not want to run into unexpectedly?",
        tags: ["nature", "aspiration"]
    },
    {
        id: "5fa465",
        text: "What ocean encounter felt almost like a dream?",
        tags: ["nature", "aspiration"]
    },
    {
        id: "a7ec7b",
        text: "What’s the cutest wild animal you’ve ever encountered?",
        tags: ["nature"]
    },
    {
        id: "64e782",
        text: "What tiny creature made the biggest impression?",
        tags: ["food"]
    },
    {
        id: "5edd4c",
        text: "What small animal was surprisingly bold?",
        tags: ["nature"]
    },
    {
        id: "87c49c",
        text: "Have you ever had an unexpectedly friendly wildlife moment?",
        tags: ["family", "friends", "deep", "nature", "experience"]
    },
    {
        id: "40847a",
        text: "What’s a wildlife encounter that happened because of your snack?",
        tags: ["deep", "food", "nature"]
    },
    {
        id: "82fc91",
        text: "What’s the funniest rodent or small-mammal behavior you’ve seen?",
        tags: ["fun"]
    },
    {
        id: "7a0210",
        text: "What’s a small creature you found more charming than expected?",
        tags: ["food"]
    },
    {
        id: "487272",
        text: "What insect encounter was unexpectedly beautiful?",
        tags: ["fun", "preference"]
    },
    {
        id: "e706d3",
        text: "What insect encounter was… NOT beautiful?",
        tags: ["fun", "preference"]
    },
    {
        id: "e43cbc",
        text: "What tiny wildlife moment brightened your day?",
        tags: ["family", "nature", "deep"]
    },
    {
        id: "db6d12",
        text: "What wildlife encounter gave you a new appreciation for nature?",
        tags: ["deep", "nature"]
    },
    {
        id: "c672b7",
        text: "What animal moment made you feel deeply calm?",
        tags: ["family", "nature"]
    },
    {
        id: "182a74",
        text: "What encounter shifted how you think about conservation?",
        tags: ["opinion", "preference"]
    },
    {
        id: "f90df0",
        text: "What wildlife-related risk reminded you to respect nature?",
        tags: ["deep", "nature", "adventurous"]
    },
    {
        id: "ff7cee",
        text: "What spontaneous wildlife moment became a core memory?",
        tags: ["family", "memories", "deep", "nature"]
    },
    {
        id: "942bfd",
        text: "What encounter made you feel part of something bigger?",
        tags: ["fun", "preference"]
    },
    {
        id: "6daa3e",
        text: "What wildlife moment made you rethink your fears?",
        tags: ["family", "nature", "opinion", "deep"]
    },
    {
        id: "851ecb",
        text: "What unexpected sight made you emotional or reflective?",
        tags: ["reflection"]
    },
    {
        id: "4e1b42",
        text: "What wildlife encounter felt like a privilege to witness?",
        tags: ["deep", "nature"]
    },
    {
        id: "a69ffa",
        text: "What moment made you realize how powerful and delicate wildlife can be?",
        tags: ["family", "nature", "deep", "reflection"]
    },
    {
        id: "c7c6c1",
        text: "What animal would you most love to see in the wild someday?",
        tags: ["nature", "heartwarming", "fun", "aspiration"]
    },
    {
        id: "652bdf",
        text: "What wildlife event (migration, hatching, gathering) is on your bucket list?",
        tags: ["deep", "nature", "aspiration"]
    },
    {
        id: "77b859",
        text: "What mythical-level animal encounter would feel like a dream?",
        tags: ["nature", "aspiration"]
    },
    {
        id: "33536a",
        text: "What national park or wildlife reserve do you hope to explore for animals?",
        tags: ["deep", "nature", "adventurous", "aspiration"]
    },
    {
        id: "9eabb2",
        text: "What underwater creature do you hope to meet someday?",
        tags: ["food", "aspiration"]
    },
    {
        id: "d5b0aa",
        text: "What rare animal sighting would make you feel incredibly lucky?",
        tags: ["nature"]
    },
    {
        id: "d1c701",
        text: "What wildlife moment would make you shout “I can’t believe this is real”?",
        tags: ["family", "nature", "opinion", "deep"]
    },
    {
        id: "f6a237",
        text: "What’s an animal you’ve only seen in documentaries but want to see in person?",
        tags: ["nature", "aspiration"]
    },
    {
        id: "ca158a",
        text: "What wildlife behavior fascinates you the most?",
        tags: ["deep", "nature"]
    },
    {
        id: "0d92d5",
        text: "What would your perfect wildlife encounter look like?",
        tags: ["deep", "nature"]
    },
    {
        id: "1c3b3e",
        text: "What’s the most useful survival skill you currently have?",
        tags: ["fun", "preference"]
    },
    {
        id: "7755a0",
        text: "What survival skill do you wish you were better at?",
        tags: ["fun", "preference"]
    },
    {
        id: "727b2a",
        text: "If you could instantly master any wilderness skill, what would it be?",
        tags: ["nature", "hypothetical"]
    },
    {
        id: "c2f6e7",
        text: "What’s your strongest instinct in a survival situation — planning, acting, or observing?",
        tags: ["fun", "preference"]
    },
    {
        id: "a74b58",
        text: "What’s your go-to method for staying calm in uncertainty?",
        tags: ["fun", "preference"]
    },
    {
        id: "41b531",
        text: "What’s the most valuable piece of advice you’ve ever learned about the outdoors?",
        tags: ["reflection", "nature", "school"]
    },
    {
        id: "9698ba",
        text: "What’s the first thing you’d do if stranded in the wilderness?",
        tags: ["nature"]
    },
    {
        id: "c169ae",
        text: "How confident are you in your ability to start a fire without matches?",
        tags: ["fun", "preference"]
    },
    {
        id: "ff531b",
        text: "Could you build a shelter from scratch? What materials would you use?",
        tags: ["hypothetical"]
    },
    {
        id: "357425",
        text: "What’s one survival skill every person should learn?",
        tags: ["reflection", "school"]
    },
    {
        id: "4f3a31",
        text: "Have you ever been in a situation that required real survival skills?",
        tags: ["experience"]
    },
    {
        id: "27bc9d",
        text: "What’s the closest you’ve come to being truly “lost”?",
        tags: ["fun", "preference"]
    },
    {
        id: "39dae4",
        text: "What’s a moment in the outdoors that taught you resilience?",
        tags: ["family", "nature", "reflection"]
    },
    {
        id: "cd468f",
        text: "What was your scariest wilderness moment — and how did you handle it?",
        tags: ["family", "nature", "experience"]
    },
    {
        id: "05db04",
        text: "What’s a time nature surprised you with something unexpected?",
        tags: ["nature"]
    },
    {
        id: "1e6976",
        text: "What was the most challenging terrain you’ve ever navigated?",
        tags: ["fun", "preference"]
    },
    {
        id: "bc8c2c",
        text: "Have you ever had to ration food or water on a trip?",
        tags: ["food", "travel", "experience"]
    },
    {
        id: "09effd",
        text: "What’s a moment you felt your preparation paid off?",
        tags: ["family"]
    },
    {
        id: "ee7cab",
        text: "What’s something you underestimated outdoors?",
        tags: ["nature"]
    },
    {
        id: "3d9b60",
        text: "What’s a survival mistake you’ll never repeat?",
        tags: ["food"]
    },
    {
        id: "d3b7af",
        text: "What’s your approach to handling wildlife encounters safely?",
        tags: ["deep", "nature"]
    },
    {
        id: "d6967b",
        text: "What animal encounter would challenge you the most?",
        tags: ["nature", "adventurous"]
    },
    {
        id: "a364e3",
        text: "What wildlife knowledge do you think is underrated?",
        tags: ["deep", "nature", "opinion"]
    },
    {
        id: "b202c6",
        text: "What animal tracks can you identify confidently?",
        tags: ["nature"]
    },
    {
        id: "ae303c",
        text: "How would you react if you heard something large moving in the dark?",
        tags: ["hypothetical"]
    },
    {
        id: "decb7e",
        text: "What animal safety rule do you always follow?",
        tags: ["nature"]
    },
    {
        id: "1e8295",
        text: "What wildlife scares you more than it should?",
        tags: ["deep", "nature", "heartwarming"]
    },
    {
        id: "ff3438",
        text: "Which animal would you feel safest spotting from a distance?",
        tags: ["nature", "opinion"]
    },
    {
        id: "480436",
        text: "What bird sounds or calls can you recognize?",
        tags: ["fun", "preference"]
    },
    {
        id: "a70f49",
        text: "How would you safely store food in bear country?",
        tags: ["food", "travel"]
    },
    {
        id: "e70646",
        text: "Are you good at finding your way without a map?",
        tags: ["fun", "deep"]
    },
    {
        id: "26fc72",
        text: "What’s your favorite way to orient yourself — sun, stars, landmarks?",
        tags: ["identity", "preference", "fun"]
    },
    {
        id: "e9ce9c",
        text: "Could you navigate back to camp if you lost the trail?",
        tags: ["hypothetical"]
    },
    {
        id: "b06d66",
        text: "What’s the most confusing terrain you’ve ever tried to navigate?",
        tags: ["fun", "preference"]
    },
    {
        id: "2fb485",
        text: "What’s a navigation tip you think everyone should know?",
        tags: ["opinion"]
    },
    {
        id: "4f3e0b",
        text: "How confident are you in using a compass?",
        tags: ["fun", "preference"]
    },
    {
        id: "24abb9",
        text: "What natural navigation trick fascinates you most?",
        tags: ["fun", "preference"]
    },
    {
        id: "1857ed",
        text: "Have you ever relied on your intuition to find your way?",
        tags: ["experience"]
    },
    {
        id: "42c845",
        text: "If you had to choose between compass or GPS only, which would you pick?",
        tags: ["hypothetical"]
    },
    {
        id: "cc81af",
        text: "What’s your strategy when you realize you’re going the wrong direction?",
        tags: ["reflection"]
    },
    {
        id: "d81b16",
        text: "What’s your method for finding clean water in the wilderness?",
        tags: ["nature"]
    },
    {
        id: "ab01ed",
        text: "What’s the easiest shelter to build in your opinion?",
        tags: ["preference"]
    },
    {
        id: "8cd872",
        text: "What’s the hardest survival task for you — fire, water, shelter, or food?",
        tags: ["food"]
    },
    {
        id: "f7e3fb",
        text: "What’s the most useful multi-purpose item you’d bring to survive?",
        tags: ["deep"]
    },
    {
        id: "746f47",
        text: "What survival gear do you trust the most?",
        tags: ["values"]
    },
    {
        id: "dff43a",
        text: "What improvised fire starters have you used or seen used?",
        tags: ["fun", "preference"]
    },
    {
        id: "c67d9a",
        text: "How long do you think you could maintain a fire through the night?",
        tags: ["opinion"]
    },
    {
        id: "e80e27",
        text: "What would you use as a water container if you had none?",
        tags: ["hypothetical"]
    },
    {
        id: "f79957",
        text: "What’s your philosophy on minimal vs. well-equipped survival kits?",
        tags: ["deep"]
    },
    {
        id: "b68a6a",
        text: "What’s one item you’d never want to be without in the wild?",
        tags: ["aspiration"]
    },
    {
        id: "3c849f",
        text: "What extreme weather condition would challenge you most?",
        tags: ["food", "adventurous", "nature"]
    },
    {
        id: "221364",
        text: "Have you camped through serious weather before?",
        tags: ["food", "nature"]
    },
    {
        id: "cd8bf2",
        text: "What’s your strategy for staying warm without proper gear?",
        tags: ["heartwarming"]
    },
    {
        id: "370914",
        text: "How would you handle a sudden storm on the trail?",
        tags: ["fun", "preference"]
    },
    {
        id: "8fea89",
        text: "What’s your scariest weather-related outdoor experience?",
        tags: ["food", "experience", "nature"]
    },
    {
        id: "a1799c",
        text: "What’s the most dramatic weather shift you’ve witnessed?",
        tags: ["food", "nature"]
    },
    {
        id: "5a5445",
        text: "What temperature feels truly “survival mode” to you?",
        tags: ["fun", "preference"]
    },
    {
        id: "bdf768",
        text: "Would you rather survive in extreme heat or extreme cold?",
        tags: ["food", "hypothetical"]
    },
    {
        id: "97b146",
        text: "What’s your top tip for avoiding hypothermia?",
        tags: ["fun", "preference"]
    },
    {
        id: "a46cb6",
        text: "What weather pattern do you instinctively notice first?",
        tags: ["food", "nature"]
    },
    {
        id: "7460ac",
        text: "How confident are you in foraging?",
        tags: ["fun", "preference"]
    },
    {
        id: "b1177b",
        text: "Could you identify edible plants in your region?",
        tags: ["nature", "hypothetical"]
    },
    {
        id: "8642b2",
        text: "What food source would you try to rely on first — plants, insects, fishing, trapping?",
        tags: ["food", "nature"]
    },
    {
        id: "a1d88a",
        text: "What’s the most “survival” meal you’ve ever eaten?",
        tags: ["food"]
    },
    {
        id: "fbec98",
        text: "What’s a wild food you’ve tried before?",
        tags: ["food"]
    },
    {
        id: "ab3801",
        text: "What’s a survival food skill you’d like to learn better?",
        tags: ["reflection", "food", "school"]
    },
    {
        id: "8297bd",
        text: "Would you be willing to eat insects to survive?",
        tags: ["food"]
    },
    {
        id: "80a04b",
        text: "What’s the easiest wild food to obtain in your area?",
        tags: ["food"]
    },
    {
        id: "4dd0ad",
        text: "What’s your philosophy: forage first or build shelter first?",
        tags: ["deep"]
    },
    {
        id: "92fac9",
        text: "What’s one plant you absolutely know how to identify safely?",
        tags: ["nature"]
    },
    {
        id: "3087cf",
        text: "What’s your biggest strength in a survival situation?",
        tags: ["fun", "preference"]
    },
    {
        id: "dae07e",
        text: "What’s your biggest weakness in a survival situation?",
        tags: ["fun", "preference"]
    },
    {
        id: "28229a",
        text: "How do you manage stress or fear outdoors?",
        tags: ["nature"]
    },
    {
        id: "36302c",
        text: "What mindset helps you stay resourceful?",
        tags: ["fun", "preference"]
    },
    {
        id: "5afb43",
        text: "What’s something you remind yourself when faced with uncertainty?",
        tags: ["identity"]
    },
    {
        id: "aed56a",
        text: "What’s your strategy when you don’t know what to do?",
        tags: ["fun", "preference"]
    },
    {
        id: "692eee",
        text: "How do you choose between action and waiting?",
        tags: ["fun", "preference"]
    },
    {
        id: "0ef403",
        text: "What’s a time you stayed calm under pressure?",
        tags: ["fun", "preference"]
    },
    {
        id: "d078d9",
        text: "What’s your threshold for risk vs. caution in the wild?",
        tags: ["adventurous"]
    },
    {
        id: "ec0ece",
        text: "What quality do you think matters most for survival?",
        tags: ["deep", "opinion"]
    },
    {
        id: "a19cff",
        text: "What would you do if you realized you were lost with one hour of daylight left?",
        tags: ["reflection", "hypothetical"]
    },
    {
        id: "8075d7",
        text: "What’s your plan if you break a piece of essential gear?",
        tags: ["hypothetical"]
    },
    {
        id: "7a59f2",
        text: "If you had to survive three days with no pack, what would you prioritize?",
        tags: ["hypothetical"]
    },
    {
        id: "6393bb",
        text: "If your shelter collapsed in a storm, what would be your backup plan?",
        tags: ["hypothetical"]
    },
    {
        id: "71b0f9",
        text: "What would you do if you woke up overnight to unusual noises outside camp?",
        tags: ["hypothetical"]
    },
    {
        id: "487cbe",
        text: "If you had to signal for rescue with no gear, what methods would you try?",
        tags: ["hypothetical"]
    },
    {
        id: "d01777",
        text: "If your group was divided, would you stay put or search for them?",
        tags: ["friends", "hypothetical"]
    },
    {
        id: "44a6b1",
        text: "What’s your strategy if you find fresh predator tracks near camp?",
        tags: ["hypothetical"]
    },
    {
        id: "74dec2",
        text: "If you had to choose one survival companion, what trait would matter most?",
        tags: ["deep", "opinion", "hypothetical"]
    },
    {
        id: "392307",
        text: "If you could only pack 5 items for a survival challenge, what would they be?",
        tags: ["adventurous", "hypothetical"]
    },
    {
        id: "b348d9",
        text: "What does spending time outdoors teach you about yourself?",
        tags: ["nature", "identity"]
    },
    {
        id: "70ad55",
        text: "What’s the most humbling wilderness moment you’ve had?",
        tags: ["family", "nature"]
    },
    {
        id: "03a65b",
        text: "What do you appreciate most about raw nature?",
        tags: ["nature", "heartwarming"]
    },
    {
        id: "240ed5",
        text: "What survival challenge would you attempt for growth, not thrill?",
        tags: ["reflection", "adventurous"]
    },
    {
        id: "19bd5c",
        text: "What’s something you never noticed about nature until a trip forced you to?",
        tags: ["nature", "travel"]
    },
    {
        id: "dc6528",
        text: "How does unplugging in the wild affect your perspective?",
        tags: ["fun", "preference"]
    },
    {
        id: "f1ae8e",
        text: "What’s a wilderness value you take back into everyday life?",
        tags: ["deep", "nature"]
    },
    {
        id: "09e5fc",
        text: "What’s a moment outdoors that restored your sense of clarity?",
        tags: ["family", "nature"]
    },
    {
        id: "c3562f",
        text: "What role does nature play in your resilience?",
        tags: ["sports", "nature"]
    },
    {
        id: "a27f51",
        text: "What wilderness experience do you think everyone should have once?",
        tags: ["nature", "opinion", "experience"]
    },
    {
        id: "b29d66",
        text: "What music genre do you find yourself listening to most often these days?",
        tags: ["identity", "entertainment"]
    },
    {
        id: "714676",
        text: "What music genre shaped your childhood the most?",
        tags: ["reflection", "memories", "entertainment"]
    },
    {
        id: "f3ef59",
        text: "What music genre do you enjoy even though you didn’t expect to?",
        tags: ["fun", "entertainment"]
    },
    {
        id: "0f8d12",
        text: "Which artist makes music you never get tired of?",
        tags: ["entertainment"]
    },
    {
        id: "43169b",
        text: "What music instantly boosts your mood on a rough day?",
        tags: ["entertainment"]
    },
    {
        id: "b0794f",
        text: "What music helps you relax and unwind?",
        tags: ["sports", "entertainment"]
    },
    {
        id: "a78a1f",
        text: "What song do you consider a perfect piece of music?",
        tags: ["entertainment"]
    },
    {
        id: "49f988",
        text: "What album is your go-to comfort music?",
        tags: ["entertainment"]
    },
    {
        id: "d74adf",
        text: "What movie soundtrack has the best music in your opinion?",
        tags: ["preference", "entertainment"]
    },
    {
        id: "cf2213",
        text: "Which artist creates music you think is underrated?",
        tags: ["food", "opinion", "creative", "entertainment"]
    },
    {
        id: "e941ad",
        text: "What was the first live music concert you ever attended?",
        tags: ["entertainment"]
    },
    {
        id: "3f466c",
        text: "What live music performance has been your favorite so far?",
        tags: ["preference", "fun", "entertainment"]
    },
    {
        id: "e8572a",
        text: "What live music event do you regret missing?",
        tags: ["entertainment"]
    },
    {
        id: "b03706",
        text: "Which musician would you pay anything to see perform live?",
        tags: ["entertainment"]
    },
    {
        id: "553528",
        text: "What small venue had surprisingly incredible live music?",
        tags: ["entertainment"]
    },
    {
        id: "c20e52",
        text: "What’s the loudest music you’ve heard at a concert?",
        tags: ["entertainment"]
    },
    {
        id: "ab5859",
        text: "What music festival lineup would be your dream scenario?",
        tags: ["aspiration", "entertainment"]
    },
    {
        id: "0c5815",
        text: "When have you discovered new music at a live show?",
        tags: ["entertainment"]
    },
    {
        id: "794317",
        text: "What live music moment took your breath away?",
        tags: ["family", "food", "entertainment"]
    },
    {
        id: "741abf",
        text: "If you could time-travel to any historical music performance, which would you choose?",
        tags: ["travel", "hypothetical", "entertainment"]
    },
    {
        id: "3e71e4",
        text: "What music helps you stay calm when you’re stressed?",
        tags: ["entertainment"]
    },
    {
        id: "0ca16a",
        text: "What music helps you focus while working or studying?",
        tags: ["career", "entertainment"]
    },
    {
        id: "a02d72",
        text: "What music helps you fall asleep on difficult nights?",
        tags: ["entertainment"]
    },
    {
        id: "b878a8",
        text: "What music hits you differently now compared to years ago?",
        tags: ["entertainment"]
    },
    {
        id: "262347",
        text: "What music do you turn on when you need motivation?",
        tags: ["entertainment"]
    },
    {
        id: "6d66d5",
        text: "What song is your favorite “sad music but beautiful” track?",
        tags: ["preference", "fun", "entertainment"]
    },
    {
        id: "3510bb",
        text: "What music never fails to make you smile?",
        tags: ["entertainment"]
    },
    {
        id: "c4c4d9",
        text: "What music would play during your “main character” moment?",
        tags: ["family", "identity", "sports", "entertainment"]
    },
    {
        id: "d71ce9",
        text: "What music sets the perfect tone for a rainy day?",
        tags: ["entertainment"]
    },
    {
        id: "374242",
        text: "What music would you choose for watching a perfect sunset?",
        tags: ["entertainment"]
    },
    {
        id: "70a0c3",
        text: "What music reminds you of your childhood the most?",
        tags: ["memories", "entertainment"]
    },
    {
        id: "3d2799",
        text: "What music instantly brings back summer memories?",
        tags: ["entertainment"]
    },
    {
        id: "5ae1a3",
        text: "What music reminds you of your family gatherings?",
        tags: ["family", "entertainment"]
    },
    {
        id: "40aeb6",
        text: "What music reminds you of a specific friend or group?",
        tags: ["friends", "entertainment"]
    },
    {
        id: "57d12d",
        text: "What music played during a major milestone in your life?",
        tags: ["sports", "deep", "entertainment"]
    },
    {
        id: "640d83",
        text: "What music marked an important turning point for you?",
        tags: ["deep", "entertainment"]
    },
    {
        id: "f4a0d3",
        text: "What music reminds you of your school years?",
        tags: ["school", "entertainment"]
    },
    {
        id: "372d98",
        text: "What music do you associate with traveling or road trips?",
        tags: ["travel", "entertainment"]
    },
    {
        id: "730f58",
        text: "What music makes you nostalgic every time you hear it?",
        tags: ["entertainment"]
    },
    {
        id: "859dcd",
        text: "What music once served as your personal anthem?",
        tags: ["entertainment"]
    },
    {
        id: "804e11",
        text: "What instrument would you learn if music lessons were free?",
        tags: ["reflection", "school", "entertainment"]
    },
    {
        id: "c3cd79",
        text: "What musical instrument do you think has the most beautiful sound?",
        tags: ["opinion", "entertainment"]
    },
    {
        id: "ff86d2",
        text: "What musical instrument do you wish you could play better?",
        tags: ["sports", "entertainment"]
    },
    {
        id: "97dcb9",
        text: "What musical instrument was the hardest for you to learn?",
        tags: ["reflection", "school", "entertainment"]
    },
    {
        id: "89d89e",
        text: "What musical instrument do you think suits your personality?",
        tags: ["identity", "opinion", "entertainment"]
    },
    {
        id: "0e4c06",
        text: "Have you ever created your own music or written a song?",
        tags: ["creative", "food", "experience", "entertainment"]
    },
    {
        id: "ac9ac8",
        text: "Have you ever recorded music, even casually?",
        tags: ["experience", "entertainment"]
    },
    {
        id: "2ab2c4",
        text: "What role in a band would you take if you made music professionally?",
        tags: ["hypothetical", "career", "entertainment"]
    },
    {
        id: "e8653e",
        text: "What instrument would you choose if you had to perform live music tomorrow?",
        tags: ["hypothetical", "entertainment"]
    },
    {
        id: "c62a08",
        text: "What instrument would you add to every piece of music if you could?",
        tags: ["hypothetical", "entertainment"]
    },
    {
        id: "8d56bf",
        text: "Which artist do you believe will make timeless music?",
        tags: ["deep", "opinion", "entertainment"]
    },
    {
        id: "700ebb",
        text: "Which artist made music that changed history?",
        tags: ["reflection", "entertainment"]
    },
    {
        id: "c60750",
        text: "Which songwriter consistently writes music that moves you?",
        tags: ["creative", "entertainment"]
    },
    {
        id: "63a268",
        text: "Which band makes music you think is overrated (politely)?",
        tags: ["opinion", "entertainment"]
    },
    {
        id: "4d3315",
        text: "Which band creates music you think deserves more attention?",
        tags: ["food", "opinion", "creative", "entertainment"]
    },
    {
        id: "de9ac3",
        text: "Which artist surprised you with how good their live music is?",
        tags: ["entertainment"]
    },
    {
        id: "5104f5",
        text: "Which disbanded group would you bring back to make music again?",
        tags: ["friends", "entertainment"]
    },
    {
        id: "1b451c",
        text: "Which lesser-known artist do you think makes incredible music?",
        tags: ["opinion", "entertainment"]
    },
    {
        id: "abdc4a",
        text: "Which artist are you currently obsessed with musically?",
        tags: ["entertainment"]
    },
    {
        id: "dde22f",
        text: "Which band name do you think best represents their music?",
        tags: ["opinion", "preference", "creative", "entertainment"]
    },
    {
        id: "89b3b8",
        text: "What music contains lyrics that resonate most with you?",
        tags: ["entertainment"]
    },
    {
        id: "70fc88",
        text: "What song do you know embarrassingly well because of how much you love the music?",
        tags: ["heartwarming", "fun", "entertainment"]
    },
    {
        id: "c3de79",
        text: "What song has the best opening line in music history?",
        tags: ["preference", "entertainment"]
    },
    {
        id: "0b52a8",
        text: "What song has your favorite bridge in all of music?",
        tags: ["preference", "fun", "entertainment"]
    },
    {
        id: "d99d4c",
        text: "What song has the guitar solo that blows your mind musically?",
        tags: ["entertainment"]
    },
    {
        id: "78ab1a",
        text: "What song has the best beat drop in music?",
        tags: ["food", "preference", "entertainment"]
    },
    {
        id: "337e06",
        text: "What song changed how you think because of its music or lyrics?",
        tags: ["reflection", "opinion", "entertainment"]
    },
    {
        id: "aacd8e",
        text: "What chorus do you consider one of the best in music?",
        tags: ["preference", "entertainment"]
    },
    {
        id: "bb4d32",
        text: "What song would you love to experience as new music again?",
        tags: ["heartwarming", "experience", "fun", "entertainment"]
    },
    {
        id: "80d709",
        text: "What album do you consider a masterpiece of music start to finish?",
        tags: ["entertainment"]
    },
    {
        id: "ff54b5",
        text: "What album influenced your music taste the most?",
        tags: ["food", "entertainment"]
    },
    {
        id: "3272cb",
        text: "What album do you revisit every year because of the music’s impact?",
        tags: ["travel", "entertainment"]
    },
    {
        id: "9a5f85",
        text: "What’s the last album you listened to all the way through as music appreciation?",
        tags: ["entertainment"]
    },
    {
        id: "7449a7",
        text: "What album would you take to a desert island for endless music?",
        tags: ["entertainment"]
    },
    {
        id: "3677eb",
        text: "What album cover do you think perfectly represents the music inside?",
        tags: ["opinion", "entertainment"]
    },
    {
        id: "591bd1",
        text: "What album deserves more love from the music community?",
        tags: ["heartwarming", "fun", "entertainment"]
    },
    {
        id: "c8ed27",
        text: "What playlist theme best represents your music taste?",
        tags: ["sports", "food", "preference", "entertainment"]
    },
    {
        id: "011c45",
        text: "What’s the most fun theme for a music playlist you’ve ever made?",
        tags: ["sports", "fun", "entertainment"]
    },
    {
        id: "a78661",
        text: "What music would be Track 1 on the soundtrack of your life?",
        tags: ["deep", "entertainment"]
    },
    {
        id: "51eb8d",
        text: "What song is your guilty pleasure music pick?",
        tags: ["entertainment"]
    },
    {
        id: "682769",
        text: "What song do you always sing along to because the music is irresistible?",
        tags: ["entertainment"]
    },
    {
        id: "3e1928",
        text: "What’s your go-to karaoke song when the music starts calling?",
        tags: ["entertainment"]
    },
    {
        id: "481853",
        text: "What song used to annoy you but now you secretly enjoy musically?",
        tags: ["memories", "fun", "entertainment"]
    },
    {
        id: "9a44ca",
        text: "What song would you choose for a music-filled dance battle?",
        tags: ["entertainment"]
    },
    {
        id: "7cbc77",
        text: "What song do you think is the catchiest music ever created?",
        tags: ["food", "opinion", "creative", "entertainment"]
    },
    {
        id: "1ee0d9",
        text: "What music makes you want to roll the windows down and drive?",
        tags: ["sports", "aspiration", "entertainment"]
    },
    {
        id: "02aba5",
        text: "What song do you hilariously butcher when singing but love the music anyway?",
        tags: ["silly", "fun", "heartwarming", "entertainment"]
    },
    {
        id: "7be0ba",
        text: "What’s the weirdest music you enjoy listening to?",
        tags: ["silly", "fun", "entertainment"]
    },
    {
        id: "212cc1",
        text: "What song guarantees you’ll get on the dance floor when the music drops?",
        tags: ["entertainment"]
    },
    {
        id: "35fb12",
        text: "How has your music taste evolved over the years?",
        tags: ["food", "entertainment"]
    },
    {
        id: "3e61e6",
        text: "What song feels like it understands you musically or emotionally?",
        tags: ["entertainment"]
    },
    {
        id: "045f7a",
        text: "What music from your past makes you laugh now?",
        tags: ["memories", "silly", "entertainment"]
    },
    {
        id: "8f14ee",
        text: "What music helped you through a hard time?",
        tags: ["entertainment"]
    },
    {
        id: "e3b5ab",
        text: "What song represents who you hope to become musically or spiritually?",
        tags: ["aspiration", "entertainment"]
    },
    {
        id: "5382e6",
        text: "What artist shaped your worldview through their music?",
        tags: ["reflection", "opinion", "entertainment"]
    },
    {
        id: "de6f7a",
        text: "What music moment in your life feels especially meaningful?",
        tags: ["family", "deep", "entertainment"]
    },
    {
        id: "ef5854",
        text: "What song do you associate with a major life transition because of its music?",
        tags: ["deep", "entertainment"]
    },
    {
        id: "8ae7a1",
        text: "What does music mean to you personally?",
        tags: ["entertainment"]
    },
    {
        id: "bfbb16",
        text: "What song would you want people to remember you by because of its music?",
        tags: ["memories", "entertainment"]
    },
    {
        id: "5b15b5",
        text: "Would you rather have a pet dinosaur or a pet dragon?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "44119e",
        text: "Would you rather be able to fly or turn invisible?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "0e5f62",
        text: "Would you rather read minds or talk to animals?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "d49534",
        text: "Would you rather eat only pizza or only ice cream for a week?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "fc3896",
        text: "Would you rather swim in a pool of jelly or a pool of marshmallows?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "963d5b",
        text: "Would you rather be super strong or super fast?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "c9465f",
        text: "Would you rather live in a treehouse or an underwater house?",
        tags: ["nature", "home", "hypothetical", "all-ages"]
    },
    {
        id: "b02bbf",
        text: "Would you rather have a robot assistant or a magic wand?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "d1dbd9",
        text: "Would you rather visit space or the deepest ocean?",
        tags: ["travel", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "1d054e",
        text: "Would you rather ride a unicorn or ride a giant turtle?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "32ccad",
        text: "Would you rather be as small as an ant or as tall as a giant?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "51e584",
        text: "Would you rather have a tail or have wings?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "261b46",
        text: "Would you rather never have homework or never have bedtime?",
        tags: ["school", "home", "career", "hypothetical", "all-ages"]
    },
    {
        id: "33c148",
        text: "Would you rather talk in rhymes or sing everything you say?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "1c6caa",
        text: "Would you rather be able to teleport or time travel?",
        tags: ["travel", "hypothetical", "all-ages"]
    },
    {
        id: "1f1a0d",
        text: "Would you rather have rainbow hair or glow-in-the-dark skin?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "48aa90",
        text: "Would you rather drink hot sauce or eat a lemon?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "ae6ea1",
        text: "Would you rather sleep in a castle or on a pirate ship?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "f08a1d",
        text: "Would you rather live on the moon or inside a video game?",
        tags: ["entertainment", "hypothetical", "all-ages"]
    },
    {
        id: "38b538",
        text: "Would you rather be friends with a superhero or be a superhero?",
        tags: ["hypothetical", "friends", "all-ages"]
    },
    {
        id: "301998",
        text: "Would you rather have eight arms or three eyes?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "ba085d",
        text: "Would you rather have a magic carpet or a flying bicycle?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "36ee7b",
        text: "Would you rather breathe underwater or never get tired?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "02898d",
        text: "Would you rather control the weather or control plants?",
        tags: ["food", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "93f100",
        text: "Would you rather always hop like a bunny or crawl like a crab?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "94fb65",
        text: "Would you rather ride a giant hamster or a giant goldfish?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "186bd5",
        text: "Would you rather speak every language or play every instrument?",
        tags: ["fun", "sports", "hypothetical", "all-ages"]
    },
    {
        id: "6b7092",
        text: "Would you rather have chocolate rain or spaghetti snow?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "2335c7",
        text: "Would you rather have a pet robot or a pet alien?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "6c4270",
        text: "Would you rather be able to pause time or rewind time?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "e09bfb",
        text: "Would you rather eat dessert first or never eat vegetables again?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "ce2e3a",
        text: "Would you rather wear pajamas forever or dress like a superhero forever?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "a9dd68",
        text: "Would you rather roar like a lion or howl like a wolf?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "23e7f9",
        text: "Would you rather be a wizard or a ninja?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "d1d541",
        text: "Would you rather explore a jungle or explore a volcano (safely!)?",
        tags: ["travel", "adventurous", "hypothetical", "all-ages"]
    },
    {
        id: "4c0254",
        text: "Would you rather live without TV or live without candy?",
        tags: ["food", "entertainment", "hypothetical", "all-ages"]
    },
    {
        id: "edfb86",
        text: "Would you rather have a trampoline floor or a slide instead of stairs?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "76d4cd",
        text: "Would you rather talk like a robot or move like a robot?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "d94898",
        text: "Would you rather have a hoverboard or a jetpack?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "dc5fbd",
        text: "Would you rather have three wishes or a magic treasure chest?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "3667f3",
        text: "Would you rather always be covered in glitter or always smell like cookies?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "9dbddd",
        text: "Would you rather ride a dragonfly or a giant butterfly?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "ef1925",
        text: "Would you rather have a pet koala or pet panda?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "3b36ff",
        text: "Would you rather turn everything you touch into bubbles or confetti?",
        tags: ["heartwarming", "hypothetical", "all-ages"]
    },
    {
        id: "90254b",
        text: "Would you rather live in a land of toys or a land of candy?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "630630",
        text: "Would you rather be able to shrink things or make things huge?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "f7d260",
        text: "Would you rather have ice powers or fire powers?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "a72e1a",
        text: "Would you rather have a talking backpack or a talking pencil?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "98fb26",
        text: "Would you rather slide everywhere or bounce everywhere?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "13f0a8",
        text: "Would you rather have a robot teacher or a dinosaur teacher?",
        tags: ["school", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "9148c3",
        text: "Would you rather have x-ray vision or night vision?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "1b3b51",
        text: "Would you rather be able to talk to trees or clouds?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "ef2107",
        text: "Would you rather live inside your favorite book or favorite movie?",
        tags: ["entertainment", "preference", "hypothetical", "all-ages"]
    },
    {
        id: "12ba7e",
        text: "Would you rather always whisper or always shout (nicely)?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "b81e20",
        text: "Would you rather have a pet that can do homework or cook dinner?",
        tags: ["food", "school", "home", "hypothetical", "career", "all-ages"]
    },
    {
        id: "e38f3d",
        text: "Would you rather swim with dolphins or fly with birds?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "3800fa",
        text: "Would you rather find buried treasure or discover a new planet?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "0864ba",
        text: "Would you rather sleep on a cloud or a giant marshmallow?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "de39c2",
        text: "Would you rather turn into a cat or turn into a dog for a day?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "0e680c",
        text: "Would you rather skate everywhere or hop everywhere?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "a7c0bc",
        text: "Would you rather have a giant cookie or a giant cupcake?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "916b8a",
        text: "Would you rather have a personal theme song or a spotlight that follows you?",
        tags: ["entertainment", "hypothetical", "all-ages"]
    },
    {
        id: "d16782",
        text: "Would you rather explore a haunted (but friendly) house or a secret cave?",
        tags: ["travel", "friends", "home", "hypothetical", "adventurous", "all-ages"]
    },
    {
        id: "cdfa07",
        text: "Would you rather have your birthday twice a year or weekends last three days?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "7407c1",
        text: "Would you rather talk to bugs or talk to fish?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "6bb159",
        text: "Would you rather never have chores or never take tests?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "6bfa92",
        text: "Would you rather win a million toys or a million dollars?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "3bd6d9",
        text: "Would you rather fly like a balloon or zoom like a rocket?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "4a6ef3",
        text: "Would you rather become invisible when you laugh or glow when you sing?",
        tags: ["silly", "hypothetical", "all-ages"]
    },
    {
        id: "22897d",
        text: "Would you rather have spaghetti hair or pancake feet?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "c1cb6f",
        text: "Would you rather always feel like it’s your birthday or always feel like it’s summer vacation?",
        tags: ["travel", "hypothetical", "all-ages"]
    },
    {
        id: "7d8582",
        text: "Would you rather have a pet tiger (friendly!) or a pet dolphin?",
        tags: ["hypothetical", "friends", "all-ages"]
    },
    {
        id: "3e8c34",
        text: "Would you rather drink soda from a fountain or eat chocolate from a tree?",
        tags: ["food", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "3389b4",
        text: "Would you rather have magical shoes or magical glasses?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "24ca2a",
        text: "Would you rather be the world’s best dancer or world’s best video-game player?",
        tags: ["sports", "preference", "hypothetical", "entertainment", "fun", "all-ages"]
    },
    {
        id: "1b2a14",
        text: "Would you rather own a flying car or a submarine car?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "642825",
        text: "Would you rather sneeze glitter or cough bubbles?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "e43ab0",
        text: "Would you rather have a talking pet or a flying pet?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "86e63c",
        text: "Would you rather turn rainbows on and off or snow on and off?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "804414",
        text: "Would you rather live in a land of giants or tiny people?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "5bd835",
        text: "Would you rather be able to talk to your toys or bring drawings to life?",
        tags: ["creative", "deep", "hypothetical", "all-ages"]
    },
    {
        id: "b2e9df",
        text: "Would you rather travel only by slide or only by trampoline?",
        tags: ["travel", "hypothetical", "all-ages"]
    },
    {
        id: "e1e1fe",
        text: "Would you rather replace school chairs with beanbags or desks with pillows?",
        tags: ["school", "home", "hypothetical", "all-ages"]
    },
    {
        id: "a3f79b",
        text: "Would you rather carry a magic backpack or wear magic socks?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "aa89b0",
        text: "Would you rather everything taste like chocolate or everything taste like cheese?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "5c935f",
        text: "Would you rather explore a shipwreck or climb a mountain?",
        tags: ["travel", "nature", "adventurous", "hypothetical", "all-ages"]
    },
    {
        id: "b48b55",
        text: "Would you rather have glow-in-the-dark teeth or glow-in-the-dark eyes?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "bf2960",
        text: "Would you rather have pizza trees or donut bushes?",
        tags: ["food", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "544903",
        text: "Would you rather have a pet monkey or pet parrot?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "6d4c82",
        text: "Would you rather always win games or always get free snacks?",
        tags: ["food", "entertainment", "hypothetical", "all-ages"]
    },
    {
        id: "df2ee3",
        text: "Would you rather turn into any animal or turn invisible at will?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "084e02",
        text: "Would you rather your shoes never get dirty or your clothes never get wrinkled?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "6a8596",
        text: "Would you rather float like a balloon or roll like a wheel?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "21ab1d",
        text: "Would you rather shrink to the size of a lego or grow as tall as a giraffe?",
        tags: ["reflection", "hypothetical", "all-ages"]
    },
    {
        id: "95375b",
        text: "Would you rather breathe bubbles or breathe sparkles?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "aeff49",
        text: "Would you rather have rainbow freckles or star-shaped pupils?",
        tags: ["reflection", "hypothetical", "all-ages"]
    },
    {
        id: "06c252",
        text: "Would you rather be able to stop time or clone yourself for one hour?",
        tags: ["identity", "hypothetical", "all-ages"]
    },
    {
        id: "941c04",
        text: "Would you rather your favorite food fall from the sky or magically appear in your pocket?",
        tags: ["food", "preference", "hypothetical", "all-ages"]
    },
    {
        id: "1f7df3",
        text: "Would you rather turn windy days on or rainy days off?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "4918df",
        text: "Would you rather have a magical treehouse or a magical underground bunker?",
        tags: ["nature", "home", "hypothetical", "all-ages"]
    },
    {
        id: "5d1ab4",
        text: "If you woke up with superpowers, what’s the first thing you’d do?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "4d18dc",
        text: "If a friendly dragon offered you a ride, where would you go?",
        tags: ["nature", "friends", "all-ages"]
    },
    {
        id: "961829",
        text: "If your toys came to life at night, what would they do?",
        tags: ["deep", "hypothetical", "all-ages"]
    },
    {
        id: "ca968b",
        text: "If you found a magic door, where would it lead?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "067ff3",
        text: "If you could switch lives with a cartoon character, who would it be?",
        tags: ["entertainment", "identity", "hypothetical", "all-ages"]
    },
    {
        id: "6eb042",
        text: "If you opened your backpack and found a tiny wizard inside, what would you ask him?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "112a7d",
        text: "If you had a pet cloud, what would you name it?",
        tags: ["creative", "hypothetical", "all-ages"]
    },
    {
        id: "c3db27",
        text: "If your house turned into a spaceship, where would you fly first?",
        tags: ["home", "hypothetical", "all-ages"]
    },
    {
        id: "5d7727",
        text: "If animals could talk, which one would be the funniest?",
        tags: ["fun", "nature", "all-ages"]
    },
    {
        id: "a7e10b",
        text: "If your drawings came to life, what would you draw?",
        tags: ["creative", "deep", "hypothetical", "all-ages"]
    },
    {
        id: "6e387a",
        text: "If you could turn invisible for an hour, what would you do?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "a29f5b",
        text: "If you could shrink to mouse-size, where would you explore?",
        tags: ["travel", "adventurous", "hypothetical", "all-ages"]
    },
    {
        id: "01d832",
        text: "If you could grow to giant-size, what would you do first?",
        tags: ["reflection", "hypothetical", "all-ages"]
    },
    {
        id: "ff9115",
        text: "If your school turned into a theme park, what ride would you create?",
        tags: ["food", "school", "creative", "hypothetical", "all-ages"]
    },
    {
        id: "a558ce",
        text: "If you found a treasure map, would you follow it?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "c89fc1",
        text: "If your shoes could take you anywhere instantly, where would you go?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "51c048",
        text: "If you could have a robot friend, what would you program it to do?",
        tags: ["hypothetical", "friends", "all-ages"]
    },
    {
        id: "182b4b",
        text: "If your pet could speak for one hour, what would you ask?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "960517",
        text: "If candy rained from the sky, what would you hope it is?",
        tags: ["food", "aspiration", "all-ages"]
    },
    {
        id: "1e7318",
        text: "If you could stop one chore forever, which would it be?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "82d286",
        text: "If a genie gave you three silly wishes, what would you wish for?",
        tags: ["silly", "all-ages"]
    },
    {
        id: "2217d6",
        text: "If your room could transform into any place, what would it become?",
        tags: ["home", "hypothetical", "all-ages"]
    },
    {
        id: "e8ad4b",
        text: "If you lived underwater, what animals would be your neighbors?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "6c9eb8",
        text: "If you created your own holiday, what would people celebrate?",
        tags: ["food", "creative", "holidays", "hypothetical", "all-ages"]
    },
    {
        id: "bade86",
        text: "If you became the ruler of a kingdom, what rule would you make first?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "a960b0",
        text: "If your bicycle could talk, what would it say?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "d5bfc0",
        text: "If your hair could change color with your mood, what color would it be now?",
        tags: ["reflection", "hypothetical", "all-ages"]
    },
    {
        id: "159a4f",
        text: "If you invented a new sport, what would it look like?",
        tags: ["creative", "sports", "hypothetical", "all-ages"]
    },
    {
        id: "9e4886",
        text: "If you could teleport only to places with snacks, where would you end up?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "f1615b",
        text: "If you could control the weather for a day, what would you choose?",
        tags: ["food", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "126837",
        text: "If your shadow had a personality, what would it be like?",
        tags: ["identity", "hypothetical", "all-ages"]
    },
    {
        id: "d73554",
        text: "If your stuffed animals held a meeting, what would they discuss?",
        tags: ["nature", "career", "hypothetical", "all-ages"]
    },
    {
        id: "f3f865",
        text: "If you found a secret tunnel at school, where would it lead?",
        tags: ["school", "hypothetical", "all-ages"]
    },
    {
        id: "6aff68",
        text: "If you could have any mythical creature as a pet, what would it be?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "ff4165",
        text: "If you had to live in a cartoon world, which one would you pick?",
        tags: ["entertainment", "hypothetical", "all-ages"]
    },
    {
        id: "a66beb",
        text: "If trees could talk, what would they complain about?",
        tags: ["nature", "all-ages"]
    },
    {
        id: "be48ed",
        text: "If your bed turned into a boat, where would you sail?",
        tags: ["home", "hypothetical", "all-ages"]
    },
    {
        id: "69f77c",
        text: "If you could make anything grow on trees, what would you choose?",
        tags: ["reflection", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "f14435",
        text: "If you woke up in a video game, which one would it be?",
        tags: ["entertainment", "hypothetical", "all-ages"]
    },
    {
        id: "59b82a",
        text: "If you discovered a time machine, what time would you visit?",
        tags: ["travel", "hypothetical", "all-ages"]
    },
    {
        id: "fbdf50",
        text: "If you woke up with a super long tail, what would you do?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "24991c",
        text: "If you became the world’s best detective kid, what case would you solve?",
        tags: ["memories", "preference", "hypothetical", "all-ages"]
    },
    {
        id: "93a5b8",
        text: "If you could create a new planet, what would it be like?",
        tags: ["food", "creative", "hypothetical", "all-ages"]
    },
    {
        id: "db076e",
        text: "If you could turn gravity on and off, what fun thing would you do?",
        tags: ["fun", "hypothetical", "all-ages"]
    },
    {
        id: "6839ba",
        text: "If your voice could sound like any animal, which would you choose?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "49ae9b",
        text: "If you opened your closet and found a portal, would you go in?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "50cb0a",
        text: "If you had to live in a zoo habitat, which one would you pick?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "33c935",
        text: "If you had balloons that could lift you, where would you float?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "042c09",
        text: "If you had a library full of magic books, what spell would you try first?",
        tags: ["entertainment", "hypothetical", "all-ages"]
    },
    {
        id: "b6daf4",
        text: "If your pillow could talk back, what stories would it tell?",
        tags: ["home", "hypothetical", "all-ages"]
    },
    {
        id: "45d401",
        text: "If there were a theme park based on YOU, what ride would be the craziest?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "1a58c6",
        text: "If you could swap powers with a superhero, who would it be?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "85e26b",
        text: "If clouds were edible, what flavor would they be?",
        tags: ["food", "all-ages"]
    },
    {
        id: "36bf7d",
        text: "If you built a robot, what chore would it handle first?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "5e6ac0",
        text: "If you were a secret agent kid, what would your codename be?",
        tags: ["creative", "memories", "hypothetical", "all-ages"]
    },
    {
        id: "fb0b53",
        text: "If you had wings, where would you fly every morning?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "700ff1",
        text: "If you had to eat only one color of food for a day, what color?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "3b4e21",
        text: "If your school announced “Opposite Day,” what would you do?",
        tags: ["school", "hypothetical", "all-ages"]
    },
    {
        id: "c849c3",
        text: "If you had a time-freezing remote, when would you use it?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "24befa",
        text: "If toys chose the President, which toy would win?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "f24320",
        text: "If you woke up and everything was made of candy, what would you do?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "162c05",
        text: "If you became famous overnight, what would you be famous for?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "276719",
        text: "If you had a submarine, where would you explore?",
        tags: ["travel", "adventurous", "hypothetical", "all-ages"]
    },
    {
        id: "944f94",
        text: "If you were in charge of inventing a new animal, what would it be like?",
        tags: ["creative", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "ea66e1",
        text: "If you could climb any mountain instantly, which would it be?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "cd6cfa",
        text: "If your school bus became a spaceship, where would it go?",
        tags: ["school", "hypothetical", "all-ages"]
    },
    {
        id: "271a40",
        text: "If you woke up and everyone spoke in rhymes, what would you say?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "127c89",
        text: "If you discovered dinosaurs still exist, what would you do?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "5e2579",
        text: "If you found a friendly ghost, what games would you play?",
        tags: ["sports", "friends", "hypothetical", "entertainment", "fun", "all-ages"]
    },
    {
        id: "d35e3f",
        text: "If your backpack could teleport snacks, what snacks would appear?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "d7422d",
        text: "If the floor turned to lava (pretend!), what’s your survival plan?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "c9d80b",
        text: "If you were in a baking competition, what dessert would you make?",
        tags: ["food", "sports", "hypothetical", "all-ages"]
    },
    {
        id: "bfdfaa",
        text: "If you woke up with your favorite superpower, which would it be?",
        tags: ["preference", "hypothetical", "all-ages"]
    },
    {
        id: "d85d11",
        text: "If playground equipment came alive, which piece would be your best friend?",
        tags: ["fun", "sports", "preference", "friends", "all-ages"]
    },
    {
        id: "515fd9",
        text: "If you could switch your voice with any musical instrument, which one?",
        tags: ["entertainment", "hypothetical", "all-ages"]
    },
    {
        id: "92e8fe",
        text: "If you found a dragon egg, what would you do next?",
        tags: ["nature", "hypothetical", "all-ages"]
    },
    {
        id: "aa8219",
        text: "If you could design your own school, what would it look like?",
        tags: ["creative", "school", "hypothetical", "all-ages"]
    },
    {
        id: "ab0c68",
        text: "If clouds dropped toys instead of rain, which toy would you want?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "1202f7",
        text: "If you could freeze your age for one year, which age would you pick?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "5f27b3",
        text: "If you became a pirate captain, what would your ship’s name be?",
        tags: ["creative", "hypothetical", "all-ages"]
    },
    {
        id: "d1d8fd",
        text: "If you could change your name every day, what name would you pick today?",
        tags: ["reflection", "creative", "hypothetical", "all-ages"]
    },
    {
        id: "afc837",
        text: "If animals wore clothes, which animal would be the most stylish?",
        tags: ["nature", "all-ages"]
    },
    {
        id: "abdec8",
        text: "If you opened a restaurant for animals, what would you serve?",
        tags: ["food", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "573763",
        text: "If you could redo bedtime rules, what new rule would you make?",
        tags: ["home", "hypothetical", "all-ages"]
    },
    {
        id: "286251",
        text: "If you had to wear a costume forever, what would you choose?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "341857",
        text: "If your shoes were alive, what adventures would you go on together?",
        tags: ["adventurous", "hypothetical", "all-ages"]
    },
    {
        id: "0fa17e",
        text: "If you discovered a world inside your cereal bowl, what would it be like?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "6c5b1a",
        text: "If your mirror showed your future self, what would you ask them?",
        tags: ["aspiration", "entertainment", "identity", "hypothetical", "all-ages"]
    },
    {
        id: "99ae7f",
        text: "If you had magic seeds, what would you grow?",
        tags: ["reflection", "hypothetical", "all-ages"]
    },
    {
        id: "55ee24",
        text: "If you could make a law for the whole world, what would it be?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "54953c",
        text: "If every Friday was a theme day, what theme would you choose?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "0c4152",
        text: "If you had a golden ticket to anywhere on Earth, where would you go?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "f800a4",
        text: "If your favorite toy became giant-sized, what would you do together?",
        tags: ["preference", "hypothetical", "all-ages"]
    },
    {
        id: "32b424",
        text: "If you could change your hair into any texture (clouds?",
        tags: ["reflection", "hypothetical", "all-ages"]
    },
    {
        id: "f436df",
        text: "If you had to build a house out of only one material, what would it be?",
        tags: ["creative", "home", "hypothetical", "all-ages"]
    },
    {
        id: "fd8b7d",
        text: "If you met a mermaid, what would you ask them?",
        tags: ["hypothetical", "all-ages"]
    },
    {
        id: "7afdd1",
        text: "If school was replaced with a giant obstacle course, how would you do?",
        tags: ["school", "all-ages"]
    },
    {
        id: "a76819",
        text: "If you could turn any boring task into a game, which one?",
        tags: ["entertainment", "hypothetical", "all-ages"]
    },
    {
        id: "228c94",
        text: "If you could plant a tree that grows ANYTHING, what would it grow?",
        tags: ["reflection", "nature", "hypothetical", "all-ages"]
    },
    {
        id: "e7ffce",
        text: "If you could give everyone in the world one fun superpower, what would it be?",
        tags: ["fun", "hypothetical", "all-ages"]
    },
    {
        id: "8f012f",
        text: "What’s your favorite snack of all time?",
        tags: ["food", "preference", "all-ages"]
    },
    {
        id: "b450a2",
        text: "What’s your favorite animal and why?",
        tags: ["nature", "preference", "all-ages"]
    },
    {
        id: "51477d",
        text: "What’s your favorite color today?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "92875b",
        text: "What’s your favorite thing to do outside?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "276ad2",
        text: "What’s your favorite game to play with friends?",
        tags: ["sports", "preference", "friends", "entertainment", "fun", "all-ages"]
    },
    {
        id: "f147b2",
        text: "What’s your favorite dessert?",
        tags: ["food", "preference", "all-ages"]
    },
    {
        id: "5ddf96",
        text: "What’s your favorite movie?",
        tags: ["entertainment", "preference", "all-ages"]
    },
    {
        id: "0a2b0d",
        text: "Who is your favorite cartoon character?",
        tags: ["entertainment", "identity", "preference", "all-ages"]
    },
    {
        id: "d2b5b8",
        text: "What’s your favorite sport to play?",
        tags: ["fun", "sports", "preference", "all-ages"]
    },
    {
        id: "60713b",
        text: "What’s your favorite thing to draw?",
        tags: ["creative", "preference", "all-ages"]
    },
    {
        id: "9dce8c",
        text: "What’s your favorite thing about school?",
        tags: ["school", "preference", "all-ages"]
    },
    {
        id: "475434",
        text: "What’s your least favorite food?",
        tags: ["food", "preference", "all-ages"]
    },
    {
        id: "745537",
        text: "What food could you eat every day?",
        tags: ["food", "hypothetical", "all-ages"]
    },
    {
        id: "51f801",
        text: "What’s your favorite book?",
        tags: ["entertainment", "preference", "all-ages"]
    },
    {
        id: "af4e5b",
        text: "What’s your favorite song?",
        tags: ["entertainment", "preference", "all-ages"]
    },
    {
        id: "e11e28",
        text: "What’s something you’re really good at?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "993518",
        text: "What’s something you’d love to learn?",
        tags: ["school", "fun", "reflection", "all-ages"]
    },
    {
        id: "4e6c4f",
        text: "What’s something that always makes you smile?",
        tags: ["heartwarming", "all-ages"]
    },
    {
        id: "722b71",
        text: "What’s your favorite place to visit?",
        tags: ["travel", "preference", "all-ages"]
    },
    {
        id: "6caf56",
        text: "What’s your dream vacation spot?",
        tags: ["travel", "aspiration", "all-ages"]
    },
    {
        id: "61c558",
        text: "What’s something you’re proud of?",
        tags: ["heartwarming", "all-ages"]
    },
    {
        id: "bb1dbd",
        text: "What’s something that scares you a little?",
        tags: ["heartwarming", "all-ages"]
    },
    {
        id: "8347b4",
        text: "What’s something that makes you feel brave?",
        tags: ["adventurous", "all-ages"]
    },
    {
        id: "99dc78",
        text: "What’s your favorite indoor activity?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "813f9a",
        text: "What’s your favorite outdoor activity?",
        tags: ["nature", "preference", "all-ages"]
    },
    {
        id: "9699fe",
        text: "What’s your favorite kind of weather?",
        tags: ["food", "nature", "preference", "heartwarming", "all-ages"]
    },
    {
        id: "16cb4d",
        text: "What is your favorite thing to build with?",
        tags: ["creative", "preference", "all-ages"]
    },
    {
        id: "fd8533",
        text: "What’s your favorite breakfast food?",
        tags: ["food", "preference", "all-ages"]
    },
    {
        id: "8ebbcb",
        text: "What’s your favorite smell?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "c40793",
        text: "What’s your favorite ice cream flavor?",
        tags: ["food", "preference", "all-ages"]
    },
    {
        id: "ec29ef",
        text: "What’s your favorite superhero and why?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "357ba2",
        text: "What job would you like to have someday?",
        tags: ["aspiration", "career", "all-ages"]
    },
    {
        id: "0e8487",
        text: "What’s your favorite hobby?",
        tags: ["preference", "hobbies", "all-ages"]
    },
    {
        id: "d26129",
        text: "What is your favorite way to relax?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "2c7e6c",
        text: "What’s your favorite animal sound?",
        tags: ["nature", "preference", "all-ages"]
    },
    {
        id: "df60a5",
        text: "What’s your favorite subject in school?",
        tags: ["school", "preference", "all-ages"]
    },
    {
        id: "e4e54d",
        text: "What’s your favorite time of day?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "218bb5",
        text: "What’s your favorite thing about your family?",
        tags: ["family", "preference", "all-ages"]
    },
    {
        id: "00bc68",
        text: "What’s your favorite way to help others?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "18d6bd",
        text: "What’s your favorite board game?",
        tags: ["entertainment", "preference", "all-ages"]
    },
    {
        id: "7f79a5",
        text: "What’s your favorite fruit?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "a47c64",
        text: "What’s your favorite vegetable (if any!)?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "d2847c",
        text: "What toy would you rescue first in a fire?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "577291",
        text: "What’s your favorite silly face to make?",
        tags: ["silly", "preference", "all-ages"]
    },
    {
        id: "5506c9",
        text: "What’s your favorite joke?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "35f5cc",
        text: "What’s something you want to get better at?",
        tags: ["aspiration", "all-ages"]
    },
    {
        id: "100769",
        text: "What’s your favorite place to read?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "d88a7a",
        text: "What’s your favorite thing to cook or bake?",
        tags: ["food", "preference", "all-ages"]
    },
    {
        id: "7e2c21",
        text: "What’s your favorite pizza topping?",
        tags: ["food", "preference", "all-ages"]
    },
    {
        id: "45fcca",
        text: "What’s your favorite time of year?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "68a581",
        text: "What’s your favorite kind of adventure?",
        tags: ["heartwarming", "preference", "adventurous", "all-ages"]
    },
    {
        id: "1ad3ad",
        text: "What’s your favorite thing to collect?",
        tags: ["preference", "hobbies", "all-ages"]
    },
    {
        id: "385a28",
        text: "What’s your favorite dance move?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "638015",
        text: "What’s the funniest thing that’s ever happened to you?",
        tags: ["fun", "all-ages"]
    },
    {
        id: "3435d5",
        text: "What’s something you love doing with your family?",
        tags: ["family", "fun", "all-ages"]
    },
    {
        id: "59f29a",
        text: "What’s something you love doing with your friends?",
        tags: ["fun", "friends", "all-ages"]
    },
    {
        id: "2fa8cc",
        text: "What’s your dream pet?",
        tags: ["aspiration", "all-ages"]
    },
    {
        id: "b097b7",
        text: "What’s your favorite park activity?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "bcb7a0",
        text: "What makes you feel special?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "fd4cbf",
        text: "What makes you feel calm?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "d10f9b",
        text: "What makes you feel excited?",
        tags: ["fun", "all-ages"]
    },
    {
        id: "a52fe0",
        text: "What makes you feel creative?",
        tags: ["food", "all-ages"]
    },
    {
        id: "1b3338",
        text: "What’s your favorite bedtime story?",
        tags: ["home", "preference", "all-ages"]
    },
    {
        id: "b3ef2b",
        text: "What’s a skill you have that others don’t know about?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "2510dc",
        text: "What’s your favorite silly word?",
        tags: ["silly", "preference", "all-ages"]
    },
    {
        id: "9fcc48",
        text: "What’s your favorite icebreaker question so far?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "efcfe8",
        text: "What’s something you want to try for the first time?",
        tags: ["aspiration", "all-ages"]
    },
    {
        id: "58e406",
        text: "What’s your favorite type of cookie?",
        tags: ["food", "preference", "all-ages"]
    },
    {
        id: "def1b6",
        text: "What’s your favorite playground equipment?",
        tags: ["fun", "sports", "preference", "all-ages"]
    },
    {
        id: "b4219a",
        text: "What’s something you do when you’re bored?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "e6e285",
        text: "What’s something you’re curious about?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "dc3b63",
        text: "What’s something you can teach others how to do?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "830624",
        text: "What’s your favorite cartoon theme song?",
        tags: ["entertainment", "preference", "all-ages"]
    },
    {
        id: "99eada",
        text: "What’s your favorite thing about being a kid?",
        tags: ["memories", "preference", "all-ages"]
    },
    {
        id: "3bd8d7",
        text: "What’s your favorite breakfast cereal?",
        tags: ["food", "preference", "all-ages"]
    },
    {
        id: "dade43",
        text: "What’s the best gift you’ve ever gotten?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "e2a6ac",
        text: "What’s the best gift you’ve ever given?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "4087e8",
        text: "What snack would you share with a friend?",
        tags: ["food", "friends", "all-ages"]
    },
    {
        id: "7273bc",
        text: "What’s your favorite costume you’ve ever worn?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "a17795",
        text: "What’s something you laugh at every time?",
        tags: ["silly", "all-ages"]
    },
    {
        id: "05dbfa",
        text: "What’s the longest you’ve ever laughed?",
        tags: ["silly", "all-ages"]
    },
    {
        id: "4f176b",
        text: "What chore do you actually enjoy doing?",
        tags: ["fun", "all-ages"]
    },
    {
        id: "13d95d",
        text: "What’s your favorite rainy-day activity?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "292532",
        text: "What’s something that always cheers you up?",
        tags: ["heartwarming", "all-ages"]
    },
    {
        id: "fc29c0",
        text: "What’s your favorite craft activity?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "f3a4ad",
        text: "What superpower would make your life easier?",
        tags: ["deep", "all-ages"]
    },
    {
        id: "19075b",
        text: "What’s your favorite place to hide during hide-and-seek?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "9d1102",
        text: "What’s your favorite puzzle or brain-teaser?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "aca533",
        text: "What’s something silly you believed when you were younger?",
        tags: ["memories", "silly", "opinion", "all-ages"]
    },
    {
        id: "877eb5",
        text: "What’s your favorite kind of sandwich?",
        tags: ["heartwarming", "preference", "all-ages"]
    },
    {
        id: "85ceaa",
        text: "What’s something that makes you feel strong?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "68972e",
        text: "What’s your favorite bedtime routine?",
        tags: ["home", "preference", "all-ages"]
    },
    {
        id: "61e0cd",
        text: "What’s your favorite thing to do first thing in the morning?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "af3fc7",
        text: "What’s something you’re excited for this week?",
        tags: ["fun", "all-ages"]
    },
    {
        id: "fbd74e",
        text: "What’s your favorite family tradition?",
        tags: ["family", "preference", "holidays", "all-ages"]
    },
    {
        id: "3ddea4",
        text: "What’s something you want to remember forever?",
        tags: ["memories", "aspiration", "all-ages"]
    },
    {
        id: "e155a6",
        text: "What’s your favorite thing about today so far?",
        tags: ["preference", "all-ages"]
    },
    {
        id: "f5379b",
        text: "What's something you're working on right now that you're excited about?",
        tags: ["fun", "career", "all-ages"]
    },
    {
        id: "21b4f2",
        text: "What's a skill you've been wanting to learn, and what's holding you back?",
        tags: ["school", "reflection", "all-ages"]
    },
    {
        id: "9b2d95",
        text: "What's the best advice you've ever received, and did you actually take it?",
        tags: ["experience", "preference", "all-ages"]
    },
    {
        id: "5f97f8",
        text: "What's something that surprised you recently?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "da0d05",
        text: "How do you prefer to spend your time when you have absolutely nothing you have to do?",
        tags: ["experience", "preference", "all-ages"]
    },
    {
        id: "6b40b1",
        text: "What's a belief you held strongly five years ago that you've completely changed your mind about?",
        tags: ["reflection", "all-ages"]
    },
    {
        id: "c74910",
        text: "What's your relationship with your phone like?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "8691b4",
        text: "What's a topic you can talk about for hours without getting bored?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "93cbc1",
        text: "What's the most useful thing you own that cost less than $20?",
        tags: ["all-ages", "fun", "preference"]
    },
    {
        id: "be7dc4",
        text: "If you could have dinner with anyone living, who would it be and what would you want to know?",
        tags: ["food", "aspiration", "home", "hypothetical", "all-ages"]
    }

];
