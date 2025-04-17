
import React, { useEffect, useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from the Django API endpoint
    fetch('http://127.0.0.1:8000/v1/projects/')
      .then(response => response.json()) // Parse the JSON data
      .then(data => setProjects(data))    // Set the data in state
      .catch(error => console.error('Error fetching projects:', error));
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.scope}</p>
            <p>{project.location}</p>
            <p>{project.description}</p>
            <div>
              {project.images.map(image => (
                <img key={image.id} src={image.image} alt={`Project ${project.id} Image`} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;