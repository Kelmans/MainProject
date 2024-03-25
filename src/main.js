import Header from './components/header/header';
import auth from './components/auth/auth';

const app = document.querySelector('#app');

// const mongo = require('mongodb').MongoClient;
app.append(Header);
app.append(auth);

async function postData(url = '') {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

postData('http://localhost:3001/login').then((data) => {
  console.log(data, '!!');
});
