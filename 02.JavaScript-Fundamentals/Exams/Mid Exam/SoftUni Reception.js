// function softUniReception(array) {

// 	let data = array.slice()
// 	let students = data.pop();
// 	let efficiency = data.reduce((a, b) => Number(a) + Number(b), 0);
// 	let hours = 0

// 	while (students > 0) {

// 		students -= efficiency
// 		hours++

// 		if (hours > 0 && hours % 4 === 0) {
// 			hours++
// 		}
// 	}

// 	console.log(`Time needed: ${hours}h.`);

// }
// softUniReception(['5', '6', '4', '20'])
// softUniReception(['1', '2', '3', '45'])
// softUniReception(['3', '2', '5', '40'])

function softUniReception(array) {
  let students = Number(array.pop());
  let hours = 0;
  while (students > 0) {
    let efficinecy = array.map(Number);
    let sum = efficinecy.reduce((a, b) => a + b, 0);
    students -= sum;

    hours++;
    if (hours % 4 == 0) {
      hours++;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}
softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
