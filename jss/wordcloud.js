function fileExists(filePath) {  
    var xhr = new XMLHttpRequest();  
    xhr.open('HEAD', filePath, false); // false for synchronous request  
    xhr.send();  
    return xhr.status === 200;  
}

function readFile(filePath) {  
    return fetch(filePath)  
        .then(response => response.text())  
        .catch(error => {  
            console.error(`Error reading file at ${filePath}:`, error);  
            return "";  
        });  
}

async function initWordCloud(cname) {  
    document.getElementById('wordcloud').style.display='block';
var cword = "";  
            // Check if file exists  
            var filePath = "wordcloud/" + cname + ".txt";  
            if (fileExists(filePath)) {  
            	var fileContent = await readFile(filePath);
            	cword = fileContent.split("\n"); 
            }

var formattedArray = [];
for (var i = 0; i < cword.length-1; i++) {
    var cterm = cword[i].split(",");
    formattedArray.push({name: cterm[0], value: cterm[1]});
}
            var chart = echarts.init(document.getElementById('wordcloud'));

            var option = {
                tooltip: {},
                series: [ {
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [12, 50],
                    rotationRange: [-60, 60],
                    shape: 'pentagon',
                    width: 400,
                    height: 300,
                    drawOutOfBound: true,
                    textStyle: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: formattedArray
                } ]
            };

            chart.setOption(option);
            window.onresize = chart.resize;

    chart.on('click', function (params) {
      // alert(params.name);
    });
}
