// from data.js
var tableData = data;

// call table
var tbody = d3.select("tbody");
var visual = d3.select("table");

// build table
function inputTable(ufoData) {
    ufoData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

inputTable(tableData);
console.log(tableData);

// create filtered table

var filterBtn = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");

filterBtn.on("click", function() {
    d3.event.preventDefault(); 
    tbody.html("");
    
    var inputValue = inputDate.property("value");
    console.log(inputValue);

    var filterTable = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filterTable);

    inputTable(filterTable);
});