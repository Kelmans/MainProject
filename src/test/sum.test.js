// eslint-disable-next-line import/no-extraneous-dependencies
import expect from 'expect';
import { createElement } from '../services/createElement';

// const testString1 = createElement;
//
// test(
//   'Проверяем создание эллемента',
//   () => {
//     expect(testString1({ tag: 'div', class: 'input-box' }));
//   },
// );

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
