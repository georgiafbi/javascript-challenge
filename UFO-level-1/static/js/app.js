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


// Select the reset and filter buttons
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn")

//Select the form
var form = d3.select("form");

// Create event handlers for clicking the buttons or pressing the enter key
resetButton.on("click", function(){

    // Preven the page from refreshing
    d3.event.preventDefault();
    // restore the table to unfiltered
    UFOTable(UFOData);
    //change an element's attribute
    var input = d3.select("#datetime");
    input.html("");
    input.attr("placeholder", "1/11/2011");
});

filterButton.on("click", runEnter);
form.on("submit",runEnter);
// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();


    //selectALL this get input value then append to a list values to equate to in out filter function 
    // Select the input element and get the raw HTML node
    var inputDateElement = d3.select("#datetime");
    var inputDateValue = inputDateElement.property("value");
    // for UFO-Level-2
    // var inputCityElement = d3.select("#city");
    // var inputCityValue = inputDateElement.property("value");

    
    console.log(inputDateValue);
    // var selectedData = UFOData.filter(([input]) =>{

    // });
    var selectedData = UFOData.filter(sighting => sighting.datetime === inputDateValue);

    //return this as new json data to update table 
    console.log(selectedData);
    UFOTable(selectedData);




}



