import './header.css';

const header = document.createElement('header');
header.classList.add('header');

const buttonList = document.createElement('div');
buttonList.classList.add('_list');

const button1 = document.createElement('div');
button1.classList.add('_button');
button1.textContent = 'Какая-то кнопка 1';

const button2 = document.createElement('div');
button2.classList.add('_button');
button2.textContent = 'Какая-то кнопка 2';

const button3 = document.createElement('div');
button3.classList.add('_button');
button3.textContent = 'Какая-то кнопка 3';

buttonList.append(button1, button2, button3);
header.append(buttonList);

export default header;
