const { expect } = require("chai");
const foodDelivery = require("./foodDelivery");

describe("foodDelivery", function () {
  describe("getCategory", function () {
    it("should return correct message for 'Vegan'", function () {
      expect(foodDelivery.getCategory("Vegan")).to.equal(
        "Dishes that contain no animal products."
      );
    });

    it("should return correct message for 'Vegetarian'", function () {
      expect(foodDelivery.getCategory("Vegetarian")).to.equal(
        "Dishes that contain no meat or fish."
      );
    });

    it("should return correct message for 'Gluten-Free'", function () {
      expect(foodDelivery.getCategory("Gluten-Free")).to.equal(
        "Dishes that contain no gluten."
      );
    });

    it("should return correct message for 'All'", function () {
      expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
    });

    it("should throw an error for invalid category", function () {
      expect(() => foodDelivery.getCategory("InvalidCategory")).to.throw(
        "Invalid Category!"
      );
    });
  });

  describe("addMenuItem", function () {
    it("should add items and return correct message", function () {
      const menuItems = [
        { name: "Salad", price: 4 },
        { name: "Soup", price: 3 },
        { name: "Pasta", price: 6 },
      ];
      const maxPrice = 5;
      expect(foodDelivery.addMenuItem(menuItems, maxPrice)).to.equal(
        "There are 2 available menu items matching your criteria!"
      );
    });

    it("should throw an error for invalid parameters", function () {
      expect(() => foodDelivery.addMenuItem({}, 5)).to.throw("Invalid Information!");
    });

    it("should throw an error if maxPrice is less than 5", function () {
      expect(() => foodDelivery.addMenuItem([{ name: "Salad", price: 4 }], 2)).to.throw(
        "Invalid Information!"
      );
    });

    it("should throw an error if menuItem array is empty", function () {
      expect(() => foodDelivery.addMenuItem([], 5)).to.throw("Invalid Information!");
    });
  });

  describe("calculateOrderCost", function () {
    it("should calculate order cost without discount", function () {
      const shipping = ["standard", "express"];
      const addons = ["sauce", "beverage"];
      const discount = false;
      expect(foodDelivery.calculateOrderCost(shipping, addons, discount)).to.equal(
        "You spend $12.50 for shipping and addons!"
      );
    });

    it("should calculate order cost with discount", function () {
      const shipping = ["express"];
      const addons = ["sauce"];
      const discount = true;
      expect(foodDelivery.calculateOrderCost(shipping, addons, discount)).to.equal(
        "You spend $7.23 for shipping and addons with a 15% discount!"
      );
    });

    it("should throw an error for invalid parameters", function () {
      expect(() => foodDelivery.calculateOrderCost({}, ["sauce"], true)).to.throw(
        "Invalid Information!"
      );
    });
  });
});