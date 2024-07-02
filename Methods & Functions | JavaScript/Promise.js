//! Understanding Promises in JavaScript

//* Create a new Promise
const promise = new Promise((resolve, reject) => {
    resolve(); // Immediately resolve the promise
});

//* Chain multiple .then() methods to handle the resolved value
promise
    .then(() => {
        console.log('first promise'); //? Logs after the promise is resolved
    })
    .then(() => {
        console.log('second promise'); //? Logs after the first .then() is executed
    })
    .then(() => {
        console.log('third promise'); //? Logs after the second .then() is executed
    })
    .catch((err) => {
        console.log(err); //? Handles any errors that occur in the promise chain
    })
    .finally(() => {
        console.log('Finally'); //? Executes regardless of the promise being resolved or rejected
    });

//! Explanation:
//* - The new Promise constructor takes a function with resolve and reject parameters.
//* - The .then() methods are chained to handle the resolved state of the promise.
//* - The .catch() method is used to handle any errors that occur during the promise execution.
//* - The .finally() method is executed after the promise has settled (either resolved or rejected).