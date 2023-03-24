import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Container>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand className="logo" href="/">
          KT!
        </Navbar.Brand>
        <Navbar.Toggle className="navToggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link nav-item" href="/About">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href="/Projects">
              Projects
            </Nav.Link>
            <Nav.Link className="nav-link" href="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;
