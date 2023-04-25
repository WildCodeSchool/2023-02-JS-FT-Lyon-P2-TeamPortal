import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ArrowPrev from "../../assets/arrowPrev";
import ArrowNext from "../../assets/arrowNext";

// import "react-toastify/dist/ReactToastify.css";
import "./NewsCard.css";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function NewsCard() {
  const [news, setNews] = useState(null);
  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&category=technology&language=en`
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        alert(error.message);
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
          <p />
        </div>
        <div className="news-nav-container">
          <div className="news-nav">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={newsIndex === 0}
              className="news-arrow news-arrow-prev"
            >
              <ArrowPrev />
            </button>
            <a
              href={news[newsIndex].url}
              className="news-link"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
            <button
              type="button"
              onClick={handleNext}
              disabled={newsIndex === news.length - 1}
              className="news-arrow news-arrow-next"
            >
              <ArrowNext />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
