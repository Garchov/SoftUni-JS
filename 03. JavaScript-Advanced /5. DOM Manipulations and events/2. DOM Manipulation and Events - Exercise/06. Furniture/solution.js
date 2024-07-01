function solve() {
	let buttons = document.querySelectorAll("button");
	buttons[0].addEventListener("click", generate);
	buttons[1].addEventListener("click", buy);

	function generate() {
		let currentItems = JSON.parse(document.querySelectorAll("textarea")[0].value);
		let tableBody = document.getElementsByTagName("tbody")[0];
		for (let item of currentItems) {
			let tableRow = document.createElement("tr");
			tableRow.innerHTML = `<td><img src="${item.img}"></td>` +
								`<td><p>${item.name}</p></td>` +
								`<td><p>${item.price}</p></td>` +
								`<td><p>${item.decFactor}</p></td>` +
								`<td><input type="checkbox"></td>`;
			tableBody.appendChild(tableRow);
		}
	}

	function buy() {
		let resultArea = document.querySelectorAll("textarea")[1];
		let table = Array.from(document.querySelectorAll("tbody tr"));
		let res = [];

		for (let el of table) {
			if (el.querySelector("input[type=checkbox]:checked")) {
				let tableData = Array.from(el.querySelectorAll("td p"));
				let info = {
					name: tableData[0].textContent,
					price: tableData[1].textContent,
					decFactor: tableData[2].textContent,
				};
				res.push(info);
			}
		}

		let names = "";
		let totalPrice = 0;
		let decFactor = 0;

		for (let i = 0; i < res.length; i++) {
			let item = res[i];
			let sep = i == res.length -1 ? "" : ", ";
			names += item.name + sep;
			totalPrice += Number(item.price);
			decFactor += Number(item.decFactor);
		}
		decFactor /= res.length;

		resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
	}
}

// function solve() {
//   const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));

//   generateBtn.addEventListener("click", generate);
//   buyBtn.addEventListener("click", buy);

//   function generate() {
//     const input = JSON.parse(document.querySelector("textarea").value);
//     input.forEach((element) => {
//       const tr = document.createElement("tr");
//       const td1 = document.createElement("td");
//       const img = document.createElement("img");
//       img.src = element.img;
//       td1.appendChild(img);
//       tr.appendChild(td1);
//       const p1 = document.createElement("p");
//       const td2 = document.createElement("td");
//       p1.textContent = element.name;
//       td2.append(p1);
//       tr.append(td2);
//       const td3 = document.createElement("td");
//       const p2 = document.createElement("p");
//       p2.textContent = Number(element.price);
//       td3.append(p2);
//       tr.append(td3);
//       const td4 = document.createElement("td");
//       const p3 = document.createElement("p");
//       p3.textContent = Number(element.decFactor);
//       td4.append(p3);
//       tr.append(td4);
//       const td5 = document.createElement("td");
//       const input = document.createElement("input");
//       input.type = "checkbox";
//       td5.append(input);
//       tr.append(td5);
//       document.querySelector("tbody").appendChild(tr);
//     });
//   }
//   function buy() {
//     const checkBox = Array.from(
//       document.querySelectorAll("tbody input")
//     ).filter((x) => x.checked);

//     const bought = [];
//     let price = 0;
//     let decoration = 0;
//     checkBox.forEach((element) => {
//       const parentElement = element.parentElement.parentElement;
//       const data = Array.from(parentElement.querySelectorAll("p"));
//       bought.push(data[0].textContent);
//       price += Number(data[1].textContent);
//       decoration += Number(data[2].textContent);
//     });
//     const output = document.querySelector("textarea")[1];
//     output.textContent += `Bought furniture: ${bought.join(
//       ", "
//     )}\r\n`;

//     output.textContent += `Total price: ${price.toFixed(2)}
//     \r\n`;

//     output.textContent += `Average decoration factor: ${decoration / checkBox.length}`
//   }
// }
