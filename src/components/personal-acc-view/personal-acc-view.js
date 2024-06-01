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
    { class: 'personal-acc-view__sidebar' },
    jsx(
      { class: 'personal-acc-view__content', id: 'side' },
      jsx({ class: 'personal-acc-view__content_icon' }),
      jsx({ class: 'personal-acc-view__content_item', textContent: 'Личный кабинет' }),
    ),
    jsx(
      { class: 'personal-acc-view__content' },
      jsx({ class: 'personal-acc-view__content_icon' }),
      jsx({ class: 'personal-acc-view__content_item', textContent: 'Мои заказы' }),
    ),
  ),
  jsx(
    { class: 'personal-acc-view__info' },
    jsx({ class: 'personal-acc-view__content' }, jsx(
      { class: 'personal-acc-view__content-left' },
      jsx({ class: 'personal-acc-view__content-left_icon' }),
      jsx({ class: 'personal-acc-view__content-left_name', textContent: 'Васильев Василий Васильевич' }),
    ), jsx(
      { class: 'personal-acc-view__content-right' },
      jsx(
        { class: 'personal-acc-view__content-right_field' },
        jsx({ class: 'personal-acc-view__content-right_field-text', textContent: 'Mail:' }),
        jsx({ class: 'personal-acc-view__content-right_field-value', textContent: 'Собака@маил.ру' }),
      ),
      jsx(
        { class: 'personal-acc-view__content-right_field' },
        jsx({ class: 'personal-acc-view__content-right_field-text', textContent: 'Phone:' }),
        jsx({ class: 'personal-acc-view__content-right_field-value', textContent: '+77777777' }),
      ),
      jsx(
        { class: 'personal-acc-view__content-right_field' },
        jsx({ class: 'personal-acc-view__content-right_field-text', textContent: 'Очень важная инфа:' }),
        jsx({ class: 'personal-acc-view__content-right_field-value', textContent: 'бла бла бла' }),
      ),
    )),
    jsx({ class: 'personal-acc-view__chart', id: 'chart_div' }),
  ),
);

export default personalAcc;
