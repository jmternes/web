class Game {
    constructor(name, players, tools, timeAvailable) {
        this.name = name;
        this.players = players;
        this.tools = tools;
        this.timeAvailable = timeAvailable;
    }
}

const rummy500 = new Game("500 Rummy", 2, ["Deck of cards"], 20);
const blackjack = new Game("Blackjack", 4, ["Deck of cards"], 20);
const hearts = new Game("Hearts", 4, ["Deck of cards"], 20);
const bridge = new Game("Bridge", 4, ["Deck of cards"], 30);
const solitaire = new Game("Solitaire", 1, ["Deck of cards"], 20);
const yahtzee = new Game("Yahtzee", 2, ["2 dice"], 10);


//Array of game objects
const games = [rummy500, blackjack, hearts, bridge, solitaire, yahtzee];



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
