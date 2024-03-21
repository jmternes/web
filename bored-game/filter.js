// HOME PAGE FILTERING

import { gamesData } from './data.js';

/* to do: error catch for no filter found
other tools should just be anything that doesnt match one of the tools
add select options for no preference for difficulty, etc. 
time option for 60+ mins, not working.*/

// event listeners for filter containers

document.addEventListener('DOMContentLoaded', function() {
  // Toggle selection for tools containers
  document.querySelectorAll('.tools-container').forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('selected'); // Toggle a class to indicate
      }
      );
  });
});

//

document.addEventListener('DOMContentLoaded', function() {
  // Toggle selection for vibe containers
  document.querySelectorAll('.vibe-container').forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('selected'); // Toggle a class to indicate selection
      });
  });
});

/* new above */

document.querySelector('.search-button').addEventListener('click', function() {
  const playersSelection = document.getElementById('players').value;
  const difficultySelection = document.getElementById('difficulty').value;
  const timeSelection = document.getElementById('time').value;
  let selectedTools = Array.from(document.querySelectorAll('.tools-container.selected')).map(container => container.querySelector('p').textContent.trim());
  let selectedVibes = Array.from(document.querySelectorAll('.vibe-container.selected')).map(vibe => vibe.textContent.trim());

  let minPlayers = 0;
  let maxPlayers = Infinity;
  let minTime = 0;
  let maxTime = Infinity;

  // Handle player range selection
  if (playersSelection) {
    if (playersSelection.includes('-')) {
      const range = playersSelection.split('-');
      minPlayers = parseInt(range[0], 10);
      maxPlayers = parseInt(range[1], 10);
    } else if (playersSelection.includes('+')) {
      minPlayers = parseInt(playersSelection.replace('+', ''), 10);
    } else {
      minPlayers = maxPlayers = parseInt(playersSelection, 10);
    }
  }

  // Handle time selection
  switch (timeSelection) {
    case "Fewer than 5 Minutes":
      maxTime = 5;
      break;
    case "5-10":
      minTime = 5;
      maxTime = 10;
      break;
    // Add other cases here
    case "60+":
      minTime = 60;
      break;
    // Default case not needed since minTime and maxTime are initialized
  }

  // Filter games based on the selected criteria
  const filteredGames = gamesData.filter(game => {
    const gameMinPlayers = parseInt(game.minPlayers, 10);
    const gameMaxPlayers = parseInt(game.maxPlayers, 10) || Infinity;
    const gameTime = parseInt(game.timeAvailable, 10);

    const matchesToolCriteria = selectedTools.length === 0 || game.toolsText.some(tool => selectedTools.includes(tool));
    const matchesPlayerCriteria = playersSelection ? (minPlayers <= gameMaxPlayers && maxPlayers >= gameMinPlayers) : true;
    const matchesDifficultyCriteria = difficultySelection ? game.difficulty === difficultySelection : true;
    const matchesTimeCriteria = timeSelection ? (gameTime >= minTime && gameTime <= maxTime) : true;
    const matchesVibeCriteria = selectedVibes.length === 0 || selectedVibes.some(selectedVibe => {
      return game.vibes.some(gameVibe => {
        // Split the game vibe on "or", trim each part, and check if the selected vibe matches any part
        return gameVibe.split("or").some(part => selectedVibe.trim() === part.trim());
      });
    });
    
    
    

    return matchesPlayerCriteria && matchesDifficultyCriteria && matchesTimeCriteria && matchesVibeCriteria && matchesToolCriteria;
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
  const filterSection = document.querySelector('.search-header'); // Change '.filter-wrapper' to the class or ID of the section you want to scroll to
  if (filterSection) {
    filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});


// END OF FILTERING
