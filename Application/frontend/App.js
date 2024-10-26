import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch greeting from the Flask API
    axios.get('/api/greet')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the greeting!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message ? message : 'Loading...'}</h1>
      </header>
    </div>
  );
}

export default App;