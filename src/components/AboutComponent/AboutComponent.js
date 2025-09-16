import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import secondaryImage from '../../assets/about_image.png';
import { useResponsive } from 'ahooks';
import './styles.scss';
import { text } from './constants';
import { convertTextToList } from '../../hooks/helpers';

const AboutComponent = () => {
    const { xl, md } = useResponsive();
    const smallerScreensLayout = !xl;
    const smallScreensEnabled = !md;
    const infoList = convertTextToList(text);

    return (
        <Container fluid className="p-0">
            <div className="margin-big">
                <div className="text-white br10 w80 shadowbox about-container">
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
                            <ul
                                className={`info-list ${
                                    smallScreensEnabled
                                        ? 'less-padding gap-enabled'
                                        : ''
                                }`}
                                data-testid="about-list"
                            >
                                {infoList.map((item, index) => {
                                    return (
                                        <li key={index} className="blink-point">
                                            <h4 className="about-text">
                                                {item}
                                            </h4>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default AboutComponent;
