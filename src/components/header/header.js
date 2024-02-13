import './header.less';
import { createElement } from '../../services/createElement';

const header = createElement({ tag: 'header', class: 'header' });

const buttonList = createElement({ tag: 'div', class: '_list' });

const button1 = createElement({ tag: 'div', class: '_button' });
button1.innerText = 'Какая-то кнопка 1';

const button2 = createElement({ tag: 'div', class: '_button' });
button2.innerText = 'Какая-то кнопка 2';

const button3 = createElement({ tag: 'div', class: '_button' });
button3.innerText = 'Какая-то кнопка 3';

buttonList.append(button1, button2, button3);
header.append(buttonList);

export default header;
