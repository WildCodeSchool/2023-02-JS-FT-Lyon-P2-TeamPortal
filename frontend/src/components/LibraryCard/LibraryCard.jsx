import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LibraryCard.css";

export default function LibraryCard({ title, docs }) {
  const [isShown, setIsShown] = useState(true);
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
              <a
                href={`../../src/assets/library/${doc.file}`}
                key={doc.title}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{doc.title}</h3>
              </a>
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
