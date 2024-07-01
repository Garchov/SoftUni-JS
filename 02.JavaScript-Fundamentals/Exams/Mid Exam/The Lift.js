// function theLift(input) {
//   let queue = Number(input[0]);
//   let lift = input[1].split(" ").map(Number);
//   let peopleToAddFromQueue = 0;

//   for (let i = 0; i < lift.length; i++) {
//     let wagon = lift[i];

//     if (wagon < 4) {
//       let freeSeats = 4 - wagon;

//       freeSeats > queue
//         ? (peopleToAddFromQueue = queue)
//         : (peopleToAddFromQueue = queue - (queue - freeSeats));

//       lift[i] = wagon + peopleToAddFromQueue;
//       queue -= peopleToAddFromQueue;
//     }

//     if (queue === 0) {
//       break;
//     }
//   }

//   let peopleInLift = lift.reduce((a, b) => a + b, 0);
//   let liftCapacity = lift.length * 4;

//   if (peopleInLift < liftCapacity && queue === 0) {
//     console.log(`The lift has empty spots!\n${lift.join(" ")}`);
//   } else if (peopleInLift === liftCapacity && queue > 0) {
//     console.log(
//       `There isn't enough space! ${queue} people in a queue!\n${lift.join(" ")}`
//     );
//   } else if (peopleInLift === liftCapacity && queue === 0) {
//     console.log(lift.join(" "));
//   }
// }
// theLift(["15", "0 0 0 0 0"]);
// theLift(["20", "0 2 0"])
// theLift(["12", "0 0 0"])


function theLift(array) {
	let peopleInQueue = Number(array[0]);
	let emptyWagons = array[1].split(" ").map(Number);
	let maxPeople = 4;
	let peopleToAdd = 0;
	let result = "";
  
	for (let index = 0; index < emptyWagons.length; index++) {
	  let wagon = emptyWagons[index];
	  if (wagon < maxPeople) {
		let freeSeats = maxPeople - wagon;
		peopleToAdd = Math.min(peopleInQueue, freeSeats);
		emptyWagons[index] += peopleToAdd;
		peopleInQueue -= peopleToAdd;
  
		if (peopleInQueue === 0) break; 
	  }
	}
  
	if (peopleInQueue === 0 && emptyWagons.some((seats) => seats < maxPeople)) {
	  result = `The lift has empty spots!\n${emptyWagons.join(" ")}`;
	} else if (peopleInQueue > 0) {
	  result = `There isn't enough space! ${peopleInQueue} people in a queue!\n${emptyWagons.join(
		" "
	  )}`;
	} else {
	  result = emptyWagons.join(" ");
	}
	return result;
  }
//   console.log(theLift(["15", "0 0 0 0 0"]));
  console.log(theLift(["20", "0 2 0"]));
  