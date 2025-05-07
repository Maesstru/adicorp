import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";
import logo from "../assets/logo_red.png";
import { Nav } from "react-bootstrap";

function TopNav() {
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const handleClick = (url) => {
      startTransition(() => {
        navigate(url);
      });
    };

  return (
    <Navbar
      sticky="top"
          collapseOnSelect
          expand="lg"
          style={{width: "100vw",borderBottom: "1px solid var(--color-text)",backgroundColor: "var(--color-background) !important"}}
          className="bg-body-tertiary">
          
      <Container>
        <Navbar.Brand onClick={() => handleClick("/")}>
          <img src={logo} alt="logo" style={{ height: "max(6rem,10vh)" }} />
          Adicorp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav variant="underline" activeKey={currentPath}>
            <Nav.Link eventKey="/portfolio" onClick={() => handleClick("/portfolio")}>
              Portofolio
            </Nav.Link>
            <Nav.Link eventKey="/contact" onClick={() => handleClick("/contact")}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
