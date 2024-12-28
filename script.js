let elem=document.getElementById("sampleTable");
function insert_Row() {
	let newrow=document.createElement("tr");
	newrow.innerHTML="<td>New Cell1</td><td>New Cell2</td>"
	elem.insertBefore(newrow,elem.rows[0]);
  
}
