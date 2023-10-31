import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faGithub,
  faWordpress,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  const mySkills = [
    { name: "HTML", icon: faHtml5, color: "red", size: "2x" },
    { name: "CSS", icon: faCss3, color: "blue", size: "2x" },
    { name: "JavaScript", icon: faJs, color: "yellow", size: "2x" },
    { name: "Bootstrap", icon: faBootstrap, color: "purple", size: "2x" },
    { name: "React JS", icon: faReact, color: "green", size: "2x" },
    { name: "Github", icon: faGithub, color: "black", size: "2x" },
    { name: "Wordpress", icon: faWordpress, color: "blue", size: "2x" },
    { name: "SEO", icon: faSearchengin, color: "orange", size: "2x" },
  ];

  return (
    <>
      <section className="skills">
        <h2>Skills</h2>
        <p>My Coding Skills.</p>
        <Marquee className="marq">
          <ul>
            {mySkills.map((element, index) => (
              <li key={index} className="icon-list">
                {element.icon && (
                  <FontAwesomeIcon
                    icon={element.icon}
                    color={element.color}
                    size={element.size}
                  />
                )}
                {element.name}
              </li>
            ))}
          </ul>
        </Marquee>
        <Marquee direction="right">
          <ul>
            {mySkills.map((element, index) => (
              <li key={index} className="icon-list">
                {element.icon && (
                  <FontAwesomeIcon
                    icon={element.icon}
                    color={element.color}
                    size={element.size}
                  />
                )}
                {element.name}
              </li>
            ))}
          </ul>
        </Marquee>
      </section>
      <hr />
    </>
  );
};

export default Skills;
