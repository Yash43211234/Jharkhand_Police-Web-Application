import React, { useState, useEffect } from 'react';

const Latest = ({ stateName }) => {
  
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
   //fetch filter API from Newsapi {jharkhand} 
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=4f2743d8ba2a4fe2b733bfc92e73ce7f&q=jharkhand`)
      .then(response => {
        if (!response.ok) {
          throw new Error('rasta mai error hai');
        }
        return response.json();
      })
      .then(data => {
        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles.slice(0, 10)); // Sirf 10 data he fetch hoga
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

    <>
    <div className='Box'>
      <h2>Crimes/News of {stateName}</h2>
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
          {news.length < 10 && <div className="news-item-placeholder" />}
        </div>
      )}

      <style>
        {`
          .Box{
           
            margin-top:30px;
            margin-bottom:30px;
          }
          .news-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .news-item {
            border: 1px solid #ccc;
            padding: 20px;
            width: 80%;
            max-width: 800px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            transition: transform 0.3s ease;
          }
          
          .news-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .news-item h3 {
            margin-top: 0;
            color: #333;
          }
          
          .news-item p {
            margin-bottom: 0;
            color: #666;
          }
          
          .news-item-placeholder {
            visibility: hidden;
          }
          `}
      </style>
    </div>
          </>
  );
};

export default Latest;
