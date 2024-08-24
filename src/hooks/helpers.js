export const convertTextToList = (text) => {
    return text.split(/\.|\n/).filter((sentence) => sentence.trim() !== '');
};
