import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const apiCall = () => {
    axios.get('http://localhost:5000/updates')
      .then((response) => {
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
      <button onClick={apiCall}>Make API Call</button>
        <h1>NBA Player Data</h1>

        <table className="stats-table">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Age</th>
              <th>Games</th>
              <th>Games Started</th>
              <th>Minutes Played</th>
              <th>Field Goals</th>
              <th>Field Goal Attempts</th>
              <th>Field Goal Percentage</th>
              <th>Three-Point Field Goals</th>
              <th>Three-Point Field Goal Attempts</th>
              <th>Three-Point Field Goal Percentage</th>
              <th>Two-Point Field Goals</th>
              <th>Two-Point Field Goal Attempts</th>
              <th>Two-Point Field Goal Percentage</th>
              <th>Effective Field Goal Percentage</th>
              <th>Free Throws</th>
              <th>Free Throw Attempts</th>
              <th>Free Throw Percentage</th>
              <th>Offensive Rebounds</th>
              <th>Defensive Rebounds</th>
              <th>Total Rebounds</th>
              <th>Assists</th>
              <th>Steals</th>
              <th>Blocks</th>
              <th>Turnovers</th>
              <th>Personal Fouls</th>
              <th>Points</th>
              <th>Team</th>
              <th>Season</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((player) => (
              <tr key={player.id}>
                <td>{player.player_name}</td>
                <td>{player.age}</td>
                <td>{player.games}</td>
                <td>{player.games_started}</td>
                <td>{player.minutes_played}</td>
                <td>{player.field_goals}</td>
                <td>{player.field_attempts}</td>
                <td>{player.field_percent}</td>
                <td>{player.three_fg}</td>
                <td>{player.three_attempts}</td>
                <td>{player.three_percent}</td>
                <td>{player.two_fg}</td>
                <td>{player.two_attempts}</td>
                <td>{player.two_percent}</td>
                <td>{player.effect_fg_percent}</td>
                <td>{player.ft}</td>
                <td>{player.fta}</td>
                <td>{player.ft_percent}</td>
                <td>{player.ORB}</td>
                <td>{player.DRB}</td>
                <td>{player.TRB}</td>
                <td>{player.AST}</td>
                <td>{player.STL}</td>
                <td>{player.BLK}</td>
                <td>{player.TOV}</td>
                <td>{player.PF}</td>
                <td>{player.PTS}</td>
                <td>{player.team}</td>
                <td>{player.season}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </header>
    </div>
  );
}

export default App;
