import workforceManagement from "./workforceManagement.js";
import { expect } from "chai";

describe("workforceManagement", () => {
  describe("recruitStaff", function () {
    it("throws an error if role is not Developer", function () {
      expect(() => workforceManagement.recruitStaff("Dimitar", "Manager", 3)).to.throw(
        Error,
        "We are not currently hiring for this role."
      );
    });
    it("requires experience to be greater than or equal to 4", function () {
      const result = workforceManagement.recruitStaff("Dimitar", "Developer", 3);
      expect(result).to.equal("Dimitar is not suitable for this role.");
    });
    it("successfully recruits a Developer with sufficient experience", function () {
      const result = workforceManagement.recruitStaff("Dimitar", "Developer", 5);
      expect(result).to.equal("Dimitar has been successfully recruited for the role of Developer.");
    });
  });

  describe("computeWages", function () {
    it("throws an error if hoursWorked is not a number", function () {
      expect(() => workforceManagement.computeWages("not a number")).to.throw(
        Error,
        "Invalid hours"
      );
    });
    it("throws an error if hoursWorked is a negative number", function () {
      expect(() => workforceManagement.computeWages(-5)).to.throw(
        Error,
        "Invalid hours"
      );
    });
    it("calculates wages correctly for 0 hours", function () {
      const result = workforceManagement.computeWages(0);
      expect(result).to.equal(0);
    });
    it("calculates wages correctly for 50 hours", function () {
      const result = workforceManagement.computeWages(50);
      expect(result).to.equal(50 * 18);
    });
    it("calculates wages correctly for 160 hours", function () {
      const result = workforceManagement.computeWages(160);
      expect(result).to.equal(160 * 18);
    });
    it("calculates wages correctly for 161 hours (with bonus)", function () {
      const result = workforceManagement.computeWages(161);
      expect(result).to.equal(161 * 18 + 1500);
    });
    it("calculates wages correctly for 200 hours (with bonus)", function () {
      const result = workforceManagement.computeWages(200);
      expect(result).to.equal(200 * 18 + 1500);
    });
  });

  describe("dismissEmployee", function () {
    it("throws an error if workforce is not an array", function () {
      expect(() => workforceManagement.dismissEmployee("not an array", 1)).to.throw(
        Error,
        "Invalid input"
      );
    });
    it("throws an error if employeeIndex is not a number", function () {
      expect(() => workforceManagement.dismissEmployee([1, 2, 3], "something")).to.throw(
        Error,
        "Invalid input"
      );
    });
    it("throws an error if employeeIndex is out of range", function () {
      expect(() => workforceManagement.dismissEmployee([1, 2, 3], 3)).to.throw(
        Error,
        "Invalid input"
      );
    });
    it("removes the employee at the specified index", function () {
      const result = workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 1);
      expect(result).to.equal("Petar, George");
    });
  });
});
