export function createElement(attributes) {
  const element = document.createElement(attributes.tag);
  // eslint-disable-next-line no-restricted-syntax,guard-for-in
  for (const key in attributes) {
    if (key === 'textContent') {
      element.textContent = attributes[key];
    }
    if (key !== 'tag') {
      element.setAttribute(key, attributes[key]);
    }
  }
  return element;
}
