// from data.js
var UFOData = data;
//console.log(UFOData);
// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");



// Console.log the alien data from data.js
console.log(UFOData);
function UFOTable(jsonData) {
    tbody.html("");
    jsonData.forEach((UFOReport) => {
        var row = tbody.append("tr");
        //transform the data json object format into a list
        var entries = Object.entries(UFOReport);
        //console.log(entries);
        entries.forEach(([key, value]) => {
            var cell = row.append('td');
            console.log(key);
            console.log(value);
            cell.text(value);
        });
    });
}
UFOTable(UFOData)


// Select the button
var button = d3.select("#filter-btn");
//Select the form
button.on("click", runEnter);
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);
// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var selectedData = UFOData.filter(sighting => sighting.datetime === inputValue);

    //return this as new json data to update table 
    console.log(selectedData);
    UFOTable(selectedData);




}



