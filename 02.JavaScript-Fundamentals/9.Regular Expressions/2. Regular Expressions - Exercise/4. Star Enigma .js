function starEnigma(data) {
  let messagesCount = Number(data.shift());
  const regex = /@([A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!([AD])![^@\-!:>]*->\d+/;
  const attacked = [];
  const destroyed = [];
  for (let index = 0; index < messagesCount; index++) {
    const encryptedMessage = data[index];
    const countChar = encryptedMessage
      .toLowerCase()
      .split("")
      .filter(
        (char) => char === "s" || char === "t" || char === "a" || char === "r"
      ).length;

    const decryptedMessage = encryptedMessage
      .split("")
      .map((c) => String.fromCharCode(c.charCodeAt(0) - countChar))
      .join("");

    let regexMatch = decryptedMessage.match(regex);

    if (regexMatch) {
      if (regexMatch[2] === "A") {
        attacked.push(regexMatch[1]);
      } else if (regexMatch[2] === "D") {
        destroyed.push(regexMatch[1]);
      }
    }
  }
  console.log(`Attacked planets: ${attacked.length}`);
  attacked.sort((a, b) => a.localeCompare(b)).forEach((p) => console.log(`-> ${p}`));
  console.log(`Destroyed planets: ${destroyed.length}`);
  destroyed.sort((a, b) => a.localeCompare(b)).forEach((p) => console.log(`-> ${p}`));
}
starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);

