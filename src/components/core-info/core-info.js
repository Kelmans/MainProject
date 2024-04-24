import { createElement } from 'services/createElement';
import './core-info.less';

const coreInfo = createElement({ tag: 'div', class: 'core-info__wrapper' });
const coreInfoContainer = createElement({ tag: 'div', class: 'core-info__container' });
const coreInfoConsultContainer = createElement({ tag: 'div', class: 'core-info__container-consult' });
const coreInfoCoursesContainer = createElement({ tag: 'div', class: 'core-info__container-courses' });
const coreInfoTitle = createElement({ tag: 'div', class: 'core-info__title', textContent: 'Обучающая платформа онлайн-курсов GeekMems' });

const courses = createElement({ tag: 'div', class: 'courses' });
// Тут нужен будет какой-нить метод, что будет заполнить по входившему файлу список
const a1 = createElement({ tag: 'a', class: 'courses-item', textContent: 'Мемология' });
const a2 = createElement({ tag: 'a', class: 'courses-item', textContent: 'Тарология' });
const a3 = createElement({ tag: 'a', class: 'courses-item', textContent: 'Программирование' });

const consultation = createElement({ tag: 'div', class: 'consultation', textContent: 'Тут будет окно с инфой для связи' });
const consultationTitle = createElement({ tag: 'div' });
const nameInput = createElement({ tag: 'input' });
const emailInput = createElement({ tag: 'input' });
const phoneInput = createElement({ tag: 'input' });
const button = createElement({ tag: 'button' });

const briefInformation = createElement({ tag: 'div', class: 'brief-information' });
const briefInformationVideo = createElement({ tag: 'div', textContent: 'Сюда добавляю видео с презентацией' });
const briefInformationText = createElement({ tag: 'div' });
const briefInformation1 = createElement({ tag: 'div', textContent: 'Индивидуальный путь обучения' });
const briefInformation2 = createElement({ tag: 'div', textContent: 'Интерактивные онлайн-уроки с экспертами' });
const briefInformation3 = createElement({ tag: 'div', textContent: 'Помощь с познанием мира' });
const briefInformation4 = createElement({ tag: 'div', textContent: 'Готовое портфолио по итогам обучения' });

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
