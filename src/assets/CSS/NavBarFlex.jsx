import React from "react";
import "./NavBarFlex.css"

function NavBarFlex() {
  return (
    <div className="body">
      <nav>
        <h2>logo</h2>
        <ul className="navlinks">
          <li>
            <a href="#home" className="navlink">home</a>
          </li>
          <li>
            <a href="#about" className="navlink">about</a>
          </li>
          <li>
            <a href="#contact" className="navlink">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarFlex;
