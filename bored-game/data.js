const gamesData = [
    // {
    //   "GameID": 1,
    //   "Name": "500 Rummy",
    //   "description": "A card game for 2 to 8 players using a standard deck. Form sets and runs with your cards to score points. The first player to reach or exceed 500 points wins. Strategic card play is the key to victory.",
    //   "minPlayers": 2,
    //   "maxPlayers": 8,
    //   "toolsRequired": ["./assets/images/cards.png"],
    //   "toolsText": ["Cards"],
    //   "imageURL": "./assets/images/cards.png",
    //   "timeAvailable": 20,
    //   "difficulty": "Moderate",
    //   "drinking": "FALSE",
    //   "activity": "Involved",
    //   "rules": "Rules:<br> Use a standard 52-card deck for 2 to 8 players. Deal 10 cards for 2 to 4 players, or 7 cards for 5 or more players. Place the remaining deck face down as a draw pile and turn the top card face up to start the discard pile.<br><br>\n\nGameplay:<br>The objective is to score 500 points by forming sets and runs with your cards. Take turns drawing a card and optionally laying down sets/runs or adding to existing ones. End your turn by discarding a card onto the discard pile. Points are scored for valid sets/runs laid down on the table, while ungrouped cards count against your score. The first player to reach or exceed 500 points at the end of a hand wins."
    // },
    // {
    //   "GameID": 2,
    //   "Name": "Blackjack",
    //   "description": "A popular casino card game where players aim to get a value as close to 21 as possible without going over. Face cards are worth 10 points, aces can be 1 or 11, and strategy is key. Beat the dealer and win the round.",
    //   "minPlayers": 2,
    //   "maxPlayers": 7,
    //   "toolsRequired": ["./assets/images/cards.png"],
    //   "toolsText": ["Cards"],
    //   "imageURL": "",
    //   "timeAvailable": 20,
    //   "difficulty": "Easy",
    //   "drinking": "FALSE",
    //   "activity": "Involved",
    //   "rules": "Rules:<br> Blackjack is played with a standard deck of 52 cards. Players aim to create a hand value as close to 21 as possible without exceeding it. Deal 2 cards to each player, including the dealer. The dealer's first card is face-up, while the second is face-down.<br><br>\n\nGameplay:<br> Players take turns deciding whether to \"hit\" (take another card) or \"stand\" (keep their current hand). Face cards are worth 10 points, aces can be 1 or 11 points, and other cards are their face value. The player who gets closest to 21 without going over wins the round. If a player or the dealer goes over 21, they \"bust\" and lose the round. The first player to win a predetermined number of rounds or reach a target score wins the game."
    // },
    // {
    //   "GameID": 3,
    //   "Name": "Hearts",
    //   "description": "A classic trick-taking card game for four players. Avoid taking hearts and the queen of spades, which carry penalty points. The player with the fewest penalty points wins. Simple yet strategic fun for all.",
    //   "minPlayers": 4,
    //   "maxPlayers": 4,
    //   "toolsRequired": ["./assets/images/cards.png"],
    //   "toolsText": ["Cards"],
    //   "imageURL": "",
    //   "timeAvailable": 20,
    //   "difficulty": "Moderate",
    //   "drinking": "FALSE",
    //   "activity": "Involved",
    //   "rules": "<strong>Rules:</strong><br> Hearts is played with a standard 52-card deck. Remove the 2 of clubs to start with 51 cards. Deal 13 cards to each player if you have 4 players. With 3 players, deal 17 cards to each player. If there are 5 players, use all 51 cards and deal 10 cards to each player.<br><br>\n\n<strong>Gameplay:</strong><br>The objective is to avoid taking cards with hearts and the queen of spades, which carry penalty points. In each trick, the player with the 2 of clubs leads. Other players must follow suit if possible. The player with the highest card of the led suit wins the trick. Hearts cannot be led until they have been \"broken\" by a player taking hearts in a previous trick. The game continues until all cards are played. The player with the fewest penalty points wins the game."
    // },
    // {
    //   "GameID": 4,
    //   "Name": "Bridge",
    //   "description": "A four-player card game of strategy and communication. Form partnerships and use bids to determine the trump suit or play in no-trump. The objective is to win tricks by playing high-ranking cards. Bridge is a challenging game that combines teamwork and skill.",
    //   "minPlayers": 4,
    //   "maxPlayers": 4,
    //   "toolsRequired": ["./assets/images/cards.png"],
    //   "toolsText": ["Cards"],
    //   "imageURL": "",
    //   "timeAvailable": 30,
    //   "difficulty": "Hard",
    //   "drinking": "FALSE",
    //   "activity": "Involved",
    //   "rules": "<strong>Rules:</strong><br> Bridge is played with a standard deck of 52 cards and four players in two partnerships. Each player is dealt 13 cards. Players sit opposite their partners. The dealer shuffles and deals the cards clockwise.<br><br>\n\n<strong>Gameplay:</strong><br> The objective is to win tricks by playing higher-ranking cards in a series of deals. Players communicate through bids to determine the trump suit or whether to play in no-trump. The player to the dealer's left leads the first card, and players must follow suit if possible. The highest-ranking card of the led suit wins the trick. Points are scored for successfully making the contracted number of tricks based on bids. The partnership with the most points at the end of the game wins."
    // },
    // {
    //   "GameID": 5,
    //   "Name": "Solitaire",
    //   "description": "A classic solo card game played with a standard deck. Arrange cards to build foundation piles from Ace to King. Strategic moves and careful planning are your keys to success.",
    //   "minPlayers": 1,
    //   "maxPlayers": 1,
    //   "toolsRequired": ["./assets/images/cards.png"],
    //   "toolsText": ["Cards"],
    //   "imageURL": "",
    //   "timeAvailable": 20,
    //   "difficulty": "Easy",
    //   "drinking": "FALSE",
    //   "activity": "Relaxed",
    //   "rules": "<strong>Rules:</strong><br>Solitaire is played with a standard deck of 52 cards. The game is typically played by a single player. The cards are shuffled, and seven tableau piles of cards are dealt, with the top card in each pile face up. The remaining cards form the draw pile.<br><br>\n\n<strong>Gameplay:</strong><br>\nThe objective is to build four foundation piles from Ace to King in each suit. Cards can be moved from the tableau piles to the foundation piles in ascending order and by suit. In the tableau, cards are stacked in descending order and alternating colors. You can move cards between tableau piles to reveal hidden cards. Draw cards from the draw pile and use them strategically to create valid tableau and foundation moves. The game is won when all cards are built onto the foundation piles or when no more valid moves are possible."
    // },
    // {
    //   "GameID": 6,
    //   "Name": "Yahtzee",
    //   "description": "A classic dice game of luck and strategy. Roll five dice, aim for specific combinations, and maximize your score. Simple yet engaging fun for all ages.",
    //   "minPlayers": 1,
    //   "maxPlayers": 8,
    //   "toolsRequired": ["./assets/images/dice.png", "./assets/images/paper.png"],
    //   "toolsText": ["5 Dice", "Pen and Paper"],
    //   "imageURL": "",
    //   "timeAvailable": 10,
    //   "difficulty": "Easy",
    //   "drinking": "FALSE",
    //   "activity": "Relaxed",
    //   "rules": "<strong>Rules:</strong><br>\nYahtzee is played with five standard six-sided dice. The game is typically played solo or with multiple players. Each player has a scorecard to record their results.\n\n<strong>Gameplay:</strong><br>\n<em>1. Objective:</em> The goal is to achieve the highest total score by rolling and scoring different combinations of the dice.<br>\n2. **Setup**: Players take turns rolling five dice up to three times per turn.<br>\n3. **Scoring**: After each roll, players choose which category to score based on their dice results. Categories include ones, twos, threes, fours, fives, sixes, three of a kind, four of a kind, full house, small straight, large straight, chance, and Yahtzee (five of a kind).<br>\n4. **Joker Rule**: In the Yahtzee category, players aim to get multiple Yahtzees for bonus points.<br>\n5. **Strategy**: Players must decide which category to score in after each roll to maximize their points.<br>\n6. **Winning**: The player with the highest total score after completing all categories wins the game."
    // },
    // {
    //   "GameID": 7,
    //   "Name": "Boxes",
    //   "description": "A strategic paper-and-pencil game. Connect dots to create squares and claim them with your initials. Capture the most squares to win.",
    //   "minPlayers": 2,
    //   "maxPlayers": 2,
    //   "imageURL": "",
    //   "timeAvailable": 10,
    //   "difficultyLevel": "Easy",
    //   "drinking": "FALSE",
    //   "activity": "Involved",
    //   "rules": "<strong>Rules:</strong><br>\nBoxes, also known as Dots and Boxes, is a two-player paper and pencil game. The game is played on a grid of dots, and the goal is to create more boxes than your opponent.<br><br>\n\n<strong>Gameplay:</strong><br>\n<em>1. Objective:</em><br>\nThe objective is to create boxes by drawing lines to connect dots.<br><br>\n\n<em>2. Setup:</em><br>\n   - Draw a grid of dots on a piece of paper. The size of the grid can vary, but a common size is a 5x5 grid.\n   - Players take turns drawing one line at a time to connect two adjacent dots horizontally or vertically.<br><br>\n\n<em>3. Creating a Box:</em><br>\nWhen a player completes the fourth side of a square by drawing a line, they write their initials in that box to indicate that they've scored it.<br><br>\n\n<em>4. Turns:</em><br>\nPlayers take alternate turns, drawing one line on their turn.<br><br>\n\n<em>5. Winning:</em><br>\nThe game continues until no more lines can be drawn without completing a box. The player who has created the most boxes wins the game."
    // },
    // {
    //   "GameID": 8,
    //   "Name": "Slam",
    //   "description": "A dynamic card game of tricks. Play your cards wisely to capture valuable tricks and outwit your opponents.",
    //   "minPlayers": 2,
    //   "maxPlayers": 8,
    //   "imageURL": "",
    //   "timeAvailable": 15,
    //   "difficultyLevel": "Easy",
    //   "drinking": "FALSE",
    //   "activity": "Involved",
    //   "rules": "<strong>Rules:</strong><br>\nSlam is a card game played with a standard deck of cards, typically by 2 or more players. The game combines strategy, psychology, and a bit of luck. The objective is to win tricks and score points.\n\n<strong>Gameplay:</strong><br>\n<em>1. Objective:</em><br>\nThe goal is to win tricks and score points by playing the highest-ranking cards in each trick. The player or team with the most points at the end of the game wins.<br><br>\n\n<em>2. Deck:</em><br>\nSlam is played with a standard 52-card deck.<br><br>\n\n<em>3. Number of Players:</em><br>\nSlam can be played by 2 or more players. In the case of more players, they can form teams.<br><br>\n\n<em>4. Dealing:</em><br>\nThe dealer shuffles the deck and deals a set number of cards to each player, typically starting with 13 cards each in a 4-player game.<br><br>\n\n<em>5. Bidding:</em><br>\nPlayers take turns bidding on the number of tricks they expect to win in the round. Bids determine the contract for the round.<br><br>\n\n<em>6. Playing Tricks:</em><br>\nPlayers take turns leading tricks by playing a card. Other players must follow suit if possible. The highest-ranking card of the led suit wins the trick. Points are scored based on the contract and the number of tricks won.<br><br>"
    // },
    {
      "GameID": 9,
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
      "rules": ""
    },
    // {
    //   "GameID": 10,
    //   "Name": "Nim",
    //   "description": "A traditional two-player mathematical game where players take turns removing a certain number of objects (like stones) from distinct piles. The goal is to force your opponent into taking the last object. Nim involves strategic thinking and careful planning to outwit your opponent.",
    //   "minPlayers": 2,
    //   "maxPlayers": 2,
    //   "imageURL": "",
    //   "timeAvailable": 5,
    //   "difficultyLevel": "Easy",
    //   "drinking": "FALSE",
    //   "activity": "Relaxed",
    //   "rules": ""
    // },
    // {
    //   "GameID": 11,
    //   "Name": "Cheat",
    //   "description": "A strategic and deceptive card game where players take turns playing cards and making claims about the cards they've played. The catch? Bluffing is encouraged, and players often try to sneak in cards they don't actually have. It's all about convincing your opponents while catching them in their own bluffs. A game of wits, psychology, and careful observation.",
    //   "minPlayers": 3,
    //   "maxPlayers": 8,
    //   "imageURL": "",
    //   "timeAvailable": 10,
    //   "difficultyLevel": "Easy",
    //   "drinking": "FALSE",
    //   "activity": "Relaxed",
    //   "rules": ""
    // },
    // {
    //   "GameID": 12,
    //   "Name": "Flip Cup",
    //   "description": "A high-energy drinking game where teams compete to flip plastic cups upside down by flicking the rim with their fingers. Players take turns racing against the opposing team to successfully flip all their cups. Speed and coordination are key in this fun and social party game.",
    //   "minPlayers": 4,
    //   "maxPlayers": 12,
    //   "imageURL": "",
    //   "timeAvailable": 10,
    //   "difficultyLevel": "Easy",
    //   "drinking": "TRUE",
    //   "activity": "Involved",
    //   "rules": ""
    // },
    // {
    //   "GameID": 13,
    //   "Name": "Charades",
    //   "description": "Charades is a classic party game that requires no special equipment. Players take turns acting out a word or phrase without speaking while their team tries to guess what they're portraying. It's a fun and interactive game that often leads to lots of laughter and entertainment.",
    //   "minPlayers": 4,
    //   "maxPlayers": 20,
    //   "imageURL": "",
    //   "timeAvailable": 10,
    //   "difficultyLevel": "Easy",
    //   "drinking": "FALSE",
    //   "activity": "Involved",
    //   "rules": ""
    // },
    // {
    //   "GameID": 14,
    //   "Name": "Spoons",
    //   "description": "A fast-paced card game of speed and strategy. Players aim to collect a set of cards and grab a spoon from the center of the table. The player left without a spoon loses the round. Quick reflexes and keen observation skills are essential for victory.",
    //   "minPlayers": 3,
    //   "maxPlayers": 13,
    //   "imageURL": "",
    //   "timeAvailable": 30,
    //   "difficultyLevel": "Easy",
    //   "drinking": "FALSE",
    //   "activity": "Involved",
    //   "rules": ""
    // }
  ]
