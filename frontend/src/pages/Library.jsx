import React from "react";
import LibraryList from "../components/LibraryList";

const libraries = [
  {
    title: "Infos RH",
    doc1: "Réglement intérieur",
    doc2: "Convention collective",
    doc3: "Note de service",
  },
  {
    title: "Fiches de poste",
    doc1: "Lead Dev",
    doc2: "Dev Front",
    doc3: "Dev Back",
    doc4: "Design Manager",
    doc5: "UI designer",
    doc6: "UX designer",
    doc7: "Business manager",
    doc8: "Chargé de clientèle",
    doc9: "Négociateur Interanational",
    doc10: "Responsable des achats",
  },
  {
    title: "Infos pratiques",
    doc1: "Annuaire de l'entreprise",
    doc2: "Demande de congés",
    doc3: "Déclaration d'heures supplémentaires",
  },
];

export default function Library() {
  return (
    <div>
      {/* <div className="librarycardcontainer">
        <div className="librarytitle">
          <h1></h1>
        </div>
        <div>
          <h2>{doc1}</h2>
        </div>
      </div> */}

      <div>
        <LibraryList libraries={libraries} />
      </div>
    </div>
  );
}
