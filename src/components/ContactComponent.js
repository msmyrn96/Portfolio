import { Container, Form, Row, Col } from "react-bootstrap";
import MapContainer from "./MapContainer";
import send from "../assets/Group.png";

const ContactComponent = () => {
  const jobDetails = {
    title: "Member of technical staff",
    company: "VMWARE",
    locationDate: "June 2021-Present Palo Alto CA",
    Team: "Platform",
  };
  const works = [jobDetails, jobDetails, jobDetails];

  return (
    <Container className='w-100 p-0 m-0' fluid>
      <div className='marginBig text-white fw-bold secondColor'>
        <h1 className='fw-bold text-center pt-5 pb-5'>Contact</h1>
        <Row>
          <Col className='mb-5'>
            <Form className='w-50 col-7 offset-3'>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className='inputContact ps-0'
                  type='name'
                  placeholder='Enter your name'
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className='inputContact ps-0'
                  type='name'
                  placeholder='Enter your email'
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  className='inputContact ps-0'
                  type='name'
                  placeholder='Enter your subject'
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className='inputContact ps-0'
                  as='textarea'
                  rows={2}
                  placeholder='Type your message here...'
                />
              </Form.Group>
            </Form>
          </Col>

          <Col className='col-5 mt-4'>
            <MapContainer />
          </Col>
        </Row>
        <div className='d-flex justify-content-center '>
          <div className='circleButton mb-5'>
            <img src={send} alt='send' />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactComponent;
