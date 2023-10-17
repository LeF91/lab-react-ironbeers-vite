import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="navbar">
        <Link to="/">
          <img src="./assets/home-icon.png" alt="HomePage" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
