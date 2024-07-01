function colorize() {
    //First solution with CSS selector
  //     let rowElements= document.querySelectorAll('tr:nth-of-type(2n)');
  //     rowElements.forEach(function(row){
  //         row.style.backgroundColor = 'teal';
  //     });
  // }

  let rowElements = document.getElementsByTagName("tr");
  let rows = Array.from(rowElements);
  rows.forEach((x, i) => {
    if (i % 2 != 0) {
      x.style.backgroundColor = "teal";
    }
  });
}


// function colorize() {
//   const everRowElements = document.querySelectorAll("table tr:nth-child(2n)");

//   for (const rowElement of everRowElements) {
//     rowElement.style.backgroundColor = "teal";
//   }
// }
