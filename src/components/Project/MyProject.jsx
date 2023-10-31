import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import images1 from "../../images/myproject/1.jpg";
import images2 from "../../images/myproject/2.jpg";
import images3 from "../../images/myproject/3.jpg";
import images4 from "../../images/myproject/4.jpg";
import images5 from "../../images/myproject/5.jpg";

const MyProject = () => {
  const tools = [
    { name: "HTML", icon: faHtml5, color: "red", size: "2x" },
    { name: "CSS", icon: faCss3, color: "blue", size: "2x" },
    { name: "JavaScript", icon: faJs, color: "yellow", size: "2x" },
    { name: "Bootstrap", icon: faBootstrap, color: "purple", size: "2x" },
    { name: "React JS", icon: faReact, color: "green", size: "2x" },
  ];
  return (
    <>
      <section className="myProject">
        <h2>Projects</h2>
        <p>
          Expressing my enthusiasm for technology, design, and creative
          problem-solving through coding.
        </p>
        <hr />
        <Row xs={1} md={2} className="g-4 p-4">
          <Col>
            <Card>
              <a href="">
                <Card.Img variant="top" src={images1} />
              </a>

              <Card.Body>
                <Card.Title>Personal Portfolio</Card.Title>
                <Card.Text>
                  <ul>
                    {tools.map((element, index) => (
                      <li key={index}>
                        <FontAwesomeIcon
                          icon={element.icon}
                          color={element.color}
                          size={element.size}
                        />
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <a
                href="https://ilhammuhammad.my.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src={images2} />
              </a>

              <Card.Body>
                <Card.Title>Landing Page Portfolio </Card.Title>
                <Card.Text>
                  <ul>
                    {tools.map((element, index) => (
                      <li key={index}>
                        <FontAwesomeIcon
                          icon={element.icon}
                          color={element.color}
                          size={element.size}
                        />
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <a
                href="https://sdn1wonuambuteo.sch.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src={images3} />
              </a>

              <Card.Body>
                <Card.Title>School Website </Card.Title>
                <Card.Text>
                  <ul>
                    {tools.map((element, index) => (
                      <li key={index}>
                        <FontAwesomeIcon
                          icon={element.icon}
                          color={element.color}
                          size={element.size}
                        />
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <a
                href="https://ilhamtaope.github.io/usukdictionary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src={images4} />
              </a>

              <Card.Body>
                <Card.Title>Dictionary Web</Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faWordpress}
                        color="red"
                        size="2x"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faHtml5} color="blue" size="2x" />
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faCss3} color="navy" size="2x" />
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={images5} />
              <Card.Body>
                <Card.Title>Shoes Website</Card.Title>
                <Card.Text>
                  <ul>
                    {tools.map((element, index) => (
                      <li key={index}>
                        <FontAwesomeIcon
                          icon={element.icon}
                          color={element.color}
                          size={element.size}
                        />
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="/src/assets/images/project/project5.jpg"
              />
              <Card.Body>
                <Card.Title>Company Profile</Card.Title>
                <Card.Text>
                  <ul>
                    {tools.map((element, index) => (
                      <li key={index}>
                        <FontAwesomeIcon
                          icon={element.icon}
                          color={element.color}
                          size={element.size}
                        />
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default MyProject;
