import { Col, Row, Button } from 'react-bootstrap';
import Lottie from 'react-lottie';
import './styles.scss';
import { useResponsive } from 'ahooks';
import { defaultOptions, title } from './constants/constants';

const ImageAndTitleComponent = () => {
    const { sm, md } = useResponsive();
    const smallScreens = !md;
    const extraSmallScreens = !sm;

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
                                index % 2 === 1 ? 'secondary-text' : '';
                            return (
                                <div className="word-container">
                                    <div className="h_00 word-wrapper">
                                        <h1
                                            className={`fw-bold ${secondaryColor}`}
                                        >
                                            {word}
                                        </h1>
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
                            variant="primary"
                            className="text-white primary-color br10 mt-3 have-a-look"
                        >
                            <h4 className="p-2 m-0">Have a look</h4>
                        </Button>
                    </div>
                </div>
            </Col>

            <h1 className="mt-5 title-container name-title justify-content-center">
                Hi! I'm
                <span className="fw-bold secondary-text secondary-font-family animation-text ">
                    Emmanouil
                </span>{' '}
                but you can call me
                <span className="fw-bold secondary-text secondary-font-family animation-text ">
                    Manos
                </span>
            </h1>
            {!extraSmallScreens ? (
                <h2 className="title-container justify-content-center">
                    &#123;{' '}
                    <span className="secondary-text secondary-font-family animation-text ">
                        Software Engineer
                    </span>{' '}
                    -{' '}
                    <span className="secondary-text secondary-font-family animation-text ">
                        Web Developer{' '}
                    </span>{' '}
                    &#125;
                </h2>
            ) : (
                <h2 className="title-container roles-block">
                    <span>
                        &#123;
                        <span className="secondary-text secondary-font-family animation-text ">
                            {' '}
                            Software Engineer{' '}
                        </span>
                        &#125;
                    </span>
                    <span>
                        &#123;{' '}
                        <span className="secondary-text secondary-font-family animation-text ">
                            {' '}
                            Web Developer{' '}
                        </span>{' '}
                        &#125;
                    </span>
                </h2>
            )}
        </Row>
    );
};

export default ImageAndTitleComponent;
