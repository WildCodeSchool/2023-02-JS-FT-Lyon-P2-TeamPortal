import React from "react";
import PropTypes from "prop-types";
import LibraryCard from "./LibraryCard";

export default function LibraryList({ libraries }) {
  return (
    <div>
      {libraries.map((library) => (
        <LibraryCard key={library.title} library={library} />
      ))}
    </div>
  );
}
LibraryList.propTypes = {
  libraries: PropTypes.string.isRequired,
};
