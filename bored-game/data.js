export const gamesData = [

  {
    "GameID": 1,
    "name": "20 Questions",
    "aka": ["Person, Place, or Thing"],
    "description": "A classic parlour game that encourages deductive reasoning and creativity. One player thinks of an object, and the other players have up to 20 questions to guess what it is, with the answerer only responding 'yes' or 'no'. The object in  can be any noun, proper or not.",
    "minPlayers": 2,
    "maxPlayers": 10,
    "toolsRequired": ["./assets/images/notool.png"],
    "toolsText": ["No Tools Required"],
    "imageURL": "",
    "timeAvailable": 10,
    "difficulty": "Easy",
    "drinking": "FALSE",
    "activity": "Casual",
    "vibes": ["Casual", "High-Energy or Chill", "Playful", "Free-Flowing",  "Loud or Quiet"],
    "rules": `<strong>Overview:</strong><br><br>
        20 Questions is a simple, engaging game that tests players' ability to think creatively and ask strategic questions. Perfect for parties or casual gatherings, it requires no tools or preparations.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> Guess the secret object within 20 questions.<br><br>
        2. <em>Setup:</em><br><br> Choose one player to think of an object and keep it secret from the others.<br><br>
        3. <em>Playing:</em><br><br> The guessers take turns asking yes-or-no questions to narrow down the possibilities. The thinker can only respond with 'yes', 'no', or 'I don't know'.<br><br>
        4. <em>Winning:</em><br><br> The game ends when a guesser correctly identifies the object or when 20 questions have been asked without success. The correct guesser or the thinker wins, respectively.<br><br>
        <strong>Variants</strong><br><br><em>Smurf:</em><br><br>Instead of guessing a person, place, or thing, guessers ask yes or no questions in search of a secret verb, or action. Players use the word 'smurf' to ask questions. eg "Do I smurf every day?"`
},

  {
    "GameID": 2,
    "name": "31",
    "aka": ["Scat", "Blitz"],
    "description": "A fast-paced and easy-to-learn card game where players try to get a hand totaling 31 points in one suit. It's an engaging game of strategy and chance, suitable for players of all ages.",
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
    "rules": `<strong>Overview:</strong><br><br>
        31 is a fast-paced card game that uses a standard 52-card deck. The game can be played by 2 to 9 players. Its objective is to assemble a hand closest in value to 31 points in the same suit.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> Players aim to get a hand totaling as close to 31 points as possible in the same suit or to have the highest hand at the table to avoid the penalty.<br><br>
        2. <em>Setup:</em><br><br> Each player starts with three cards, and one card is placed face up to start the discard pile, with the rest of the deck forming the draw pile.<br><br>
        3. <em>Playing:</em><br><br> On their turn, a player may draw the top card from either the draw pile or the discard pile and then must discard one card. The aim is to improve the total value of one's hand in the same suit.<br><br>
        4. <em>Knocking:</em><br><br> A player can end the round by 'knocking' instead of playing their turn. All other players then get one more turn to improve their hands.<br><br>
        5. <em>Scoring:</em><br><br> Cards in the same suit are added together to calculate the hand's value. Face cards are worth 10 points, aces are worth 11 points, and all other cards are worth their face value. The player with the lowest hand value after a knock or when the deck is depleted loses the round and receives a penalty.<br><br>
        6. <em>Winning:</em><br><br> The game continues until a predetermined number of rounds or until a player receives a specific amount of penalties. The player with the fewest penalties at the end of the game wins.`

  },

  {
    "GameID": "3",
    "name": "Beer Pong",
    "aka": ["Pong", "Beirut"],
    "description": "A competitive party game where players throw a ping pong ball across a table with the intent of landing the ball in one of several cups of beer on the other end.",
    "minPlayers": 2,
    "maxPlayers": 4,
    "toolsRequired": ["./assets/images/pingpong.png", "./assets/images/cup.png", "./assets/images/table.png"],
    "toolsText": ["Ping Pong Balls", "Cups", "Tabletop"],
    "timeAvailable": 20, // Estimated average game length in minutes
    "difficulty": "Easy",
    "drinking": "TRUE",
    "activity": "High-Energy",
    "vibes": ["Competitive", "High-Energy", "Playful", "Loud"],
    "rules": `<strong>Overview:</strong><br><br>Beer Pong is a beloved party game that tests players' aiming and coordination skills in a fun and competitive setting. Teams or individuals take turns attempting to throw ping pong balls into the opposing team's beer cups.<br><br><br><strong>Gameplay:</strong><br><br>1. <em>Objective:</em><br><br>The aim is to eliminate all the opposing team's cups by successfully landing a ball in each.<br><br>2. <em>Setup:</em><br><br>Arrange cups in a triangle formation at each end of the table, and fill them with beer. Decide who starts with a friendly 'eye-to-eye' challenge or a coin toss.<br><br>3. <em>Playing:</em><br><br>Players take turns throwing or bouncing the ball towards the opponent's cups. If a ball lands in a cup, the cup is removed, and the defending team must drink the contents.<br><br>4. <em>Winning:</em><br><br>The first team to eliminate all the opponent's cups wins. Optionally, the losing team must consume the remaining beer on the winning side.<br><br><strong>Variations:</strong><br><br>Rules can vary significantly with house rules, including 're-racks,' 'bounces,' and 'redemption' shots.`,
  },


  {
    "GameID": 4,
    "name": "Blackjack",
    "aka": ["21"],
    "description": "A popular casino card game where players aim to get a value as close to 21 as possible without going over. Face cards are worth 10 points, aces can be 1 or 11, and strategy is key. Beat the dealer and win the round.",
    "minPlayers": 2,
    "maxPlayers": 7,
    "toolsRequired": ["./assets/images/cards.png", "./assets/images/coin.png"],
    "toolsText": ["Cards", "Chips"],
    // "imageURL": "",
    "timeAvailable": 20,
    "difficulty": "Easy",
    "drinking": "FALSE",
    "activity": "Involved",
    "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
    "rules": `<strong>Overview:</strong><br><br>
    Blackjack, also known as 21, is a popular card game found in casinos worldwide. The game is played against the dealer, and the objective is to beat the dealer's hand without going over 21.<br><br><br>
    <strong>Gameplay:</strong><br><br>
    1. <em>Objective:</em><br><br> To have a hand value as close to 21 as possible without exceeding it, and higher than the dealer's hand value.<br><br>
    2. <em>Setup:</em><br><br> Each player places a bet, and then the dealer deals two cards to each player and two to themselves, with one dealer card face up.<br><br>
    3. <em>Playing:</em><br><br> Players decide whether to 'hit' (take another card), 'stand' (keep their current hand), 'double down' (double the bet for one more card), 'split' (if two cards are the same, divide into two hands) or 'surrender' (give up half the bet and end the game).<br><br>
    4. <em>Dealer's Play:</em><br><br> After all players have made their decisions, the dealer reveals their hidden card and must hit until their cards total 17 or higher.<br><br>
    5. <em>Scoring:</em><br><br> Aces can be 1 or 11, face cards are 10, and all other cards are their face value. If a player gets a blackjack (an ace and a 10-value card as the first two cards), the payout is usually 3 to 2 unless the dealer also has a blackjack, which results in a push.<br><br>
    6. <em>Winning:</em><br><br> Players win by having a higher hand value than the dealer without busting, or by the dealer busting (going over 21).`
  },

  {
    "GameID": 5,
    "name": "Boxes",
    "aka": ["Dots and Boxes", "Dot Game", "Dot-to-Dot", "Squares"],
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
    "rules": `<strong>Overview:</strong><br><br>
        Boxes is a pencil-and-paper game for two or more players. It starts with an empty grid of dots. Players take turns adding a single horizontal or vertical line between two unconnected adjacent dots. The player who completes the fourth side of a 1×1 box earns one point and takes another turn.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The goal is to have the highest number of squares or "boxes" by the end of the game.<br><br>
        2. <em>Setup:</em><br><br> Begin with a square grid of dots. The grid size can vary, but a standard size is 8x8.<br><br>
        3. <em>Playing:</em><br><br> Players take turns drawing a single line (vertically or horizontally) between two unconnected dots next to each other. If a player completes the fourth side of a box, they earn a point, mark the box with their initial, and take another turn.<br><br>
        4. <em>Strategy:</em><br><br> Players must balance the act of creating boxes for themselves while not setting up easy boxes for their opponents to claim on their turns.<br><br>
        5. <em>Winning:</em><br><br> The game ends when all possible lines have been drawn, and no more boxes can be formed. The player with the most boxes wins.`


  },

  {
    "GameID": 6,
    "name": "Bridge",
    "aka": ["Contract Bridge"],
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
    "rules": `<strong>Overview:</strong><br><br>
        Bridge is a trick-taking card game using a standard 52-card deck. It is played by four players in two competing partnerships, with partners sitting opposite each other around a table. The game consists of two main parts: bidding (or auction) and card play.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The aim is to win as many tricks as possible based on the contract established during the bidding phase.<br><br>
        2. <em>Setup:</em><br><br> The deck is shuffled, and each player is dealt 13 cards. The bidding process then determines the contract for the game, including the trump suit and the number of tricks one team must take to fulfill their contract.<br><br>
        3. <em>Bidding:</em><br><br> Players take turns making bids to declare how many tricks their team will try to win, along with the trump suit or if the hand will be played without a trump suit (No Trump). The bidding continues until three consecutive players pass, establishing the final contract.<br><br>
        4. <em>Card Play:</em><br><br> The player who made the final bid (the declarer) leads the first trick. Players must follow suit if possible; if not, they may play any card. A trick is won by the highest card of the suit led, or by the highest trump if trumps were played.<br><br>
        5. <em>Scoring:</em><br><br> After all 13 tricks have been played, scores are calculated based on the number of tricks won compared to the contract, with points awarded for fulfilling the contract and penalties for failing to meet it.<br><br>
        6. <em>Winning:</em><br><br> The game can be played as a standalone hand or as part of a longer session, with victory conditions varying by the format (e.g., highest total points over a set number of hands).`


  },

  {
    "GameID": 7,
    "name": "Charades",
    "aka": [""],
    "description": "A classic party game that requires no special equipment. Players take turns acting out a word or phrase without speaking while their team tries to guess what they're portraying. It's a fun and interactive game that often leads to lots of laughter and entertainment.",
    "minPlayers": 4,
    "maxPlayers": 20,
    "toolsRequired": ["./assets/images/notool.png"],
    "toolsText": ["No Tools Required"],
    "imageURL": "",
    "timeAvailable": 10,
    "difficulty": "Easy",
    "drinking": "FALSE",
    "activity": "Involved",
    "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
    "rules": `<strong>Overview:</strong><br><br>
        Charades is a classic party game where players act out a word or phrase without speaking, while their teammates try to guess what it is. It can be played with any number of players divided into two or more teams.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> Teams compete to guess as many words or phrases correctly within a set time limit. Points are awarded for each correct guess.<br><br>
        2. <em>Setup:</em><br><br> Words or phrases are prepared beforehand and placed in a container. Teams take turns performing and guessing.<br><br>
        3. <em>Performing:</em><br><br> On their turn, a player from the performing team selects a word or phrase from the container and acts it out without speaking or making any verbal sounds. Mime, gestures, and facial expressions are used to convey the word or phrase.<br><br>
        4. <em>Guessing:</em><br><br> The player's teammates attempt to guess the word or phrase based on the performance within a set time limit, usually one or two minutes.<br><br>
        5. <em>Scoring:</em><br><br> If the team guesses correctly within the time limit, they earn a point. If they do not guess correctly, no points are awarded, and the turn passes to the next team.<br><br>
        6. <em>Winning:</em><br><br> The game continues until all words or phrases have been acted out. The team with the most points at the end of the game wins.`


  },

  {
    "GameID": 8,
    "name": "Cheat",
    "aka": ["BS", "Bullshit"],
    "description": "A strategic and deceptive card game where players take turns playing cards and making claims about the cards they've played. It's all about convincing your opponents while catching them in their own bluffs. A game of wits, psychology, and careful observation.",
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
    "rules": `<strong>Overview:</strong><br><br>
        Cheat is a game of deception where players aim to be the first to get rid of all their cards. It can be played by a group of 3 or more players with a standard deck of cards.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The goal is to discard all your cards. Players do this by taking turns placing cards face down in the center and declaring them to be a certain rank. Players can lie about the rank of the cards they are playing.<br><br>
        2. <em>Setup:</em><br><br> The deck is shuffled and cards are dealt evenly to all players. The order of play is decided, often by drawing the highest card from the deck.<br><br>
        3. <em>Playing:</em><br><br> On their turn, a player must place one or more cards face down in the center pile and declare these cards' rank, which must follow sequentially from the previous rank declared (starting anew if there was a challenge in the previous round).<br><br>
        4. <em>Challenging:</em><br><br> Any player can challenge the current player's declaration by calling "Cheat" or "BS" if they believe the player is lying. If the challenge is made, the cards just played are revealed.<br><br>
            - If the challenge is correct (the player lied), the lying player must take the entire pile of cards into their hand.<br>
            - If the challenge is incorrect (the player was telling the truth), the challenger must take the entire pile.<br><br>
        5. <em>Winning:</em><br><br> The first player to successfully discard all of their cards without being caught in a lie wins the game. If a player discards all their cards and there is no challenge, they are declared the winner.`
  },

  {
    "GameID": 9,
    "name": "Cribbage",
    "aka": ["Crib"],
    "description": "A classic card game known for its unique  scoring system. Players score points by forming combinations of cards.   The game is traditionally played with a special Cribbage board used for   scorekeeping.",
    "minPlayers": 2,
    "maxPlayers": 4,
    "toolsRequired": ["./assets/images/cards.png"],
    "toolsText": ["Cards"],
    "timeAvailable": 30,
    "difficulty": "Moderate",
    "vibes": ["Competitive", "Chill", "Playful", "Free-Flowing", "Loud"],
    "rules": `<strong>Overview:</strong><br><br>
        Cribbage is a card game that involves creating combinations of cards for points. It is played with a standard 52-card deck and a unique scoring board. Cribbage can be played by 2 to 4 players, but it is most commonly played as a two-player game.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The goal is to be the first player to score 121 points, which are scored by making combinations of cards for points during play and in hand scoring.<br><br>
        2. <em>Setup:</em><br><br> Players draw cards to determine the dealer, shuffle the deck, and deal six cards to each player (or five if playing with three or four players). Each player then discards two cards into the "crib" which belongs to the dealer.<br><br>
        3. <em>The Play:</em><br><br> Starting with the player to the dealer's left, players take turns playing a single card, face up, while announcing the cumulative total of the cards played. The aim is to avoid being the player who increases the total to over 31. Points are scored for combinations made during this phase.<br><br>
        4. <em>The Show:</em><br><br> After the play, each player, starting with the non-dealer, scores their hand plus the starter card, followed by the dealer scoring their hand and the crib. Combinations that score points include pairs, runs, 15s, and flushes.<br><br>
        5. <em>Winning:</em><br><br> The game continues with players alternating as the dealer until one player scores 121 points or more, winning the game.`
  },

  {
    "GameID": 10,
    "name": "Dominoes",
    "aka": ["Block Dominoes",],
    "description": "A tile-based game with a long history and many variations, where players match ends of tiles to extend the line of play. The game's objective varies by version but often involves emptying one's hand while blocking the opponent or scoring based on the pips on the tiles.",
    "minPlayers": 2,
    "maxPlayers": 4,
    "toolsRequired": ["./assets/images/dominoes.png"],
    "toolsText": ["Dominoes"],
    "imageURL": "",
    "timeAvailable": 30,
    "difficulty": "Medium",
    "drinking": "FALSE",
    "activity": "Competitive",
    "vibes": ["Strategic", "Rule-Abiding", "Competitive", "Quiet"],
    "rules": `<strong>Overview:</strong><br><br>
        Dominoes is a classic, strategic game played with rectangular tiles. Each tile is divided into two square ends, each with a number of pips (or empty).<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The primary goal in most domino games is to play all your tiles onto the table before your opponents do or score the highest points based on the pips at the ends of the chain.<br><br>
        2. <em>Setup:</em><br><br> Tiles are shuffled face down and each player draws a set number, forming their hand. The remaining tiles form the "boneyard".<br><br>
        3. <em>Playing:</em><br><br> Players in turn lay a tile onto the table positioning it so that it touches either end of the domino chain which thus gradually increases in length. A tile may only be placed if it has an end that matches one of the ends of the chain.<br><br>
        4. <em>Scoring:</em><br><br> Scoring can occur during the play by making the exposed ends of the chain total to a multiple of five (in some variations). The game can also end when one player uses up all their tiles, or when no more plays can be made. At that point, the player with the least pips or no tiles wins.<br><br>
        <strong>Variants</strong><br><br>
        1. <em>Block Dominoes:</em><br><br> One of the simplest and most widely played versions of the game, suitable for 2 to 4 players. In Block Dominoes, players aim to empty their hands while blocking their opponents from doing so, and the game ends when one player has played all their dominoes or when the game is blocked and no more moves are available. Points are then tallied based on the number of pips (dots) on the dominoes left in the opponents' hands, with the goal of having the lowest score.<br><br>
        2. <em>Chickenfoot</em><br><br> A fun and engaging domino variant that starts with a central double domino. Players take turns laying down matching dominoes, creating a shape that resembles a chicken's foot. The game introduces a unique twist: when a double domino is played, the next three plays must branch off from it, forming the "chickenfoot." Gameplay continues until one player has played all their dominoes or no further moves are possible.<br><br>
        3. <em>Mexican Train:</em><br><br> This popular variant differs from traditional block or draw dominoes by allowing players to create their own line of play (or "train") starting from a central hub or station. Additionally, there's a communal "Mexican Train" that any player can add onto if they cannot play on their personal train or others'. The game starts with a double domino in the center, and players aim to be the first to play all their dominoes by matching the number of pips. It introduces more strategic opportunities and can accommodate more players, making it a favorite for group and family play.`
},


  {
    "GameID": 11,
    "name": "Euchre",
    "aka": ["Eucre"],
    "description": "Euchre is a trick-taking card game most commonly played with four people in two partnerships. It's a fast-paced game that involves strategic thinking and is played with a partial deck of cards.",
    "minPlayers": 4,
    "maxPlayers": 4,
    "toolsRequired": ["./assets/images/cards.png"],
    "toolsText": ["Partial Deck (24 cards)"],
    "imageURL": "",
    "timeAvailable": 10,
    "difficulty": "Moderate",
    "drinking": "FALSE",
    "activity": "Competitive",
    "vibes": ["Strategic", "Social", "Competitive"],
    "rules": `<strong>Overview:</strong><br><br>
        Euchre is a popular card game that involves capturing tricks. It is traditionally played with four players in teams of two. The game uses a partial standard deck of 24 cards, ranking from 9 to Ace.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The main goal in Euchre is to win at least three of the five tricks in each hand. A team scores points by winning three or more tricks. Winning all five tricks scores more points.<br><br>
        2. <em>Setup:</em><br><br> Remove all cards from the deck except 9s through Aces. Deal five cards to each player and flip one card face up to suggest the trump suit.<br><br>
        3. <em>Bidding:</em><br><br> Starting to the dealer’s left, players decide whether to pass or order the dealer to pick up the face-up card, making that suit the trump. If all players pass, they can choose to select a trump suit or pass again.<br><br>
        4. <em>Playing:</em><br><br> The player to the dealer’s left leads the first trick. Players must follow suit if possible. If they cannot, they may play any card. The highest card of the led suit wins the trick unless trumped.<br><br>
        5. <em>Scoring:</em><br><br> Teams score points for winning three or more tricks. Winning all five tricks (a 'march') scores higher. The game is typically played to 10 points.<br><br>
        6. <em>Strategy:</em><br><br> Players must work with their partners to win tricks by playing higher cards or using trump cards strategically. Communication and predicting opponents' moves are key to success.<br><br>
        <strong>Winning:</strong><br><br> The game continues until one team scores 10 points, thus winning the game.`
  },


  {
    "GameID": 12,
    "name": "Flip Cup",
    "aka": ["Taps", "Flippy Cup", "Tippy Cup"],
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
    "rules": `<strong>Overview:</strong><br><br>
Flip Cup is a team-based drinking game that involves flipping cups off the edge of a table with your fingers. It is commonly played with two teams of equal members standing on opposite sides of a table, with each participant having a plastic cup filled with a set amount of beer or another beverage in front of them.<br><br><br>
<strong>Gameplay:</strong><br><br>
1. <em>Objective:</em><br><br> To be the first team to flip all their cups upside down.<br><br>
2. <em>Setup:</em><br><br> Arrange two teams of equal members on opposite sides of a table. Each player has a plastic cup filled with a beverage. The game starts with the first players on each team chugging their beverage and then attempting to flip their cup upside down by flicking the rim of the cup with their fingers.<br><br>
3. <em>Playing:</em><br><br> Once a player successfully flips their cup, the next player in line on their team can start drinking and flipping. This continues until one team has all members successfully flip their cups.<br><br>
4. <em>Rules:</em><br><br> Cups must be placed right-side up at the edge of the table for flipping. Players can only use one hand to flip their cup. If a player fails to flip their cup upside down, they must reset it and try again until successful.<br><br>
5. <em>Winning:</em><br><br> The game ends when one team has all members successfully flip their cups. That team is declared the winner. Do what you will with the winning and losing teams.`
  },

  {
    "GameID": 13,
    "name": "Hearts",
    "aka": ["American Hearts", "Black Lady", "Black Maria", "Black Widow", "Slippery Anne"],
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
    "rules": `<strong>Overview:</strong><br><br>
Hearts is a trick-taking card game played by four players. The game uses a standard 52-card deck, and the objective is to score as few points as possible. Hearts and the Queen of Spades carry penalty points, while the other cards are point-free.<br><br><br>
<strong>Gameplay:</strong><br><br>
1. <em>Objective:</em><br><br> To accumulate the fewest penalty points. Each Heart card is worth 1 point, and the Queen of Spades is worth 13 points.<br><br>
2. <em>Setup:</em><br><br> The deck is shuffled and dealt evenly among the players, so each player has 13 cards. In some variations, players pass three cards to another player at the start.<br><br>
3. <em>Playing:</em><br><br> The player holding the 2 of Clubs starts the first trick. Players must follow suit if able; if not, they may play any card except for a Heart or the Queen of Spades on the first trick. Hearts cannot be led until they have been 'broken' (played on a previous trick).<br><br>
4. <em>Scoring:</em><br><br> After all 13 tricks have been played, players count the number of Heart cards and the Queen of Spades they have taken. The total number of penalty points for each player is calculated.<br><br>
5. <em>Shooting the Moon:</em><br><br> A player who captures all 13 Heart cards and the Queen of Spades in a round can choose to subtract 26 points from their own score or add 26 points to all other players' scores.<br><br>
6. <em>Winning:</em><br><br> The game typically continues until a player reaches a predetermined score (usually 100 points). The player with the lowest score at that time is declared the winner.`

  },

  {
    "GameID": 14,
    "name": "Nim",
    "aka": ["Marienbad Game"],
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
    "rules": `<strong>Overview:</strong><br><br>
        Nim is a mathematical strategy game for two players. It involves a number of objects (such as matches, coins, stones, or sugar packets) arranged in rows. Players take turns removing objects, with the goal of being the last to take an object.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The aim is to force the opponent to take the last object.<br><br>
        2. <em>Setup:</em><br><br> Objects are arranged in several rows, with the number of objects per row varying. The exact setup can vary, but a common one is three rows containing 3, 5, and 7 objects, respectively.<br><br>
        3. <em>Playing:</em><br><br> Players take turns removing any number of objects from a single row. At least one object must be taken, but a player may take as many as they wish from the chosen row.<br><br>
        4. <em>Strategy:</em><br><br> Winning at Nim requires strategic planning. Players must think ahead to leave their opponent in a position where they have no choice but to take the last object. The game involves mathematical underpinnings, particularly the concept of Nim-sums, which can determine the best moves.<br><br>
        5. <em>Winning:</em><br><br> The game ends when all objects have been taken. The player who takes the last object is the loser in traditional rules, but variations exist where taking the last object makes a player the winner.`

  },

  {
    "GameID": 15,
    "name": "Kings Corner",
    "aka": ["Kings in the Corner"],
    "description": "A card game for 2-4 players that combines elements of solitaire and poker. Players aim to play all their cards by forming card sequences in a common play area, with kings placed in the corners serving as the foundation for new sequences.",
    "minPlayers": 2,
    "maxPlayers": 4,
    "toolsRequired": ["./assets/images/cards.png"],
    "toolsText": ["Cards"],
    "imageURL": "",
    "timeAvailable": 15,
    "difficulty": "Easy",
    "drinking": "FALSE",
    "activity": "Casual",
    "vibes": ["Competitive", "Chill", "Playful", "Rule-Abiding"],
    "rules": `<strong>Overview:</strong><br><br>
        Kings in the Corner involves players trying to empty their hands by playing cards onto communal piles, starting with kings in the corner positions. It's a solitaire-like game for multiple players, where strategy and luck play key roles.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The aim is to be the first to get rid of all your cards by playing them to the communal layout, especially in the corners where kings start new piles.<br><br>
        2. <em>Setup:</em><br><br> Each player is dealt seven cards, and the remaining deck forms a draw pile. The first player turns over a card to start the central pile.<br><br>
        3. <em>Playing:</em><br><br> Players take turns adding cards to the layout, where cards must be one rank lower and opposite in color to the card they are placed on. Kings create new piles in the corners.<br><br>
        4. <em>Winning:</em><br><br> The game ends when a player has no more cards to play. Points are scored based on cards left in opponents' hands, aiming for the lowest score over several rounds to win.`
},


  {
    "GameID": 16,
    "name": "Palace",
    "aka": ["Shithead", "Karma", "Threes"],
    "description": "A casual card game for 2 to 5 players that is easy to learn and offers quick, fun rounds. The objective is to be the first to play all your cards by placing them on the discard pile, following specific rules for card ranks.",
    "minPlayers": 2,
    "maxPlayers": 5,
    "toolsRequired": ["./assets/images/cards.png"],
    "toolsText": ["Cards"],
    "imageURL": "",
    "timeAvailable": 15,
    "difficulty": "Easy",
    "drinking": "OPTIONAL", // Indicate if drinking is optional or part of the game
    "activity": "Relaxed",
    "vibes": ["Competitive", "Playful", "Casual"],
    "rules": `<strong>Overview:</strong><br><br>
          Palace is a fast-paced card game where the objective is to be the first to play all of your cards. The game involves strategy, luck, and the ability to bluff and read your opponents.<br><br><br>
          <strong>Gameplay:</strong><br><br>
          1. <em>The Pack:</em><br><br> Two players use one standard deck of 52 cards. For 3-5 players, two decks are used.<br><br>
          2. <em>Rank of Cards:</em><br><br> The ranking is A down to 3, with 2 being a special card that resets the deck.<br><br>
          3. <em>Object of the Game:</em><br><br> The aim is to be the first to discard all your cards by playing them in ascending order on the discard pile.<br><br>
          4. <em>The Deal:</em><br><br> Each player is dealt three face-down cards, six to their hand, and then places three from their hand face-up on the face-down cards.<br><br>
          5. <em>The Play:</em><br><br> Players take turns playing cards equal to or higher than the start card. A '2' card resets the discard pile, while a '10' removes it from the game. Four identical numbers in a row also clear the discard pile. The game proceeds until one player has no cards left, using their hand, face-up, and eventually face-down cards.<br><br>
          6. <em>How to Keep Score:</em><br><br> The first player to play all their cards (hand, face-up, and face-down) wins the game.`
  },

  {
    "GameID": 17,
    "name": "Rummy",
    "aka": ["Rum?"],
    "description": "Rummy is group of matching-card games known for gameplay based on matching cards of the same rank or sequence and same suit.",
    "minPlayers": 2,
    "maxPlayers": 6,
    "toolsRequired": ["./assets/images/cards.png"],
    "toolsText": ["Cards"],
    "imageURL": "",
    "timeAvailable": 20,
    "difficulty": "Medium",
    "activity": "Strategic",
    "vibes": ["Competitive or Casual", "High-Energy or Chill", "Playful or Serious", "Rule-Abiding", "Loud or Quiet"],
    "rules": `<strong>Overview</strong><br><br>
        Rummy games revolve around a simple matching mechanic where players aim to form melds of cards, which consist of sets, three or four of a kind of the smae rank; or runs, three or more cards in sequence, of the same suit. It's adaptable and can be played with several variations.<br><br><br>
        <strong>Gameplay</strong><br><br>
        1. <em>Objective:</em><br><br> Players aim to form and lay down melds (sets or runs) and minimize deadwood (unmatched cards).<br><br>
        2. <em>Setup:</em><br><br> Each player is dealt a specific number of cards from the deck. The undealt cards form the stock, with the top card turned face up to start the discard pile.<br><br>
        3. <em>Playing:</em><br><br> Players draw from either the stock or discard pile to form melds. Unmatched cards count as deadwood.<br><br>
        4. <em>Scoring:</em><br><br> Games can be played to a set point limit, with players scoring for melds and subtracting for deadwood.<br><br>
        <strong>Variants</strong><br><br> 1. <em>Gin Rummy:</em><br><br> distinguishes itself with a unique gameplay mechanic where the objective is to "knock." Players aim to improve their hand by forming melds (sets and runs) and eliminating deadwood (unmatched cards). Unlike traditional Rummy, where players may lay off cards on opponents' melds, in Gin Rummy, players must keep their melds in hand until they can end the round by knocking. Knocking is permitted only when the total value of deadwood in the knocker's hand is 10 points or less.<br><br>
        2. <em>500 Rum:</em><br><br>a variant of Rummy that supports 2-8 players and uses a larger deck of cards, often two 52-card decks with jokers. The game's objective is similar to basic Rummy, aiming to form melds of three or more cards of the same rank or sequential cards in the same suit. However, 500 Rum introduces the concept of "buying" cards from the discard pile, adding a strategic layer to the game. Players can "buy" the top discard by taking it into their hand, provided they also draw an additional card from the stock as a penalty. First to 500 points wins.<br><br>
        3. <em>Contract Rummy</em><br><br>A Rummy variation that introduces predefined requirements ("contracts") for each round, such as a specific number of sets or runs a player must achieve before they can lay down any cards. The game progresses through several rounds, with each round having a unique contract, increasing in difficulty.`
},



  {
    "GameID": 18,
    "name": "Seven Card Stud",
    "aka": ["Stud", "Stud Poker"],
    "description": "A classic poker game where each player receives a mix of face-down and face-up cards dealt in multiple betting rounds. Players aim to make the best five-card combination from the seven cards they are dealt.",
    "minPlayers": 2,
    "maxPlayers": 8,
    "toolsRequired": ["./assets/images/cards.png", "./assets/images/coin.png"],
    "toolsText": ["Cards", "Chips"],
    "imageURL": "",
    "timeAvailable": 30,
    "difficulty": "Moderate",
    "drinking": "FALSE",
    "activity": "Competitive",
    "vibes": ["Competitive or Casual", "High-Energy or Chill", "Playful or Serious", "Rule-Abiding", "Loud or Quiet"],
    "rules": `<strong>Overview:</strong><br><br>
          Seven Card Stud is one of the oldest forms of poker, where players are dealt seven cards throughout the hand, but only the best five-card hand possible for each player is used to determine the winner.<br><br><br>
          <strong>Gameplay:</strong><br><br>
          1. <em>Objective:</em><br><br> The goal is to create the best five-card poker hand from the seven cards you are dealt.<br><br>
          2. <em>Setup:</em><br><br> Each player pays an ante and receives two cards face down (hole cards) and one card face up (door card).<br><br>
          3. <em>Betting Rounds:</em><br><br> There are five betting rounds. The first round of betting starts with the player with the highest door card. Subsequent rounds follow the poker betting structure.<br><br>
          4. <em>The Play:</em><br><br> Players receive three more face-up cards (the fourth, fifth, and sixth cards) and one final card face down (the seventh card), with a betting round after each.<br><br>
          5. <em>Showdown:</em><br><br> Players reveal their hands in a showdown, with the best five-card hand winning the pot.<br><br>
          6. <em>Strategy:</em><br><br> Paying attention to the up-cards of your opponents is crucial in determining the strength of your hand relative to theirs. Bluffing and reading other players are key elements of strategy in Seven Card Stud.<br><br>
          <strong>Variants:</strong><br><br>1. <em>High-Low Split:</em> In some variations, the pot is split between the best high hand and the best low hand. Players can win both halves of the pot with the right combination of cards.<br><br>2. <em>Razz:</em> A lowball version of Seven Card Stud where the lowest hand wins. Aces are low, and straights and flushes do not count against the hand.<br><br>3. <em>Roll Your Own:</em> A variation where players choose which of their cards are face up and which are face down, adding an extra layer of strategy to the game.`
  },


  {
    "GameID": 19,
    "name": "Solitaire",
    "aka": ["Patience", "Card Solitaire"],
    "description": "A classic solo card game played with a standard deck. Arrange cards to build foundation piles from Ace to King. Strategic moves and careful planning are your keys to success.",
    "minPlayers": 1,
    "maxPlayers": 1,
    "toolsRequired": ["./assets/images/cards.png"],
    "toolsText": ["Cards"],
    "timeAvailable": 20,
    "difficulty": "Easy",
    "drinking": "FALSE",
    "activity": "Relaxed",
    "vibes": ["Casual", "Chill", "Serious", "Rule-Abiding", "Quiet"],
    "rules": `<strong>Overview:</strong><br><br>
        Solitaire, also known as Patience, is a single-player card game. The game is played with a standard deck of 52 cards. The objective is to move all the cards to a foundation, organizing them by suit in ascending order from Ace to King.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The goal is to release and play into position certain cards to build up each foundation, in sequence and in suit, from the ace through the king.<br><br><br>
        2. <em>Setup:</em> <br><br>The tableau consists of seven piles. The first pile has one card, the second pile has two cards, and so on, with the top card face up. The remaining cards form the stock (or hand) pile.<br><br><br>
        3. <em>Playing:</em> <br><br>Players can move cards between the tableau piles, placing them in descending order and alternating colors. Only Kings or sequences starting with a King can be placed on empty tableau spots.<br><br><br>
        4. <em>Draw Pile:</em><br><br> Cards from the stock pile can be flipped over one at a time to the waste pile. The top card of the waste pile can be played to the tableau or foundation.<br><br><br>
        5. <em>Foundations:</em><br><br> Each foundation pile must start with an Ace. Once an Ace is in place, cards of the same suit can be placed on top in ascending order.<br><br><br>
        6. <em>Winning:</em><br><br> The game is won when all cards have been moved to the foundation piles, sorted into their respective suits in ascending order.<br><br><br>
        7. <em>Strategy:</em> <br><br>Effective strategy involves careful planning and the foresight to leave spaces for future moves, ensuring that sequences can be moved and not blocking access to cards that will be needed later.`
  },

{
    "GameID": 20,
    "name": "Spit",
    "aka": ["Slam"],
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
    "vibes": ["Competitive", "High-Energy", "Playful", "Rule-Abiding", "Loud"],
    "rules": `<strong>Overview:</strong><br><br>
        Slam is a fast-paced game for two to eight players, using a standard 52-card deck. The objective is to be the first to get rid of  all your cards through quick thinking and faster reactions.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> To win, players must be the first to play all of their cards by matching them to a central pile by either number or suit.<br><br>
        2. <em>Setup:</em><br><br> Cards are evenly distributed among players. Each player holds their cards in a stack, face down. A central play area is designated for the  discard pile.<br><br>
        3. <em>Playing:</em><br><br> The game starts with one player flipping a card from their stack into the central pile. Subsequent players must quickly play a card that  matches the top card of the central pile by either number or suit. If a player cannot play, they must draw a card from the central deck if available.<br><br>
        4. <em>Slam Rule:</em><br><br> If a player puts down a card that exactly matches the top card of the central pile (both number and suit), they shout "Slam!" All other players must then quickly place one hand on the pile. The last player to do so must take the entire pile into their hand.<br><br>
        5. <em>Speed and Reactions:</em><br><br> Quick thinking and fast reactions are crucial. Players must be alert to match the central pile's top card as quickly as possible or be ready to react to "Slam" calls.<br><br>
        6. <em>Winning:</em><br><br> The first player to get rid of all their cards is declared the winner. If the game is played in rounds, players may play multiple rounds until  a pre-determined score or number of wins is reached.`
  },

  {
    "GameID": 21,
    "name": "Spoons",
    "aka": [""],
    "description": "A fast-paced card game of speed and strategy. Players aim to collect a set of cards and grab a spoon from the center of the table. The player left without a spoon loses the round. Quick reflexes and keen observation skills are keys to victory.",
    "minPlayers": 3,
    "maxPlayers": 13,
    "toolsRequired": ["./assets/images/cards.png", "./assets/images/spoon.png"],
    "toolsText": ["Cards", "Spoons"],
    "imageURL": "",
    "timeAvailable": 30,
    "difficulty": "Easy",
    "drinking": "FALSE",
    "activity": "Involved",
    "vibes": ["Competitive", "High-Energy", "Playful", "Free-Flowing", "Loud"],
    "rules": `<strong>Overview:</strong><br><br>
        Spoons is a fast-paced, physical card game that combines the simplicity of matching games with the frantic excitement of musical chairs. Suitable for players of all ages, the game requires a standard deck of cards and spoons, with one fewer spoon than there are players.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br>The aim is to collect four of a kind and to not be the last to grab a spoon from the center of the table.<br><br>
        2. <em>Setup:</em><br><br>Arrange spoons in the middle of the table. Deal four cards to each player. The dealer keeps the remainder of the deck beside them.<br><br>
        3. <em>Card Distribution:</em><br><br>The dealer starts by taking a card from the deck, adding it to their hand, and discarding one card face-down to the player on their left. This continues rapidly around the table, with each player picking up the discarded card from their right and passing one to their left.<br><br>
        4. <em>Grabbing Spoons:</em><br><br>As soon as a player collects four of a kind, they grab a spoon from the center. Once one spoon is taken, all players may grab for a spoon, regardless of their hand.<br><br>
        5. <em>Elimination:</em><br><br>The player left without a spoon is eliminated from the game. One spoon is removed, and the game continues until only one winner remains.<br><br>
        6. <em>Strategy:</em><br><br>Quick reflexes and keen observation are crucial. Players must be fast in collecting cards and grabbing spoons but also subtle enough not to alert others too soon when they've achieved four of a kind.<br><br>
        7. <em>No Spoons? No Problem:</em><br><br> To play the variant known as Pig, the gameplay is the same, but players signal by placing a finger on their nose, or performing another pre-determined action.`
  },

  {
    "GameID": 22,
    "name": "Texas Hold'em",
    "aka": ["Hold'em"],
    "description": "A most popular variant of poker. The game involves dealing two private cards to each player and then revealing five community cards in three stages. Players seek to assemble the best five-card hand using any combination of their hole cards and the community cards.",
    "minPlayers": 2,
    "maxPlayers": 10,
    "toolsRequired": ["./assets/images/cards.png", "./assets/images/coin.png"],
    "toolsText": ["Cards", "Chips"],
    "imageURL": "",
    "timeAvailable": 30, // This is a rough estimate; actual game length can vary greatly.
    "difficulty": "Medium",
    "drinking": "OPTIONAL", // Drinking rules can be optionally added to the game.
    "activity": "Competitive",
    "vibes": ["Competitive", "High-Energy or Chill", "Playful or Serious", "Rule-Abiding", "Loud or Quiet"],
    "rules": `<strong>Overview:</strong><br><br>
              Texas Hold'em is a community card poker game with a focus on strategic betting. Players aim to control the amount of money in the pot based either on the hand they are holding or their prediction of what their opponents may be holding.<br><br><br>
              <strong>Gameplay:</strong><br><br>
              1. <em>Objective:</em><br><br> Win chips by either having the best hand or convincing others to fold their hand.<br><br>
              2. <em>Setup:</em><br><br> Each player is dealt two private cards (known as 'hole cards') that belong to them alone. Five community cards are dealt face-up on the 'board'.<br><br>
              3. <em>Betting Rounds:</em><br><br> There are four rounds of betting – after the hole cards are dealt, after the first three community cards are revealed (the flop), after the fourth community card is revealed (the turn), and after the fifth community card is revealed (the river).<br><br>
              4. <em>Showdown:</em><br><br> If there are two or more players remaining after the final betting round, a showdown occurs. Players use the best five-card hand out of any combination of the seven cards (the five community cards and their two hole cards) to determine the winner.<br><br>
              5. <em>Strategies:</em><br><br> Success in Texas Hold'em depends on the strategic bets made based on the strength of the hole cards, the community cards, and the perceived strength of other players' hands.<br><br>
              6. <em>Winning:</em><br><br> The game continues until a player has all the chips, or until a predetermined time or number of hands has been played. The player with the most chips at the end is declared the winner.<br><br>
              <strong>Variants:</strong><br><br> 1. <em>Omaha Hold'Em</em> (Omaha):<br><br> The primary difference between Texas Hold'em and Omaha is that players receive four hole cards instead of two. Players must use exactly two of their hole cards and three of the community cards to make their best hand.<br><br> 2. Pineapple Hold'Em (Crazy Pineapple):<br><br> Players receive three hole cards and must discard one after the flop. The game then proceeds as in Texas Hold'em. `
  },


  {
    "GameID": 23,
    "name": "Tic-Tac-Toe",
    "aka": ["Noughts and Crosses", "Xs and Os"],
    "description": "A classic two-player game played on a 3x3 grid. Players take turns marking either X or O in an attempt to get three of their symbols in a row. Quick, simple, and great for testing strategy and tactics.",
    "minPlayers": 2,
    "maxPlayers": 2,
    "toolsRequired": ["./assets/images/paper.png"],
    "toolsText": ["Pen and Paper"],
    "imageURL": "./assets/images/paper.png",
    "timeAvailable": 5,
    "difficulty": "Easy",
    "drinking": "FALSE",
    "activity": "Relaxed",
    "vibes": ["Casual", "Chill", "Playful", "Rule-Abiding", "Loud"],
    "rules": `<strong>Overview:</strong><br><br>
        Tic-Tac-Toe is a simple, two-player strategy game. The game is played on a 3x3 grid, often on paper with a writing utensil. Each player chooses a symbol: typically X or O.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The goal is to be the first to get three of your symbols in a row, horizontally, vertically, or diagonally.<br><br>
        2. <em>Setup:</em><br><br> Players decide who goes first. The first player will use X, and the second player will use O. The game is played on a blank 3x3 grid.<br><br>
        3. <em>Turns:</em><br><br> Players take turns placing their symbol in an empty square on the grid.<br><br>
        4. <em>Winning:</em><br><br> The game ends when one player has three of their symbols in a row on the grid, or when all squares are filled without a winner. In the case of no winner, the game is a draw.<br><br>
        5. <em>Strategy:</em><br><br> Players must balance offense and defense, aiming to create a line of three symbols while blocking their opponent's attempts to do the same.`

  },

  {
    "GameID": 24,
    "name": "War",
    "aka": [""],
    "description": "A simple card game typically played by two players using a standard deck of playing cards. The objective is to win all the cards by having the highest card in each turn.",
    "minPlayers": 2,
    "maxPlayers": 2,
    "toolsRequired": ["./assets/images/cards.png"],
    "toolsText": ["Cards"],
    "imageURL": "",
    "timeAvailable": 15,
    "difficulty": "Easy",
    "drinking": "FALSE",
    "activity": "Casual",
    "vibes": ["Casual", "Chill", "Playful", "Free-Flowing", "Quiet"],
    "rules": `<strong>Overview:</strong><br><br>
        War is a simple, luck-based card game for two players. It requires no decision-making and is played with a standard deck of 52 cards.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br> The goal is to win all of the cards.<br><br>
        2. <em>Setup:</em><br><br> Shuffle the deck and deal all of the cards evenly between the two players. Each player holds their cards in a face-down stack.<br><br>
        3. <em>Playing:</em><br><br> Both players reveal the top card of their stack simultaneously. The player with the higher card wins both cards, placing them at the bottom of their stack.<br><br>
        4. <em>War:</em><br><br> If the revealed cards are of equal rank, 'war' is declared. Both players place the next three cards face down and then one card face up. The player with the higher face-up card wins all the cards played this round.<br><br>
        5. <em>Winning:</em><br><br> The game continues until one player has all the cards or the players decide to call it a draw after a certain time.<br><br>`
},


  {
    "GameID": 25,
    "name": "Yahtzee",
    "aka": [""],
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
    "vibes": ["Casual", "Chill", "Playful", "Free-Flowing", "Loud"],
    "rules": `<strong>Overview:</strong><br><br>
        Yahtzee is played with five standard six-sided dice. The game is typically played solo or with multiple players. Each player has a scorecard to record their results.<br><br><br>
        <strong>Gameplay:</strong><br><br>
        1. <em>Objective:</em><br><br>The goal is to achieve the highest total score by rolling and scoring different combinations of the dice.<br><br>
        2. <em>Setup:</em><br><br>Players take turns rolling five dice up to three times per turn.<br><br>
        3. <em>Scoring:</em> <br><br>After each roll, players choose which category to score based on their dice results. Categories include ones, twos, threes, fours, fives, sixes, three of a kind, four of a kind, full house, small straight, large straight, chance, and Yahtzee (five of a kind).<br><br>
        4. <em>Joker Rule:</em> <br><br>In the Yahtzee category, players aim to get multiple Yahtzees for bonus points.<br><br>
        5. <em>Strategy:</em><br><br>Players must decide which category to score in after each roll to maximize their points.<br><br>
        6. <em>Winning:</em> <br><br>The player with the highest total score after completing all categories wins the game.`
  },

]
