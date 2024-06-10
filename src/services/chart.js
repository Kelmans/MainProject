export function initChart(title, arrayRows) {
  google.charts.load('current', { packages: ['corechart'] });

  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(arrayRows);

    const options = {
      title,
      width: 400,
      height: 300,
    };

    const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(drawChart);
}
