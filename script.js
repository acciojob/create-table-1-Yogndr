
function insert_Row() {
	// let elem=document.getElementById("sampleTable");
	// let newrow=document.createElement("tr");
	// newrow.innerHTML="<td>New Cell1</td> <td>New Cell2</td>"
	// elem.insertBefore(newrow,elem.firstChild);
	let elem = document.getElementById("sampleTable");

    // Create a new row
    let newrow = document.createElement("tr");

    // Add cells to the row
    newrow.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";

    // Insert the row at the top
    elem.insertBefore(newrow, firstChild);
  
}
