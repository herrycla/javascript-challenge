// from data.js
const tabledata = data; 
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Console.log the weather data from data.js
console.log(data);
function createtable(data){
    tbody.html("")
// BONUS: Refactor to use Arrow Functions!
data.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

createtable(tabledata)

function handleClick() {
    var date = d3.select("#datetime").property("value");
    var filterdata = tabledata; 
    filterdata = filterdata.filter(row=>row.datetime===date);
    createtable(filterdata)
}
d3.selectAll("#filter-btn").on("click", handleClick);