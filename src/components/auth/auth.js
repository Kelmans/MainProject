import './auth.less';
import { createElement } from '../../services/createElement';

const auth = createElement({ tag: 'div', class: 'login-section' });
const formBox = createElement({ tag: 'div', class: 'formbox' });
const action = createElement({ tag: 'form', class: 'action' });

formBox.append(action);

const title = createElement({ tag: 'h2', class: 'title' });
title.innerText = 'Sign In';

const emailBox = createElement({ tag: 'div', class: 'input-box' });
const emailIconBox = createElement({ tag: 'span', class: 'icon' });
const emailIcon = createElement({ tag: 'i', class: 'bx bxs-envelope' });
const inputEmail = createElement({
  tag: 'input', class: 'email', type: 'email', required: '',
});
const labelEmail = createElement({ tag: 'label' });
labelEmail.innerText = 'Email';

emailIconBox.append(emailIcon);
emailBox.append(emailIconBox, inputEmail, labelEmail);

const passBox = createElement({ tag: 'div', class: 'input-box' });
const passIconBox = createElement({ tag: 'span', class: 'icon' });
const passIcon = createElement({ tag: 'i', class: 'bx bxs-lock-alt' });
const inputPass = createElement({
  tag: 'input', class: 'password', type: 'password', required: '',
});
const labelPass = createElement({ tag: 'label' });
labelPass.innerText = 'Password';

passIconBox.append(passIcon);
passBox.append(passIconBox, inputPass, labelPass);

const createAccountBox = createElement({ tag: 'div', class: 'create-account' });
const createAccount = createElement({ tag: 'p' });
createAccount.innerText = 'Create an Account?';

const signIn = createElement({ tag: 'a', href: '#' });
signIn.innerText = 'Sign In';

createAccount.append(signIn);
createAccountBox.append(createAccount);

const loginIn = createElement({ tag: 'button', class: 'btn' });
loginIn.innerText = 'Login In';

action.append(title, emailBox, passBox, loginIn, createAccountBox);

auth.append(formBox);
export default auth;
