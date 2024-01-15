export function createElement(tag, classArray, content) {
    const element = document.createElement(tag);
    element.classlist.add(...classArray);
    if (content) {
        for (let key in content) {
            element.key = content[key];
        }
    }
};