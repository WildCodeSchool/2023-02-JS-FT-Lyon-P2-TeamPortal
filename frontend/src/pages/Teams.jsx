import React, { useState, useEffect } from "react";
import TeamList from "../components/teamList/TeamList";
import Loader from "../components/Loader/Loader";

export default function Teams() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="background-image">
      <TeamList />
    </div>
  );
}
