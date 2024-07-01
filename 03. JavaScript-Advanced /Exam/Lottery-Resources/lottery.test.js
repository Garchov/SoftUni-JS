import { assert } from "chai";
import { lottery } from "./lottery.js";
import { describe } from "mocha";


describe("Tests for Lottery object", function() {
    describe("Tests for buyLotteryTicket", function() {
        it("should throw error if 'buy' is false", function() {
            expect(() => lottery.buyLotteryTicket(10, 1, false)).to.throw("Unable to buy lottery ticket!");
        });

        it("should throw error for invalid ticketPrice or ticketCount", function() {
            expect(() => lottery.buyLotteryTicket(-1, 1, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(10, 0, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket('10', 1, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(10, '1', true)).to.throw("Invalid input!");
        });

        it("should return success message for valid inputs", function() {
            const result = lottery.buyLotteryTicket(10, 2, true);
            expect(result).to.equal("You bought 2 tickets for 20$.");
        });
    });

    describe("Tests for checkTicket", function() {
        it("should throw error for invalid ticketNumbers or luckyNumbers", function() {
            expect(() => lottery.checkTicket("invalid", [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], "invalid")).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3], [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3])).to.throw("Invalid input!");
        });

        it("should return appropriate message for winning numbers", function() {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal("You win the JACKPOT!!!");
        });

        it("should return nothing if less than 3 winning numbers", function() {
            expect(lottery.checkTicket([1, 2, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6])).to.be.undefined;
        });
    });

    describe("Tests for secondChance", function() {
        it("should throw error for invalid inputs", function() {
            expect(() => lottery.secondChance("invalid", [1, 2, 3])).to.throw("Invalid input!");
            expect(() => lottery.secondChance(1, "invalid")).to.throw("Invalid input!");
        });

        it("should return appropriate message for second chance win", function() {
            expect(lottery.secondChance(1, [1, 2, 3])).to.equal("You win our second chance prize!");
            expect(lottery.secondChance(4, [1, 2, 3])).to.equal("Sorry, your ticket didn't win!");
        });
    });
});


