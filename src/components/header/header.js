import './header.less';
import { jsx } from 'jsx';

const header = jsx(
  { tag: 'header', class: 'header' },
  jsx(
    { class: 'header-logo' },
    jsx({ class: 'header-logo-icon' }),
    jsx({ class: 'header-logo-text', textContent: 'GeekMems' }),
  ),
  jsx(
    { tag: 'nav', class: 'header-button' },
    jsx({
      tag: 'a', href: '/about', 'data-navigo': 'true', class: '_button', textContent: 'О нас',
    }),
    jsx({
      tag: 'a', href: '/contact', 'data-navigo': 'true', class: '_button', textContent: 'Контакты',
    }),
    jsx({
      tag: 'a', 'data-navigo': 'true', class: '_button', textContent: 'Раздел 3',
    }),
    jsx({
      tag: 'a', 'data-navigo': 'true', class: '_button', textContent: 'Войти',
    }),
    jsx({
      tag: 'a', 'data-navigo': 'true', class: '_button', textContent: 'Выйти',
    }),
  ),
);

export default header;
