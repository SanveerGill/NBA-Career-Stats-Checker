const axios = require('axios');
async function getPlayerStats(req, res) {
  const { playerName } = req.body;
  console.log(req);
  var config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: `https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName}`,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

async function getPlayerNames(req, res) {
  var config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://nba-stats-db.herokuapp.com/api/playerdata/season/2023`,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = {
  getPlayerStats,
  getPlayerNames
};