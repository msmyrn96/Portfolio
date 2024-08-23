import { Container, Row, Col } from 'react-bootstrap';
import secondaryImage from '../assets/pic3.jpg';

const AboutComponent = () => {
    const text =
        'Energetic computer science and programming post graduate eager to apply extensive knowledge of programming skills, both software and hardware to achieve company goals.\n Dedicated to working hard to make positive contributions.Troubleshooter with excellent diagnostics and repair abilities, strong attention to detail and methodical approach. Expert Microsoft Windows and Linux Ubuntu user. Boost system performance by thoroughly evaluating and correcting different hardware and software issues.';

    return (
        <Container fluid>
            <div className="marginBig">
                <div
                    style={{ margin: '0 auto' }}
                    className="text-white br10 basicColor w80 shadowbox"
                >
                    <Row>
                        <Col className="col-5 m-5 me-0 mb-4">
                            <img
                                className="col-12 br10"
                                src={secondaryImage}
                                alt="secondary"
                            />
                        </Col>
                        <Col className="col-5 m-5 mb-4">
                            <h4 style={{ lineHeight: '1.6' }}>{text}</h4>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default AboutComponent;
