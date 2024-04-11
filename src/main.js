import './common.less';
import Header from './components/header/header';
import main from './components/mainPage/mainPage';
import player from './components/player/player';

const app = document.querySelector('#app');

// const mongo = require('mongodb').MongoClient;
app.append(Header);
app.append(main);

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
