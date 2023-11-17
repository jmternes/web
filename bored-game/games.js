

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

        // Clear any existing content in toolsImages and toolsText containers
        const toolsImagesContainer = document.getElementById('toolsImages');
        const toolsTextContainer = document.getElementById('toolsText');
        toolsImagesContainer.innerHTML = '';
        toolsTextContainer.innerHTML = '';

        // Dynamically add images for tools required
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
    } else {
        console.log("Game not found");
    }
}



displayGameDetails(6);


