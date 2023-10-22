var myChart = echarts.init(document.getElementById('AA'), 'dark');
var xData_aa = [];
var yData_aa = [];
var xhr_aa = new XMLHttpRequest();
xhr_aa.open('GET', '../txts/AA.txt', true);
xhr_aa.onreadystatechange = function () {
  if (xhr_aa.readyState === 4 && xhr_aa.status === 200) {
    var data = xhr_aa.responseText.trim().split('\n');
    xData_aa = data[0].split(',');
    yData_aa = data[1].split(',');
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
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: {
        type: 'category',
        data: xData_aa
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: yData_aa,
          type: 'line',
          smooth: true,
          name:'Active Developers'
        }
      ]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
      alert(params.data);
    });
  }
};
xhr_aa.send();
