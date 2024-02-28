const createElement = require('../createElement');
test(
  'Проверяем создание эллемента',
  () => {
    expect(createElement({ tag: 'div', class: 'input-box' })).not.toBe(null);
  },
);
