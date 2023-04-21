import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './NewsCard.css';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsCard = () => {
  const [news, setNews] = useState(null);
  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&category=technology&language=en`
      )
      .then((response) => {
        setNews(response.data.articles);
      });
  };

  useEffect(getNews, []);
  console.log(news);

  const [newsIndex, setNewsIndex] = useState(0);
  const handlePrevious = () => {
    setNewsIndex(newsIndex - 1);
  };
  const handleNext = () => {
    setNewsIndex(newsIndex + 1);
  };

  if (news && news.urlToImage !== null) {
    return (
      <div className="news-card">
        <button
          onClick={handlePrevious}
          disabled={newsIndex === 0 ? true : false}
          className="news-arrow news-arrow-prev"
        >
          &#8249;
        </button>
        <div className="left-container">
          <div className="image-container">
            <img
              src={news[newsIndex].urlToImage}
              alt={news[newsIndex].title}
              className="news-image"
            />
          </div>
          <a href={news[newsIndex].url}>&#x203A;Read More</a>
        </div>
        <div className="right-container">
          <h3 className="news-title">{news[newsIndex].title}</h3>
          <p className="news-description">{news[newsIndex].description}</p>
          <br />
          <p>Author: {news[newsIndex].author}</p>
        </div>
        <button
          onClick={handleNext}
          disabled={newsIndex === news.length - 1 ? true : false}
          className="news-arrow news-arrow-next"
        >
          &#8250;
        </button>
      </div>
    );
  }
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
  }),
  handlePrevious: PropTypes.func,
  handleNext: PropTypes.func,
};

export default NewsCard;
