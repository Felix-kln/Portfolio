import React, { useState } from "react";
import "./Navbar.css";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [sidenavOpen, setSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
    console.log("test");
  };

  return (
    <nav>
      <div className="name-flip">
        <div className="flip">
          <span>Felix</span>
          <span>Klein</span>
        </div>
      </div>
      <div
        className={`mobile-nav ${sidenavOpen ? "open" : ""}`}
        onClick={toggleSidenav}
      >
        <i className="fa-solid fa-bars mobile-nav__icon"></i>
      </div>
      <aside className={`slider-wrapper ${sidenavOpen ? "open" : ""}`}>
        <div className="close-wrapper">
          <i className="fa-solid fa-x" onClick={toggleSidenav}></i>
        </div>
        <div className="slider-nav__container">
          <NavLinks className="slider-nav__list" closeMobile={setSidenavOpen} />
        </div>
      </aside>
      <div
        className={`slider-overlay ${sidenavOpen ? "open" : ""}`}
        onClick={toggleSidenav}
      ></div>

      <NavLinks className="nav__list" />
    </nav>
  );
};

export default Navbar;
