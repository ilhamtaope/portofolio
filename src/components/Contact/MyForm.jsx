/* eslint-disable react/no-unescaped-entities */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const MyForm = () => {
  return (
    <>
      <section className="myForm"></section>
      <h2>Contact</h2>
      <p>Let's get in touch.</p>
      <h3>Send Me Message</h3>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Send Email
        </Button>
      </Form>
    </>
  );
};

export default MyForm;
