import React, { useState } from "react";

const InfoPlanet = ({ planet }) => {
  const info = planet[0];
  const [activeContent, setActiveContent] = useState("overview");

  // set active text, source, and image
  let activeText = "";
  let activeSource = "";
  let activeImage = "";
  switch (activeContent) {
    case "overview":
      activeText = info.overview.content;
      activeSource = info.overview.source;
      activeImage = info.images.planet;
      break;
    case "structure":
      activeText = info.structure.content;
      activeSource = info.structure.source;
      activeImage = info.images.internal;
      break;
    case "geology":
      activeText = info.geology.content;
      activeSource = info.geology.source;
      activeImage = info.images.planet;
      break;
    default:
      break;
  }

  return (
    <div className="info-planets">
      <div className="info-container">
        <div className="info-img">
          <img
            className={`info-img-planet info-${info.name.toLowerCase()}`}
            src={activeImage}
            alt={info.name}
          />
          {activeContent === "geology" && (
            <img
              className="info-img-geology"
              src={info.images.geology}
              alt={info.name}
            />
          )}
        </div>

        <div className="info-title-p">
          <div className="info-title-container">
            <h1>{info.name}</h1>
            <p>{activeText}</p>
            <a target="_blank" rel="noreferrer" href={activeSource}>
              <span className="info-span">source:</span>Wikipedia
            </a>
          </div>
        </div>

        <div className="info-btns">
          <div className="info-btns-container">
            <button
              type="button"
              className={`btn btn-${info.name.toLowerCase()}`}
              onClick={() => {
                setActiveContent("overview");
              }}
            >
              <span className="number">01</span> overview
            </button>
            <button
              type="button"
              className={`btn btn-${info.name.toLowerCase()}`}
              onClick={() => {
                setActiveContent("structure");
              }}
            >
              <span className="number">02</span>{" "}
              <span className="hidden">internal</span> structure
            </button>
            <button
              type="button"
              className={`btn btn-${info.name.toLowerCase()}`}
              onClick={() => {
                setActiveContent("geology");
              }}
            >
              <span className="number">03</span> surface{" "}
              <span className="hidden">geology</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPlanet;
