import React from "react";
import "../src/App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Fetch from "./components/Fetch";
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Fetch />
    </div>
  );
};
export default App;
