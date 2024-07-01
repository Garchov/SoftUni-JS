function oldBooks(input) {
  let searchedBook = input[0];
  let booksCheked = 0;

  let index = 1;
  let searching = input[index];
  index++;

  while (searching !== "No More Books") {
    let bookTitle = searching;

    if (bookTitle === searchedBook) {
      console.log(`You checked ${booksCheked} books and found it.`);
      break;
    }
    booksCheked++;
    searching = input[index];
    index++;
  }
  if (searching === "No More Books") {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksCheked} books.`);
  }
}
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
