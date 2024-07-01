function test(input) {
  let movieName = input[0];
  let hallType = input[1];
  let countTicket = input[2];

  let ticketPrice = 0;

  switch (movieName) {
    case "A Star Is Born":
      if (hallType === "normal") {
        ticketPrice += 7.5;
      } else if (hallType === "luxury") {
        ticketPrice += 10.5;
      } else if (hallType === "ultra luxury") {
        ticketPrice += 13.5;
      }
      break;
    case "Bohemian Rhapsody":
      if (hallType === "normal") {
        ticketPrice += 7.35;
      } else if (hallType === "luxury") {
        ticketPrice += 9.45;
      } else if (hallType === "ultra luxury") {
        ticketPrice += 12.75;
      }
      break;
    case "Green Book":
      if (hallType === "normal") {
        ticketPrice += 8.15;
      } else if (hallType === "luxury") {
        ticketPrice += 10.25;
      } else if (hallType === "ultra luxury") {
        ticketPrice += 13.25;
      }
      break;
    case "The Favourite":
      if (hallType === "normal") {
        ticketPrice += 8.75;
      } else if (hallType === "luxury") {
        ticketPrice += 11.55;
      } else if (hallType === "ultra luxury") {
        ticketPrice += 13.95;
      }
      break;
  }
  let totalincomes = ticketPrice * countTicket;

  console.log(`${movieName} -> ${totalincomes.toFixed(2)} lv.`);
}
test(["A Star Is Born", "luxury", "42"]);
