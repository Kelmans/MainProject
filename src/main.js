import './common.less';
import Header from 'components/header/header';
import personalAcc from 'components/personal-acc-view/personal-acc-view';
import { setupLinks } from './services/routes';

const app = document.querySelector('#app');

app.append(Header);
// для настройки ссылок под navingo после инициализации навигации
setupLinks();

app.append(personalAcc);
// const mongo = require('mongodb').MongoClient;

// app.append(main);

// fetch('http://localhost:3000/auth/registration', {
//   method: 'POST',
// });
// app.append(auth);

// async function postData(url = '') {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return await response.json();
// }
//
// postData('http://localhost:3001/login').then((data) => {
//   console.log(data, '!!');
// });
