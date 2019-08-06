import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import { isPatternLike } from "@babel/types";

const styleNav = {
  position: "absolute",
  width: "100%",
  height: "5rem",
  padding: "0 4rem",
  display: "flex",
  alignContent: "flex-start"
};

const styleLogo = {
  width: "5rem",
  filter: "drop-shadow(1px 1px 5px rgba(0, 0, 0, 1))"
};

const styleFeatured = {
  width: "100%",
  height: "65vh",
  objectFit: 'cover',
  background: "pink"
};

function App() {
  return (
    <div className="App">
      <div style={styleNav}>
        <img style={styleLogo} src="../assets/logo.svg" alt="HTTV Logo" />
      </div>
      <div style={styleFeatured}>
        <img style={styleFeatured} src="https://www.placecage.com/1600/900" alt="featured film" />
      </div>
      <Carousel />
    </div>
  );
}

export default App;
