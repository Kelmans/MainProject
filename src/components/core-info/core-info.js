import { createElement } from '../../services/createElement';
import './core-info.less';

const coreInfo = createElement({ tag: 'div', class: 'coreInfo-wrapper' });
const coreInfoTitle = createElement({ tag: 'div', class: 'coreInfo-title' });
coreInfoTitle.innerText = 'Обучающая платформа онлайн-курсов GeekMems';

const courses = createElement({ tag: 'div', class: 'courses' });
// Тут нужен будет какой-нить метод, что будет заполнить по входившему файлу список
const a1 = createElement({ tag: 'a', class: 'courses-item' });
a1.innerText = 'Мемология';
const a2 = createElement({ tag: 'a', class: 'courses-item' });
a2.innerText = 'Тарология';
const a3 = createElement({ tag: 'a', class: 'courses-item' });
a3.innerText = 'Программирование';


courses.append(a1, a2, a3);
coreInfo.append(coreInfoTitle, courses);
export default coreInfo;
