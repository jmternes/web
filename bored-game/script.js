// class Game {
//     constructor(name, description, minPlayers, maxPlayers, tools, images, timeAvailable, difficulty, drinking, familyFriendly) {
//         this.name = name;
//         this.description = description;
//         this.minPlayers = minPlayers;
//         this.maxPlayers = maxPlayers;
//         this.tools = tools;
//         this.images = images;
//         this.timeAvailable = timeAvailable;
//         this.difficulty = difficulty;
//         this.drinking = drinking;
//         this.familyFriendly = familyFriendly;
//     }
// }

// // const rummy500 = new Game("500 Rummy", 2, 2, "Deck of cards", 20, "Moderate", false, true);
// // const blackjack = new Game("Blackjack", 2, 7, "Deck of cards", 20, "Moderate", false,  true);
// // const hearts = new Game("Hearts", 4, 4, "Deck of cards", 20, "Moderate", false,  true);
// // const bridge = new Game("Bridge", 4, 4, "Deck of cards", 30, "Difficult", false,  true);
// // const solitaire = new Game("Solitaire", 1, 1, "Deck of cards", 20, "Easy", false, true);
// // const yahtzee = new Game("Yahtzee", 2, 8, "2 dice", 10, "Easy", false, true);
// // const boxes = new Game("Boxes", 2, 2, "Pen and paper", 10, "Easy", false,  true);
// // const slam = new Game("Slam", 2, 8, "2 dice", 15, "Easy", false,  true);
// // const mastermind = new Game("Mastermind", 2, 2, "Pen and paper", 5, "Easy", false, true);
// // const tictactoe = new Game("Tic-Tac-Toe", 2, 2, "Pen and paper", 5, "Easy", false, true);
// // const nim = new Game("Nim", 2, 2, "Pen and paper", 5, "Easy", false, true);
// // const cheat = new Game("Cheat", 3, 8, "Deck of cards", 10, "Easy", false, true);
// // const flipCup = new Game("Flip Cup", 4, 8, "Red solo cups", 10, "Easy", true, false);
// // const twentyQuestions = new Game("20 Questions", 2, undefined, "No tools required", 20, "Easy", false, true);
// // const charades = new Game("Charades", 4, undefined, "No tools required", 30, "Easy", false, true);
// // const simonSays = new Game("Simon Says", 2, undefined, "No tools required", 10, "Easy", false, true);
// // const hideAndSeek = new Game("Hide and Seek", 2, undefined, "No tools required", 30, "Easy", false, true);
// const pictionary = new Game("Pictionary", "Pictionary is a fun game where players draw a hint for guessers to try to identify.", 4, undefined, ["Pen and paper"], ["./bored-game/assets/images/cup.png"], 30, "Moderate", false, true);
// const spoons = new Game("Spoons", "Spoons is a card game where players try to get rid of all their cards... Don't be the last person to grab a spoon!", 3, undefined, ["Deck of cards", "Spoons"], ["/assets/images/cup.png", "/assets/images/cup.png"], 20, "Easy", false, true);
// // const liarsDice = new Game("Liar's Dice", 3, undefined, ["Dice", "Cups"], 30, "Moderate", false, true);

// function createGameCard(game) {
//     const template = document.querySelector(".card");
//     const cardClone = template.cloneNode(true); // deep clone

//     // Populate game title and description
//     const titleElement = cardClone.querySelector(".card_title h5");
//     if(titleElement) {
//         titleElement.textContent = game.name;
//         console.log(titleElement.textContent);
//     } else {
//         console.error('Title element not found');
//     }

//     const descriptionElement = cardClone.querySelector(".card-description p");
//     if(descriptionElement) {
//         descriptionElement.textContent = game.description;
//     } else {
//         console.error('Description element not found');
//     }

//     // game images and tools
//     const imageContainers = cardClone.querySelectorAll(".image-container img");
//     const imageTitles = cardClone.querySelectorAll(".image-title-container p");
//     game.images.forEach((imageSrc, index) => {
//         if (imageSrc) {
//             imageContainers[index].src = imageSrc;
//             imageContainers[index].alt = game.tools[index] || "Game tool image";
//             imageContainers[index].style.display = "block";
//             if(game.tools[index]) {
//                 imageTitles[index].textContent = game.tools[index];
//             }
//         } else {
//             imageContainers[index].style.display = "none";
//         }
//     });

