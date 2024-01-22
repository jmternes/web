

gamesData.forEach(game => {
    console.log(game.GameID);
  });


gamesData.forEach(game => {
    console.log(game.Name);
});


// function displayGameDetails(gameId) {
//     const game = gamesData.find(game => game.GameID === gameId);

//     if (game) {
//         document.getElementById('gameName').textContent = game.Name || 'No name provided';
//         document.getElementById('gameDescription').textContent = game.description || 'No description available';

//         const minPlayersSpan = document.getElementById('minPlayers');
//         const maxPlayersSpan = document.getElementById('maxPlayers');
//         const playersText = document.getElementById('noOfPlayers');

//         const playerCountSpan = document.getElementById('noOfPlayers');

//         // Determine player count text
//         if (game.minPlayers === game.maxPlayers) {
//             playerCountSpan.textContent = `${game.minPlayers} players`;
//         } else {
//             playerCountSpan.textContent = `${game.minPlayers}-${game.maxPlayers} players`;
//         }

//         document.getElementById('timeAvailable').textContent = game.timeAvailable || 'N/A';
//         document.getElementById('difficultyText').textContent = game.difficulty || 'N/A';

//         // Clear any existing content in toolsImages and toolsText containers
//         const toolsImagesContainer = document.getElementById('toolsImages');
//         const toolsTextContainer = document.getElementById('toolsText');
//         toolsImagesContainer.innerHTML = '';
//         toolsTextContainer.innerHTML = '';

//         // Dynamically add images for tools required
//         game.toolsRequired.forEach((toolImageUrl, index) => {
//             // Create and append image element
//             const img = document.createElement('img');
//             img.src = toolImageUrl;
//             img.alt = 'Tool Image';
//             toolsImagesContainer.appendChild(img);

//             // Create and append caption element
//             const caption = document.createElement('p');
//             caption.textContent = game.toolsText[index] || 'Tool';
//             toolsTextContainer.appendChild(caption);
//         });
//     } else {
//         console.log("Game not found");
//     }
// }


// Testing new JS 11/17

function createCardsForAllGames() {
    const cardsListContainer = document.querySelector('.cards-list');
    cardsListContainer.innerHTML = ''; // Clear existing cards

    gamesData.forEach(game => {
        // Create card container
        const card = document.createElement('div');
        card.classList.add('card', 'template');

        // Add game name - fix
        const gameName = document.createElement('h5');
        gameName.classList.add('game-name');
        gameName.textContent = game.name;
        card.appendChild(gameName);

        // Add game description - working
        const gameDescription = document.createElement('p');
        gameDescription.classList.add('game-description');
        gameDescription.textContent = game.description;
        card.appendChild(gameDescription);

        // Add tool images and text - working
        const toolsImagesContainer = document.createElement('div');
        toolsImagesContainer.classList.add('image-container', 'tools-images');

        const toolsTextContainer = document.createElement('div');
        toolsTextContainer.classList.add('image-title-container', 'tools-text');

        game.toolsRequired.forEach((toolImageUrl, index) => {
            // Create and append image element
            const img = document.createElement('img');
            img.src = toolImageUrl;
            img.alt = 'Tool Image';
            toolsImagesContainer.appendChild(img);

            // Create and append caption element
            const caption = document.createElement('p');
            caption.textContent = game.toolsText[index] || 'Tool';
            toolsTextContainer.appendChild(caption);
        });

// fix the css of the bottom half of card - image-title-container tools-text and image-container tools-images in CSS

        const filterIcons = document.createElement('div');
        filterIcons.classList.add('card-filter-icons');
        filterIcons.innerHTML = `
            <img src="../bored-game/assets/images/players.png" alt="Players">
            <img src="../bored-game/assets/images/time.png" alt="Time">
            <img src="../bored-game/assets/images/challenge.png" alt="Challenge">
        `;

        // Add filter text dynamically
        const filterText = document.createElement('div');
        filterText.classList.add('card-filter-text');

        const playersText = document.createElement('p');
        playersText.textContent = game.minPlayers === game.maxPlayers ?
                                  `${game.minPlayers} players` :
                                  `${game.minPlayers}-${game.maxPlayers} players`;
        filterText.appendChild(playersText);

        const timeText = document.createElement('p');
        timeText.innerHTML = `<span class="time-available">${game.timeAvailable}</span> minutes`;
        filterText.appendChild(timeText);

        const difficultyText = document.createElement('p');
        difficultyText.innerHTML = `<span class="difficulty-text">${game.difficulty}</span>`;
        filterText.appendChild(difficultyText);


        // Append the tools container to the card
        card.appendChild(toolsImagesContainer);
        card.appendChild(toolsTextContainer);

        // Append the filter icons and text to the card
        card.appendChild(filterIcons);
        card.appendChild(filterText);

        // css to do: card: title - line spacing down
        // increase padding / increase card width
        // match bottom text to description text


        // Add player count - commented out - but might be useful
        // const playerCount = document.createElement('p');
        // playerCount.textContent = game.minPlayers === game.maxPlayers ?
        //                           `${game.minPlayers} players` :
        //                           `${game.minPlayers}-${game.maxPlayers} players`;
        // card.appendChild(playerCount);

        // Add other game details (like time available, difficulty, etc.)
        // click event for when user clicks on card, it will take them to the game page

        card.addEventListener('click', () => {
            window.location.href = `game.html?gameId=${game.GameID}`;
        });

        // Append the card to the list container
        cardsListContainer.appendChild(card);
    });
}

// Call the function to populate the cards
document.addEventListener('DOMContentLoaded', createCardsForAllGames);


// function createCardsForAllGames() {
//     const cardsListContainer = document.querySelector('.cards-list');
//     cardsListContainer.innerHTML = ''; // Clear existing cards

//     gamesData.forEach(game => {
//         // Create a card here using the structure in your HTML
//         // Make sure to use classes to update and append each element
//         // Example:
//         const card = document.createElement('div');
//         card.classList.add('card', 'template');

//         // ... populate the card with game details using classes
//         // Append the card to the container
//         cardsListContainer.appendChild(card);
//     });
// }


// function displayGameDetails(gameId) {
//     const game = gamesData.find(game => game.GameID === gameId);

//     if (game) {
//         // Assuming you have a way to select the specific card element
//         const card = document.querySelector('.card[data-gameid="' + gameId + '"]');

//         card.querySelector('.game-name').textContent = game.name || 'No name provided';
//         card.querySelector('.game-description p').textContent = game.description || 'No description available';
//         // ... update other fields similarly
//     } else {
//         console.log("Game not found");
//     }
// }



// displayGameDetails(10);

// console.log(gameId);
