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

// Create function to filter data table via button click
function handleClick() {

    // Grab the datetime value from the fikter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was enetered and filter the date using that date
    if (date) {

        // Apply filter to the table data to only keep rows where datetime value
        // matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: if no date was entered, then filterData will be original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form buttion
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);