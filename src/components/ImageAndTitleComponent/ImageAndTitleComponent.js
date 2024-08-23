import { Col, Row, Button } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from '../../lotties/coding.json';
import './styles.scss';
import { useResponsive } from 'ahooks';

const ImageAndTitleComponent = () => {
    const { sm, md } = useResponsive();
    const title = ['Creating.', 'Developing.', 'Delivering.'];
    const smallScreens = !md;
    const extraSmallScreens = !sm;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Row className="h-100 d-block d-sm-block d-md-flex">
            <Col
                className={`col-7 mt-5 ${
                    smallScreens ? 'small-screen-animation' : ''
                }`}
            >
                <Lottie
                    style={{
                        width: '70%',
                        height: '100%',
                        minWidth: extraSmallScreens ? '350px' : '450px'
                    }}
                    options={defaultOptions}
                />
            </Col>

            <Col className="align-self-center title-container">
                <div className="multiple-words-container">
                    <div
                        className={`multiple-words-wrapper ${
                            extraSmallScreens
                                ? 'block-words'
                                : smallScreens
                                ? 'inline-words'
                                : ''
                        }`}
                    >
                        {title.map((word, index) => {
                            const secondaryColor =
                                index % 2 === 1 ? 'secondary-color' : '';
                            return (
                                <div className="word-container">
                                    <div
                                        className={`h_00 word-wrapper ${secondaryColor}`}
                                    >
                                        <h1 className="fw-bold">{word}</h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className={`projects-button-wrapper ${
                            smallScreens ? 'inline-button' : ''
                        }`}
                    >
                        <Button
                            variant="none"
                            className="text-white basicColor br10 mt-3 "
                        >
                            <h4 className="p-2 m-0">Have a look</h4>
                        </Button>
                    </div>
                </div>
            </Col>

            <h1 className="mt-5 title-container name-title justify-content-center">
                Hi, I'm
                <span className="fw-bold secondary-color">Emmanouil</span> but
                you can call me
                <span className="fw-bold secondary-color">Manos</span>
            </h1>
            {!extraSmallScreens ? (
                <h2 className="mt-4 title-container justify-content-center">
                    &#123;{' '}
                    <span className="secondary-color">Software Engineer</span> -{' '}
                    <span className="secondary-color">Web Developer </span>{' '}
                    &#125;
                </h2>
            ) : (
                <h2 className="mt-4 title-container roles-block">
                    <span className="secondary-color">Software Engineer</span>
                    <span className="secondary-color">Web Developer </span>
                </h2>
            )}
        </Row>
    );
};

export default ImageAndTitleComponent;
