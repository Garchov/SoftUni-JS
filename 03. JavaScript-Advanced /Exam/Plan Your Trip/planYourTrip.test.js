import { expect } from "chai";
import planYourTrip from './planYourTrip.js';

describe("planYourTrip", function() {
  
  describe("choosingDestination", function() {
    it("should throw an error if the year is different than 2024", function() {
      expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
    });

    it("should throw an error if the destination is not 'Ski Resort'", function() {
      expect(() => planYourTrip.choosingDestination("Beach Resort", "Winter", 2024)).to.throw("This destination is not what you are looking for.");
    });

    it("should return a great choice message if the season is Winter and destination is 'Ski Resort'", function() {
      const result = planYourTrip.choosingDestination("Ski Resort", "Winter", 2024);
      expect(result).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
    });

    it("should return a suggestion message if the season is not Winter and destination is 'Ski Resort'", function() {
      const result = planYourTrip.choosingDestination("Ski Resort", "Summer", 2024);
      expect(result).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
    });
  });

  describe("exploreOptions", function() {
    it("should throw an error if activities is not an array", function() {
      expect(() => planYourTrip.exploreOptions("not an array", 1)).to.throw("Invalid Information!");
    });

    it("should throw an error if activityIndex is not a number", function() {
      expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], "not a number")).to.throw("Invalid Information!");
    });

    it("should throw an error if activityIndex is out of bounds", function() {
      expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 5)).to.throw("Invalid Information!");
    });

    it("should return a string of activities without the one at the specified index", function() {
      const result = planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1);
      expect(result).to.equal("Skiing, Winter Hiking");
    });
  });

  describe("estimateExpenses", function() {
    it("should throw an error if distanceInKilometers is not a number", function() {
      expect(() => planYourTrip.estimateExpenses("not a number", 5)).to.throw("Invalid Information!");
    });

    it("should throw an error if distanceInKilometers is less than or equal to 0", function() {
      expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw("Invalid Information!");
      expect(() => planYourTrip.estimateExpenses(-10, 5)).to.throw("Invalid Information!");
    });

    it("should throw an error if fuelCostPerLiter is not a number", function() {
      expect(() => planYourTrip.estimateExpenses(100, "not a number")).to.throw("Invalid Information!");
    });

    it("should throw an error if fuelCostPerLiter is less than or equal to 0", function() {
      expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw("Invalid Information!");
      expect(() => planYourTrip.estimateExpenses(100, -5)).to.throw("Invalid Information!");
    });

    it("should return a budget-friendly message if total cost is less than or equal to $500", function() {
      const result = planYourTrip.estimateExpenses(100, 4);
      expect(result).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
    });

    it("should return a plan accordingly message if total cost is greater than $500", function() {
      const result = planYourTrip.estimateExpenses(150, 4);
      expect(result).to.equal("The estimated cost for the trip is $600.00, plan accordingly.");
    });
  });

});
