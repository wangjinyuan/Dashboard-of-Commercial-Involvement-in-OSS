function runScript3(constyear, constmonth, mode, pre) {
    const in111 = document.getElementById('flagin');
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    if (mode == '1'){
        var csv = 'output10.1.csv';
    }else if (mode == '2'){
        var csv = 'output10.2.csv';
    }else{
        var csv = 'output10.3.csv';
    }

    var countt = 0;
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
            // let sum = 0;
            var i=0;
            // alert(pre);
            // alert(constuser+" "+constyear+" "+constmonth+" "+mode+" "+pre);
            for (let i = 0; i < lines.length-1; i++) {
                const line = lines[i];

                const row = line.split(',');
                if (!row[3].startsWith(pre) || constyear != row[1]){
                    
                }else{
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
                    // alert(row+" "+countt);

                    // const row = line.split(',');
                    i++;
                    if (constmonth === '0' || constmonth === null) {
                        if (row[1] === constyear && row[2] == 0) {
                            filteredRows.push(row);
                        }
                    } else {
                        if (row[2] === constyear + "-" + constmonth) {
                            filteredRows.push(row);
                        }
                    }
                }
            };

            // Sort the filtered rows by row[4] in descending order
            filteredRows.sort(function(a, b) {
                return b[4] - a[4];
            });
            // alert(filteredRows);
            const topRows = filteredRows.slice(0, 1);
            const firstrow = topRows[0];
            // alert(firstrow[0]);
            var str = 'Module : ' + pre + ' Most Concentrated Company : ' + firstrow[0]
            update(str);
            // topRows.forEach(function(row){
            //     alert(row[0]);
            // })
            // alert(topRows);

            // Display the sum using an alert
            // alert('Sum of row[4]: ' + sum);
        } else {
            console.error('Request failed with status:', xhr.status);
        }
        document.getElementById('loadingSection').style.display = 'none';
        in111.value='0';
    };

    // Define callback function for failed request
    xhr.onerror = function() {
        console.error('Request failed');
    };
    xhr.open('GET', csv, true);
    xhr.send();
}
