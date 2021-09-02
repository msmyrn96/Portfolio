import { Container, Col, Row, Button } from "react-bootstrap";
import profileImage from "../assets/profile.jpg";

const ImageAndTitleComponent = () => {

    const title = [
        "Creating.",
        "Developing.",
        "Delivering.",
        "Emmanouil Smyrnakis",
      ];

  return (
    <Row className='h-100 d-none d-sm-none d-md-flex'>
      <Col className='col-6 ms-4 mt-5'>
        <img className='shadowbox col-12 br10' src={profileImage} />
      </Col>

      <Col className='col-4 align-self-center'>
        <div className=''>
          {title.map((word) => {
            return (
              <div>
                <div
                  className='h_00'
                  style={{ color: "rgb(0, 148, 198)", fontWeight: "bold" }}
                >
                  <h1 className="fw-bold">{word}</h1>
                </div>
              </div>
            );
          })}
          <Button variant='none' className='text-white basicColor br10 mt-4'>
            <h4 className='p-2 m-0'>Experience my work</h4>
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default ImageAndTitleComponent;
