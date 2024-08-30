import { Container } from 'react-bootstrap';
import project_image from '../../assets/web-programming 1.png';
import git from '../../assets/github 1.png';
import { visitCode } from '../../hooks/helpers';
import { title, USERNAME, viewCode } from './constants';
import './styles.scss';
import { useResponsive } from 'ahooks';
import Carousel from '../CarouselComponent/CarouselComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';

const WorkComponent = () => {
    const { md } = useResponsive();
    const isSmallScreens = !md;
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.github.com/users/${USERNAME}/repos?visibility=public`
            )
            .then(function (res) {
                setRepositories(res.data);
            });
    }, []);

    const getProjectsGrid = () => {
        return repositories.map((repo, index) => {
            return (
                <div
                    key={index}
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
                        <h4 className="mt-3 fw-bold repo-name">{repo.name}</h4>
                        <h5 className="mt-3 mb-3 description">
                            {repo.description}
                        </h5>
                        <div
                            id={repo.name}
                            className="github-button d-flex justify-content-center"
                            onClick={visitCode}
                        >
                            <img
                                id={repo.name}
                                className="github-image"
                                width={20}
                                height={20}
                                src={git}
                                alt="git"
                            />
                            <h6 id={repo.name} className="ms-2 pt-1">
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
                            {getProjectsGrid()}
                        </div>
                    ) : (
                        <Carousel items={repositories} />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default WorkComponent;
