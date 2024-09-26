import React from 'react';
import { myRepo, viewCode } from '../components/WorkComponent/constants';
import project_image from '../assets/web-programming 1.png';
import git from '../assets/github 1.png';
import emailkey from '../emailkey';
import emailjs, { init } from 'emailjs-com';
import { useEffect, useState } from 'react';

init('user_py7ZjoQhL02zv6XNCjNN9');

export const convertTextToList = (text) => {
    return text.split(/\.|\n/).filter((sentence) => sentence.trim() !== '');
};

export const visitCode = (e) => {
    window.location.href = `${myRepo}${e.target.id}`;
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

export const projectsToItems = (repositories) => {
    const itemsArray = repositories.map((repo) => {
        return (
            <div
                key={repo.id}
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

    return itemsArray;
};

export const sumbitEmail = (currentForm, data, handleShow, handleLoader) => {
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
                handleShow();
            },
            (error) => {
                handleLoader();
                console.log('FAILED...', error.text);
            }
        );
};

export const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const current = element?.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            },
            { rootMargin }
        );
        current && observer?.observe(current);

        return () => current && observer.unobserve(current);
    }, [element, rootMargin]);

    return isVisible;
};

export const TriggerHomeAnimation = (isVisible) => {
    if (isVisible) {
        document.querySelectorAll('#animate-item').forEach((item) => {
            item.classList.add('animate');
        });

        document.querySelectorAll('#reveal-item').forEach((item) => {
            item.classList.add('reveal');
        });
    } else {
        document.querySelectorAll('#animate-item').forEach((item) => {
            item.classList.remove('animate');
        });

        document.querySelectorAll('#reveal-item').forEach((item) => {
            item.classList.remove('reveal');
        });
    }
};
