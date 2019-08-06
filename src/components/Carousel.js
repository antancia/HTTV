import React from "react";

const styleCarousel = {
  background: 'white',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}

const stylePleb = {
  background: 'black',
  width: '16vw',
  height: '9vw',
}

const styleTheOne = {
  background: 'red',
  width: '32vw',
  height: '18vw',
}


export default function Carousel() {
  return <div style={ styleCarousel }>
    <div style={ stylePleb } />
    <div style={ styleTheOne } />
  </div>;
}
