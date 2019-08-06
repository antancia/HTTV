import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>HTTV</p>
      <div>Featured movie content!</div>
      <audio autoplay loop>
        <source src="{ url }" type="audio/ogg" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Carousel />
    </div>
  );
}

export default App;
