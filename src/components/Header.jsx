import { Navbar, Container, Nav } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { BsPatchCheckFill } from "react-icons/bs";
import Navigation from "./Aside/Navigation";
import ilhamprofile from "./../images/ilhamprofile.jpg";

const Header = () => {
  return (
    <>
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <Image src={ilhamprofile} roundedCircle /> Ilham
              <BsPatchCheckFill className="iconVerified" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Navigation />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
