import React, { useEffect, useState } from "react";
import { white } from "ansi-colors";
import content from "../content";

const thumbnail = [
  "https://www.placecage.com/1600/900",
  "https://www.loremflickr.com/1600/900"
];

function getRandomInt(max) { return Math.floor(Math.random() * Math.floor(max)) }

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
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundSize: "cover",
  padding: "1rem"
};

const stylePleb = {
  ...styleThumbnail,

  backgroundImage: `url(${thumbnail[getRandomInt(thumbnail.length)]})`,
  width: "16vw",
  height: "9vw"
};

const styleTheOne = {
  ...styleThumbnail,

  backgroundImage: `url(${thumbnail[getRandomInt(thumbnail.length)]})`,
  width: "32vw",
  height: "18vw"
};

const styleThumbnailText = {
  color: "white",
  filter: "drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.3))",
  fontSize: "0.75rem"
};

const styleBold = {
  fontSize: "1rem"
};

const ContentCard = ({ content, children }) => {
return (
  <div style={stylePleb}>
    <h2 style={styleThumbnailText}>
      <strong style={styleBold}>{content.title}</strong>
    </h2>
    <h3 style={styleThumbnailText}>{content.description}</h3>
  </div>
  );
};

const SelectedCard = ({ content, children }) => {
return (
  <div style={styleTheOne}>
    <h2 style={styleThumbnailText}>
      <strong style={styleBold}>{content.title}</strong>
    </h2>
    <h3 style={styleThumbnailText}>{content.description}</h3>
  </div>
  );
};

export default function Carousel() {
  useEffect(_ => {
    document.addEventListener('keydown', e => {
      if(e.key === 'ArrowLeft') shiftLeft();  // TODO: replace with working versions
      if(e.key === 'ArrowRight') shiftRight();
    });

    // TODO: does this need to be destroyed somewhere
  });

  const [showLineup, setShowLineup] = useState(content);
  const firstShow = content[0]
  const lastShow = content[content.length - 1];

  function getSelectedShowIndex() { return Math.ceil(showLineup.length/2) }  // TODO: idky this only works on left but not right or vice versa lol
  function getSelectedShow() { return showLineup[getSelectedShowIndex()] }

  function playSelectedShowMedia() {
    // TODO: Make this properly wait until after navigation sound
    // TODO: Also stop sound when moving on
    const soundUrl = getSelectedShow().soundUrl
    if (soundUrl) setTimeout(_ => new Audio(soundUrl).play(), 400)
  }

  function playNavigationFx(whichFx) {
    const selectedTitle = getSelectedShow().title
    console.log(selectedTitle)
    console.log(firstShow.title)
    if(selectedTitle === firstShow.title || selectedTitle === lastShow.title) whichFx = 'outOfContent';

    const fx = new Audio(`assets/audio/${ whichFx }.mp3`);
    fx.play();
  }

  function shiftLeft(currentLineup) {
    const newContents = [...currentLineup];
    newContents.push(newContents.shift());
    setShowLineup(newContents);

    playSelectedShowMedia();
    playNavigationFx('left');
  }

  function shiftRight(currentLineup) {
    const newContents = [...currentLineup];
    newContents.unshift(newContents.pop());
    setShowLineup(newContents);

    playSelectedShowMedia();
    playNavigationFx('right')
  }

  return (
    <div style={styleCarousel}>
      <h1
        onClick={() => shiftLeft(showLineup)}
        style={styleNavigationButtons}
      >
        &lt;
      </h1>


      <ContentCard content={showLineup[0]} />
      <ContentCard content={showLineup[1]} />
      <SelectedCard content={showLineup[2]} />
      <ContentCard content={showLineup[3]} />
      <ContentCard content={showLineup[4]} />

      <h1
        onClick={() => shiftRight(showLineup)}
        style={styleNavigationButtons}
      >
        &gt;
      </h1>
    </div>
  );
}