import React, { useEffect, useState } from "react";
import TopNav from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";


const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  

  useEffect(() => {
    // Fetch data from the Django API endpoint
    fetch("http://127.0.0.1:8000/v1/projects/")
      .then((response) => response.json()) // Parse the JSON data
      .then((data) => setProjects(data)) // Set the data in state
      .catch((error) => console.error("Error fetching projects:", error));
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <main>
      <TopNav></TopNav>
      <div>
        <div className="blog-container">
          {projects.map((project) => (
            <Card
              id={project.id}
              key={project.id}
              img={project.images[0].image}
              title={project.title}
              text={project.scope}
              address={project.location}></Card>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default ProjectList;
