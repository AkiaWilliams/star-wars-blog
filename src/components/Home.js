import React from "react";
import Cards from "./Cards";
import Planet from "./Planet";

const Home = () => {
  return (
    <div className="container">
      <div className="data">
        <h1> Charaters </h1>
      </div>

      <Cards />
      <div>
        <h1>Planets</h1>
      </div>

      <Planet />
    </div>
  );
};
export default Home;
