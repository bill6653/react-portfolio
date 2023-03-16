import React from "react";
import profile from "../assets/profile.jpg";

import "../styles/about.css";

const About = () => {
  return (
    <section className="section section-about">
      <div className="section-about__content container">
        <h2>About Me</h2>
        <img src={profile} alt="my profile" />
        <div className="section-about__description">
          <p>
           I am from Austin, Texas and currently reside in Conroe, Texas. My immediate goal is to become a software developer
           ideally working full-stack.
          </p>
          <p>
           i'm a novice software developer but have experience in HTML, CSS, JavaScript, SQL, PWA and React!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
