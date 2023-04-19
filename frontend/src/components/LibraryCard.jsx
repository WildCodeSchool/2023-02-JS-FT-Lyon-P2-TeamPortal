import React from "react";
import PropTypes from "prop-types";

export default function LibraryCard({
  library: {
    title,
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
  },
}) {
  return (
    <div className="librarycardcontainer">
      <div className="librarytitle">
        <h1>{title}</h1>
      </div>
      <div>
        <h2>{doc1}</h2>
        <h2>{doc2}</h2>
        <h2>{doc3}</h2>
        <h2>{doc4}</h2>
        <h2>{doc5}</h2>
        <h2>{doc6}</h2>
        <h2>{doc7}</h2>
        <h2>{doc8}</h2>
        <h2>{doc9}</h2>
        <h2>{doc10}</h2>
      </div>
    </div>
  );
}

LibraryCard.propTypes = {
  library: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
