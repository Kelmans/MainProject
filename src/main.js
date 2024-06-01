import './common.less';
import Header from 'components/header/header';
import personalAcc from 'components/personal-acc-view/personal-acc-view';
import { setupLinks } from './services/routes';

const app = document.querySelector('#app');

app.append(Header);
// для настройки ссылок под navingo после инициализации навигации
setupLinks();

app.append(personalAcc);
