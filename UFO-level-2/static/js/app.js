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
            //console.log(key);
            //console.log(value);
            cell.text(value);
        });
    });
}
UFOTable(UFOData)


// Select the reset and filter buttons
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#clear-btn")
//Select the form
// d3.selectAll("form-control").on("submit",runEnter);

// Create event handlers for clicking the button or pressing the enter key
filterButton.on("click", runEnter);
// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //selectALL this get input value then append to a list values to equate to in out filter function 
    // Select the input element and get the raw HTML node
    var inputArray = ["#datetime", "#city", "#state", "#country", "#shape"];
    var inputKey=[];
    var inputValue = [];
    inputArray.forEach(id => {
        //selectALL this get input value then append to a list values to equate to in out filter function 
        // Select the input element and get the raw HTML node
        var value = d3.select(id).property("value");
        if (value != "") {
            inputValue.push(value);
            inputKey.push(id.slice(1));
            console.log(value);
        }

    });
    console.log(inputValue);

    var selectedData = 0;

    // loops through each inputValue and stores filtered data into selectedData
    for (var i = 0; i < inputValue.length; i++) {
        //slices element for data key
        var key= inputKey[i];
        //return filted data for first input value
        if (i === 0) {
            selectedData = UFOData.filter(sighting => sighting[key] === inputValue[i]);
        }
        //updates filtered data for the remain input values entered
        else if (i > 0) {
            selectedData = selectedData.filter(sighting => sighting[key] === inputValue[i]);
        }
    }

    console.log(selectedData)
    //updates table with filtered data base on input values entered
    UFOTable(selectedData);


}
// Create event handlers for clicking the buttons or pressing the enter key
resetButton.on("click", function () {

    // Preven the page from refreshing
    d3.event.preventDefault();
    // restore the table to unfiltered
    UFOTable(UFOData);
});




