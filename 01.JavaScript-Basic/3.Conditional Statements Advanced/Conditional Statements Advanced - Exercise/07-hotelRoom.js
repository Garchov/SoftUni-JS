function hotelRoom(input) {
  let month = input[0];
  let nightCount = Number(input[1]);
  let Apartment = 0;
  let Studio = 0;

  switch (month) {
    case "May":
    case "October":
      Apartment = 65;
      Studio = 50;
      if (nightCount > 14) {
        Apartment *= 0.9;
        Studio *= 0.7;
      } else if (nightCount > 7) {
        Studio *= 0.95;
      }
      break;

    case "June":
    case "September":
      Apartment = 68.7;
      Studio = 75.2;
      if (nightCount > 14) {
        Apartment *= 0.9;
        Studio *= 0.8;
      }
      break;

    case "July":
    case "August":
      Studio = 76;
      Apartment = 77;
      if (nightCount > 14) {
        Apartment *= 0.9;
      }
      break;

    default:
      break;
  }

  let totalPriceApartment = nightCount * Apartment;
  let totalPriceStudio = nightCount * Studio;

  console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);

/*
•	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
•	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
•	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
•	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление
Получават се 2 аргумента:
•	 месецът – May, June, July, August, September или October
•	броят на нощувките – цяло число в интервала [0 … 200]
Да се отпечатат на конзолата 2 реда:
•	На първия ред: “Apartment: {цена за целият престой} lv.”
•	На втория ред: “Studio: {цена за целият престой} lv.”
Цената за целия престой форматирана с точност до два знака след десетичната запетая.

*/
