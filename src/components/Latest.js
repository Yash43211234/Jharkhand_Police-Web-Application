import React, { useState, useEffect } from 'react';
import './Latest.css';

const Latest = ({ stateName }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch latest news for the state (replace with actual API call)
    // You can use fetch or any other library like axios to fetch data
    fetch(` https://newsapi.org/v2/top-headlines?country=in&apiKey=4f2743d8ba2a4fe2b733bfc92e73ce7f`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          throw new Error('Unexpected data format from API');
        }
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setError(error.message);
      });
  }, [stateName]);

  return (
    <div>
      <h2>Latest News of {stateName}</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="news-container">
          {news.map((item, index) => (
            <div key={index} className="news-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Latest;
