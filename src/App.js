import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Hello Burrito</p>
      <audio autoplay loop>
        <source src="{ url }" type="audio/ogg" />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}

export default App;
