import { viewCode } from '../components/WorkComponent/constants';
import project_image from '../assets/web-programming 1.png';
import git from '../assets/github 1.png';
import emailkey from '../emailkey';
import emailjs, { init } from 'emailjs-com';

init('user_py7ZjoQhL02zv6XNCjNN9');

export const convertTextToList = (text) => {
    return text.split(/\.|\n/).filter((sentence) => sentence.trim() !== '');
};

export const visitCode = (e) => {
    window.location.href = `https://github.com/smyrn96/${e.target.id}`;
};

export const getAnimationConfiguration = (animationData) => {
    return {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
};

export const arrayToTwoParts = (array) => {
    const index = array.length / 2;

    const firstPart = array.slice(0, index);

    const secondPart = array.slice(index);

    return [firstPart, secondPart];
};

export const projectsToItems = (projects) => {
    const itemsArray = projects.map((project) => {
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

    return itemsArray;
};

export const sumbitEmail = (currentForm, data, handleShow) => {
    emailjs
        .sendForm(
            emailkey.SERVICE_ID,
            emailkey.TEMPLATE_ID,
            currentForm.current,
            emailkey.USER_ID
        )
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );

    handleShow();
};
