import Header from './components/header/header';
import auth from './components/auth/auth';

const app = document.querySelector('#app');

const mongo = require('mongodb').MongoClient;

app.append(Header);
app.append(auth);
