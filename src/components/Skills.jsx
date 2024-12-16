import React from "react";

function Skills({ skills }) {
  return (
    <div>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No skills found.</p>
      )}
    </div>
  );
}

export default Skills;
