function login(input) {
/*  let count = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[0] === input[i].split("").reverse().join("")) {
      console.log(`User ${input[0]} logged in.`);
    } else {
      if (i >= 4) {
        console.log(`User ${input[0]} blocked!`);
      } else {
        console.log("Incorrect password. Try again.");
      }

      count++;
    }
  }
}
*/
let username= input.shift();
let pass='';
for(let i = username.length - 1; i >= 0; i--){
  pass +=username[i];
}
let guess = input.shift();
let countWrong=0;

while(guess !== pass){
countWrong++;

if(countWrong === 4){
  console.log((`User ${username} blocked!`));
  return;
}
console.log("Incorrect password. Try again.")
guess= input.shift();
}
console.log(`User ${username} logged in.`);
}

login(["Acer", "login", "go", "let me in", "recA"]);

 
