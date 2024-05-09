import axios from 'axios';
import './App.css';

//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:8090')
    .then((response) => {
      // Log the entire response object to inspect its structure
      console.log(response);
      
      // If you expect specific data from the response, you can access it here
      // For example, if the response contains a 'data' property:
      // console.log(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={apiCall}>Make API Call</button>

      </header>
    </div>
  );
}

export default App;
