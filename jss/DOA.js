// 创建表格元素
var table = document.createElement("table");
// table.addEventListener("click", function(event) {
//     // 获取点击的单元格元素
//     var cell = event.target;
//     // 执行点击后的操作，例如弹出单元格内容
//     alert(cell.innerHTML);
//     window.location.href = "../htmls/Claim.html";
//   });
  table.style.border = "5px solid #eee"; // 设置表格边框
  table.style.cellPadding = "10px"; // 设置单元格内边距
  table.style.cellSpacing = "10px"; // 设置单元格间距
  table.style.width = "100%"; // 设置表格宽度为100%
  table.style.height = "80px"; // 设置表格高度为300像素



  
// 创建表头行
var headerRow = table.insertRow(0);
headerRow.insertCell(0).innerHTML = "<b>Total Commits</b>";
headerRow.insertCell(1).innerHTML = "<b>Invalid Developers</b>";
headerRow.insertCell(1).innerHTML = "<b>Total Developers</b>";
headerRow.insertCell(1).innerHTML = "<b>Total Users</b>";
headerRow.insertCell(1).innerHTML = "<b>Companies</b>";
headerRow.style.backgroundColor="#FFFF00";

// 创建数据行
var dataRow1 = table.insertRow(1);
dataRow1.insertCell(0).innerHTML = "1052942";
dataRow1.insertCell(1).innerHTML = "8";
dataRow1.insertCell(1).innerHTML = "34130";
dataRow1.insertCell(1).innerHTML = "24294";
dataRow1.insertCell(1).innerHTML = "117";
dataRow1.style.fontSize="16px";
dataRow1.style.color="#FFC0CB"
dataRow1.style.backgroundColor="#800080"


// 获取页面中的元素
var targetElement = document.getElementById("DOA");

// 将表格元素添加到页面中
targetElement.appendChild(table);
