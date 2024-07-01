function arrayModifier(array) {
	let values = array.shift().split(" ");
  
	for (const iterator of array) {
	  let [command, indx1, indx2] = iterator.split(" ");
	  if (command === "end") {
		break;
	  }
	  if (command === "swap") {
		[values[indx1], values[indx2]] = [values[indx2], values[indx1]];
	  } else if (command === "multiply") {
		values[indx1] *= values[indx2];
	  } else if (command === "decrease") {
		values = values.map((el) => el - 1);
	  }
	}
	console.log(values.join(", "));
  }
  arrayModifier([
	"1 2 3 4",
	"swap 0 1",
	"swap 1 2",
	"swap 2 3",
	"multiply 1 2",
	"decrease",
	"end",
  ]);
  arrayModifier([
	"23 -2 321 87 42 90 -123",
	"swap 1 3",
	"swap 3 6",
	"swap 1 0",
	"multiply 1 2",
	"multiply 2 1",
	"decrease",
	"end",
  ]);
// function arrayModifier(input) {
// 	let initialArr = input.shift().split(' ').map(Number)
// 	for (const line of input) {
// 		let tokens = line.split(' ')
// 		let command = tokens.shift()
// 		if (command === 'end') {
// 			break
// 		} else {
// 			let firstIndex = tokens[0]
// 			let secondIndex = tokens[1]
// 			let firstOperand = initialArr[firstIndex]
// 			let secondOperand = initialArr[secondIndex]
// 			switch (command) {
// 				case 'swap':
// 					initialArr.splice(firstIndex, 1, secondOperand)
// 					initialArr.splice(secondIndex, 1, firstOperand)
// 					break
// 				case 'multiply':
// 					initialArr[firstIndex] = firstOperand * secondOperand
// 					break
// 				case 'decrease':
// 					initialArr = initialArr.map(el => el - 1)
// 					break
// 			}
// 		}
// 	}
// 	console.log(initialArr.join(', '));
// }
// arrayModifier([
// 	'1 2 3 4',
// 	'swap 0 1',
// 	'swap 1 2',
// 	'swap 2 3',
// 	'multiply 1 2',
// 	'decrease',
// 	'end'])


	/*
	function arrayModifier(input) {
  let listNumbers = input.shift().split(" ").map(Number);
  for (let i = 0; i < input.length; i++) {
    let [command, ...number] = input[i].split(" ");
    let [index1, index2] = number.map(Number);

    let firstOperand = listNumbers[index1];
    let secondOperand = listNumbers[index2];

    switch (command) {
      case "End":
        break;
      case "swap":
        listNumbers.splice(index1, 1, secondOperand);
        listNumbers.splice(index2, 1, firstOperand);

        break;
      case "multiply":
        listNumbers[index1] = firstOperand * secondOperand;
        break;
      case "decrease":
        listNumbers = listNumbers.map((el) => el - 1);
        break;
    }
  }
  console.log(listNumbers.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end "]);

	*/