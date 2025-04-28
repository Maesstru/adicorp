import TopNav from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";
import '../hero.css'
import '../styles/home.css'

function HomePage() {

    const navigate = useNavigate();

    const handleClick = (url) => {
      startTransition(() => {
        navigate(url);
      });
    };

  return (
    <main>
      <TopNav></TopNav>
      <Hero></Hero>

      <div className="home-b">
        <div id="description">
          Adicorp is a full-service construction company specializing in
          high-quality residential, commercial, and industrial projects. With a
          reputation built on integrity, craftsmanship, and reliability, we turn
          blueprints into bold realities — on time and within budget.<br></br>
          <br />
          From foundation to finish, our team brings decades of experience,
          innovative techniques, and a hands-on approach to every project.
          Whether it’s new construction, renovations, or infrastructure
          development, we’re committed to building strong structures — and even
          stronger client partnerships. At Adicorp, construction is more than
          our business — it’s our passion.
        </div>
        <Button onClick={() => handleClick("/portfolio")} variant="outline-dark">See our portfolio</Button>
        <Footer></Footer>
      </div>
    </main>
  );
}

export default HomePage;
