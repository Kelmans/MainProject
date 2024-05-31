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
    jsx({ class: '_button', textContent: 'Раздел 1' }),
    jsx({ class: '_button', textContent: 'Раздел 2' }),
    jsx({ class: '_button', textContent: 'Раздел 3' }),
    jsx({ class: '_button', textContent: 'Войти' }),
    jsx({ class: '_button', textContent: 'Выйти' }),
  ),
);

export default header;
