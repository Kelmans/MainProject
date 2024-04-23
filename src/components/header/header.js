import './header.less';
import { createElement } from '#services/createElement';

const header = createElement({ tag: 'header', class: 'header' });

const headerLogoContainer = createElement({ tag: 'div', class: 'header-logo' });
const headerLogoIcon = createElement({ tag: 'div', class: 'header-logo-icon' });
const headerLogoText = createElement({ tag: 'div', class: 'header-logo-text', innerText: 'GeekMems' });
headerLogoText.innerText = 'GeekMems';

headerLogoContainer.append(headerLogoIcon, headerLogoText);

const headerButtonContainer = createElement({ tag: 'div', class: 'header-button' });
const button1 = createElement({ tag: 'div', class: '_button', innerText: 'Раздел 1' });

const button2 = createElement({ tag: 'div', class: '_button', innerText: 'Раздел 2' });

const button3 = createElement({ tag: 'div', class: '_button', innerText: 'Раздел 3' });

const button4 = createElement({ tag: 'div', class: '_button', innerText: 'Войти' });

const button5 = createElement({ tag: 'div', class: '_button', innerText: 'Выйти' });

headerButtonContainer.append(button1, button2, button3, button4, button5);
header.append(headerLogoContainer, headerButtonContainer);

export default header;
