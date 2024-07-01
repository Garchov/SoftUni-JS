function numbers(input) {

	let arr = input.split(' ').map(Number);
	let avg = arr.reduce((acc, val) => acc + val, 0) / arr.length
	let filtered = arr.filter(x => x > avg)

	if (filtered.length > 0) {
		let sorted = filtered.sort((a, b) => b - a).slice(0, 5)
		console.log(sorted.join(' '));
	} else {
		console.log('No');
	}
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('10 20 30 40 50')


// function numbers(array) {
// 	let allNumbers = array.split(" ").map(Number);
// 	let sum = allNumbers.reduce((a, b) => a + b, 0);
// 	let average = sum / allNumbers.length;
  
// 	let filteredNumbers = allNumbers.filter((n) => n > average);
// 	let sortedNumbers = filteredNumbers.sort((a, b) => b - a);
  
// 	if (filteredNumbers.length === 0) {
// 	  console.log("No");
// 	} else {
// 	  let result = sortedNumbers.slice(0, 5);
// 	  console.log(result.join(" "));
// 	}
//   }
  
//   numbers("10 20 30 40 50");
//   numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");