export const gamesData = [
  {
      "GameID": 1,
      "name": "31",
      "description": "31 is a fast-paced and easy-to-learn card game where players try to get a hand totaling 31 points in one suit. It's an engaging game of strategy and chance, suitable for players of all ages.",
      "minPlayers": 3,
      "maxPlayers": 8,
      "toolsRequired": ["./assets/images/cards.png", "./assets/images/coin.png"],
      "toolsText": ["Cards", "Chips"],
      "imageURL": "",
      "timeAvailable": 10,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Relaxed",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },
    {
      "GameID": 2,
      "name": "500 Rummy",
      "description": "A card game for 2 to 8 players using a standard deck. Form sets and runs with your cards to score points. The first player to reach or exceed 500 points wins. Strategic card play is the key to victory.",
      "minPlayers": 2,
      "maxPlayers": 8,
      "toolsRequired": ["./assets/images/cards.png"],
      "toolsText": ["Cards"],
      // "imageURL": "./assets/images/cards.png",
      "timeAvailable": 20,
      "difficulty": "Moderate",
      "drinking": "FALSE",
      "activity": "Involved",
      "vibes": ["Competitive", "High-Energy", "Playful", "Rule-Abiding", "Loud"],
      "rules": "Rules: Use a standard 52-card deck for 2 to 8 players. Deal 10 cards for 2 to 4 players, or 7 cards for 5 or more players. Place the remaining deck face down as a draw pile and turn the top card face up to start the discard pile. Gameplay: The objective is to score 500 points by forming sets and runs with your cards. Take turns drawing a card and optionally laying down sets/runs or adding to existing ones. End your turn by discarding a card onto the discard pile. Points are scored for valid sets/runs laid down on the table, while ungrouped cards count against your score. The first player to reach or exceed 500 points at the end of a hand wins."
    },

    {
      "GameID": 3,
      "name": "Blackjack",
      "description": "A popular casino card game where players aim to get a value as close to 21 as possible without going over. Face cards are worth 10 points, aces can be 1 or 11, and strategy is key. Beat the dealer and win the round.",
      "minPlayers": 2,
      "maxPlayers": 7,
      "toolsRequired": ["./assets/images/cards.png"],
      "toolsText": ["Cards"],
      // "imageURL": "",
      "timeAvailable": 20,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Involved",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": "Rules:<br> Blackjack is played with a standard deck of 52 cards. Players aim to create a hand value as close to 21 as possible without exceeding it. Deal 2 cards to each player, including the dealer. The dealer's first card is face-up, while the second is face-down.<br><br>\n\nGameplay:<br> Players take turns deciding whether to \"hit\" (take another card) or \"stand\" (keep their current hand). Face cards are worth 10 points, aces can be 1 or 11 points, and other cards are their face value. The player who gets closest to 21 without going over wins the round. If a player or the dealer goes over 21, they \"bust\" and lose the round. The first player to win a predetermined number of rounds or reach a target score wins the game."
    },

    {
      "GameID": 4,
      "name": "Boxes",
      "description": "A strategic paper-and-pencil game. Connect dots to create squares and claim them with your initials. Capture the most squares to win.",
      "minPlayers": 2,
      "maxPlayers": 2,
      "toolsRequired": ["./assets/images/paper.png"],
      "toolsText": ["Pen and Paper"],
      "imageURL": "",
      "timeAvailable": 10,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Involved",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },

    {
      "GameID": 5,
      "name": "Bridge",
      "description": "A four-player card game of strategy and communication. Form partnerships and use bids to determine the trump suit or play in no-trump. The objective is to win tricks by playing high-ranking cards. Bridge is a challenging game that combines teamwork and skill.",
      "minPlayers": 4,
      "maxPlayers": 4,
      "toolsRequired": ["./assets/images/cards.png"],
      "toolsText": ["Cards"],
      // "imageURL": "",
      "timeAvailable": 30,
      "difficulty": "Hard",
      "drinking": "FALSE",
      "activity": "Involved",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": "<strong>Rules:</strong><br> Bridge is played with a standard deck of 52 cards and four players in two partnerships. Each player is dealt 13 cards. Players sit opposite their partners. The dealer shuffles and deals the cards clockwise.<br><br>\n\n<strong>Gameplay:</strong><br> The objective is to win tricks by playing higher-ranking cards in a series of deals. Players communicate through bids to determine the trump suit or whether to play in no-trump. The player to the dealer's left leads the first card, and players must follow suit if possible. The highest-ranking card of the led suit wins the trick. Points are scored for successfully making the contracted number of tricks based on bids. The partnership with the most points at the end of the game wins."
    },

    {
      "GameID": 6,
      "name": "Charades",
      "description": "Charades is a classic party game that requires no special equipment. Players take turns acting out a word or phrase without speaking while their team tries to guess what they're portraying. It's a fun and interactive game that often leads to lots of laughter and entertainment.",
      "minPlayers": 4,
      "maxPlayers": 20,
      "toolsRequired": ["./assets/images/notool.png"],
      "toolsText": ["None"],
      "imageURL": "",
      "timeAvailable": 10,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Involved",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },

    {
      "GameID": 7,
      "name": "Cheat",
      "description": "A strategic and deceptive card game where players take turns playing cards and making claims about the cards they've played.  BIt's all about convincing your opponents while catching them in their own bluffs. A game of wits, psychology, and careful observation.",
      "minPlayers": 3,
      "maxPlayers": 8,
      "toolsRequired": ["./assets/images/cards.png"],
      "toolsText": ["Cards"],
      "imageURL": "",
      "timeAvailable": 10,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Relaxed",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },

    {
      "GameID": 8, // Replace with the next unique ID
      "name": "Cribbage",
      "description": "Cribbage is a classic card game known for its unique  scoring system. Players score points by forming combinations of cards.   The game is traditionally played with a special Cribbage board used for   scorekeeping.",
      "minPlayers": 2,
      "maxPlayers": 4,
      "toolsRequired": ["./assets/images/cards.png"],
      "toolsText": ["Cards"],
      "timeAvailable": 30,
      "difficulty": "Moderate",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
    },

    {
      "GameID": 9,
      "name": "Flip Cup",
      "description": "A high-energy drinking game where teams compete to flip plastic cups upside down by flicking the rim with their fingers. Players take turns racing against the opposing team to successfully flip all their cups. Speed and coordination are key in this fun and social party game.",
      "minPlayers": 4,
      "maxPlayers": 12,
      "toolsRequired": ["./assets/images/cup.png", "./assets/images/table.png"],
      "toolsText": ["Cups", "Table"],
      "imageURL": "",
      "timeAvailable": 10,
      "difficulty": "Easy",
      "drinking": "TRUE",
      "activity": "Involved",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },

    {
      "GameID": 10,
      "name": "Hearts",
      "description": "A classic trick-taking card game for four players. Avoid taking hearts and the queen of spades, which carry penalty points. The player with the fewest penalty points wins. Simple yet strategic fun for all.",
      "minPlayers": 4,
      "maxPlayers": 4,
      "toolsRequired": ["./assets/images/cards.png"],
      "toolsText": ["Cards"],
      // "imageURL": "",
      "timeAvailable": 20,
      "difficulty": "Moderate",
      "drinking": "FALSE",
      "activity": "Involved",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": "<strong>Rules: Hearts is played with a standard 52-card deck. Remove the 2 of clubs to start with 51 cards. Deal 13 cards to each player if you have 4 players. With 3 players, deal 17 cards to each player. If there are 5 players, use all 51 cards and deal 10 cards to each player.<br><br>\n\n<strong>Gameplay:</strong><br>The objective is to avoid taking cards with hearts and the queen of spades, which carry penalty points. In each trick, the player with the 2 of clubs leads. Other players must follow suit if possible. The player with the highest card of the led suit wins the trick. Hearts cannot be led until they have been \"broken\" by a player taking hearts in a previous trick. The game continues until all cards are played. The player with the fewest penalty points wins the game."
    },

    {
      "GameID": 11,
      "name": "Nim",
      "description": "A simple mathematical game where players take turns removing a certain number of objects (like stones, or sugar packets) from distinct piles. The goal is to force your opponent into taking the last object. Nim involves strategic thinking and careful planning to outwit your opponent.",
      "minPlayers": 2,
      "maxPlayers": 2,
      "toolsRequired": ["./assets/images/othertool.png"],
      "toolsText": ["Other Tools"],
      // "imageURL": "",
      "timeAvailable": 5,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Relaxed",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },

    {
      "GameID": 12,
      "name": "Slam",
      "description": "A dynamic card game of tricks. Play your cards wisely to capture valuable tricks and outwit your opponents.",
      "minPlayers": 2,
      "maxPlayers": 8,
      "toolsRequired": ["./assets/images/cards.png"],
      "toolsText": ["Cards"],
      "imageURL": "",
      "timeAvailable": 15,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Involved",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },

    {
      "GameID": 13,
      "name": "Solitaire",
      "description": "A classic solo card game played with a standard deck.Arrange cards to build foundation piles from Ace to King. Strategic moves and careful planning are your keys to success.",
      "minPlayers": 1,
      "maxPlayers": 1,
      "toolsRequired": ["./assets/images/cards.png"],
      "toolsText": ["Cards"],
      "timeAvailable": 20,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Relaxed",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },

    {
      "GameID": 14,
      "name": "Spoons",
      "description": "A fast-paced card game of speed and strategy. Players aim to collect a set of cards and grab a spoon from the center of the table. The player left without a spoon loses the round. Quick reflexes and keen observation skills are essential for victory.",
      "minPlayers": 3,
      "maxPlayers": 13,
      "toolsRequired": ["./assets/images/cards.png", "./assets/images/spoon.png"],
      "toolsText": ["Cards", "Spoons"],
      "imageURL": "",
      "timeAvailable": 30,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Involved",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },

    {
      "GameID": 15,
      "name": "Tic-Tac-Toe",
      "description": "A classic two-player game played on a 3x3 grid. Players take turns marking either X or O in an attempt to get three of their symbols in a row. Quick, simple, and great for testing strategy and tactics.",
      "minPlayers": 2,
      "maxPlayers": 5,
      "toolsRequired": ["./assets/images/paper.png"],
      "toolsText": ["Pen and Paper"],
      "imageURL": "./assets/images/paper.png",
      "timeAvailable": 5,
      "difficulty": "Easy",
      "drinking": "FALSE",
      "activity": "Relaxed",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": ""
    },

    {
      "GameID": 16,
      "name": "Yahtzee",
      "description": "A classic dice game that combines luck with strategy. The goal is to rack up points by rolling specific combinations of 5 dice. Each combination must be used once, and strategic choices are made to maximize your score.",
      "minPlayers": 1,
      "maxPlayers": 10,
      "toolsRequired": ["./assets/images/dice.png", "./assets/images/paper.png"],
      "toolsText": ["5 Dice", "Pen and Paper"],
      // "imageURL": "",
      "timeAvailable": 30,
      "difficulty": "Moderate",
      "drinking": "FALSE",
      "activity": "Competitive",
      "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
      "rules": `<strong>Overview:</strong><br><br>
        Yahtzee is played with five standard six-sided dice. The game is typically played solo or with multiple players. Each player has a scorecard to record their results.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em>  The goal is to achieve the highest total score by rolling and scoring different combinations of the dice.<br><br>
        2. <em>Setup:</em> Players take turns rolling five dice up to three times per turn.<br><br>
        3. <em>Scoring:</em> After each roll, players choose which category to score based on their dice results. Categories include ones, twos, threes, fours, fives, sixes, three of a kind, four of a kind, full house, small straight, large straight, chance, and Yahtzee (five of a kind).<br><br>
        4. <em>Joker Rule:</em> In the Yahtzee category, players aim to get multiple Yahtzees for bonus points.<br><br>
        5. <em>Strategy:</em>: Players must decide which category to score in after each roll to maximize their points.<br><br>
        6. <em>Winning:</em> The player with the highest total score after completing all categories wins the game.`
    },

  ]

  console.log("data.js loaded", gamesData);
