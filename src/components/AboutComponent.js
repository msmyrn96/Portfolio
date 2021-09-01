import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../assets/profile.jpg";
import secondaryImage from "../assets/pic3.jpg";
import arrowMore from "../assets/left-arrow 1.png";

const AboutComponent = () => {
  const text =
    "Energetic computer science and programming post graduate eager to apply extensive knowledge of programming skills, both software and hardware to achieve company goals.\n Dedicated to working hard to make positive contributions.Troubleshooter with excellent diagnostics and repair abilities, strong attention to detail and methodical approach. Expert Microsoft Windows and Linux Ubuntu user. Boost system performance by thoroughly evaluating and correcting different hardware and software issues.";

  return (
    <Container fluid>
      <div className='marginBig'>
        <div className='textColor h_00 w-100 text-center fw-bold mb-5'>
          About
        </div>
        <div
          style={{ margin: "0 auto" }}
          className='text-white br10 basicColor w80 shadowbox'
        >
          <Row>
            <Col className='col-5 m-5 me-0 mb-4'>
              <img className='col-12 br10' src={secondaryImage} />
            </Col>
            <Col className='col-5 m-5 mb-4'>
              <h4 style={{ lineHeight: "1.6" }}>{text}</h4>
            </Col>
          </Row>

          <div
            style={{ height: "70px", cursor: "pointer" }}
            className='d-flex justify-content-center w-100'
          >
            <h4 className='me-4' style={{ lineHeight: "70px" }}>
              Read more about me
            </h4>
            <img
              style={{
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
              }}
              src={arrowMore}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutComponent;
