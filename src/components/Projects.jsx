import React from "react";

function Projects({ projects }) {
  return (
    <div>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">Visit Project</a>}
              {/* Optionally display a screenshot */}
              {project.screenshot && <img src={project.screenshot} alt={project.name} />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

export default Projects;
