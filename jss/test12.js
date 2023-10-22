function runScript(constuser, constyear, constmonth, mode, pre) {
    const in111 = document.getElementById('flagin');
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    if (mode == '1'){
        var csv = 'output10.2.csv';
    }else if (mode == '2'){
        var csv = 'output10.3.csv';
    }else{
        var csv = 'output10.csv';
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
            // alert(constuser+" "+constyear+" "+constmonth+" "+mode+" "+pre);
            for (let i = 0; i < lines.length-1; i++) {
                const line = lines[i];
                // alert(line);

                const row = line.split(',');
                if (!row[3].startsWith(pre) || row[0] != constuser || constyear != row[1]){
                    // alert(row);
                    
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

            // Sort the filtered rows by row[4] in descending order
            filteredRows.sort(function(a, b) {
                return b[4] - a[4];
            });
            // alert(filteredRows);
            const topRows = filteredRows.slice(0, 10);

            const table = document.getElementById('keywordTable');
            topRows.forEach(function(row, index) {
                const newRow = table.insertRow();

                const cell1 = newRow.insertCell();
                const cell2 = newRow.insertCell();
                const cell3 = newRow.insertCell();

                cell2.innerHTML = row[3];
                
                cell1.innerHTML = row[0];
                cell3.innerHTML = row[4];
            });
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
