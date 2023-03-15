import React from "react";

import "../styles/header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <nav className="main-nav">
          <h3 className="main-nav__brand">Billy Crouch</h3>
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="main-nav__link" href="about">
                About
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="about">
                Projects
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="about">
                Resume
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="about">
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
