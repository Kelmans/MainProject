import { createElement } from 'services/createElement';

export function jsx(parentElement, ...children) {
  const parent = createElement(parentElement);
  if (children) {
    children.forEach((value) => parent.append(value));
  }
  return parent;
}
