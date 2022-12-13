$(function() {

  function drawBarChart(data, options, element) {
    const max = Math.max(...data);
    const barContainer = document.createElement("div");
    $(barContainer).addClass('bar-container');
    for (const datum of data) {
      const bar = document.createElement("div");
      $(bar).css({
        'font-family': 'system-ui',
        'background-color': 'white',
        'color': 'black',
        'width': `${(datum / max) * 100}vw`,
        'text-align': 'center',
        'border': '2px solid black',
        'margin': '2px'
      });
      bar.innerHTML = datum;
      $(barContainer).append(bar);
    }
    $(element).append(barContainer);
  }

  drawBarChart([1, 2, 3, 4], 1, '#barchart-container');

});