//     // Add the tools for each game
//     const toolsDiv = cardClone.querySelector("div.image-title-container");
//     toolsDiv.innerHTML = '';
//     game.tools.forEach(tool => {
//         const toolElement = document.createElement('p');
//         toolElement.textContent = tool;
//         toolsDiv.appendChild(toolElement);
//     });

//     // Display number of players, time available, and difficulty
//     const noOfPlayersElement = cardClone.getElementById("noOfPlayers");
//     const timeAvailableElement = cardClone.getElementById("timeAvailable");
//     const difficultyElement = cardClone.getElementById("difficultyText");

//     if (noOfPlayersElement && timeAvailableElement && difficultyElement) {
//         noOfPlayersElement.textContent = game.maxPlayers
//             ? `${game.minPlayers}-${game.maxPlayers} Players`
//             : `${game.minPlayers}+ Players`;
//         timeAvailableElement.textContent = `${game.timeAvailable} Minutes`;
//         difficultyElement.textContent = `${game.difficulty}`;
//     } else {
//         console.error('One or more elements not found');
//     }

//     return cardClone;
// }



// const gameTitleDiv = document.getElementById("gameTitle");
// gameTitleDiv.textContent = `${spoons.name}`;
// // console.log(gameTitleDiv.textContent)

// const gameDescriptionDiv = document.querySelector("div.card-description p");
// gameDescriptionDiv.textContent = `${spoons.description}`;

// document.addEventListener("DOMContentLoaded", (event) => {
//     displayGameDetails(spoons);
// });

// // Images

// function displayGameDetails(game) {
//     const imageContainers = document.querySelectorAll("div.image-container img");
//     if(imageContainers && game.images) {
//         imageContainers.forEach((imgElement, index) => {
//             if(game.images[index]) {
//                 console.log(game.images[index]);
//                 imgElement.src = game.images[index];
//                 imgElement.alt = game.tools[index] || "Game tool image";
//                 imgElement.style.display = "block";
//             } else {
//                 imgElement.style.display = "none";
//             }
//         });
//     } else {
//         console.error('No images defined for this game');
//     }



//     //  add other code to set game description, etc., using the `game` parameter)
// }

// // Tools

// const toolsDiv = document.querySelector("div.image-title-container");

// // toolsDiv is emptied
// toolsDiv.innerHTML = '';

// // Iterate over each tool and append to the toolsDiv
// spoons.tools.forEach(tool => {
//     const toolElement = document.createElement('p');
//     toolElement.textContent = tool;
//     toolsDiv.appendChild(toolElement);
// });


// // Card filter Text

// function displayGameDetails(game) {

//     const noOfPlayersElement = document.getElementById("noOfPlayers");
//     const timeAvailableElement = document.getElementById("timeAvailable");
//     const difficultyElement = document.getElementById("difficultyText");

//     if (noOfPlayersElement && timeAvailableElement && difficultyElement) {
//         // Displaying the range of players. If maxPlayers is undefined, just show minPlayers
//         noOfPlayersElement.textContent = game.maxPlayers
//             ? `${game.minPlayers}-${game.maxPlayers} Players`
//             : `${game.minPlayers}+ Players`;

//         // Displaying the time available
//         timeAvailableElement.textContent = `${game.timeAvailable} Minutes`;

//         // Displaying the difficulty
//         // console.log(game.difficulty);
//         difficultyElement.textContent = `${game.difficulty}`;
//     } else {
//         console.error('One or more elements not found');
//     }
// }






//Array of game objects
// const games = [rummy500, blackjack, hearts, bridge, solitaire, yahtzee, boxes, slam, mastermind, tictactoe, nim, cheat, flipCup];



// When needed, some filtering for game criteria. First: no. of players
// const gamesFor1Player = games.filter(game => game.players === 1);
// const gamesFor2Players = games.filter(game => game.players === 2);
// const gamesFor4Players = games.filter(game => game.players === 4);
// const gamesFor6Players = games.filter(game => game.players === 6);
// const gamesFor8Players = games.filter(game => game.players === 8);

// Next, tools
// const noToolGames = games.filter(game => game.tools === null);
// const cardGames = games.filter(game => game.tools === "Deck of cards");
// const oneDieGames = games.filter(game => game.tools === "1 die");
// const twoDiceGames = games.filter(game => game.tools === "2 dice");

// Let's fill this out a bit. Add more criteria and titles.


// console.log(boxes.activity);
// console.log(solitaire.drinking);
// console.log(mastermind.tools)
