import { Container } from 'react-bootstrap';
import { works } from './constants';
import './styles.scss';
import { useResponsive } from 'ahooks';

const ExperienceComponent = () => {
    const { sm, md } = useResponsive();
    const isSmallScreens = !md;
    const isExtraSmallScreens = !sm;

    return (
        <Container className="w-100 p-0 m-0" fluid>
            <div
                className={`margin-big mb-5 experience-wrapper  ${
                    isExtraSmallScreens
                        ? 'sm-screen'
                        : isSmallScreens
                        ? 'md-screen'
                        : ''
                }`}
            >
                <h1 className="fw-bold text-center mb-5 title">Experience</h1>
                {works.map((work, index) => {
                    const isNotLastItem = index !== works.length - 1;
                    const currentWork = index === 0;
                    return (
                        <div
                            key={index}
                            className="d-flex justify-content-center "
                        >
                            {!isExtraSmallScreens && (
                                <div
                                    className={`me-5 vertical-line ${
                                        isExtraSmallScreens
                                            ? 'sm-screen'
                                            : isSmallScreens
                                            ? 'md-screen'
                                            : ''
                                    }`}
                                >
                                    <div
                                        className={
                                            currentWork
                                                ? 'circle active'
                                                : 'circle'
                                        }
                                    ></div>

                                    <div
                                        className={`vertical ${
                                            isNotLastItem ? '' : 'last'
                                        } ${
                                            isExtraSmallScreens
                                                ? 'sm-screen'
                                                : isSmallScreens
                                                ? 'md-screen'
                                                : ''
                                        }  `}
                                    ></div>
                                </div>
                            )}
                            <div
                                className={`workGrid primary-color br10 bigGrid ${
                                    currentWork && isExtraSmallScreens
                                        ? 'current-work'
                                        : ''
                                } ${
                                    isExtraSmallScreens
                                        ? 'sm-screen'
                                        : isSmallScreens
                                        ? 'md-screen'
                                        : ''
                                } shadowbox`}
                            >
                                <div className="text-container">
                                    <div className="text-white m-3 p-3 mb-0 pb-2">
                                        <h2 className="fw-bold">
                                            {work.title}
                                        </h2>
                                    </div>
                                    <div className="ms-3 ps-3 pb-2">
                                        <h4
                                            style={{
                                                color: '#CCC9DC',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {work.company}
                                        </h4>
                                    </div>
                                    <div className=" text-white ms-3 ps-3 pb-2">
                                        <h5 style={{ opacity: '80%' }}>
                                            {work.locationDate}
                                        </h5>
                                    </div>
                                    <div className=" text-white ms-3 ps-3 pb-2">
                                        <h5 style={{ opacity: '80%' }}>
                                            {work.Team}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default ExperienceComponent;
