var myChart = echarts.init(document.getElementById('T10C'), 'dark');

// 创建XMLHttpRequest对象
var xhr = new XMLHttpRequest();

// 设置请求方法和URL
xhr.open("GET", "../txts/T10C.txt");

// 设置响应类型
xhr.responseType = "text";

// 发送请求
xhr.send();

// 监听请求的加载事件
xhr.onload = function() {
  // 获取响应内容
  var text = xhr.responseText;

  // 将文件内容按行分割
  var lines = text.split("\n");
  var namess = lines[0].split(",");
  var intss = lines[1].split(",");
  
  // 初始化数据
  var data = [];
  for (var i = 0; i < namess.length; i++) {
    var item = {
      name: namess[i],
      value: intss[i],
    };
    data.push(item);
  }

  // 绘制图表
  myChart.setOption({
    tooltip: {},
    title: {
        text: 'Username of top 10 contributers'
    },
    yAxis: {
      type: 'category',
      data: data.map(function (item) {
        return item.name;
      }),
      axisLabel: {
        textStyle: {
          maxWidth: 200 // 设置文字宽度
        }
      }
    },
    xAxis: {},
    series: [
      {
        name: "Commits",
        type: "bar",
        data: data.map(function (item) {
          return item.value*10000;
        }),
      },
    ],
  });
};
