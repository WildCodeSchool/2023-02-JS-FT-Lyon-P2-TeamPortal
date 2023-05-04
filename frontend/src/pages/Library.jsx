import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import LibraryCard from "../components/LibraryCard/LibraryCard";
import UserContext from "../contexts/UserContext";

const libraries = [
  {
    title: "Infos RH",
    docs: [
      {
        file: "reglement_interieur.pdf",
        title: "Réglement intérieur",
      },
      {
        file: "convention_collective.pdf",
        title: "Convention collective",
      },
      {
        file: "note_de_service.pdf",
        title: "Note de service",
      },
    ],
  },

  {
    title: "Fiches de poste",
    docs: [
      {
        file: "dev_front.pdf",
        title: "Dev Front",
      },
      {
        file: "dev_back.pdf",
        title: "Dev Back",
      },
      {
        file: "manager_activite.pdf",
        title: "Team Manager",
      },
      {
        file: "ui_ux_design.pdf",
        title: "UI/UX designer",
      },
      {
        file: "manager_activite.pdf",
        title: "Business manager",
      },
      {
        file: "charge_de_clientele.pdf",
        title: "Chargé de clientèle",
      },
      {
        file: "responsable_achats.pdf",
        title: "Responsable des achats",
      },
    ],
  },

  {
    title: "Infos pratiques",
    docs: [
      {
        file: "annuaire.pdf",
        title: "Annuaire de l'entreprise",
      },
      {
        file: "fiche_conges.pdf",
        title: "Demande de congés",
      },
      {
        file: "formulaire_heures_supplementaires.pdf",
        title: "Heures supplémentaires",
      },
    ],
  },
];
export default function Library() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="containerlibrary">
        {user ? (
          <>
            {libraries.map((library) => (
              <LibraryCard
                key={library.title}
                title={library.title}
                docs={library.docs}
              />
            ))}
          </>
        ) : (
          <NavLink to="/">
            <button type="submit" className="submit-btn">
              Reconnexion
            </button>
          </NavLink>
        )}
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
