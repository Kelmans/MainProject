import './auth.less';
import { jsx } from 'services/jsx';

const auth = jsx({ tag: 'div', class: 'login-section' },
  jsx({ tag: 'div', class: 'formbox' },
    jsx({ tag: 'form', class: 'action' },
      jsx({ tag: 'h2', class: 'title', textContent: 'Sign In' }),
      jsx({ tag: 'div', class: 'input-box'},
        jsx({ tag: 'span', class: 'icon' },
          jsx({ tag: 'i', class: 'bx bxs-envelope' })),
        jsx({ tag: 'input', class: 'email', type: 'email', required: '', }),
        jsx({ tag: 'label', textContent: 'Email' })
        ),
      jsx({ tag: 'span', class: 'icon' } ,
        jsx({ tag: 'i', class: 'bx bxs-lock-alt' })),
      jsx(
        jsx({ tag: 'div', class: 'input-box' }) ,
        jsx({ tag: 'input', class: 'password', type: 'password', required: '', }),
        jsx({ tag: 'label', textContent: 'Password' }),
        ),
      jsx({ tag: 'button', class: 'btn', textContent: 'Login In' }),
      jsx({ tag: 'div', class: 'create-account' },
        jsx({ tag: 'p', textContent: 'Create an Account?' },
          jsx({ tag: 'p', textContent: 'Create an Account?' })))
      )));

export default auth;
