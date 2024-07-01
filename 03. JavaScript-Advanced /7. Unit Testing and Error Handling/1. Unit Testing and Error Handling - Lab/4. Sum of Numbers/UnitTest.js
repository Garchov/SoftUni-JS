import{ expect } from "chai";
import{sum} from './solution.js';

describe('sum',function(){
     it('works with number array ',()=>{
        const arr = [1,1,1];
        
        expect(sum(arr)).to.equal(3);
     });
    });
    //happy path -> valid data , general case
    //error cases
    //common edge cases  