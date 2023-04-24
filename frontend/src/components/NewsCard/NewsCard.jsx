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
        <div className="image-container">
          <img
            src={news[newsIndex].urlToImage}
            alt={news[newsIndex].title}
            className="news-image"
          />
        </div>
        <div className="bottom-container">
          <h3 className="news-title">{news[newsIndex].title}</h3>
          <p className="news-description">{news[newsIndex].description}</p>
          <p>{news[newsIndex].content}</p>
          <p className="news-author">Author: {news[newsIndex].author}</p>
          <p></p>
        </div>
        <div className="news-nav-container">
          <div className="news-nav">
            <button
              onClick={handlePrevious}
              disabled={newsIndex === 0 ? true : false}
              className="news-arrow news-arrow-prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <a href={news[newsIndex].url} className="news-link">
              Read More
            </a>
            <button
              onClick={handleNext}
              disabled={newsIndex === news.length - 1 ? true : false}
              className="news-arrow news-arrow-next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
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
