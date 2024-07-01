class BikeRentalService {
  constructor(name, location) {
      this.name = name;
      this.location = location;
      this.availableBikes = [];
  }

  addBikes(bikes) {
      let addedBrands = new Set();
      
      for (const bikeInfo of bikes) {
          let [brand, quantity, price] = bikeInfo.split("-");
          quantity = parseInt(quantity);
          price = parseFloat(price);
          
          let existingBike = this.availableBikes.find(bike => bike.brand === brand);
          
          if (existingBike) {
              existingBike.quantity += quantity;
              if (price > existingBike.price) {
                  existingBike.price = price;
              }
          } else {
              this.availableBikes.push({ brand, quantity, price });
          }
          
          addedBrands.add(brand);
      }
      
      return `Successfully added ${Array.from(addedBrands).join(", ")}`;
  }

  rentBikes(selectedBikes) {
      let totalPrice = 0;
      
      for (const bikeInfo of selectedBikes) {
          let [brand, quantity] = bikeInfo.split("-");
          quantity = parseInt(quantity);
          
          let existingBike = this.availableBikes.find(bike => bike.brand === brand);
          
          if (!existingBike || existingBike.quantity < quantity) {
              return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
          }
      }
      
      for (const bikeInfo of selectedBikes) {
          let [brand, quantity] = bikeInfo.split("-");
          quantity = parseInt(quantity);
          
          let existingBike = this.availableBikes.find(bike => bike.brand === brand);
          totalPrice += existingBike.price * quantity;
          existingBike.quantity -= quantity;
      }
      
      return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
  }

  returnBikes(returnedBikes) {
      for (const bikeInfo of returnedBikes) {
          let [brand, quantity] = bikeInfo.split("-");
          quantity = parseInt(quantity);
          
          let existingBike = this.availableBikes.find(bike => bike.brand === brand);
          
          if (!existingBike) {
              return "Some of the returned bikes are not from our selection.";
          }
      }
      
      for (const bikeInfo of returnedBikes) {
          let [brand, quantity] = bikeInfo.split("-");
          quantity = parseInt(quantity);
          
          let existingBike = this.availableBikes.find(bike => bike.brand === brand);
          existingBike.quantity += quantity;
      }
      
      return "Thank you for returning!";
  }

  revision() {
      let bikesInfo = this.availableBikes
          .sort((a, b) => a.price - b.price)
          .map(bike => `${bike.brand} quantity:${bike.quantity} price:$${bike.price}`);
      
      return `Available bikes:\n${bikesInfo.join("\n")}\nThe name of the bike rental service is ${this.name}, and the location is ${this.location}.`;
  }
}


const rentalService = new BikeRentalService("MyBikes", "CityCenter");
console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());
