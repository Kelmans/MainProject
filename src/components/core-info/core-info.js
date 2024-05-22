import './core-info.less';
import { jsx } from 'jsx';

const coreInfo = jsx(
  { tag: 'div', class: 'core-info__wrapper' },
  jsx(
    { tag: 'div', class: 'core-info__container' },
    jsx(
      { tag: 'div', class: 'core-info__container-courses' },
      jsx(
        { tag: 'div', class: 'core-info__title', textContent: 'Обучающая платформа онлайн-курсов GeekMems' },
        jsx(
          { tag: 'div', class: 'courses' },
          jsx({ tag: 'a', class: 'courses-item', textContent: 'Мемология' }),
          jsx({ tag: 'a', class: 'courses-item', textContent: 'Тарология' }),
          jsx({ tag: 'a', class: 'courses-item', textContent: 'Программирование' }),
        ),
      ),
    ),
    jsx(
      { tag: 'div', class: 'core-info__container-consult' },
      jsx(
        { tag: 'div', class: 'consultation', textContent: 'Тут будет окно с инфой для связи' },
        jsx({ tag: 'div' }),
        jsx({ tag: 'input' }),
        jsx({ tag: 'input' }),
        jsx({ tag: 'input' }),
        jsx({ tag: 'button' }),
      ),
    ),
  ),
  jsx(
    { tag: 'div', class: 'brief-information' },
    jsx({ tag: 'div', textContent: 'Сюда добавляю видео с презентацией' }),
    jsx(
      { tag: 'div' },
      jsx({ tag: 'div', textContent: 'Интерактивные онлайн-уроки с экспертами' }),
      jsx({ tag: 'div', textContent: 'Индивидуальный путь обучения' }),
      jsx({ tag: 'div', textContent: 'Помощь с познанием мира' }),
      jsx({ tag: 'div', textContent: 'Готовое портфолио по итогам обучения' }),
    ),
  ),
);

export default coreInfo;
