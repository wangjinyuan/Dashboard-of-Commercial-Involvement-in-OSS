// 创建表格元素
var table = document.createElement("table");
table.border=1;

// 创建表头行
var headerRow = table.insertRow(0);
headerRow.insertCell(0).innerHTML = "<b>Company</b>";
headerRow.insertCell(1).innerHTML = "<b>Contributes In 2022</b>";

// 创建数据行
var dataRow1 = table.insertRow(1);
dataRow1.insertCell(0).innerHTML = "Intel";
dataRow1.insertCell(1).innerHTML = "9091";

var dataRow2 = table.insertRow(2);
dataRow2.insertCell(0).innerHTML = "Amd";
dataRow2.insertCell(1).innerHTML = "6116";

var dataRow2 = table.insertRow(2);
dataRow2.insertCell(0).innerHTML = "Kernel";
dataRow2.insertCell(1).innerHTML = "5235";

var dataRow2 = table.insertRow(2);
dataRow2.insertCell(0).innerHTML = "Huawei";
dataRow2.insertCell(1).innerHTML = "3974";

var dataRow2 = table.insertRow(2);
dataRow2.insertCell(0).innerHTML = "RedHat";
dataRow2.insertCell(1).innerHTML = "3933";

var dataRow2 = table.insertRow(2);
dataRow2.insertCell(0).innerHTML = "Linaro";
dataRow2.insertCell(1).innerHTML = "2859";

// 获取页面中的元素
var targetElement = document.getElementById("TORC");

// 将表格元素添加到页面中
targetElement.appendChild(table);
