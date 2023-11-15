

gamesData.forEach(game => {
    console.log(game.GameID);
  });


gamesData.forEach(game => {
    console.log(game.Name);
});

function displayGameDetails(gameId) {
    const game = gamesData.find(game => game.GameID === gameId);

    if (game) {
        document.getElementById('gameName').textContent = game.Name || 'No name provided';
        document.getElementById('gameDescription').textContent = game.description || 'No description available';
        document.getElementById('minPlayers').textContent = game.minPlayers || 'N/A';
        document.getElementById('maxPlayers').textContent = game.maxPlayers || 'N/A';
        document.getElementById('timeAvailable').textContent = game.timeAvailable || 'N/A';
        document.getElementById('difficultyText').textContent = game.difficulty || 'N/A';


        // Add Image or Images to Cards
        const toolsImagesContainer = document.getElementById('toolsImages');
        toolsImagesContainer.innerHTML = '';

        game.toolsRequired.forEach(toolImageUrl => {
            const img = document.createElement('img');
            img.src = toolImageUrl;
            img.alt = 'Tool Image';
            toolsImagesContainer.appendChild(img);
        });
        // Update other fields similarly
    } else {
        console.log("Game not found");
    }
}

displayGameDetails(1);
