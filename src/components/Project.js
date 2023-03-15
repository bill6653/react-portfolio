import React from "react";

import "../styles/project.css";
const Project = ({ project }) => {
  return (
    <a href={project.link} className="project" target="_blank">
      <img src={project.image} />
      <h4>{project.title}</h4>
    </a>
  );
};

export default Project;
