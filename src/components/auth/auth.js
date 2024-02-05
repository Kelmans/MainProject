import './auth.less';
import { createElement } from '../../services/createElement.service';

const auth = createElement('div', ['login-section']);
const formBox = createElement('div', ['formbox']);
const action = createElement('form', ['action'], {action: '13'});
formBox.append(action);

const title = createElement('h2', ['title']);
title.innerText = 'Sign In'

const emailBox = createElement('div', ['input-box'], {required: ''});
const emailIconBox = createElement('span', ['icon']);
const emailIcon = createElement('i', ['bx', 'bxs-envelope']);
const inputEmail = createElement('input', ['email'], {type: 'email'});
const labelEmail = createElement('label', []);
labelEmail.innerText = 'Email'

emailIconBox.append(emailIcon);
emailBox.append(emailIconBox, inputEmail, labelEmail);

const passBox = createElement('div', ['input-box'], {required: ''});
const passIconBox = createElement('span', ['icon']);
const passIcon = createElement('i', ['bx', 'bxs-lock-alt']);
const inputPass = createElement('input', ['password'], {type: 'password'});
const labelPass = createElement('label', []);
labelPass.innerText = 'Password'

passIconBox.append(passIcon);
passBox.append(passIconBox, inputPass, labelPass);

action.append(title, emailBox, passBox);

auth.append(formBox);

// const authHeader = createElement('div', ['auth-header'], {title: 'Подсказка', randomAttribute: 'Random'});
//
// const authImage = createElement('img', ['auth-header__image']);
// authImage.src = '/styles/icons/lion.png';
// authImage.alt = 'Мое изображение';
//
// authHeader.append(authImage);
//
// const authBody = createElement('div', ['auth-body']);
//
// const loginContainer = createElement('div', ['auth-body-login']);
//
// const loginTitle = createElement('span', ['auth-body-login__title']);
// loginTitle.innerText = 'Username or Email Address';
//
// const loginField = createElement('input', ['auth-body-login__field']);
//
// loginContainer.append(loginTitle, loginField);
//
// const passwordContainer = createElement('div', ['auth-body-password']);
//
// const passwordTitle = createElement('span', ['auth-body-password__title']);
// passwordTitle.innerText = 'Password';
//
// const password = createElement('input', ['auth-body-password__field']);
//
// passwordContainer.append(passwordTitle, password);
//
// const authFooter = createElement('div', ['auth-footer']);
//
// const submit = createElement('button', ['auth-footer-button']);
// submit.textContent = 'Submit';
//
// authFooter.append(submit);
// authBody.append(loginContainer, passwordContainer);
//
// auth.append(authHeader, authBody, authFooter);
export default auth;
