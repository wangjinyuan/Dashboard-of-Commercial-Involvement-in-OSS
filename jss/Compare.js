function runScript3(constusers, constyear, mode, pre) {//公司列表 年 模式 模块名
    // alert(constusers);
    constusers.push("");
    constusers.push("");
     // return;
    // pre='drivers'
    // alert(constyear);
    // constyear='2018';
    var constuser = constusers[0];
    var constuser2 = constusers[1];
    var constuser3 = constusers[2];
    var constuser4 = constusers[3];
    // mode=parseInt(mode)-1;
    // alert(mode);
    // alert(pre);
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    if (mode == '1'){
        var csv = 'output14.1.csv';
    }else if (mode == '2'){
        var csv = 'output14.2.csv';
    }else if (mode == '3'){
        var csv = 'output14.3.csv';
    }else{
        var csv = 'output14-6.csv';
    }

    //模块下公司1的年cnt，月cnt，公司2的年cnt，月cnt
    const CIYear1 = Array(30).fill(0);
    const CIMonth1 = Array(20).fill(0);
    const CIYear2 = Array(30).fill(0);
    const CIMonth2 = Array(20).fill(0);
    const CIYear3 = Array(30).fill(0);
    const CIMonth3 = Array(20).fill(0);
    const CIYear4 = Array(30).fill(0);
    const CIMonth4 = Array(20).fill(0);

    //CI:所有贡献者中user的占比
    const CIY = Array(30).fill(0);
    const CIM = Array(20).fill(0);

    //公司的年cnt，月cnt
    const TOTYear1 = Array(30).fill(0);
    const TOTMonth1 = Array(20).fill(0);
    const TOTYear2 = Array(30).fill(0);
    const TOTMonth2 = Array(20).fill(0);
    const TOTYear3 = Array(30).fill(0);
    const TOTMonth3 = Array(20).fill(0);
    const TOTYear4 = Array(30).fill(0);
    const TOTMonth4 = Array(20).fill(0);

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
            lines.forEach(function(line) {
                // alert(mode);
                if(mode>=1){
                    const row = line.split(',');
                    // const row = line.split(',');
                    if(row[3] == pre){
                        if(row[2]=='0'){
                            CIY[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIM[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser && row[3] == pre){
                        if(row[2]=='0'){
                            CIYear1[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIMonth1[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser2 && row[3] == pre){
                        if(row[2]=='0'){
                            CIYear2[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIMonth2[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser3 && row[3] == pre && constuser3!=""){
                        if(row[2]=='0'){
                            CIYear3[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIMonth3[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser4 && row[3] == pre && constuser4!=""){
                        if(row[2]=='0'){
                            CIYear4[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIMonth4[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser){
                        if(row[2]=='0'){
                            TOTYear1[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                TOTMonth1[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser2){
                        if(row[2]=='0'){
                            TOTYear2[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                TOTMonth2[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser3 && constuser3 != ""){
                        if(row[2]=='0'){
                            TOTYear3[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                TOTMonth3[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser4 && constuser4 != ""){
                        if(row[2]=='0'){
                            TOTYear4[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                TOTMonth4[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }

                }else{
                    // alert(mode);
                    const row = line.split(',');
                    // const row = line.split(',');
                        if(row[2]=='0'){
                            CIY[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIM[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    if(row[0]==constuser){
                        if(row[2]=='0'){
                            CIYear1[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIMonth1[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser2){
                        if(row[2]=='0'){
                            CIYear2[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIMonth2[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser3 && constuser3 != ""){
                        if(row[2]=='0'){
                            CIYear3[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIMonth3[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser4 && constuser4 != ""){
                        if(row[2]=='0'){
                            CIYear4[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                CIMonth4[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser){
                        if(row[2]=='0'){
                            TOTYear1[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                TOTMonth1[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser2){
                        if(row[2]=='0'){
                            TOTYear2[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                TOTMonth2[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser3 && constuser3 != ""){
                        if(row[2]=='0'){
                            TOTYear3[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                TOTMonth3[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                    if(row[0]==constuser4 && constuser4 != ""){
                        if(row[2]=='0'){
                            TOTYear4[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }else{
                            const ym = row[2].split('-');
                            if(ym[0]==constyear){
                                TOTMonth4[parseInt(ym[1])]+=parseInt(row[4]);
                            }
                        }
                    }
                }

            });

            // alert(CIYear1);
            // alert(CIYear2);
            // alert(CIMonth1);
            // alert(CIMonth2);
            // alert(CIY);
            // alert(CIM);
            // alert(sum);
            // alert(TOTYear1);
            // alert(TOTYear2);
            const CIY1N = CIYear1.slice(2,23);
            const CIY2N = CIYear2.slice(2,23);
            const CIY3N = CIYear3.slice(2,23);
            const CIY4N = CIYear4.slice(2,23);
            const CIYN = CIY.slice(2,23);
            const CIY1P = [];
            const CIY2P = [];
            const CIY3P = [];
            const CIY4P = [];
            for (let i = 0; i < CIY1N.length; i++) {
                const result = (CIY1N[i] * 100) / CIYN[i];
                CIY1P.push(result);
            }
            for (let i = 0; i < CIY2N.length; i++) {
                const result = (CIY2N[i] * 100) / CIYN[i];
                CIY2P.push(result);
            }
            for (let i = 0; i < CIY3N.length; i++) {
                const result = (CIY3N[i] * 100) / CIYN[i];
                CIY3P.push(result);
            }
            for (let i = 0; i < CIY4N.length; i++) {
                const result = (CIY4N[i] * 100) / CIYN[i];
                CIY4P.push(result);
            }

            const CIM1N = CIMonth1.slice(1,13);
            const CIM2N = CIMonth2.slice(1,13);
            const CIM3N = CIMonth3.slice(1,13);
            const CIM4N = CIMonth4.slice(1,13);
            const CIMN = CIM.slice(1,13);
            const CIM1P = [];
            const CIM2P = [];
            const CIM3P = [];
            const CIM4P = [];
            for (let i = 0; i < CIM1N.length; i++) {
                const result = (CIM1N[i] * 100) / CIMN[i];
                CIM1P.push(result);
            }
            for (let i = 0; i < CIM2N.length; i++) {
                const result = (CIM2N[i] * 100) / CIMN[i];
                CIM2P.push(result);
            }
            for (let i = 0; i < CIM3N.length; i++) {
                const result = (CIM3N[i] * 100) / CIMN[i];
                CIM3P.push(result);
            }
            for (let i = 0; i < CIM4N.length; i++) {
                const result = (CIM4N[i] * 100) / CIMN[i];
                CIM4P.push(result);
            }

            const TOTY1N = TOTYear1.slice(2,23);
            const TOTY2N = TOTYear2.slice(2,23);
            const TOTY3N = TOTYear3.slice(2,23);
            const TOTY4N = TOTYear4.slice(2,23);
            const TOTM1N = TOTMonth1.slice(1,13);
            const TOTM2N = TOTMonth2.slice(1,13);
            const TOTM3N = TOTMonth3.slice(1,13);
            const TOTM4N = TOTMonth4.slice(1,13);
            const TOTY1P = [];
            const TOTY2P = [];
            const TOTM1P = [];
            const TOTM2P = [];
            const TOTY3P = [];
            const TOTY4P = [];
            const TOTM3P = [];
            const TOTM4P = [];
            // alert(CIY2N);
            // alert(TOTY2N);
            for (let i = 0; i < CIY1N.length; i++) {
                const result = (CIY1N[i] * 100) / TOTY1N[i];
                TOTY1P.push(result);
            }
            for (let i = 0; i < CIY2N.length; i++) {
                const result = (CIY2N[i] * 100) / TOTY2N[i];
                TOTY2P.push(result);
            }
            for (let i = 0; i < CIY3N.length; i++) {
                const result = (CIY3N[i] * 100) / TOTY3N[i];
                TOTY3P.push(result);
            }
            for (let i = 0; i < CIY4N.length; i++) {
                const result = (CIY4N[i] * 100) / TOTY4N[i];
                TOTY4P.push(result);
            }
            for (let i = 0; i < CIM1N.length; i++) {
                const result = (CIM1N[i] * 100) / TOTM1N[i];
                TOTM1P.push(result);
            }
            for (let i = 0; i < CIM2N.length; i++) {
                const result = (CIM2N[i] * 100) / TOTM2N[i];
                TOTM2P.push(result);
            }
            for (let i = 0; i < CIM3N.length; i++) {
                const result = (CIM3N[i] * 100) / TOTM3N[i];
                TOTM3P.push(result);
            }
            for (let i = 0; i < CIM4N.length; i++) {
                const result = (CIM4N[i] * 100) / TOTM4N[i];
                TOTM4P.push(result);
            }
            
            let flags = 0
            for (let i = 0; i<TOTY1P.length; i++){
                if((TOTY1P[i]!=0&&!isNaN(TOTY1P[i]))||(TOTY2P[i]!=0&&!isNaN(TOTY2P[i]))||
                (TOTY3P[i]!=0&&!isNaN(TOTY3P[i]))||(TOTY4P[i]!=0&&!isNaN(TOTY4P[i]))){
                    flags=1;
                    break;
                }
            }
            if(flags==0){
                alert("No avalible data under this circumstance, please choose another");
                return;
            }

            var TOTYoptions = {
                title: {
                    text: 'Percent Year Compare'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [constuser, constuser2, constuser3, constuser4]
                },
                xAxis: {
                    type: 'category',
                    data: ['2002', '2003', '2004', '2005', '2006',
                     '2007', '2008', '2009', '2010', '2011', 
                    '2012', '2013', '2014', '2015', '2016', '2017',
                     '2018', '2019', '2020', '2021', '2022']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: { // 设置坐标轴标签的格式
                        formatter: '{value}%'
                    }
                },
                series: [
                    {
                        name: constuser,
                        type: 'line',
                        data: TOTY1P
                    },
                    {
                        name: constuser2,
                        type: 'line',
                        data: TOTY2P
                    },
                    {
                        name: constuser3,
                        type: 'line',
                        data: TOTY3P
                    },
                    {
                        name: constuser4,
                        type: 'line',
                        data: TOTY4P
                    }
                ]
            };
            TOTYearChart.setOption(TOTYoptions);

            var TOTMoptions = {
                title: {
                    text: 'Percent Month Compare in '+ constyear
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [constuser, constuser2, constuser3, constuser4]
                },
                xAxis: {
                    type: 'category',
                    data:  [
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                      ]
                },
                yAxis: {
                    type: 'value',
                    axisLabel: { // 设置坐标轴标签的格式
                        formatter: '{value}%'
                    }
                },
                series: [
                    {
                        name: constuser,
                        type: 'line',
                        data: TOTM1P
                    },
                    {
                        name: constuser2,
                        type: 'line',
                        data: TOTM2P
                    },
                    {
                        name: constuser3,
                        type: 'line',
                        data: TOTM3P
                    },
                    {
                        name: constuser4,
                        type: 'line',
                        data: TOTM4P
                    }
                ]
            };
            TOTMonthChart.setOption(TOTMoptions);

            var CIYoptions = {
                title: {
                    text: 'Contribution Intensity Year Compare'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [constuser, constuser2, constuser3, constuser4]
                },
                xAxis: {
                    type: 'category',
                    data: ['2002', '2003', '2004', '2005', '2006',
                     '2007', '2008', '2009', '2010', '2011', 
                    '2012', '2013', '2014', '2015', '2016', '2017',
                     '2018', '2019', '2020', '2021', '2022']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: { // 设置坐标轴标签的格式
                        formatter: '{value}%'
                    }
                },
                series: [
                    {
                        name: constuser,
                        type: 'line',
                        data: CIY1P
                    },
                    {
                        name: constuser2,
                        type: 'line',
                        data: CIY2P
                    },
                    {
                        name: constuser3,
                        type: 'line',
                        data: CIY3P
                    },
                    {
                        name: constuser4,
                        type: 'line',
                        data: CIY4P
                    }
                ]
            };
            CIYearChart.setOption(CIYoptions);

            var CIMoptions = {
                title: {
                    text: 'Contribution Intensity Month Compare in '+ constyear
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [constuser, constuser2, constuser3, constuser4]
                },
                xAxis: {
                    type: 'category',
                    data:  [
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                      ]
                },
                yAxis: {
                    type: 'value',
                    axisLabel: { // 设置坐标轴标签的格式
                        formatter: '{value}%'
                    }
                },
                series: [
                    {
                        name: constuser,
                        type: 'line',
                        data: CIM1P
                    },
                    {
                        name: constuser2,
                        type: 'line',
                        data: CIM2P
                    },
                    {
                        name: constuser3,
                        type: 'line',
                        data: CIM3P
                    },
                    {
                        name: constuser4,
                        type: 'line',
                        data: CIM4P
                    }
                ]
            };
            CIMonthChart.setOption(CIMoptions);

        } else {
            console.error('Request failed with status:', xhr.status);
        }

        // alert(PICseriesdata[0].name);

        
    };

    // Define callback function for failed request
    xhr.onerror = function() {
        console.error('Request failed');
    };
    xhr.open('GET', csv, true);
    xhr.send();
}
function runScript4(constuser) {//公司
    const xhr = new XMLHttpRequest();
    var csv = 'output14-6.csv';

    document.getElementById('YearCommits').style.display='block'
    //公司的年cnt，月cnt
    const TOTYear1 = Array(30).fill(0);

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
            lines.forEach(function(line) {
                // alert(mode);
                    const row = line.split(',');
                    // const row = line.split(',');
                    if(row[0]==constuser){
                        if(row[2]!='0'){
                            // alert(row)
                            TOTYear1[parseInt(row[1])-2000]+=parseInt(row[4]);
                        }
                    }
            });
            
            // alert(TOTYear1)
            const TOTY1N = TOTYear1.slice(2,23);
            var TOTYoptions = {
                title: {
                    text: 'Total contributions per year'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [constuser]
                },
                xAxis: {
                    type: 'category',
                    data: ['2002', '2003', '2004', '2005', '2006',
                     '2007', '2008', '2009', '2010', '2011', 
                    '2012', '2013', '2014', '2015', '2016', '2017',
                     '2018', '2019', '2020', '2021', '2022']
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        name: constuser,
                        type: 'line',
                        data: TOTY1N
                    }
                ]
            };
            YearChart.setOption(TOTYoptions);

        } else {
            console.error('Request failed with status:', xhr.status);
        }

        // alert(PICseriesdata[0].name);

        
    };

    // Define callback function for failed request
    xhr.onerror = function() {
        console.error('Request failed');
    };
    xhr.open('GET', csv, true);
    xhr.send();
}