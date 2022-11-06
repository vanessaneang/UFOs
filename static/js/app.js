// import the date from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create function to iterate through array of objects in data file and append to table row
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data and append row and cells 
    // for each value in the row
    data.forEach((dataRow) => {

        // append row to table body
        let row = tbody.append("tr");
        
        //Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td")
            cell.text(val);
        });

    });
}