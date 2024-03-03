import { createElement } from '../createElement';

test(
  'Проверяем создание эллемента',
  () => {
    expect(createElement({ tag: 'div', class: 'input-box' })).not.toBe(null);
  },
);
