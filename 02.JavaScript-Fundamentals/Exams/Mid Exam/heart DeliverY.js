/*  function heartDelivery(params) {

	let neighborhood = params.shift().split('@').map(Number)
	let index = 0;

	for (const line of params) {

		if (line === 'Love!') {
			break
		}

		let length = Number(line.split(' ')[1])
		index += length

		if (index > neighborhood.length - 1) {
			index = 0
		}

		neighborhood[index] -= 2

		if (neighborhood[index] === 0) {
			console.log(`Place ${index} has Valentine's day.`);
		} else if (neighborhood[index] < 0) {
			neighborhood[index] = 0;
			console.log(`Place ${index} already had Valentine's day.`);
		}
	}

	console.log(`Cupid's last position was ${index}.`);

	if (neighborhood.reduce((a, b) => a + b, 0) === 0) {
		console.log('Mission was successful.')
	} else {
		let leftHouses = neighborhood.filter(x => {
			if (x > 0) {
				return x
			}
		}).length
		console.log(`Cupid has failed ${leftHouses} places.`);
	}
}
heartDelivery(["10@10@10@2",
	"Jump 1",
	"Jump 2",
	"Love!"])
heartDelivery(["2@4@2",
	"Jump 2",
	"Jump 2",
	"Jump 8",
	"Jump 3",
	"Jump 1",
	"Love!"])  */

function heartDelivery(input) {
  let firstLine = input.shift().split("@");

  let nextLine = input.shift();
  let total = 0;

  while (nextLine !==	  "Love!") {
    let result = nextLine.split(" ");
    total += Number(result[1]);

    if (total > firstLine.length - 1) {
      total = 0;
    }
    if (firstLine[total] === 0) {
      console.log(`Place ${total} already had Valentine's day.`);
    } else {
      firstLine[total] = firstLine[total] - 2;
      if (nextLine[total] === 0) {
        console.log(`Place ${total} has Valentine's day.`);
      }
    }
    nextLine = input.shift();
  }
  console.log(`Cupid's last position was ${total}.`);

  let resultArray = [];
  let flagResult = true;

  for (let element of firstLine) {
    if (element !== 0) {
      flagResult = false;
      resultArray.push(element);
    }
  }
  if (flagResult) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${resultArray.length}places.`);
  }
}

heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
