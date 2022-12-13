$(function() {

  function drawBarChart(data, options, element) {
    const max = Math.max(...data);
    for (const datum of data) {
      const bar = document.createElement("div");
      $(bar).css({
        'background-color': 'black',
        'color': 'white',
        'width': `${(datum / max) * 100}vw`,
        'border': '2px solid red'
      });
      bar.innerHTML = datum;
      $(element).append(bar);
    }
  }

  drawBarChart([100, 200, 300, 400], 1, '#barchart-container');

});

