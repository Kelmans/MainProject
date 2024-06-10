export function createElement(attributes) {
  const element = document.createElement(attributes?.tag || 'div');

  for (const key in attributes) {
    if (!Object.hasOwn(attributes, key)) continue;

    const value = attributes[key];
    if (key === 'textContent') {
      element.textContent = value;
    } else if (key !== 'tag') {
      element.setAttribute(key, value);
    }
  }
  return element;
}
