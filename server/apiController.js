const axios = require('axios');
async function getbballUpdates(req, res) {
  var config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: 'https://nba-stats-db.herokuapp.com/api/playerdata/name/Nikola Jokić',
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
module.exports = getbballUpdates;