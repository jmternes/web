

import { gamesData } from './data.js';
// ----------------------------------------


// to do: when sorting by players required, desc needs to show the highest number of players first, currently shows top range of players as required
// 2-10 players should be further down than 4-6 players when sorting by players required desc

// SEARCH FUNCTION IN DIRECTORY

// Assuming you have an input field for search with an id of 'search-input'
// and your games are displayed in a container with a class of '.directory-card-wrapper'

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const gamesContainer = document.querySelector('.directory-card-wrapper');
  const hiddenClass = 'hidden'; // The class that hides the container

  searchInput.addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();

    if (searchQuery.length > 0) {
      // Hide the directory card wrapper
      gamesContainer.classList.add(hiddenClass);

      // Filter games based on the search query
      const filteredGames = gamesData.filter(game =>
        game.name.toLowerCase().startsWith(searchQuery) ||
        (game.aka && game.aka.some(alias => alias.toLowerCase().startsWith(searchQuery)))
      );

      // Update the display with filtered games
      updateDisplay(filteredGames);
    } else {
      // If the search query is empty, show the original games list and remove the hidden class
      gamesContainer.classList.remove(hiddenClass);
      updateDisplay(gamesData); // Assuming you have a function to display games
    }
  });

  function updateDisplay(games) {
    // Clear current content
    gamesContainer.innerHTML = '';
    gamesContainer.classList.remove(hiddenClass); // Make sure the container is visible

    // Check if there are games to display
    if (games.length === 0) {
      gamesContainer.textContent = 'No matching games found.';
      return;
    }

    // Iterate over the filtered games and create the cards
    games.forEach(game => {
      const card = createGameCard(game); // Assuming you have a function to create a game card element
      gamesContainer.appendChild(card);
    });
  }

  function createGameCard(game) {
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

    // Tool images and text
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

    // Filter icons
    const filterIcons = document.createElement('div');
    filterIcons.classList.add('card-filter-icons');
    filterIcons.innerHTML = `
      <img src="../bored-game/assets/images/players.png" alt="Players">
      <img src="../bored-game/assets/images/time.png" alt="Time">
      <img src="../bored-game/assets/images/challenge.png" alt="Challenge">
    `;

    // Filter text dynamically
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

    // Append elements to the card
    card.appendChild(toolsImagesContainer);
    card.appendChild(toolsTextContainer);
    card.appendChild(filterIcons);
    card.appendChild(filterText);

    // Add event listener for navigation
    card.addEventListener('click', () => {
      window.location.href = `game.html?gameId=${game.GameID}`;
    });

    return card;
  }


  //  display all games that match
  updateDisplay(gamesData);
});





// DIRECTORY CARD DISPLAY -  function updates the display when user clicks a sorting option



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
      gamesData.sort((a, b) => b.maxPlayers - a.maxPlayers);
  } else if (criteria === "alphabetical") {
      gamesData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria === "timeAsc") { // Least to Most
      gamesData.sort((a, b) => a.timeAvailable - b.timeAvailable);
  } else if (criteria === "timeDesc") { // Most to Least
      gamesData.sort((a, b) => b.timeAvailable - a.timeAvailable);
  }
  updateDisplay(gamesData);
}

document.getElementById('sort-options').addEventListener('change', function() {
  sortGames(this.value);
});




// home page, displaying games when user filters options old filter code

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
