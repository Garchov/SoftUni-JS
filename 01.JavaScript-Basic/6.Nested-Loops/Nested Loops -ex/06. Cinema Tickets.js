function cinemaTickets(input) {
  let studentTickets = 0;
  let standardTickets = 0;
  let kidsTickets = 0;

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Finish") {
    let movieTitle = command;

    let totalSeats = Number(input[index]);
    index++;

    let seatsTaken = 0;

    let command1 = input[index];
    index++;

    while (command1 !== "End") {
      let ticketType = command1;

      if (ticketType === "student") {
        studentTickets++;
      } else if (ticketType === "standard") {
        standardTickets++;
      } else if (ticketType === "kid") {
        // corrected the ticketType "kids" to "kid"
        kidsTickets++;
      }

      seatsTaken++;

      if (seatsTaken === totalSeats) {
        break;
      }

      command1 = input[index]; // corrected from command to command1
      index++;
    }

    let percentFull = (seatsTaken / totalSeats) * 100;
    console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

    if (command === "Finish") {
      // added check for the end of the main while loop
      break;
    }

    command = input[index];
    index++;
  }

  let totalTickets = studentTickets + standardTickets + kidsTickets;
  console.log(`Total tickets: ${totalTickets}`);

  let studentTicketsPercent = (studentTickets / totalTickets) * 100;
  let standardTicketsPercent = (standardTickets / totalTickets) * 100;
  let kidsTicketsPercent = (kidsTickets / totalTickets) * 100;

  console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
