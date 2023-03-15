import React, { useState } from "react";

import Project from "../components/Project";
import CONST_PROJECTS from "../data/projects";
import "../styles/projects.css";

const Projects = () => {
    // eslint-disable-next-line
  const [projects, setProjects] = useState(CONST_PROJECTS);
  return (
    <section className="section section-projects">
      <div className="section-projects__content container">
        <h2>All Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
