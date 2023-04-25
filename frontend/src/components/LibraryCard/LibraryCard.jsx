import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LibraryCard.css";

export default function LibraryCard({ title, docs }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <div className="librarycardbox">
        <button
          type="button"
          className="librarytitle"
          onClick={() => setIsShown(!isShown)}
        >
          {title}
        </button>
        {isShown && (
          <div className="documents">
            {docs.map((doc) => (
              <h2 key={doc}>{doc}</h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

LibraryCard.propTypes = {
  title: PropTypes.string.isRequired,
  docs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
