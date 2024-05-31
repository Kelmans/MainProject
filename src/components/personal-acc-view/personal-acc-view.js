import './personal-acc-view.less';
import { jsx } from 'jsx';
import { initChart } from 'services/chart';

initChart('Нейм графика', [
  ['Пики', 2],
  ['Не Пики', 3],
  ['Над пробовать в жизни всё', 3],
]);

const personalAcc = jsx(
  { class: 'personal-acc-view' },
  jsx(
    { class: 'sidebar' },
    jsx(
      { class: 'sidebar__content', id: 'side' },
      jsx({ class: 'sidebar__content_icon' }),
      jsx({ class: 'sidebar__content_item', textContent: 'Личный кабинет' }),
    ),
    jsx(
      { class: 'sidebar__content' },
      jsx({ class: 'sidebar__content_icon' }),
      jsx({ class: 'sidebar__content_item', textContent: 'Мои заказы' }),
    ),
  ),
  jsx(
    { class: 'info' },
    jsx({ class: 'content' }, jsx(
      { class: 'content__left' },
      jsx({ class: 'content__left_icon' }),
      jsx({ class: 'content__left_name', textContent: 'Васильев Василий Васильевич' }),
    ), jsx(
      { class: 'content__right' },
      jsx(
        { class: 'field' },
        jsx({ class: 'field__text', textContent: 'Mail:' }),
        jsx({ class: 'field__value', textContent: 'Собака@маил.ру' }),
      ),
      jsx(
        { class: 'field' },
        jsx({ class: 'field__text', textContent: 'Phone:' }),
        jsx({ class: 'field__value', textContent: '+77777777' }),
      ),
      jsx(
        { class: 'field' },
        jsx({ class: 'field__text', textContent: 'Очень важная инфа:' }),
        jsx({ class: 'field__value', textContent: 'бла бла бла' }),
      ),
    )),
    jsx({ class: 'chart', id: 'chart_div' }),
  ),
);


export default personalAcc;
