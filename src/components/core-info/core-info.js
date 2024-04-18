import { createElement } from '../../services/createElement';
import './core-info.less';

const coreInfo = createElement({ tag: 'div', class: 'coreInfo-wrapper' });
const coreInfoContainer = createElement({ tag: 'div', class: 'coreInfo-container' });
const coreInfoConsultContainer = createElement({ tag: 'div', class: 'coreInfo-container-consult' });
const coreInfoCoursesContainer = createElement({ tag: 'div', class: 'coreInfo-container-courses' });
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

const consultation = createElement({ tag: 'div', class: 'consultation' });
consultation.innerText = 'Тут будет окно с инфой для связи';
const consultationTitle = createElement({ tag: 'div', class: '' });
const nameInput = createElement({ tag: 'input', class: '' });
const emailInput = createElement({ tag: 'input', class: '' });
const phoneInput = createElement({ tag: 'input', class: '' });
const button = createElement({ tag: 'button', class: '' });

const briefInformation = createElement({ tag: 'div', class: 'briefInformation' });
const briefInformationVideo = createElement({ tag: 'div', class: '' });
briefInformationVideo.innerText = 'Сюда добавляю видео с презентацией';
const briefInformationText = createElement({ tag: 'div', class: '' });
const briefInformation1 = createElement({ tag: 'div', class: '' });
briefInformation1.innerText = 'Индивидуальный путь обучения';
const briefInformation2 = createElement({ tag: 'div', class: '' });
briefInformation2.innerText = 'Интерактивные онлайн-уроки с экспертами';
const briefInformation3 = createElement({ tag: 'div', class: '' });
briefInformation3.innerText = 'Помощь с познанием мира';
const briefInformation4 = createElement({ tag: 'div', class: '' });
briefInformation4.innerText = 'Готовое портфолио по итогам обучения';

briefInformationText.append(
  briefInformation1,
  briefInformation2,
  briefInformation3,
  briefInformation4,
);
briefInformation.append(briefInformationVideo, briefInformationText);
consultation.append(consultationTitle, nameInput, emailInput, phoneInput, button);
courses.append(a1, a2, a3);
coreInfoConsultContainer.append(consultation);
coreInfoCoursesContainer.append(coreInfoTitle, courses);
coreInfoContainer.append(coreInfoCoursesContainer, coreInfoConsultContainer);
coreInfo.append(coreInfoContainer, briefInformation);
export default coreInfo;
