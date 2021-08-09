import React from "react";
import getDataByName from "../../data/getElementByName";
import InfoPlanet from "../InfoPlanet";
import StatsPlanet from "../StatsPlanet";

const Jupiter = () => {
  const datos = getDataByName("jupiter");
  return (
    <div className="planet-container">
      <InfoPlanet planet={datos} />
      <StatsPlanet planet={datos} />
    </div>
  );
};

export default Jupiter;
