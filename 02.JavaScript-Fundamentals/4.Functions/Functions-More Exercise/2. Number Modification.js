function numberModification(input) {
  let number = input.toString();
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }

  while (sum / number.length <= 5) {
    number += "9";
    sum += 9;
  }

  console.log(number);
}

numberModification(101); 
numberModification(5835); 
