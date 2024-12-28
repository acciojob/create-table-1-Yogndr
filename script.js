
function insert_Row() {
	const table = document.getElementById("sampleTable");

    // Insert a new row at the top of the table
    const newRow = table.insertRow(0);

    // Create and add cells to the new row
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);

    // Set the text content of the new cells
    newCell1.textContent = "New Cell1";
    newCell2.textContent = "New Cell2";
  
}
