import React from "react";
import LibraryList from "../components/LibraryList/LibraryList";

const libraries = [
  {
    title: "Infos RH",
    docs: ["Réglement intérieur", "Convention collective", "Note de service"],
  },
  {
    title: "Fiches de poste",
    docs: [
      "Dev Front",
      "Dev Back",
      "Team Manager",
      "UI/UX designer",
      "Business manager",
      "Chargé de clientèle",
      "Responsable des achats",
    ],
  },
  {
    title: "Infos pratiques",
    docs: [
      "Annuaire de l'entreprise",
      "Demande de congés",
      "Déclaration d'heures supplémentaires",
    ],
  },
];

export default function Library() {
  return (
    <div>
      <div className="Library">
        <LibraryList libraries={libraries} />
      </div>
    </div>
  );
}
