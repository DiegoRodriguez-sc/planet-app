import React from "react";

const StatsPlanet = ({ planet }) => {
  const { radius, revolution, rotation, temperature } = planet[0];

  return (
    <div className="stats-container">
      <div className="stats-box">
        <h4>rotation time</h4>
        <p>{rotation}</p>
      </div>
      <div className="stats-box">
        <h4>revolution time</h4>
        <p>{revolution}</p>
      </div>
      <div className="stats-box">
        <h4>radius</h4>
        <p>{radius}</p>
      </div>
      <div className="stats-box">
        <h4>average temp</h4>
        <p>{temperature}</p>
      </div>
    </div>
  );
};

export default StatsPlanet;
