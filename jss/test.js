
    // 初始化 ECharts 实例
    var myChart = echarts.init(document.getElementById('chart'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '全国主要城市GDP排名'
        },
        tooltip: {},
        legend: {
            data:['GDP']
        },
        xAxis: {
            data: []
        },
        yAxis: {},
        series: [{
            name: 'GDP',
            type: 'bar',
            data: []
        }]
    };

    // 通过ajax从T10C.txt文件中读取数据
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'T10C.txt', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = xhr.responseText.split("\n");
            var xAxisData = [];
            var seriesData = [];
            for (var i = 0; i < data.length; i++) {
                var rowData = data[i].split(" ");
                xAxisData.push(rowData[0]);
                seriesData.push(parseFloat(rowData[1]));
            }
            myChart.setOption({
                xAxis: {
                    data: xAxisData
                },
                series: [{
                    name: 'GDP',
                    type: 'bar',
                    data: seriesData
                }]
            });
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

