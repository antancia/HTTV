import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";

const url = "";

const styleNav = {
  width: '100%',
  height: '3rem',
  padding: '0 4rem',
}

const styleLogo = {
  height: '100%',
  width: '5rem',
}

function App() {
  return (
    <div className="App">
      <div style={ styleNav }>
        <img style={ styleLogo } src="../assets/logo.svg" alt="HTTV Logo" />
      </div>
      <div>Featured movie content!</div>
      <audio autoPlay loop>
        <source src={url} type="audio/ogg" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Carousel />
    </div>
  )
}

export default App
