import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./SearchEngine";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React AJAX Search Engine</h1>
      <SearchEngine />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
