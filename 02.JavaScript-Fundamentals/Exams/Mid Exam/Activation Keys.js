function activationKeys(data) {
  let rawActivationKeys = data.shift();
  let activationKeys = {};

  let commandParser = {




  }

  data.forEach((line) => {
    if (line !== "Generate") {
        let [command, ...tokens] = line.split(">>>");
activationKeys = commandParser[command](activationKeys,...tokens);
    }
});
console.log(commandParser);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
