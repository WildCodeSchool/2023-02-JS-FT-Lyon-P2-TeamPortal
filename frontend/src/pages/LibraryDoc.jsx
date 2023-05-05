import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import LibraryCard from "../components/LibraryCard/LibraryCard";
import LibraryDoc from "../data/LibraryDoc.json";

export default function Library() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="containerlibrary">
        {LibraryDoc.libraries.map((library) => (
          <LibraryCard
            key={library.title}
            title={library.title}
            docs={library.docs}
          />
        ))}
      </div>
    </div>
  );
}

LibraryCard.propTypes = {
  libraries: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      docs: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};
