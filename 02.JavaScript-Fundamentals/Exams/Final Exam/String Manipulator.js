function stringManipulator(input) {
	let string = input.shift();

	let commandParser = {
		Translate(string, char, replacement) {
			while (string.includes(char)) {
				string = string.replace(char, replacement);
			}
			console.log(string);
			return string;
		},
		Includes(string, substring) {
			console.log(string.includes(substring) ? "True" : "False");
			return string;
		},
		Start(string, substring) {
			console.log(string.startsWith(substring) ? "True" : "False");
			return string;
		},
		Lowercase(string) {
			string = string.toLowerCase();
			console.log(string);
			return string;
		},
		FindIndex(string, char) {
			console.log(string.lastIndexOf(char));
			return string;
		},
		Remove(string, startIndex, count) {
			startIndex = Number(startIndex);
			count = Number(count);
			let first = string.substring(0, startIndex);
			let second = string.substring(startIndex + count);
			string = first + second;
			console.log(string);
			return string;
		},
	};

	for (const line of input) {
		if (line === "End") {
			break;
		}
		let [command, ...tokens] = line.split(" ");
		string = commandParser[command](string, ...tokens);
	}
}
stringManipulator([
	"//Thi5 I5 MY 5trING!//",
	"Translate 5 s",
	"Includes string",
	"Start //This",
	"Lowercase",
	"FindIndex i",
	"Remove 0 10",
	"End",
]);
// stringManipulator([
// 	"*S0ftUni is the B3St Plac3**",
// 	"Translate 2 o",
// 	"Includes best",
// 	"Start the",
// 	"Lowercase",
// 	"FindIndex p",
// 	"Remove 2 7",
// 	"End",
// ]);

// function stringManipulator(array) {
// 	let string = array.shift();
  
// 	for (const line of array) {
// 	  if (line === "End") {
// 		break;
// 	  }
// 	  let [command, index1, index2] = line.split(" ");
// 	  switch (command) {
// 		case "Translate":
// 		  while(string.includes(index1)){
// 			  string = string.replace(index1, index2);
// 		  }
// 		  console.log(string);
// 		  break;
// 		case "Includes":
// 		  console.log(string.includes(index1) ? "True" : "False");
// 		  break;
// 		case "Start":
// 		  console.log(string.startsWith(index1) ? "True" : "False");
// 		  break;
// 		case "Lowercase":
// 		  string = string.toLowerCase();
// 		  console.log(string);
// 		  break;
// 		case "FindIndex":
// 		  console.log(string.lastIndexOf(index1));
// 		  break; 
// 		case "Remove":
// 		  let start = Number(index1);
// 		  let count = Number(index2);
// 		  let first = string.substring(0, start);
// 		  let second = string.substring(start + count);
// 		  string = first + second;
// 		  console.log(string);
// 		  break;
// 	  }
// 	}
//   }
  
  // stringManipulator(["//Thi5 I5 MY 5trING!//",
  // "Translate 5 s",
  // "Includes string",
  // "Start //This",
  // "Lowercase",
  // "FindIndex i",
  // "Remove 0 10",
  // "End"]);
//   stringManipulator(["*S0ftUni is the B3St Plac3**",
//   "Translate 2 o",
//   "Includes best",
//   "Start the",
//   "Lowercase",
//   "FindIndex p",
//   "Remove 2 7",
//   "End"])