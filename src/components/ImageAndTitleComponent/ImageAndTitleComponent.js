import { Col, Row, Button } from 'react-bootstrap';
import LottieView from 'react-lottie';
import './styles.scss';
import { useResponsive } from 'ahooks';
import { defaultOptions, title } from './constants';
import { useEffect, useRef } from 'react';
import { TriggerHomeAnimation, useIntersection } from '../../hooks/helpers';

const ImageAndTitleComponent = ({ scrollIntoView }) => {
    const { sm, md } = useResponsive();
    const smallScreens = !md;
    const extraSmallScreens = !sm;

    const triggerRef = useRef(null);
    const isVisible = useIntersection(triggerRef, '100px');

    useEffect(() => {
        TriggerHomeAnimation(isVisible);
    }, [isVisible]);

    return (
        <Row className="h-100 d-block d-sm-block d-md-flex">
            <Col
                className={`col-7 ${
                    smallScreens ? 'small-screen-animation' : ''
                }`}
            >
                <div
                    style={{
                        minWidth: extraSmallScreens ? '350px' : '450px'
                    }}
                >
                    <LottieView
                        options={defaultOptions}
                        width={'70%'}
                        height={'100%'}
                    />
                </div>
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
                                <div
                                    id="animate-item"
                                    key={index}
                                    className={`word-container animate pop delay-${
                                        index + 1
                                    }`}
                                >
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
                        id="animate-item"
                        className={`projects-button-wrapper animate ${
                            smallScreens ? 'inline-button' : ''
                        }`}
                    >
                        <Button
                            variant="primary"
                            className="text-white primary-color br10 mt-3 have-a-look"
                            onClick={() => scrollIntoView('Projects')}
                        >
                            <h4 className="p-2 m-0">Have a look</h4>
                        </Button>
                    </div>
                </div>
            </Col>

            <h1 className="mt-5 title-container name-title justify-content-center">
                <span className="initial-text"> Hi! I'm </span>
                <span
                    id="reveal-item"
                    className="fw-bold secondary-text secondary-font-family animation-text"
                >
                    Emmanouil
                </span>{' '}
                <span className="initial-text">but you can call me</span>
                <span
                    id="reveal-item"
                    className="fw-bold secondary-text secondary-font-family animation-text"
                >
                    Manos
                </span>
            </h1>
            {!extraSmallScreens ? (
                <h2
                    className="title-container justify-content-center"
                    ref={triggerRef}
                >
                    &#123;{' '}
                    <span
                        id="reveal-item"
                        className="secondary-text secondary-font-family animation-text reveal"
                    >
                        Software Engineer
                    </span>{' '}
                    -{' '}
                    <span
                        id="reveal-item"
                        className="secondary-text secondary-font-family animation-text reveal"
                    >
                        Web Developer{' '}
                    </span>{' '}
                    &#125;
                </h2>
            ) : (
                <h2 className="title-container roles-block" ref={triggerRef}>
                    <span>
                        &#123;
                        <span
                            id="reveal-item"
                            className="secondary-text secondary-font-family animation-text reveal"
                        >
                            {' '}
                            Software Engineer{' '}
                        </span>
                        &#125;
                    </span>
                    <span>
                        &#123;{' '}
                        <span
                            id="reveal-item"
                            className="secondary-text secondary-font-family animation-text reveal"
                        >
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
