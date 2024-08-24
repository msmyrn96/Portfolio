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
