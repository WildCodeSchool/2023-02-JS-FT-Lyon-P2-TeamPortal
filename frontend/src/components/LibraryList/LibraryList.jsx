import React from "react";
import PropTypes from "prop-types";
import LibraryCard from "../LibraryCard/LibraryCard";

export default function LibraryList({ libraries }) {
  return (
    <div className="containerlibrary">
      {libraries.map((library) => (
        <LibraryCard
          key={library.title}
          title={library.title}
          docs={library.docs}
        />
      ))}
    </div>
  );
}
LibraryList.propTypes = {
  libraries: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      docs: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
