import './auth.less';
import { createElement } from '../../services/createElement.service';

const auth = createElement('div', ['auth']);

const authHeader = createElement('div', ['auth-header']);

const authImage = createElement('img', ['auth-header__image']);
authImage.src = '/styles/icons/ChtoZaLev.png';

authHeader.append(authImage);

const authBody = createElement('div', ['auth-body']);

const loginContainer = createElement('div', ['auth-body-login']);

const loginTitle = createElement('span', ['auth-body-login__title']);
loginTitle.innerText = 'Username or Email Address';

const loginField = createElement('input', ['auth-body-login__field']);

loginContainer.append(loginTitle, loginField);

const passwordContainer = createElement('div', ['auth-body-password']);

const passwordTitle = createElement('span', ['auth-body-password__title']);
passwordTitle.innerText = 'Password';

const password = createElement('input', ['auth-body-password__field']);

passwordContainer.append(passwordTitle, password);

const authFooter = createElement('div', ['auth-footer']);

const submit = createElement('button', ['auth-footer-button']);
submit.textContent = 'Submit';

authFooter.append(submit);
authBody.append(loginContainer, passwordContainer);

auth.append(authHeader, authBody, authFooter);
export default auth;
