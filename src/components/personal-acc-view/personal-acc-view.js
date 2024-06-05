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
      { class: 'personal-acc-view__content' },
      jsx({ class: 'personal-acc-view__content_icon' }),
      jsx({
        class: 'personal-acc-view__content_item',
        textContent: 'Личный кабинет'
      }),
    ),
    jsx(
      { class: 'personal-acc-view__content' },
      jsx({ class: 'personal-acc-view__content_icon' }),
      jsx({
        class: 'personal-acc-view__content_item',
        textContent: 'Мои заказы'
      }),
    ),
  ),
  jsx(
    { class: 'personal-acc-view-info' },
    jsx({ class: 'personal-acc-view-content' },
      jsx(
        { class: 'personal-acc-view-main' },
        jsx({ class: 'personal-acc-view-main__icon' }),
        jsx({
          class: 'personal-acc-view-main__name',
          textContent: 'Васильев Василий Васильевич'
        }),
      ),
      jsx(
        { class: 'personal-acc-view-form' },
        jsx(
          { class: 'personal-acc-view-form__field' },
          jsx({
            class: 'personal-acc-view-form__field-text',
            textContent: 'Mail:'
          }),
          jsx({
            class: 'personal-acc-view-form__field-value',
            textContent: 'Собака@маил.ру'
          }),
        ),
        jsx(
          { class: 'personal-acc-view-form__field' },
          jsx({
            class: 'personal-acc-view-form__field-text',
            textContent: 'Phone:'
          }),
          jsx({
            class: 'personal-acc-view-form__field-value',
            textContent: '+77777777'
          }),
        ),
        jsx(
          { class: 'personal-acc-view-form__field' },
          jsx({
            class: 'personal-acc-view-form__field-text',
            textContent: 'Очень важная инфа:'
          }),
          jsx({
            class: 'personal-acc-view-form__field-value',
            textContent: 'бла бла бла'
          }),
        ),
      )),
    jsx({
      class: 'personal-acc-view__chart',
      id: 'chart_div'
    }),
  ),
);

export default personalAcc;
