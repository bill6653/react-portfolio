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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum
            consectetur libero id faucibus. Eu facilisis sed odio morbi quis.
            Nec ultrices dui sapien eget mi proin. Pellentesque massa placerat
            duis ultricies lacus. Amet cursus sit amet dictum sit amet justo
            donec enim. Pharetra sit amet aliquam id diam maecenas ultricies.
            Condimentum mattis pellentesque id nibh tortor id aliquet lectus
            proin. Orci porta non pulvinar neque laoreet. Blandit turpis cursus
            in hac.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            sed vulputate odio ut enim. Interdum velit euismod in pellentesque
            massa placerat duis ultricies lacus. Id aliquet risus feugiat in
            ante metus dictum at tempor. Mi tempus imperdiet nulla malesuada
            pellentesque elit eget. Sollicitudin tempor id eu nisl nunc
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
