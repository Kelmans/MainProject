import './core-info.less';
import { jsx } from 'jsx';

const coreInfo = jsx(
  { class: 'core-info__wrapper' },
  jsx(
    { class: 'core-info__container' },
    jsx(
      { class: 'core-info__container-courses' },
      jsx(
        { class: 'core-info__title', textContent: 'Обучающая платформа онлайн-курсов GeekMems' },
        jsx(
          { class: 'courses' },
          jsx({ tag: 'a', class: 'courses-item', textContent: 'Мемология' }),
          jsx({ tag: 'a', class: 'courses-item', textContent: 'Тарология' }),
          jsx({ tag: 'a', class: 'courses-item', textContent: 'Программирование' }),
        ),
      ),
    ),
    jsx(
      { class: 'core-info__container-consult' },
      jsx(
        { class: 'consultation', textContent: 'Тут будет окно с инфой для связи' },
        jsx({ tag: 'input' }),
        jsx({ tag: 'input' }),
        jsx({ tag: 'input' }),
        jsx({ tag: 'button' }),
      ),
    ),
  ),
  jsx(
    { class: 'brief-information' },
    jsx({ textContent: 'Сюда добавляю видео с презентацией' }),
    jsx(
      {},
      jsx({ textContent: 'Интерактивные онлайн-уроки с экспертами' }),
      jsx({ textContent: 'Индивидуальный путь обучения' }),
      jsx({ textContent: 'Помощь с познанием мира' }),
      jsx({ textContent: 'Готовое портфолио по итогам обучения' }),
    ),
  ),
);

export default coreInfo;
