import { Container } from 'react-bootstrap';
import project from '../../assets/web-programming 1.png';
import git from '../../assets/github 1.png';
import { visitCode } from '../../hooks/helpers';
import { jobs } from './constants/constants';
import './styles.scss';

const WorkComponent = () => {
    return (
        <Container className="w-100 p-0 m-0" fluid>
            <div className="marginBig text-white fw-bold secondary-color pt-4">
                <div className=" scrolls pt-4 pb-5 mt-5 ms-0 ps-4 ">
                    {jobs.map((job) => {
                        return (
                            <div
                                style={{ verticalAlign: 'top' }}
                                className="w-25 d-inline-block grids ms-5"
                            >
                                <img alt="projects" src={project} />
                                <h4 className="mt-3 fw-bold">{job.title}</h4>
                                <h5
                                    style={{ whiteSpace: 'normal' }}
                                    className="mt-3 mb-3"
                                >
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
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default WorkComponent;
