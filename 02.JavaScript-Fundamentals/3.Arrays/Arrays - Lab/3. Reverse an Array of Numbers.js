function revArrNumber(n, inputArr) {
/*     let arr=[];
    for(let i = 0; i<n; i++){
      arr.push(inputArr[i]);
    }
    arr.reverse();
        console.log(arr.join(' '));
    } */
// ............................///
/*     let newArray = [];

    for(let i = 0; i <n ; i++){
      let currentNumber = inputArr[i];
      newArray.unshift(currentNumber);

    }
    console.log(newArray.join(' '));
  } */
  //.................//

  let newArray = inputArr.slice(0,n);
  newArray.reverse();
  console.log(newArray.join(' '));
}
    revArrNumber(3, [10, 20, 30, 40, 50])
    revArrNumber(4, [-1, 20, 99, 5])
    revArrNumber(2, [66, 43, 75, 89, 47])