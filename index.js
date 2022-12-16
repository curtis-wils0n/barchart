$(function() {

  function drawBarChart(data, options, element) {
    const max = Math.max(...data);

    const barInfo = document.createElement("div");
    $(barInfo).css({
      'display': 'flex',
      'flex-direction': 'row'
    });

    const barContainer = document.createElement("div");
    $(barContainer).addClass('bar-container');
    for (const datum of data) {
      const bar = document.createElement("div");
      $(bar).css({
        'font-family': 'system-ui',
        'background-color': 'white',
        'color': 'black',
        'width': `${(datum / max) * 80}vw`,
        'text-align': 'center',
        'border': '2px solid black',
        'margin': '2px'
      });
      bar.innerHTML = datum;
      $(barContainer).append(bar);
    }
    $(barContainer).css({
      'border-bottom': '2px solid black',
      'border-left': '2px solid black'
    });

    const yAxisText = document.createElement('div');
    yAxisText.innerHTML = 'Y-Axis';
    $(yAxisText).css({
      'width': '20px',
      'writing-mode': 'vertical-lr',
      'text-align': 'center'
    });

    const xAxisText = document.createElement('div');
    xAxisText.innerHTML = 'X-Axis';
    $(xAxisText).css({
      'width': `80vw`,
      'text-align': 'center',
      'margin-left': '20px'
    });

    $(barInfo).append(yAxisText);
    $(barInfo).append(barContainer);

    $(element).append(barInfo);
    $(element).append(xAxisText);
  }

  drawBarChart([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13], 1, '#barchart-container');

});

