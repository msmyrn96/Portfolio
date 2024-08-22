import { Container } from 'react-bootstrap';
import project from '../assets/web-programming 1.png';
import git from '../assets/github 1.png';

const WorkComponent = () => {
    const jobs = [
        {
            title: 'Portfolio',
            description:
                'I designed and created my own portfolio which resembles my knowledge on front end development.'
        },
        {
            title: 'Bachelor-Thesis',
            description:
                'A crowdsourcing platform based on gamification used to collect valuable data on offensive behaviors through the web.'
        },
        {
            title: 'AlphaCompiler',
            description:
                'This project is a custom made alpha compiler from scratch which was made for the purpose of a university lesson.'
        },
        {
            title: 'ConveosTest',
            description:
                'This project is a back end test API created as a challenge to acquire a job, using node js framework.'
        },
        {
            title: 'myProject469',
            description:
                'A Euroleague Basketball smart home application, created for many devices and offering various functionalities.'
        },
        {
            title: 'SocialMediaPlatform',
            description:
                'A social media platform created from the scratch, both front end and back end, using Java Servlets and pure HTML/CSS/Javascript. '
        },
        {
            title: 'MusicStream',
            description:
                'This is an implementation of a music streaming application which uses concurrent data structures.'
        },
        {
            title: 'Message-Passing-System',
            description:
                "Created a message passing system that uses my university's distributed system to pass messages across the network."
        },
        {
            title: 'Unix-Terminal',
            description:
                "This is a custom unix terminal created for the puprose of my university's lesson 'Operating Systems'."
        },
        {
            title: 'Data-Structures-Project',
            description:
                'A project created using various custom made data structures and offering various functionality.'
        }
    ];

    const visitCode = (e) => {
        console.log(e);
        window.location.href = `https://github.com/smyrn96/${e.target.id}`;
    };

    return (
        <Container className="w-100 p-0 m-0" fluid>
            <div className="marginBig text-white fw-bold secondColor pt-4">
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
