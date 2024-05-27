import './personal-acc-view.less';
import { jsx } from 'jsx';

const personalAcc = jsx(
  { tag: 'div', class: 'container' },
  jsx(
    { tag: 'div', class: 'sidebar' },
    jsx(
      { tag: 'div', class: 'sidebar__content' },
      jsx({ tag: 'div', class: 'sidebar__content_icon' }),
      jsx({ tag: 'div', class: 'sidebar__content_item', textContent: 'Личный кабинет' }),
    ),
    jsx(
      { tag: 'div', class: 'sidebar__content' },
      jsx({ tag: 'div', class: 'sidebar__content_icon' }),
      jsx({ tag: 'div', class: 'sidebar__content_item', textContent: 'Мои заказы' }),
    ),
  ),
  jsx(
    { tag: 'div', class: 'info' },
    jsx({ tag: 'div', class: 'content' }, jsx(
      { tag: 'div', class: 'content__left' },
      jsx({ tag: 'div', class: 'content__left_icon' }),
      jsx({ tag: 'div', class: 'content__left_name', textContent: 'Васильев Василий Васильевич' }),
    ), jsx(
      { tag: 'div', class: 'content__right' },
      jsx(
        { tag: 'div', class: 'field' },
        jsx({ tag: 'div', class: 'field__text', textContent: 'Mail:' }),
        jsx({ tag: 'div', class: 'field__value', textContent: 'Собака@маил.ру' }),
      ),
      jsx(
        { tag: 'div', class: 'field' },
        jsx({ tag: 'div', class: 'field__text', textContent: 'Phone:' }),
        jsx({ tag: 'div', class: 'field__value', textContent: '+77777777' }),
      ),
      jsx(
        { tag: 'div', class: 'field' },
        jsx({ tag: 'div', class: 'field__text', textContent: 'Очень важная инфа:' }),
        jsx({ tag: 'div', class: 'field__value', textContent: 'бла бла бла' }),
      ),
    )),
    jsx({ tag: 'div', class: 'chart', id: 'chart_div' }),
  ),
);
export default personalAcc;

// Load the Visualization API and the corechart package.
google.charts.load('current', { packages: ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Пики', 1],
    ['Не Пики', 3],
    ['Над пробовать в жизни всё', 3],
  ]);

  // Set chart options
  const options = {
    title: 'Что выберешь ты?',
    width: 400,
    height: 300,
  };

  // Instantiate and draw our chart, passing in some options.
  const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
