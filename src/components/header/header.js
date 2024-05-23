import './header.less';
import { jsx } from 'jsx';

const header = jsx(
  { tag: 'header', class: 'header' },
  jsx(
    { tag: 'div', class: 'header-logo' },
    jsx({ tag: 'div', class: 'header-logo-icon' }),
    jsx({ tag: 'div', class: 'header-logo-text', textContent: 'GeekMems' }),
  ),
  jsx(
    { tag: 'nav', class: 'header-button' },
    jsx({ tag: 'div', class: '_button', textContent: 'Раздел 1' }),
    jsx({ tag: 'div', class: '_button', textContent: 'Раздел 2' }),
    jsx({ tag: 'div', class: '_button', textContent: 'Раздел 3' }),
    jsx({ tag: 'div', class: '_button', textContent: 'Войти' }),
    jsx({ tag: 'div', class: '_button', textContent: 'Выйти' }),
  ),
);

export default header;
