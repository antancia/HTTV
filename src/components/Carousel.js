import React from "react";
import { white } from "ansi-colors";

const styleNavigationButtons = {
  color: "white",
  filter: "drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.5))"
};

const styleCarousel = {
  background: "white",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const stylePleb = {
  background: "black",
  width: "16vw", // these dimensions can probably be removed once we have thumbnails so long as they are the right proportions
  height: "9vw"
};

const styleTheOne = {
  background: "red",
  width: "32vw",
  height: "18vw"
};

export default function Carousel() {
  return (
    <div style={styleCarousel}>
      <h1 style={styleNavigationButtons}>&lt;</h1>

      <div style={stylePleb} />
      <div style={stylePleb} />
      <div style={styleTheOne} />
      <div style={stylePleb} />
      <div style={stylePleb} />

      <h1 style={styleNavigationButtons}>&gt;</h1>
    </div>
  );
}
