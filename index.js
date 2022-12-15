$(function() {

  function drawBarChart(data, options, element) {
    const max = Math.max(...data);

    const barInfo = document.createElement("div");
    $(barInfo).css({
      'display': 'flex',
      'flex-direction': 'row'
    });
    // Create bars for container based on data
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

    // Create y-axis information
    const yAxis = document.createElement('div');
    $(yAxis).css({
      'border-right': '2px solid black',
      'height': `${$(barContainer).height}`
    });
    const yAxisText = document.createElement('div');
    yAxisText.innerHTML = 'Y Axis';
    $(yAxisText).css({
      'writing-mode': 'vertical-lr',
      'text-align': 'center'
    });

    $(barInfo).append(yAxisText);
    $(barInfo).append(yAxis);
    $(barInfo).append(barContainer);
    $(element).append(barInfo);
  }

  drawBarChart([1, 2, 3, 4], 1, '#barchart-container');

});

