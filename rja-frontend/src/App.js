import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jokeCount, setJokeCount] = useState(0);

  const fetchJoke = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:3001/api/joke');
      if (!response.ok) throw new Error('Failed to fetch joke');
      const data = await response.json();
      setJoke(data.joke);
      setJokeCount(prev => prev + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (

    <div className="app">
        <div className="project-header">
        <h2>Typeface Assignment Project</h2>
        <p className="subtitle">Exploring humor through typography</p>
        </div>
        
      <h1>Random Joke Generator</h1>
      
      <div className="joke-container">
        {isLoading ? (
          <p className="loading">Loading your daily dose of humor...</p>
        ) : error ? (
          <p className="error">😢 {error}</p>
        ) : (
          <p className="joke-text">"{joke}"</p>
        )}
      </div>

      <button 
        className="joke-button"
        onClick={fetchJoke}
        disabled={isLoading}
      >
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <span role="img" aria-label="laugh">😂</span> Get Another Joke 
            <span className="counter"> ({jokeCount})</span>
          </>
        )}
      </button>
    </div>
  );
}

export default App;