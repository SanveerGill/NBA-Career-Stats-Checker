const axios = require('axios');
async function getPlayerStats(req, res) {
  const { playerName } = req.body;
  var config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: `https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName}`,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

async function getPlayerNames(req, res) {
  let allPlayers = []; // Initialize an array to store all players
  let url = 'https://nba-stats-db.herokuapp.com/api/playerdata/season/2023'; // Initial URL

  try {
    while (url) {
      const response = await axios.get(url); // Fetch player data
      allPlayers = allPlayers.concat(response.data.results); // Concatenate the current page of players to the allPlayers array
      url = response.data.next; // Update the URL to the next page
    }
    res.status(200).json(allPlayers); // Send the concatenated player data as response
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching player data' });
  }
}

module.exports = {
  getPlayerStats,
  getPlayerNames
};