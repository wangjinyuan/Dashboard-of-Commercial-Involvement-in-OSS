var myChart = echarts.init(document.getElementById('Accounts'), 'dark');

// 发送 HTTP 请求
var xhr = new XMLHttpRequest();
xhr.open('GET', '../txts/Accounts.txt', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = xhr.responseText.trim().split('\n').map(function(line) {
      return line.split(',');
    });
    
    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show:false,
        orient: 'vertical',
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
      calculable: false,
      series: [
        {
          name: 'Access From',
          type: 'pie',
          center: ['50%', '50%'],
          radius: '50%',
          data: [
            { value: data[0][0], name: 'Volunteer Users' },
            { value: data[1][0], name: 'Company Users' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        },
      ]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
      alert(params.name);
    });
  }
};
xhr.send();
