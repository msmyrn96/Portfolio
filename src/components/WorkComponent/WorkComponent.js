import { Container } from 'react-bootstrap';
import project_image from '../../assets/web-programming 1.png';
import git from '../../assets/github 1.png';
import { visitCode } from '../../hooks/helpers';
import { projects, title, viewCode } from './constants';
import './styles.scss';
import { useResponsive } from 'ahooks';
import Carousel from '../CarouselComponent/CarouselComponent';

const WorkComponent = () => {
    const { md } = useResponsive();
    const isSmallScreens = !md;

    const getProjectsGrid = (projects) => {
        return projects.map((project) => {
            return (
                <div
                    style={{ verticalAlign: 'top' }}
                    className="d-inline-block grids ms-5"
                >
                    <div className="project-wrapper">
                        <img
                            alt="projects"
                            src={project_image}
                            height={50}
                            width={50}
                        />
                        <h4 className="mt-3 fw-bold">{project.title}</h4>
                        <h5 className="mt-3 mb-3 description">
                            {project.description}
                        </h5>
                        <div
                            id={project.title}
                            className="github-button d-flex justify-content-center"
                            onClick={visitCode}
                        >
                            <img
                                id={project.title}
                                className="github-image"
                                width={20}
                                height={20}
                                src={git}
                                alt="git"
                            />
                            <h6 id={project.title} className="ms-2 pt-1">
                                {viewCode}
                            </h6>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <Container className="w-100 p-0 " fluid>
            <div className=" text-white fw-bold secondary-color margin-big">
                <h1 className="fw-bold text-center pt-5">{title}</h1>
                <div className={`scrolls ms-0 ${isSmallScreens ? '' : 'ps-4'}`}>
                    {!isSmallScreens ? (
                        <div className="primary-container">
                            {getProjectsGrid(projects)}
                        </div>
                    ) : (
                        <Carousel items={projects} />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default WorkComponent;
