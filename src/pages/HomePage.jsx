import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src="src/assets/beers.png" alt="All Beers " />
        <h1>All Beers</h1>
      </Link>
      <Link to="/random-beer">
        <img src="src/assets/random-beer.png" alt="Random Beer" />
        <h1>Random Beer</h1>
      </Link>
      <Link to="/new-beer">
        <img src="src/assets/new-beer.png" alt="New Beer" />
        <h1>New Beer</h1>
      </Link>
    </div>
  );
}

export default HomePage;
