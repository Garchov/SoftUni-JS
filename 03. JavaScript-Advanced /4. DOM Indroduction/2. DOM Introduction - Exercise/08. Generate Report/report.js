function generateReport() {
	let tableRow = document.querySelectorAll("tbody tr");
	let tableHeader = document.querySelectorAll("thead tr th");
	let res = [];

	//rows
	for (let i = 0; i < tableRow.length; i++) {
		let tableData = tableRow[i].children;
		let tempData = {};

		//columns
		for (let index = 0; index < tableData.length; index++) {
			let infoTheader = tableHeader[index].childNodes;

			//check is the checkbox is checked
			if (infoTheader[1].checked === true) {
				
				//the key is the name of text content of th checkbox
				let propertyName = infoTheader[0].textContent
					.trim()
					.toLowerCase();

				//the value is the text content of the current cell in the column
				let value = tableData[index].textContent;

				//create an object (key - value pair)
				tempData[propertyName] = value;
			}
		}
		//store the object
		res.push(tempData);
	}
	let jsonRes = JSON.stringify(res);
	document.getElementById("output").textContent = jsonRes;
}