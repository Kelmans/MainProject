import './header.less';
import { createElement } from '../../services/createElement.service';

const header = createElement('header', ['header']);

const buttonList = createElement('div', ['_list']);

const button1 = createElement('div', ['_button']);
button1.textContent = 'Какая-то кнопка 1';

const button2 = createElement('div', ['_button']);
button2.textContent = 'Какая-то кнопка 2';

const button3 = createElement('div', ['_button']);
button3.textContent = 'Какая-то кнопка 3';

buttonList.append(button1, button2, button3);
header.append(buttonList);

export default header;
