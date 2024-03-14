

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

const HomePage_x = () => {
  const [jokes, setJokes] = useState([]);
  const history = useHistory(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
        const jsonData = await response.json();
        setJokes(jsonData.jokes);
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    history.push('/'); 
  };

  return (
    <div className="container mt-5 bg-dark d-flex flex-column justify-content-between" style={{ minHeight: '100vh' }}>
      <div>
        <h1 className="text-center mb-4 text-primary">Jokes</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {jokes.map((joke, index) => (
            <div key={index} className="col">
              <div className="card h-100 bg-light">
                <div className="card-body">
                  <h2 className="card-title mb-3 font-weight-bold">Category: {joke.category}</h2>
                  <h3 className="card-subtitle mb-2 text-muted">Type: {joke.type}</h3>
                  <p className="card-text font-italic">
                    <pre>{joke.joke}</pre>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center mt-3">
        <button onClick={handleLogout} className="btn btn-primary mb-3">Logout</button>
      </div>
    </div>
  );
};

export default HomePage_x;
