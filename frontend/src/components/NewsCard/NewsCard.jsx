import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import ArrowPrev from "../../assets/arrowPrev";
import ArrowNext from "../../assets/arrowNext";
import "react-toastify/dist/ReactToastify.css";
import "./NewsCard.css";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function NewsCard() {
  const notify = () => toast.error("Désolé! Aucune Info pour le moment");
  const [news, setNews] = useState(null);
  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}&language=en&q=web+development&sortBy=popularity`
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        notify(error.message);
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

  if (news) {
    return (
      <div>
        <div className="news-card">
          <div className="image-container">
            {news[newsIndex].urlToImage !== null ? (
              <img
                src={news[newsIndex].urlToImage}
                alt={news[newsIndex].title}
                className="news-image"
              />
            ) : (
              handleNext()
            )}
          </div>
          <div className="bottom-container">
            <h3 className="news-title">{news[newsIndex].title}</h3>
            <p className="news-content">{news[newsIndex].content}</p>
            <p className="news-author">Auteur: {news[newsIndex].author}</p>
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
                Lire Plus
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
        <div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
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
  }),
};

NewsCard.defaultProps = {
  news: null,
};

export default NewsCard;
