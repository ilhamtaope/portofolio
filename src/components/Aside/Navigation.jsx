import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBriefcase,
  faUser,
  faPencil,
  faPaperPlane,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <section className="navigation">
        <Nav className="flex-column">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            <span> Home</span>
          </Link>
          <Link to="/project">
            <FontAwesomeIcon icon={faBriefcase} />
            <span> Project</span>
          </Link>
          <Link to="/blog">
            <FontAwesomeIcon icon={faPencil} />
            <span> Blog</span>
          </Link>
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} />
            <span> About</span>
          </Link>
          <Link to="/contact">
            <FontAwesomeIcon icon={faPaperPlane} />
            <span> Contact</span>
          </Link>
          <Link to="/roadmap">
            <FontAwesomeIcon icon={faDiagramProject} />
            <span> Roadmap</span>
          </Link>
        </Nav>
      </section>
    </>
  );
};

export default Navigation;
