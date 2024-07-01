const { expect } = require('chai');
const lookupChar = require('./03.CharLookup');

describe('lookupChar', function() {
    it('should return undefined if the first parameter is not a string', function() {
        expect(lookupChar(123, 0)).to.be.undefined;
        expect(lookupChar({}, 0)).to.be.undefined;
        expect(lookupChar([], 0)).to.be.undefined;
        expect(lookupChar(undefined, 0)).to.be.undefined;
        expect(lookupChar(null, 0)).to.be.undefined;
    });

    it('should return undefined if the second parameter is not an integer', function() {
        expect(lookupChar('hello', '0')).to.be.undefined;
        expect(lookupChar('hello', 1.2)).to.be.undefined;
        expect(lookupChar('hello', {})).to.be.undefined;
        expect(lookupChar('hello', [])).to.be.undefined;
        expect(lookupChar('hello', undefined)).to.be.undefined;
        expect(lookupChar('hello', null)).to.be.undefined;
    });

    it('should return "Incorrect index" if the index is out of bounds', function() {
        expect(lookupChar('hello', -1)).to.equal('Incorrect index');
        expect(lookupChar('hello', 5)).to.equal('Incorrect index');
        expect(lookupChar('hello', 6)).to.equal('Incorrect index');
    });

    it('should return the correct character when inputs are valid', function() {
        expect(lookupChar('hello', 0)).to.equal('h');
        expect(lookupChar('hello', 1)).to.equal('e');
        expect(lookupChar('hello', 2)).to.equal('l');
        expect(lookupChar('hello', 3)).to.equal('l');
        expect(lookupChar('hello', 4)).to.equal('o');
    });
});