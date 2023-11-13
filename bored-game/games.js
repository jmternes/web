

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
        document.getElementById('gameIMG').src = game.imageURL;
        // Update other fields similarly
    } else {
        console.log("Game not found");
    }
}
