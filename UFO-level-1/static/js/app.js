// from data.js
var UFOData = data;

var tbody = d3.select("tbody");

data.forEach(function(UFOReport) {
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});


var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", newtable);
form.on("submit", newtable);

function UFOfilter() {

    d3.event.preventDefault();
    var inputUFO = d3.select("#datetime");
    var ValueUFO = inputUFO.property("value");
    var filterUFO = UFOData.filter(sighting => sighting.datetime === ValueUFO);
    return filterUFO

};

function newtable() {
    

}