import { assert } from 'chai';
import  returnFive  from '../app.js';
 
describe('Myfunction', () => {
 
    //!Check if returnFive returns the string 'Stefan'
    it('should return Stefan', () => {
        assert.equal(returnFive('Stefan'), 'Stefan');
    });
 //!Check if returnFive returns a string type
    it('should return a string', () => {
        assert.typeOf(returnFive('5'), 'string');
    });
 //!Check if the returned string starts with an uppercase letter:
    it('should have first letter uppercase', () => {
        assert.match(returnFive('Test'), /^[A-Z]/);
    });
 //!Check if returnFive accepts an array as a parameter:
    it('should accept an array as parameter', () => {
        assert.isArray(returnFive([]), 'Parameter should be an array');
    });
 //!Check if returnFive returns an object:
    it('should return an object', () => {
        assert.isObject(returnFive({}), 'Return value should be an object');
       });
 //!Check if returnFive returns an array with a sum of elements equal to 57:
    it('should return an array with sum of elements equal to 57', () => {
           const result = returnFive([40,3,5,2,1,6]);
           assert.isArray(result, 'Return value should be an array');
           assert.lengthOf(result, 6, 'Array should have 6 elements');
           const sum = result.reduce((acc, val) => acc + val, 0);
           assert.equal(sum, 57, 'Sum of array elements should be 57');
       });
 //!Check if snowman creates a list item for each property in the object:
    describe('snowman', () => {
        it('should create a list item for each property in the object', () => {
            const obj = { name: 'Frosty', height: '5ft', color: 'white' };
            const divSnowBall = document.createElement('div');
            divSnowBall.classList.add('snowman-preview');
            document.body.appendChild(divSnowBall);
 
            snowman(obj);
 
            const listItems = divSnowBall.querySelectorAll('li');
            assert.equal(listItems.length, 3);
            assert.equal(listItems[0].textContent, 'name: Frosty');
            assert.equal(listItems[1].textContent, 'height: 5ft');
            assert.equal(listItems[2].textContent, 'color: white');
 
            document.body.removeChild(divSnowBall);
        });
 //! Check if snowman handles an empty object:
        it('should handle an empty object', () => {
            const obj = {};
            const divSnowBall = document.createElement('div');
            divSnowBall.classList.add('snowman-preview');
            document.body.appendChild(divSnowBall);
 
            snowman(obj);
 
            const listItems = divSnowBall.querySelectorAll('li');
            assert.equal(listItems.length, 0);
 
            document.body.removeChild(divSnowBall);
        });
 //!Check if snowman handles non-object input:
        it('should handle non-object input', () => {
            const divSnowBall = document.createElement('div');
            divSnowBall.classList.add('snowman-preview');
            document.body.appendChild(divSnowBall);
 
            snowman(null);
 
            const listItems = divSnowBall.querySelectorAll('li');
            assert.equal(listItems.length, 0);
 
            document.body.removeChild(divSnowBall);
        });
    });
}); 