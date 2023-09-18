import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {

  const [time, setTime] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://worldtimeapi.org/api/timezone/Etc/UTC');
        setTime(response.data);
      } catch (err) {
        throw Error('error produced')
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {time && time.datetime ? `${new Date(time.datetime)}` : `nothing here...`} 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
