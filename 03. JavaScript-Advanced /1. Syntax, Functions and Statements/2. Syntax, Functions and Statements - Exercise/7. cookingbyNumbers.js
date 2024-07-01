// function cookingByNumbers(num, ...commands) {
//   let numList = [];
//   commands.forEach(function (command) {
//     if (command === "chop") {
//       return numList.push((num /= 2));
//     } else if (command === "dice") {
//       return numList.push((num = Math.sqrt(num)));
//     } else if (command === "spice") {
//       return numList.push((num += 1));
//     } else if (command === "bake") {
//       return numList.push((num *= 3));
//     } else if (command === "fillet") {
//       return numList.push((num *= 0.8));
//     }
//   });
//   console.log(numList.join("\n"));
// }

// cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");


function cookingByNumbers(inputNum, ...commands) {
	commands.forEach((command) => {
		inputNum = numManipulator(inputNum, command);
	});

	function numManipulator(inputNum, command) {
		switch (command) {
			case "chop":
				inputNum /= 2;
				break;
			case "dice":
				inputNum = Math.sqrt(inputNum);
				break;
			case "spice":
				inputNum += 1;
				break;
			case "bake":
				inputNum *= 3;
				break;
			case "fillet":
				inputNum *= 0.8;
		}
		console.log(inputNum);
		return inputNum;
	}
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");