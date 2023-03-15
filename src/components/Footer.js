import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";.
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a href="https://github.com/bill6653">
          <FontAwesomeIcon icon={["fas", "github"]} />
        </a>
        <a href="linkedin.com">
          <FontAwesomeIcon icon={["fas", "linkedin"]} />
        </a>
        <a href="facebook.com">
          <FontAwesomeIcon icon={["fas", "facebook"]} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
