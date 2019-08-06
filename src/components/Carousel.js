import React from "react";
import { white } from "ansi-colors";
import content from "../content";

const styleNavigationButtons = {
  color: "white",
  filter: "drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.3))"
};

const styleCarousel = {
  background: white,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
};

const stylePleb = {
  background: 'black',
  width: '16vw', // these dimensions can probably be removed once we have thumbnails so long as they are the right proportions
  height: '9vw'
};

const styleTheOne = {
  background: 'red',
  width: '32vw',
  height: '18vw'
};

const ContentCard = ({ content, children }) => {
  return (
    <div style={stylePleb}>
      <h5 style={{ color: "white" }}>{content.title}</h5>
    </div>
  );
};

const SelectedCard = ({ content, children }) => {
  return (
    <div style={styleTheOne}>
      <h4>{content.title}</h4>
    </div>
  );
};

export default function Carousel() {
  return (
    <div style={styleCarousel}>
      <h1 style={styleNavigationButtons}>&lt;</h1>

      <ContentCard content={content[0]} />
      <ContentCard content={content[1]} />
      <SelectedCard content={content[2]} />
      <ContentCard content={content[0]} />
      <ContentCard content={content[1]} />

      <h1 style={styleNavigationButtons}>&gt;</h1>
    </div>
  );
}
