export function createElement(attributes) {
  const element = document.createElement(attributes.tag);
  // eslint-disable-next-line no-restricted-syntax,guard-for-in
  for (const key in attributes) {
    if (key === 'innerText') {
      element.innerText = attributes[key];
    }
    if (key !== 'tag') {
      console.log(key)
      element.setAttribute(key, attributes[key]);
      console.log(element)
    }
  }
  return element;
}
