function theImitationGame(input) {
  let encryptedMessage = input.shift().split("");
  let index = 0;

  while (input[index] != "Decode") {
    let token = input[index];
    let [command, indx, value] = token.split("|");

    if (command == "Move") {
      for (let index = 0; index < indx; index++) {
        let action = encryptedMessage.shift();
        encryptedMessage.push(action);
      }
    }
    if (command == "Insert") {
      encryptedMessage.splice(indx, 0, value);
    }
    
        if (command == "ChangeAll") {
            for (let i = 0; i < encryptedMessage.length; i++) {
              if (encryptedMessage[i] === indx) {
                encryptedMessage[i] = value;
              }
            }
          }
          index++;
    }
    console.log(`The decrypted message is: ${encryptedMessage.join("")}`);
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
