import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import LibraryCard from "../components/LibraryCard/LibraryCard";
import LibraryDoc from "../data/LibraryDoc.json";
import UserContext from "../contexts/UserContext";

export default function Library() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Header />
      <Navbar />
      {user ? (
        <div className="containerlibrary">
          {LibraryDoc.libraries.map((library) => (
            <LibraryCard
              key={library.title}
              title={library.title}
              docs={library.docs}
            />
          ))}
        </div>
      ) : (
        <div className="please-container">
          <NavLink to="/">
            <button type="submit" className="logout-btn">
              Reconnexion
            </button>
          </NavLink>
        </div>
      )}
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
