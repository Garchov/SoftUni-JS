/*
function outer() {
  let count = 5; // stay at heap like closure 
  let name = "Peter";

  function func(a, b) {
    count++;

    return count + a + b;
  }
  return func;
}
const inner=outer();//closure create with function at stack
console.log(inner(2,3));//11
console.log(inner(2,3));//12
console.log(inner(2,3));//13

*/

function createCounter() {
  let count = 0;
  return {
    increment,
    decrement,
    print,
  };
  function increment() {
    count++;
    return count;
  }
  function decrement() {
    return --count;
  }
  function print() {
    console.log(count);
  }
}
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.print();
console.log(counter1);
