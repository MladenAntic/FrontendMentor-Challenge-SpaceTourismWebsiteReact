import React, { useState } from "react";
import "./Header.scss";
import logo from "../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("header__toggleMenu");
  const [nav, setNav] = useState("header__navigation");

  const location = useLocation().pathname;

  const [home, setHome] = useState(location === "/" ? "active" : "");
  const [destination, setDestination] = useState(
    location === "/destination" ? "active" : ""
  );
  const [crew, setCrew] = useState(location === "/crew" ? "active" : "");
  const [technology, setTechnology] = useState(
    location === "/technology" ? "active" : ""
  );

  function toggleMenu() {
    if (toggleBtn === "header__toggleMenu") {
      setToggleBtn("header__toggleMenu open clicked");
      setNav("header__navigation show-mobile-nav");
    } else {
      setToggleBtn("header__toggleMenu");
      setNav("header__navigation");
    }
  }

  function homeLink() {
    setHome("active");

    setDestination("");
    setCrew("");
    setTechnology("");
  }

  function destinationLink() {
    setDestination("active");

    setHome("");
    setCrew("");
    setTechnology("");
  }

  function crewLink() {
    setCrew("active");

    setHome("");
    setDestination("");
    setTechnology("");
  }

  function technologyLink() {
    setTechnology("active");

    setHome("");
    setDestination("");
    setCrew("");

    window.location.reload();
  }

  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <div className="header__line"></div>
      <nav className={nav}>
        <ul>
          <li className={home} onClick={homeLink}>
            <Link to="/" href="index.html">
              <span className="header__pageNumber">00</span> Home
            </Link>
            <span className="header__highlightLink"></span>
          </li>
          <li className={destination} onClick={destinationLink}>
            <Link to="/destination">
              <span className="header__pageNumber">01</span> Destination
            </Link>
            <span className="header__highlightLink"></span>
          </li>
          <li className={crew} onClick={crewLink}>
            <Link to="/crew">
              <span className="header__pageNumber">02</span> Crew
            </Link>
            <span className="header__highlightLink"></span>
          </li>
          <li className={technology} onClick={technologyLink}>
            <Link to="/technology">
              <span className="header__pageNumber">03</span> Technology
            </Link>
            <span className="header__highlightLink"></span>
          </li>
        </ul>
      </nav>

      <button className={toggleBtn} onClick={toggleMenu}>
        <span className="header__topBar bar"></span>
        <span className="header__middleBar bar"></span>
        <span className="header__bottomBar bar"></span>
      </button>
    </header>
  );
};

export default Header;
