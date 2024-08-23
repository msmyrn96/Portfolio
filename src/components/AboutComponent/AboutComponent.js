import { Container, Row, Col } from 'react-bootstrap';
import secondaryImage from '../../assets/pic3.jpg';
import { useResponsive } from 'ahooks';
import './styles.scss';
import { text } from './constants/constants';

const AboutComponent = () => {
    const { xl } = useResponsive();
    const smallerScreensLayout = !xl;

    return (
        <Container fluid className="p-0">
            <div className="marginBig">
                <div className="text-white br10 primary-color w80 shadowbox about-container">
                    <h1 className="fw-bold text-center pt-5">About</h1>
                    <Row
                        className={`pb-5 ${
                            smallerScreensLayout ? 'row-container' : ''
                        }`}
                    >
                        <Col
                            className={` ${
                                smallerScreensLayout
                                    ? 'change-layout'
                                    : 'col-5 m-5 me-0 mb-4'
                            }`}
                        >
                            <img
                                className={`col-12 br10 about-image ${
                                    smallerScreensLayout ? 'image-block' : ''
                                }`}
                                src={secondaryImage}
                                alt="secondary"
                            />
                        </Col>
                        <Col
                            className={` ${
                                smallerScreensLayout
                                    ? 'change-layout'
                                    : 'col-5 m-5 mb-4'
                            }`}
                        >
                            <h4 className="about-text">{text}</h4>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default AboutComponent;
