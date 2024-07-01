function printDeckOfCards(cards) {
   
    function createCard (deckOfCards){
       // Use the solution from the previous task 

       let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
       let validSuits = ["S", "H", "D", "C"];
       
       if(!validFaces.includes(face)) {
       throw new Error("Invalid card face " + face);
       }
       if(!validSuits.includes(suit)) {
       throw new Error("Invalid card suit " + suit);
       }
       let card={
           face:face,
           suit:suit,
           toString(){
               let chartCard ={
                   'S': "\u2660",
                   'H': "\u2665",
                   'D': "\u2666",
                   'C': "\u2663"
               };
               return card.face + chartCard[card.suit];
               }
           }
           card.toString();
           console.log(card.toString());
           return card;
       }
    }

  printDeckOfCards(['AS', '10D', 'KH', '2C']);
  printDeckOfCards(['5S', '3D', 'QD', '1C']);
  