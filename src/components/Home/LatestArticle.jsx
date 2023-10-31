import { Row, Card, Col } from "react-bootstrap";
import images1 from "../../images/1.jpg";
import images2 from "../../images/2.jpg";
import images3 from "../../images/3.jpg";
import images4 from "../../images/4.jpg";

const LatestArticle = () => {
  const articles = [
    {
      title: "Introduction to HTML: Basics of Building Web Pages",
      imageSrc: images1,
      publicationDate: "September 29, 2023",
    },
    {
      title: "Diving into HTML: Basic Tags and Structure",
      imageSrc: images2,
      publicationDate: "September 29, 2023",
    },
    {
      title: "HTML and CSS: Creating Appealing Visuals",
      imageSrc: images3,
      publicationDate: "September 29, 2023",
    },
    {
      title:
        "HTML and Responsive Web Design: Adapting Content for Various Devices",
      imageSrc: images4,
      publicationDate: "September 29, 2023",
    },
  ];
  return (
    <>
      <section className="latestArticle">
        <h2>Latest Articles</h2>
        <p>
          Welcome to my front-end development blog, your source for all things
          web design and user interface magic!
        </p>
        <Row xs={1} md={2} className="g-4 p-4">
          {articles.map((element, index) => (
            <Col key={index}>
              <Card>
                <Card.Img src={element.imageSrc} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>Published On {element.publicationDate}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default LatestArticle;
