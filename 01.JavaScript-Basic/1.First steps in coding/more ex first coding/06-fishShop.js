function fishShop(input) {
    let skumriaPrice = Number(input[0]);
    let tsatsaPrice = Number(input[1]);
    let palmudKilo = Number(input[2]);
    let safridKilo = Number(input[3]);
    let midiKilo = Number(input[4]);
  
    let palmudPrice = skumriaPrice + (skumriaPrice * 0.60);
    let safridPrice = tsatsaPrice + (tsatsaPrice * 0.80);
    let midiPrice = 7.50;
  
    let totalToPay = (palmudPrice * palmudKilo) + (safridPrice * safridKilo) + (midiPrice * midiKilo);
    console.log(totalToPay.toFixed(2));
  }

fishShop(['6.90', '4.20', '1.5', '2.5', '1'])


//skumria -'6.90' cena
/// tzatza -'4.20' cena

///palmud - '1.5' kilo
///safrid -'2.5' kilo
//midi -'1' kilo

// Колко пари ще са му необходими, за да плати сметката си, ако цените на борсата са:
// •	Паламуд – 60% по-скъп от скумрията
// •	Сафрид – 80% по-скъп от цацата
// •	Миди – 7.50 лв. за килограм
// Да се отпечата на конзолата едно число с плаваща запетая:
//  колко пари ще са нужни на Георги, за да си плати сметката. Числото трябва да е форматирано до вторият знак след десетичната запетая (1.2457 -> 1.25).