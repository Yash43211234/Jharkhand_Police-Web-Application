import'./Latest.css';
import React, { useState, useEffect } from 'react';

const Latest = ({ stateName }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch latest news for the state (replace with actual API call)
    // You can use fetch or any other library like axios to fetch data
    fetch(`https://api.example.com/news?state=${Latest}`)
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));
  }, [stateName]);

  return (
    <div>
      <h2>Latest News of {stateName}</h2>
      <div>
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
