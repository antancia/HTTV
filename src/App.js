import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import { isPatternLike } from "@babel/types";

const url = "";

const styleNav = {
  position: 'absolute',
  width: '100%',
  height: '5rem',
  padding: '0 4rem',
  display: 'flex',
  alignContent: 'flex-start',
}

const styleLogo = {
  width: '5rem',
  filter: "drop-shadow(1px 3px 6px rgba(0, 0, 0, 0.8))",
}

const styleFeatured = {
  width: '100%',
  height: '65vh',
  background: 'pink',
}

function App() {
  return (
    <div className="App">
      <div style={ styleNav }>
        <img style={ styleLogo } src="../assets/logo.svg" alt="HTTV Logo" />
      </div>
      <div style={ styleFeatured } />
      <audio autoPlay loop>
        <source src={url} type="audio/ogg" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Carousel />
    </div>
  )
}

export default App
