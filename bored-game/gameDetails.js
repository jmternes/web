// ----------------------------------------

import { gamesData } from './data.js';

// ----------------------------------------

// Function to bring correct game details to game.html for each ID

document.addEventListener('DOMContentLoaded', function() {
    // Function to get the 'gameId' from the URL
    function getGameIdFromUrl() {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams.get('gameId');
    }

    // Function to find game data based on the 'gameId'
    function getGameData(gameId) {
        // Assuming 'gamesData' is accessible here and contains all game data
        return gamesData.find(game => game.GameID == gameId);
    }

    // Function to update the HTML with the game data
    function displayGameData(game) {
        if (!game) {
            console.error('Game not found');
            // Handle game not found scenario
            return;
        }

        // Update the game title and description
        document.querySelector('.game-header').textContent = game.name;
        document.querySelector('.game-subheader').textContent = game.description;

        // Update other game details - players, time, and difficulty
        const detailsTextElements = document.querySelectorAll('.game-details-text p');

        // Display number of players, time available, and difficulty
        const playersText = game.minPlayers === game.maxPlayers ?
                    `${game.minPlayers} Players` :
                    `${game.minPlayers}-${game.maxPlayers} Players`;
        detailsTextElements[0].textContent = playersText;

        detailsTextElements[1].textContent = `${game.timeAvailable} Minutes`;
        detailsTextElements[2].textContent = game.difficulty;


        // Update the vibes - FIX
        const pillsContainer = document.querySelector('.pills-container');
        pillsContainer.innerHTML = ''; // Clear existing pills

        game.vibes.forEach(vibe => {
            const pill = document.createElement('div');
            pill.classList.add('game-vibe-pills');
            pill.textContent = vibe;
            pillsContainer.appendChild(pill);
        });

        // Update the requirements list
        const requirementsList = document.querySelector('.requirements-list');
        requirementsList.innerHTML = '';  // Clear existing list items

        game.toolsRequired.forEach(toolImageUrl => {
            // Create list item for each tool
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = toolImageUrl;
            img.alt = 'Tool Image';
            li.appendChild(img);

            // Add toolsText to display
            const toolIndex = game.toolsRequired.indexOf(toolImageUrl);
            const p = document.createElement('p');
            p.textContent = game.toolsText[toolIndex] || 'Tool';
            li.appendChild(p);

            requirementsList.appendChild(li);
        });
    }

    // Get the game ID from the URL
    const gameId = getGameIdFromUrl();

    // Get the game data for this ID
    const gameData = getGameData(gameId);

    // Display the game data
    displayGameData(gameData);
});
