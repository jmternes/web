class Game {
    constructor(name, minPlayers, maxPlayers, tools, timeAvailable, difficulty, drinking, activity) {
        this.name = name;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.tools = tools;
        this.timeAvailable = timeAvailable;
        this.difficulty = difficulty;
        this.drinking = drinking;
        this.activity = activity;
    }
}

const rummy500 = new Game("500 Rummy", 2, 2, "Deck of cards", 20, "Moderate", false, "Involved");
const blackjack = new Game("Blackjack", 2, 7, "Deck of cards", 20, "Moderate", false, "Involved");
const hearts = new Game("Hearts", 4, 4, "Deck of cards", 20, "Moderate", false, "Involved");
const bridge = new Game("Bridge", 4, 4, "Deck of cards", 30, "Difficult", false, "Involved");
const solitaire = new Game("Solitaire", 1, 1, "Deck of cards", 20, "Easy", false, "Relaxed");
const yahtzee = new Game("Yahtzee", 2, 8, "2 dice", 10, "Easy", false, "Relaxed");
const boxes = new Game("Boxes", 2, 2, "Pen and paper", 10, "Easy", false, "Involved");
const slam = new Game("Slam", 2, 8, "2 dice", 15, "Easy", false, "Involved");
const mastermind = new Game("Mastermind", 2, 2, "Pen and paper", 5, "Easy", false, "Relaxed");
const tictactoe = new Game("Tic-Tac-Toe", 2, 2, "Pen and paper", 5, "Easy", false, "Relaxed");
const nim = new Game("Nim", 2, 2, "Pen and paper", 5, "Easy", false, "Relaxed");
const cheat = new Game("Cheat", 3, 8, "Deck of cards", 10, "Easy", false, "Relaxed");
const flipCup = new Game("Flip Cup", 4, 8, "Red solo cups", 10, "Easy", true, "Involved");



//Array of game objects
const games = [rummy500, blackjack, hearts, bridge, solitaire, yahtzee, boxes, slam, mastermind, tictactoe, nim, cheat];



// When needed, some filtering for game criteria. First: no. of players
const gamesFor1Player = games.filter(game => game.players === 1);
const gamesFor2Players = games.filter(game => game.players === 2);
const gamesFor4Players = games.filter(game => game.players === 4);
const gamesFor6Players = games.filter(game => game.players === 6);
const gamesFor8Players = games.filter(game => game.players === 8);

// Next, tools
const noToolGames = games.filter(game => game.tools === null);
const cardGames = games.filter(game => game.tools === "Deck of cards");
const oneDieGames = games.filter(game => game.tools === "1 die");
const twoDiceGames = games.filter(game => game.tools === "2 dice");

// Let's fill this out a bit. Add more criteria and titles.


console.log(boxes.activity);
console.log(solitaire.drinking);
console.log(mastermind.tools)
