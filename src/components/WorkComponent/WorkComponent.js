import { Container } from 'react-bootstrap';
import project from '../../assets/web-programming 1.png';
import git from '../../assets/github 1.png';
import { visitCode } from '../../hooks/helpers';
import { jobs } from './constants/constants';
import './styles.scss';

const WorkComponent = () => {
    const getProjectsGrid = (projects) => {
        return projects.map((job) => {
            return (
                <div
                    style={{ verticalAlign: 'top' }}
                    className="d-inline-block grids ms-5"
                >
                    <div className="project-wrapper">
                        <img
                            alt="projects"
                            src={project}
                            height={50}
                            width={50}
                        />
                        <h4 className="mt-3 fw-bold">{job.title}</h4>
                        <h5 className="mt-3 mb-3 description">
                            {job.description}
                        </h5>
                        <div
                            id={job.title}
                            className="githubButton d-flex justify-content-center"
                            onClick={visitCode}
                        >
                            <img
                                id={job.title}
                                className="mt-1"
                                style={{ width: 20, height: 20 }}
                                src={git}
                                alt="git"
                            />
                            <h6 id={job.title} className="ms-2 pt-1">
                                View my code
                            </h6>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <Container className="w-100 p-0 m-0" fluid>
            <div className="marginBig text-white fw-bold secondary-color">
                <h1 className="fw-bold text-center pt-5">Projects</h1>
                <div className="scrolls ms-0 ps-4 ">
                    <div className="primary-container">
                        {getProjectsGrid(jobs)}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WorkComponent;
