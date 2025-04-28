
import Carusel from '../components/Carusel'
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import TopNav from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";
import { useParams } from "react-router-dom"; // Hook to access dynamic URL params
import '../styles/project.css'

function Post() {
  const { id } = useParams(); // Access the dynamic "id" parameter
    const [post, setPost] = useState(null);
    
    const navigate = useNavigate();

    const handleClick = (url) => {
      startTransition(() => {
        navigate(url);
      });
    };

  useEffect(() => {
    // Fetch the post data from an API or a local source based on the post ID
    fetch(`http://127.0.0.1:8000/v1/post/${id}/`) // Example API endpoint
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]); // Fetch data when the ID changes

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main id="project">
      <TopNav></TopNav>
      <div className="project-body">
        <Carusel images={post.images}></Carusel>
        <div id="infos">
          <div id="proj-title">Project details</div>
          <div className="details">
            <div className="data">
              Location
              <br />
              Purpose
              <br />
              Project start
              <br />
              Project end
              <br />
            </div>
            <div className="data">
              {post.location}
              <br />
              {post.scope}
              <br />
              2019
              <br />
              2020
              <br />
            </div>
          </div>
        </div>
        <div id="infos">
          <div id="proj-title">Description</div>
          <div className="details">
            <div className="data">{post.description}</div>
          </div>
        </div>
        <Button variant="outline-dark" onClick={() => {handleClick("/portfolio")}}>Back</Button>
        <Footer></Footer>
      </div>
    </main>
  );
}

export default Post;