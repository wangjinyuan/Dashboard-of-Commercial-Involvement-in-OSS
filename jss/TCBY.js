var myChart = echarts.init(document.getElementById('TCBY'), 'dark');
var xData_tcby = [];
var yData1_tcby = [];
var yData2_tcby = [];
var yData3_tcby = [];
var xhr_tcby = new XMLHttpRequest();
xhr_tcby.open('GET', '../txts/TCBY.txt', true);
xhr_tcby.onreadystatechange = function () {
  if (xhr_tcby.readyState === 4 && xhr_tcby.status === 200) {
    var data = xhr_tcby.responseText.trim().split('\n');
    xData_tcby = data[0].split(',');
    yData1_tcby = data[1].split(',');
    yData2_tcby = data[2].split(',');
    yData3_tcby = data[3].split(',');
    var option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'horizontal',
        left: 'left'
      },
      toolbox: {
        show: false,
        feature: {
          mark: { show: true },
          dataView: { show: false, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: false,
      xAxis: {
        type: 'category',
        data: xData_tcby
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: yData1_tcby,
          type: 'line',
          smooth: true,
          name:'Total Commits',
        },
        {
          data: yData2_tcby,
          type: 'bar',
          stack:'x',
          name:'Company Commits',
          radius: '10%',
        },
        {
          data: yData3_tcby,
          type: 'bar',
          stack:'x',
          name:'Volunteer Commits',
          radius: '10%',
        }
      ]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
      alert(params.data);
    });
  }
};
xhr_tcby.send();