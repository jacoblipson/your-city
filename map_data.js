    


 google.load('visualization', '1', {'packages': ['geochart']});
 google.setOnLoadCallback(drawMarkersMap);

  function drawMarkersMap() {
  var data = google.visualization.arrayToDataTable([
    ['City', 'Rank'], //rank = size of dot, points = color
    ['Boston', (10-1)],
    ['New York', (10-2)],
    ['Los Angeles', (10-3)],
    ['Phoenix', (10-4)]
  ]);

  var options = {
    resolution: 'provinces',
    sizeAxis: { minValue: 1, maxValue: 10 },
    region: 'US',
    displayMode: 'markers',
    colorAxis: {colors: ['#e7711c', '#4374e0']}, // orange to blue
  };

  var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
  chart.draw(data, options);
};