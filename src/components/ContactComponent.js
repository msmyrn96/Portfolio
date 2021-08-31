import { Container, Form, Row, Col } from "react-bootstrap";
import MapContainer from "./MapContainer";
import send from "../assets/Group.png";
import { useState } from "react";
import emailkey from "../emailkey";
import emailjs, { init } from "emailjs-com";

init("user_py7ZjoQhL02zv6XNCjNN9");

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name)
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const sumbitEmail = () => {
    const form = {
      Subject: subject,
      from_name: name,
      to_name: "Emmanouil Smyrnakis",
      email_from: email,
      message: message,
    };

    emailjs.send(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (err) {
        console.log("FAILED...", err);
      }
    );
  };

  return (
    <Container className="w-100 p-0 m-0" fluid>
      <div className="marginBig text-white fw-bold secondColor">
        <h1 className="fw-bold text-center pt-5 pb-5">Contact</h1>
        <Row>
          <Col className="mb-5">
            <Form className="w-50 col-7 offset-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  className="inputContact ps-0"
                  type="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="inputContact ps-0"
                  type="name"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  className="inputContact ps-0"
                  type="name"
                  placeholder="Enter your subject"
                  name="subject"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  className="inputContact ps-0"
                  as="textarea"
                  rows={2}
                  placeholder="Type your message here..."
                  name="message"
                />
              </Form.Group>
            </Form>
          </Col>

          <Col className="col-5 mt-4">
            <MapContainer />
          </Col>
        </Row>
        <div className="d-flex justify-content-center ">
          <div style={{cursor:"pointer"}} className="circleButton mb-5" onClick={sumbitEmail}>
            <img src={send} alt="send" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactComponent;
