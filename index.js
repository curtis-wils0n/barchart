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
        'width': `${(datum / max) * 100}vw`,
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
    yAxisText.innerHTML = 'Y Axis';
    $(yAxisText).css({
      'writing-mode': 'vertical-lr',
      'text-align': 'center'
    });

    const xAxisText = document.createElement('div');
    xAxisText.innerHTML = 'X Axis';
    $(xAxisText).css({
      'text-align': 'center',
      'margin-left': '60px'
    });

    $(barInfo).append(yAxisText);
    $(barInfo).append(barContainer);

    $(element).append(barInfo);
    $(element).append(xAxisText);
  }

  drawBarChart([1, 2, 3, 4], 1, '#barchart-container');

});

