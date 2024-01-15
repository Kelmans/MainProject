import './auth.css';
import { createElement } from '../../services/createElement.service';

const auth = document.createElement('div');
auth.classList.add('auth');

const authHeader = createElement('div', ['auth-header']);
authHeader.classList.add('auth-header');

const authImage = document.createElement('img');
authImage.classList.add('auth-header__image');
authImage.src = '/styles/icons/ChtoZaLev.png';

authHeader.append(authImage);

const authBody = document.createElement('div');
authBody.classList.add('auth-body');

const loginContainer = document.createElement('div');
loginContainer.classList.add('auth-body-login');

const loginTitle = document.createElement('span');
loginTitle.classList.add('auth-body-login__title');
loginTitle.innerText = 'Username or Email Address';

const loginField = document.createElement('input');
loginField.classList.add('auth-body-login__field');

loginContainer.append(loginTitle, loginField);

const passwordContainer = document.createElement('div');
passwordContainer.classList.add('auth-body-password');

const passwordTitle = document.createElement('span');
passwordTitle.classList.add('auth-body-password__title');
passwordTitle.innerText = 'Password';

const password = document.createElement('input');
password.classList.add('auth-body-password__field');

passwordContainer.append(passwordTitle, password);

const authFooter = document.createElement('div');
authFooter.classList.add('auth-footer');

const submit = document.createElement('button');
submit.textContent = 'Submit';
submit.classList.add('auth-footer-button');

authFooter.append(submit);
authBody.append(loginContainer, passwordContainer);

auth.append(authHeader, authBody, authFooter);

export default auth;
