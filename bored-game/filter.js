// HOME PAGE FILTERING

import { gamesData } from './data.js';

document.querySelector('.search-button').addEventListener('click', function() {
  const playersSelection = document.getElementById('players').value;
  let minPlayers = 0;
  let maxPlayers = Infinity;

  // Handle player range selection
  if (playersSelection.includes('-')) {
    const range = playersSelection.split('-');
    minPlayers = parseInt(range[0], 10);
    maxPlayers = parseInt(range[1], 10);
  } else if (playersSelection.includes('+')) {
    minPlayers = parseInt(playersSelection.replace('+', ''), 10);
  } else {
    minPlayers = maxPlayers = parseInt(playersSelection, 10);
  }

  // Filter games based on the number of players
  const filteredGames = gamesData.filter(game => {
    const gameMinPlayers = parseInt(game.minPlayers, 10);
    const gameMaxPlayers = parseInt(game.maxPlayers, 10) || Infinity; // Handle open-ended max players
    return (minPlayers <= gameMaxPlayers && maxPlayers >= gameMinPlayers);
  });

  // render the cards with updatedisplay

  function updateDisplay(filteredGames) {
    let gamesContainer = document.querySelector('.cards-list');
    gamesContainer.innerHTML = ''; // Clear current content

    filteredGames.forEach(game => {
      const card = document.createElement('div');
      card.classList.add('card', 'template');

      const gameName = document.createElement('h5');
      gameName.classList.add('game-name');
      gameName.textContent = game.name;
      card.appendChild(gameName);

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

      const filterIcons = document.createElement('div');
      filterIcons.classList.add('card-filter-icons');
      filterIcons.innerHTML = `
        <img src="../bored-game/assets/images/players.png" alt="Players">
        <img src="../bored-game/assets/images/time.png" alt="Time">
        <img src="../bored-game/assets/images/challenge.png" alt="Challenge">
      `;

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

      card.appendChild(toolsImagesContainer);
      card.appendChild(toolsTextContainer);
      card.appendChild(filterIcons);
      card.appendChild(filterText);

      // Correct placement of the event listener
      card.addEventListener('click', () => {
          window.location.href = `game.html?gameId=${game.GameID}`;
      });

      gamesContainer.appendChild(card);
    });
  }



  // Use the existing updateDisplay function to show the results
  updateDisplay(filteredGames);

  // Scroll the user to the results section
  const resultsSection = document.querySelector('.cards-list');
  if (resultsSection) {
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// reset button functionality

document.querySelector('.reset-button').addEventListener('click', function() {
  // Clear the displayed game cards
  let gamesContainer = document.querySelector('.cards-list');
  if (gamesContainer) {
    gamesContainer.innerHTML = ''; // Clear current content
  }

  // Reset all form elements to their default state
  document.getElementById('players').selectedIndex = 0;
  document.querySelectorAll('.tools-container.selected, .vibe-container.selected').forEach(item => {
    item.classList.remove('selected'); // Remove 'selected' class
  });
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false; // Uncheck radio buttons
  });
  document.getElementById('time').selectedIndex = 0;
  document.getElementById('difficulty').selectedIndex = 0;

  // Optionally, reset any other filter elements you have to their default state here

  // Scroll the user up to the top of the page or to a specific section
  const filterSection = document.querySelector('.filter-wrapper'); // Change '.filter-wrapper' to the class or ID of the section you want to scroll to
  if (filterSection) {
    filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});


// Event listeners for the tools and vibes options
// document.querySelectorAll('.tools-container, .vibe-container').forEach(item => {
//   item.addEventListener('click', () => {
//       item.classList.toggle('selected'); // Toggle a class to indicate selection
//   });
// });

// // Dropdowns and Radio Buttons
// ['#players', '#time', '#difficulty', 'input[name="drinkingOption"]', 'input[name="familyOption"]'].forEach(selector => {
//   document.querySelectorAll(selector).forEach(element => {
//       element.addEventListener('change', filterGames); // Call filterGames function on change
//   });
// });

// // Function to collect filter values
// function getFilterCriteria() {
//   let criteria = {
//       tools: Array.from(document.querySelectorAll('.tools-container.selected')).map(item => item.id),
//       players: document.getElementById('players').value,
//       vibes: Array.from(document.querySelectorAll('.vibe-container.selected')).map(item => item.id),
//       time: document.getElementById('time').value,
//       difficulty: document.getElementById('difficulty').value,
//       drinking: document.querySelector('input[name="drinkingOption"]:checked') ? document.querySelector('input[name="drinkingOption"]:checked').value : '',
//       familyFriendly: document.querySelector('input[name="familyOption"]:checked') ? document.querySelector('input[name="familyOption"]:checked').value : ''
//   };
//   return criteria;
// }

// // Function to filter games based on selected criteria
// function filterGames() {
//   let criteria = getFilterCriteria();
//   let filteredGames = gamesData.filter(game => {
//       let match = true;
//       // Example: Implement similar logic for other criteria
//       // Filtering by players (ensure your data structure supports this kind of comparison)
//       if (criteria.players && !(game.minPlayers <= criteria.players && game.maxPlayers >= criteria.players)) match = false;
//       // Add more conditions for other filters here
//       return match;
//   });
//   updateDisplay(filteredGames);
// }

// // Function to update the display with filtered games
// function updateDisplay(games) {
//   const displayArea = document.querySelector('.cards-list'); // Ensure you have a container for the games
//   displayArea.innerHTML = ''; // Clear current games
//   games.forEach(game => {
//       let gameElement = document.createElement('div');
//       gameElement.textContent = game.name; // Extend this to include more details about each game
//       displayArea.appendChild(gameElement);
//   });
// }

// // Event listener for the Search button
// document.querySelector('.search-button').addEventListener('click', filterGames);

// // Event listener for the Reset button
// document.querySelector('.reset-button').addEventListener('click', () => {
//   document.querySelectorAll('.selected').forEach(item => item.classList.remove('selected'));
//   document.getElementById('players').selectedIndex = 0;
//   document.getElementById('time').selectedIndex = 0;
//   document.getElementById('difficulty').selectedIndex = 0;
//   document.querySelectorAll('input[name="drinkingOption"], input[name="familyOption"]').forEach(radio => radio.checked = false);
//   updateDisplay(gamesData); // Assuming gamesData is your full list of games
// });


// console.log('Filtering script loaded');


// END OF FILTERING
