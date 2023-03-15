import React from "react";

import "../styles/header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const navigateToAbout = (e) => {
    e.preventDefault();
    navigate("/about");
  };
  const navigateToContact = (e) => {
    e.preventDefault();
    navigate("/contact");
  };
  const navigateToResume = (e) => {
    e.preventDefault();
    navigate("/resume");
  };
  const navigateToProjects = (e) => {
    e.preventDefault();
    navigate("/projects");
  };
  return (
    <header className="header">
      <div className="header__content">
        <nav className="main-nav">
          <a href="/" className="main-nav__link main-nav__brand">
            Billy Crouch
          </a>

          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a
                className="main-nav__link"
                href="about"
                onClick={navigateToAbout}
              >
                About
              </a>
            </li>
            <li className="main-nav__item">
              <a
                className="main-nav__link"
                href="about"
                onClick={navigateToProjects}
              >
                Projects
              </a>
            </li>
            <li className="main-nav__item">
              <a
                className="main-nav__link"
                href="about"
                onClick={navigateToResume}
              >
                Resume
              </a>
            </li>
            <li className="main-nav__item">
              <a
                className="main-nav__link"
                href="about"
                onClick={navigateToContact}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
