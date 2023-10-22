function searchRows(date, module) {
    // Create XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define callback function for successful request
    xhr.onload = function() {
        document.getElementById('outputDiv').style.display = 'block';

        if (xhr.status === 200) {
            var data = xhr.responseText;
            var lines = data.split('\n');
            var output = [];

            // Process each row in the data
            lines.forEach(function(line) {
                var row = line.split(',');
                if (row[1] === date && row[2] === module) {
                    output.push(row[0]+" : "+row[3]);
                }
            });

            // Use Set to remove duplicates
            var uniqueOutput = Array.from(new Set(output));

            // Display the output on the webpage
            var outputDiv = document.getElementById('outputDiv');
            outputDiv.innerHTML = '<p>Person(s) who committed most in module ['+module+']</p><ul>';
            uniqueOutput.forEach(function(item) {
                outputDiv.innerHTML += '<li>' + item.split('@')[0] + '</li>';
            });
            outputDiv.innerHTML += '</ul>';
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    };

    // Define callback function for failed request
    xhr.onerror = function() {
        console.error('Request failed');
    };
    xhr.open('GET', 'output11-8.csv', true);
    xhr.send();
}
