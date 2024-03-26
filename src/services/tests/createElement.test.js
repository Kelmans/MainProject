import { createElement } from '../createElement';

describe('метод createElement', () => {
  it('должен создавать DOM элемент с указанными параметрами', () => {
    // First A - Arrange (подготовка)
    const expectedElement = { tag: 'div', class: 'input-box' };

    // Second A - Act (действие)
    const element = createElement(expectedElement);

    // Third A - Assert (результат)
    expect(element.tagName).toBe('DIV');
    expect(element.classList.contains(expectedElement.class)).toBe(true);
  });
});
