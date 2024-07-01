function movingTarget(input) {

	let targets = input.shift().split(' ').map(Number)

	for (const line of input) {

		if (line === 'End') {
			console.log(targets.join('|'));
		} else {
			let [command, index, token] = line.split(' ')
			index = Number(index)

			switch (command) {
				case 'Shoot':
					if (index >= 0 && index < targets.length) {
						let power = Number(token);
						targets[index] -= power
						if (targets[index] <= 0) {
							targets.splice(index, 1)
						}
					}
					break;
				case 'Add':
					if (index >= 0 && index < targets.length) {
						let value = Number(token)
						targets.splice(index, 0, value)
					} else {
						console.log('Invalid placement!');
					}
					break;
				case 'Strike':
					let radius = Number(token);
					let indexesBefore = index - radius
					let indexesAfter = index + radius
					if (indexesBefore >= 0 && indexesAfter < targets.length) {
						let indexesToRemove = indexesAfter - indexesBefore + 1
						targets.splice(indexesBefore, indexesToRemove)
					} else {
						console.log('Strike missed!');
					}
					break
			}
		}
	}
}
// movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"])
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"])

/*
function movingTarget(input) {
  let target = input.shift().split(" ").map(Number);
  while (input.length > 0) {
    let [command, index, number] = input.shift().split(" ");
    index = Number(index);
    number = Number(number);
    
      if (command === "Shoot") {
        if (index >= 0 && index < target.length) {
          target[index] -= number;
          if (target[index] <= 0) {
           target.splice(index,1);
            
          }
        }
      }else if (command === "Add") {
          if (index >= 0 && index < target.length) {
            target.splice(index, 0, number);
          } else {
            console.log(`Invalid placement!`);
          }
        
      }else if (command === "Strike") {
          let startIndex = index - number;
          let endIndex = index + number;

          if (startIndex >= 0 && endIndex < target.length) {
            target.splice(startIndex, endIndex - startIndex + 1);
          } else {
            console.log("Strike missed!");
          }
        }
      }
      console.log(target.join("|"));
    }
  

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
movingTarget([
  "1 2 3 4 5",
  "Strike 0 1",
  "End",
]);



*/