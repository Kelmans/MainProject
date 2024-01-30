// eslint-disable-next-line import/prefer-default-export
export function createElement(tag, classArray, content) {
  const element = document.createElement(tag);
  element.classList.add(...classArray);
  // eslint-disable-next-line no-restricted-syntax,guard-for-in
  for (const key in content) {
    element.key = content[key];
  }
  return element;
}
