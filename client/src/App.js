import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    apiCall(playerName);
  };

  const apiCall = (name) => {
    console.log(name);
    axios.post('http://localhost:5000/api/playerStats', { playerName: name })
      .then((response) => {
        if (response.data.results.length === 0) {
          throw new Error('No data available for the specified player');
        }
        else{setError(null)};
        // Set the response data in the state
        setResponseData(response.data.results);
        
      })
      .catch((error) => {
        // Set the error in the state if an error occurs
        setError(error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>NBA Player Stats</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(event) => setPlayerName(event.target.value)}
            value={playerName}
            placeholder="Enter text..."
          />
          <button type="submit">Send Text</button>
        </form>
        {responseData && !error && (
        <div>
        <h1>{playerName}</h1>

        <table className="stats-table">
          <thead>
            <tr>
              <th>Season</th>
              <th>Team</th>
              <th>Age</th>
              <th>G</th>
              <th>GS</th>
              <th>MP</th>
              <th>FG</th>
              <th>FGA</th>
              <th>FG%</th>
              <th>3P</th>
              <th>3PA</th>
              <th>3P%</th>
              <th>2P</th>
              <th>2PA</th>
              <th>2P%</th>
              <th>eFG%</th>
              <th>FT</th>
              <th>FTA</th>
              <th>FT%</th>
              <th>ORB</th>
              <th>DRB</th>
              <th>TRB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TOV</th>
              <th>PF</th>
              <th>PTS</th>
              
        
            </tr>
          </thead>
          <tbody>
            {responseData.map((player) => (
              <tr key={player.id}>
                <td>{player.season}</td>
                <td>{player.team}</td>
                <td>{player.age}</td>
                <td>{player.games}</td>
                <td>{player.games_started}</td>
                <td>{(player.minutes_played/player.games).toFixed(1)}</td>
                <td>{(player.field_goals/player.games).toFixed(1)}</td>
                <td>{(player.field_attempts/player.games).toFixed(1)}</td>
                <td>{player.field_percent}</td>
                <td>{(player.three_fg/player.games).toFixed(1)}</td>
                <td>{(player.three_attempts/player.games).toFixed(1)}</td>
                <td>{player.three_percent}</td>
                <td>{(player.two_fg/player.games).toFixed(1)}</td>
                <td>{(player.two_attempts/player.games).toFixed(1)}</td>
                <td>{player.two_percent}</td>
                <td>{player.effect_fg_percent}</td>
                <td>{(player.ft/player.games).toFixed(1)}</td>
                <td>{(player.fta/player.games).toFixed(1)}</td>
                <td>{player.ft_percent}</td>
                <td>{(player.ORB/player.games).toFixed(1)}</td>
                <td>{(player.DRB/player.games).toFixed(1)}</td>
                <td>{(player.TRB/player.games).toFixed(1)}</td>
                <td>{(player.AST/player.games).toFixed(1)}</td>
                <td>{(player.STL/player.games).toFixed(1)}</td>
                <td>{(player.BLK/player.games).toFixed(1)}</td>
                <td>{(player.TOV/player.games).toFixed(1)}</td>
                <td>{(player.PF/player.games).toFixed(1)}</td>
                <td>{(player.PTS/player.games).toFixed(1)}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    )}
     {error && (
          <div>
            <h2>Error:</h2>
            <p>{error.message}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
