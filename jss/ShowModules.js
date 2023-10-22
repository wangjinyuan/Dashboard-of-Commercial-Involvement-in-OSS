function runScript2(constuser, constyear, constmonth, mode, pre, ttt) {
    // alert(pre);
    // alert(mode);
    window.MODE++;
    const in111 = document.getElementById('flagin');
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    if (mode == '1'){
        var csv = 'output14.2.csv';
    }else if (mode == '2'){
        var csv = 'output14.3.csv';
    }else{
        var csv = 'output14.csv';
    }

    const MHYear = Array(30).fill(0);
    var MHYseriesdata=[];
    var Yeardata=[];
    const MHMonth = Array(20).fill(0);

    var PIClegenddata=[];
    var PICseriesdata=[];
    var CIdata=[];
    var DCIdata=[];
    var totalc = 0;
    var countt = 0;
    let total = 0;
    fetch(csv)
        .then(response => response.text())
        .then(() => {})
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
            const uniqueValues2 = new Set();

            let counttt=0;
            let sum = 0;
            lines.forEach(function(line) {

                const row = line.split(',');
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

            // alert(sum);

            // let sum = 0;
            var i=0;
            // alert(constuser+" "+constyear+" "+constmonth+" "+mode+" "+pre);
            for (let i = 0; i < lines.length-1; i++) {
                const line = lines[i];
                // alert(line);

                const row = line.split(',');

                if(row[3].startsWith(pre)&&row[0]==constuser&&row[2]!='0'){
                    // alert(row[2]);
                    const ym = row[2].split('-');
                    MHYear[parseInt(ym[0])-2000]+=parseInt(row[4]);
                    if (ym[0]==constyear){
                        MHMonth[parseInt(ym[1])]+=parseInt(row[4]);
                    }
                }


                if(row[3].startsWith(pre) && !uniqueValues2.has(row[3])){
                    // alert(countt);
                    countt=countt+1;
                    uniqueValues2.add(row[3]);
                    if(row[0]==constuser){
                        counttt=counttt+1;
                    }
                }
                if (!row[3].startsWith(pre) || row[0] != constuser || constyear != row[1]){
                    // alert(row);
                    
                }else{
                    if (constmonth != '0')
                    {
                        if (row[2] === constyear + '-' + constmonth && !uniqueValues.has(row[3])) {
                            uniqueValues.add(row[3]);
                            // countt++;
                        }
                    }else{
                        if (row[2] === '0' && !uniqueValues.has(row[3])) {
                            uniqueValues.add(row[3]);
                            // countt++;
                        }
                    }
                    // alert(row+" "+countt);

                    // const row = line.split(',');
                    i++;
                    if (constmonth === '0' || constmonth === null) {
                        if (row[0] === constuser && row[1] === constyear && row[2] == 0) {
                            // alert(i+' '+row)
                            // alert(row[2].length)
                            filteredRows.push(row);
                            // sum += parseInt(row[4]);
                        }//此处代码有问题，不同月份会分开计算
                    } else {
                        if (row[0] === constuser && row[2] === constyear + "-" + constmonth) {
                            // alert(row);
                            filteredRows.push(row);
                            // sum += parseInt(row[4]);
                        }
                    }
                }
            };//为什么后方代码不再执行

            filteredRows.forEach(function(row){
                total+=parseInt(row[4]);
            })
            total=ttt;


            // Sort the filtered rows by row[4] in descending order
            filteredRows.sort(function(a, b) {
                return b[4] - a[4];
            });
            // alert(filteredRows);
            const topRows=[];
            filteredRows.forEach(function(row){
                if(row[3].startsWith(pre)){
                    topRows.push(row);
                }
            })
            i=0;
            // alert(countt, counttt);
            const table = document.getElementById('keywordTable');
            topRows.forEach(function(row, index) {
                i=i+1;
                if(i%2==1&&i<20){
                    const newRow = table.insertRow();

                    const cell1 = newRow.insertCell();
                    const cell2 = newRow.insertCell();
                    const cell3 = newRow.insertCell();
                    const cell4 = newRow.insertCell();
                    const cell5 = newRow.insertCell();
                    const cell6 = newRow.insertCell();

                    cell2.innerHTML = row[3];
                    totalc += parseInt(row[4]);
                    // alert(totalc);
                    PIClegenddata.push(row[3]);
                    PICseriesdata.push({
                        value:row[4],
                        name:row[3]
                    })
                    CIdata.push(parseInt((row[4]/total*100).toFixed(2)));
                    DCIdata.push(100-parseInt((row[4]/total*100).toFixed(2)))
                    
                    cell1.innerHTML = row[0];
                    cell3.innerHTML = row[4];

                    cell4.innerHTML = (row[4]/total*100).toFixed(2)+"%";
                    cell5.innerHTML = (row[4]/sum*100).toFixed(2) + '%';
                    // cell6.innerHTML = "Q";
                    cell6.innerHTML = (counttt/countt*100).toFixed(2) + '%';
                }
                // if(index>10)
                //     return;
                    
            });
            // alert(topRows);

            // Display the sum using an alert
            // alert('Sum of row[4]: ' + sum);
        } else {
            console.error('Request failed with status:', xhr.status);
        }
        document.getElementById('loadingSection').style.display = 'none';
        in111.value='0';

        // alert(PICseriesdata[0].name);

        PIClegenddata.push('Others');
        PICseriesdata.push({
            value:total-totalc,
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

        // alert(MHMonth);
        // alert(MHYear);
        const MHYearN = MHYear.slice(2, 23);
        var MHYoptions = {
            title: {
                text:'Contributions of ['+pre +'] per year'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Commits']
            },
            xAxis: {
                type: 'category',
                data: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'count',
                type: 'line',
                data: MHYearN
            }]
        };
        // 使用配置项显示图表
        MHY.setOption(MHYoptions);

        const MHMonthN = MHMonth.slice(1, 13);
        var MHMoptions = {
            title: {
                text: 'Contributions of ['+pre +'] per month'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Commits']
            },
            xAxis: {
                type: 'category',
                data: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                  ]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'count',
                type: 'line',
                data: MHMonthN
            }]
        };
        // 使用配置项显示图表
        MHM.setOption(MHMoptions);

        
        document.getElementById('ModuleHistoryM').style.display = 'block';
        document.getElementById('ModuleHistoryY').style.display = 'block';
    };

    // Define callback function for failed request
    xhr.onerror = function() {
        console.error('Request failed');
    };
    xhr.open('GET', csv, true);
    xhr.send();
}
