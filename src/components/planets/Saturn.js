import React from "react";
import getDataByName from "../../data/getElementByName";
import InfoPlanet from "../InfoPlanet";
import StatsPlanet from "../StatsPlanet";

const Saturn = () => {
  const datos = getDataByName("saturn");
  return (
    <div className="planet-container">
      <InfoPlanet planet={datos} />
      <StatsPlanet planet={datos} />
    </div>
  );
};

export default Saturn;
