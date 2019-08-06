import React, { useState } from "react";
import { white } from "ansi-colors";
import content from "../content";

const thumbnail = [
  'https://www.placecage.com/1600/900',
  'https://www.loremflickr.com/1600/900'
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const styleNavigationButtons = {
  color: "white",
  filter: "drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.3))"
};

const styleCarousel = {
  marginBottom: "2rem",
  background: white,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const styleThumbnail = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  backgroundSize: 'cover',
  padding: '1rem',
}

const stylePleb = {
  ...styleThumbnail,

  backgroundImage: `url(${ thumbnail[getRandomInt(thumbnail.length)] })`,
  width: "16vw",
  height: "9vw",
};

const styleTheOne = {
  ...styleThumbnail,

  backgroundImage: `url(${ thumbnail[getRandomInt(thumbnail.length)] })`,
  width: "32vw",
  height: "18vw",
};

const styleThumbnailText = {
  color: 'white',
  filter: "drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.3))",
  fontSize: '0.75rem',
}

const styleBold = {
  fontSize: '1rem',
}



const ContentCard = ({ content, children }) => {
  return (
    <div style={stylePleb}>
      <h2 style={styleThumbnailText}><strong style={styleBold}>{content.title}</strong></h2>
      <h3 style={styleThumbnailText}>{content.description}</h3>
    </div>
  );
};

const SelectedCard = ({ content, children }) => {
  const placeHolderUrl = "";
  return (
    <div style={styleTheOne}>
      <audio autoPlay loop>
        <source src={placeHolderUrl} type="audio/ogg" />
        Your browser does not support the <code>audio</code> element.
      </audio>

      <h2 style={styleThumbnailText}><strong style={styleBold}>{content.title}</strong></h2>
      <h3 style={styleThumbnailText}>{content.description}</h3>
    </div>
  );
};

export default function Carousel() {
  const [currentContents, setCurrentContents] = useState(content);

  function moveContentsForward(curr) {
    const newContents = [...curr];
    newContents.push(newContents.shift());
    setCurrentContents(newContents);
  }

  function moveContentsBackward(curr) {
    const newContents = [...curr];
    newContents.unshift(newContents.pop());
    setCurrentContents(newContents);
  }

  return (
    <div style={styleCarousel}>
      <h1
        onClick={() => moveContentsForward(currentContents)}
        style={styleNavigationButtons}
      >
        &lt;
      </h1>

      <ContentCard content={currentContents[0]} />
      <ContentCard content={currentContents[1]} />
      <SelectedCard content={currentContents[2]} />
      <ContentCard content={currentContents[3]} />
      <ContentCard content={currentContents[4]} />

      <h1
        onClick={() => moveContentsBackward(currentContents)}
        style={styleNavigationButtons}
      >
        &gt;
      </h1>
    </div>
  );
}
