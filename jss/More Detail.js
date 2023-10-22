function runScript(constuser, constyear, constmonth, mode) {
    const in111 = document.getElementById('flagin');
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    if (mode == '0'){
        var csv = 'output14.csv';
    }else if (mode == '1'){
        var csv = 'output14.1.csv';
    }else if (mode == '2'){
        var csv = 'output14.2.csv';
    }else{
        var csv = 'output14.3.csv';
    }

    var PIClegenddata=[];
    var PICseriesdata=[];
    var CIdata=[];
    var DCIdata=[];
    var countt = 0;
    var totalc = 0;
    let sum = 0;
    let len = 0;
    fetch(csv)
        .then(response => response.text())
        .then(data => {

        })
        .catch(error => {
            console.error('Error:', error);
        });

    // Define callback function for successful request
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = xhr.responseText;
            const lines = data.split('\n');
            const filteredRows = [];
            const uniqueValues = new Set();
            var i=0;
            lines.forEach(function(line) {

                const row = line.split(',');
                if (constmonth != '0')
                {
                    if (row[2] === constyear + '-' + constmonth && !uniqueValues.has(row[3])) {
                        uniqueValues.add(row[3]);
                        countt++;
                    }
                }else{
                    if (row[2] === '0' && !uniqueValues.has(row[3])) {
                        uniqueValues.add(row[3]);
                        countt++;
                    }
                }

                // const row = line.split(',');
                i++;
                if (constmonth === '0' || constmonth === null) {
                    if (row[0] === constuser && row[1] === constyear && row[2] == 0) {
                        // alert(i+' '+row)
                        // alert(row[2].length)
                        filteredRows.push(row);
                        sum += parseInt(row[4]);
                    }//此处代码有问题，不同月份会分开计算
                } else {
                    if (row[0] === constuser && row[2] === constyear + "-" + constmonth) {
                        filteredRows.push(row);
                        sum += parseInt(row[4]);
                    }
                }
            });

            // Sort the filtered rows by row[4] in descending order
            filteredRows.sort(function(a, b) {
                return b[4] - a[4];
            });
            const topRows = filteredRows.slice(0, 10);


            const table = document.getElementById('keywordTable');
            topRows.forEach(function(row, index) {
                const newRow = table.insertRow();
                if (index === 0) {
                    newRow.style.backgroundColor = 'yellow';
                }

                var summ=0
                lines.forEach(function(line) {
                    const roww = line.split(',');

                    if (constmonth === '0' || constmonth === null) {
                        if (roww[1] === constyear && roww[2] === '0' && roww[3] === row[3]) {
                            summ += parseInt(roww[4]);
                        }
                    } else {
                        if (roww[2] === constyear + "-" + constmonth && 
                        roww[3] === row[3]) {
                            summ += parseInt(roww[4]);
                        }
                    }
                });

                const cell1 = newRow.insertCell();
                const cell2 = newRow.insertCell();
                const cell3 = newRow.insertCell();
                const cell4 = newRow.insertCell();
                const cell5 = newRow.insertCell();
                const cell6 = newRow.insertCell();

                // if (index === 0) {
                //     cell2.innerHTML = row[3]+' * Most Focusing';
                // } else {
                //     cell2.innerHTML = row[3];
                // }
                cell2.innerHTML = row[3];
                totalc += parseInt(row[4]);
                // alert(totalc);
                PIClegenddata.push(row[3]);
                PICseriesdata.push({
                    value:row[4],
                    name:row[3]
                })
                CIdata.push(parseInt((row[4]/summ*100).toFixed(2)));
                DCIdata.push(100-parseInt((row[4]/summ*100).toFixed(2)))
                
                cell1.innerHTML = row[0];
                cell3.innerHTML = row[4];
                cell4.innerHTML = (row[4]/sum*100).toFixed(2) + '%';
                cell5.innerHTML = (row[4]/summ*100).toFixed(2) + '%';
                cell6.innerHTML = (filteredRows.length/countt*100).toFixed(2) + '%';
                len=filteredRows.length;
            });

            // Display the sum using an alert
            // alert('Sum of row[4]: ' + sum);
        } else {
            console.error('Request failed with status:', xhr.status);
        }
        // alert(len/countt*100);
        document.getElementById('CE').innerHTML="Contribution extent : "+(len/countt*100).toFixed(2)+'%'
        document.getElementById('CE').style.display='block';
        document.getElementById('loadingSection').style.display = 'none';
        in111.value='0';
        
        PIClegenddata.push('Others');
        PICseriesdata.push({
            value:sum-totalc,
            name:'Others'
        })
        var PICoption = {
            legend:{
                data:PIClegenddata,
                show:false
            },
            tooltip: {},
            series:{
                radius: ['0%', '60%'],
                type:'pie',
                data:PICseriesdata
            }
        }
        PercentChart.setOption(PICoption);
        
        PIClegenddata2=PIClegenddata;
        PIClegenddata.pop();
        var CIoption = {
            legend:{
                data:['Committed by this company','Committed by other companies'],
                show:true,
                selectedMode: 'none'
            },
            tooltip: {},
            grid: {
                height: 350 // 设置固定高度
            },
            xAxis: {
                type: 'category',
                data: PIClegenddata2,
                axisLabel: {
                    rotate: 45 // 旋转角度，根据需要调整
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: { // 设置坐标轴标签的格式
                    formatter: '{value}%'
                }
            },
            series: [{
                name: 'Committed by this company',
                type: 'bar',
                data:CIdata,
                stack:'aa'
            }, {
                name: 'Committed by other companies',
                type: 'bar',
                data: DCIdata,
                stack:'aa'
            }]
        };
        CI.setOption(CIoption);

        var outputDiv2 = document.getElementById('outputDiv2');
        outputDiv2.style.display='block';
        outputDiv2.innerHTML = 'The most focused module is : '+PIClegenddata[0];
        document.getElementById('ModuleHistoryM').style.display = 'none';
        document.getElementById('ModuleHistoryY').style.display = 'none';
    };
    // Define callback function for failed request
    xhr.onerror = function() {
        console.error('Request failed');
    };
    xhr.open('GET', csv, true);
    xhr.send();


}
