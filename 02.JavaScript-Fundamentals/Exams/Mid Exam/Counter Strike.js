function counterStrike(input) {

	let energy = Number(input.shift())
	let winCounter = 0;

	for (let line of input) {

		if (line === 'End of battle') {
			console.log(`Won battles: ${winCounter}. Energy left: ${energy}`);
			break
		}

		line = Number(line);

		if (energy >= line) {
			energy -= line
		} else {
			console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`)
			break
		}

		winCounter++
		if (winCounter > 0 && winCounter % 3 === 0) {
			energy += winCounter
		}
	}
}
// counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"])
counterStrike(["200", "54", "14", "28", "13", "End of battle"])


// function numbers(array) {
// 	let energy = Number(array.shift());
// 	let winCounter = 0;
// 	for (const command of array) {
// 	  if (command === "End of battle") {
// 		console.log(`Won battles: ${winCounter}. Energy left: ${energy} `);
// 		break;
// 	  }
  
// 	  if (energy >= command) {
// 		energy -= Number(command);
// 	  } else {
// 		console.log(
// 		  `Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`
// 		);
// 		break;
// 	  }
  
// 	  winCounter++;
// 	  if (winCounter % 3 === 0) {
// 		energy += winCounter;
// 	  }
// 	}
//   }
//   numbers(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
//   numbers(["200", "54", "14", "28", "13", "End of battle"]);