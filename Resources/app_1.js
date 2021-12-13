// import the data from data.js
const tableData = data;
console.log("tableData")
console.log(tableData)

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Takes two numbers and adds them
// function addition(a, b) {
    // return a + b;
  // }

  // Functions can call other functions
// function doubleAddition(c, d) {
    // var total = addition(c, d) * 2;
    // return total;
  // }

// Functions can call other functions
// function doubleAddition(65, 34) {
    // var total = addition(65, 34) * 2;
    // return total;
  // }

  // Simple JavaScript log statement
// function printHello() {
    // return "Hello there!";
  // }

  // printHello = () => "Hello there!";

  // Converted to an arrow function
// addition = (a, b) => a + b;

// Original doubleAddition function
// function doubleAddition(c, d) {
    // var total = addition(c, d) * 2;
    // return total;
  // }

// Refactored doubleAddition function
// doubleAddition = (c, d)

// Refactored doubleAddition fat arrow
// => addition(c, d) * 2;

// let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// function listLoop(userList) {
    // for (var i = 0; i < userList.length; i++) {
      // console.log(userList[i]);
    // }
 // }

 // listLoop(friends);

 // Practice using for loops in Javascript
 // let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// for (var i = 0; i < vegetables.length; i++) {
//}

// var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// for (var i = 0; i < vegetables.length; i++) {
    // console.log("I love " + vegetables[i]);
// }

// for (var i = 0; i < 5; i++) {
    // console.log("I am " + i);
 // }

 // 11.5.1 Itro to dynamic Tables

 function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

    // if-statement syntax
// if ( condition ) { code to execute }

// pseudocode practice
// if (a date is entered) {
    // Filter the default data to show only the date entered
// };

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);