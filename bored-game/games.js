

import { gamesData } from './data.js';


// ----------------------------------------



// DIRECTORY -  function updates the display when user clicks a sorting option



function updateDisplay(sortedGames) {
    let gamesContainer = document.querySelector('.directory-card-wrapper');
    gamesContainer.innerHTML = ''; // Clear current content

    sortedGames.forEach(game => {
      // Create card container
      const card = document.createElement('div');
      card.classList.add('card', 'template');

      // Add game name
      const gameName = document.createElement('h5');
      gameName.classList.add('game-name');
      gameName.textContent = game.name;
      card.appendChild(gameName);

      // Add game description
      const gameDescription = document.createElement('p');
      gameDescription.classList.add('game-description');
      gameDescription.textContent = game.description;
      card.appendChild(gameDescription);

      // Add tool images and text
      const toolsImagesContainer = document.createElement('div');
      toolsImagesContainer.classList.add('image-container', 'tools-images');
      const toolsTextContainer = document.createElement('div');
      toolsTextContainer.classList.add('image-title-container', 'tools-text');

      game.toolsRequired.forEach((toolImageUrl, index) => {
        const img = document.createElement('img');
        img.src = toolImageUrl;
        img.alt = 'Tool Image';
        toolsImagesContainer.appendChild(img);

        const caption = document.createElement('p');
        caption.textContent = game.toolsText[index] || 'Tool';
        toolsTextContainer.appendChild(caption);
      });

      // Add filter icons
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
                                `${game.minPlayers} Players` :
                                `${game.minPlayers}-${game.maxPlayers} Players`;
      filterText.appendChild(playersText);

      const timeText = document.createElement('p');
      timeText.innerHTML = `<span class="time-available">${game.timeAvailable}</span> Minutes`;
      filterText.appendChild(timeText);

      const difficultyText = document.createElement('p');
      difficultyText.innerHTML = `<span class="difficulty-text">${game.difficulty}</span>`;
      filterText.appendChild(difficultyText);

      // Append the tools and filter icons/text to the card
      card.appendChild(toolsImagesContainer);
      card.appendChild(toolsTextContainer);
      card.appendChild(filterIcons);
      card.appendChild(filterText);


      // Add event listener to the card - it needs a new one after being sorted
      card.addEventListener('click', () => {
        window.location.href = `game.html?gameId=${game.GameID}`;
    });

      // Append the card to the container
      gamesContainer.appendChild(card);
    });
  }

// sorting function, displays games based on user's sorting option
  function sortGames(criteria) {
    if (criteria === "minPlayers") {
      gamesData.sort((a, b) => a.minPlayers - b.minPlayers);
    } else if (criteria === "maxPlayers") {
      gamesData.sort((a, b) => b.maxPlayers - a.maxPlayers); // Corrected line
    } else if (criteria === "alphabetical") {
      gamesData.sort((a, b) => a.name.localeCompare(b.name));
    }
    updateDisplay(gamesData);
}


  document.getElementById('sort-options').addEventListener('change', function() {
    sortGames(this.value);
  });



// home page, displaying games when user filters options

function createCardsForContainer(containerClass, gamesData) {
    const container = document.querySelector(containerClass);
    if (!container) return; // Exit if the container doesn't exist

    container.innerHTML = ''; // Clear existing cards

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
                                  `${game.minPlayers} Players` :
                                  `${game.minPlayers}-${game.maxPlayers} Players`;
        filterText.appendChild(playersText);

        const timeText = document.createElement('p');
        timeText.innerHTML = `<span class="time-available">${game.timeAvailable}</span> Minutes`;
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

        card.addEventListener('click', () => {
            window.location.href = `game.html?gameId=${game.GameID}`;
        });

        // Append the card to the list container
        container.appendChild(card);
    });
}

// Call the function to populate the cards
document.addEventListener('DOMContentLoaded', () => {
    // createCardsForContainer('.cards-list', gamesData); since we don't want cards displaying on home by default
    createCardsForContainer('.directory-card-wrapper', gamesData);
});








// Main page script for filtering/displaying games

function applyFilters() {
    // Get filter values (you'll need to implement this based on your filters)
    const filteredData = filterGames(gamesData); // Implement filterGames based on your filter logic

    // Now create cards based on the filtered data
    createCardsForContainer('.cards-list', filteredData);
}

// Setup event listeners for your filters
// For example, if you have a button to apply filters:
document.getElementById('filter-button').addEventListener('click', applyFilters);

// Don't call createCardsForContainer immediately on the main page
















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
