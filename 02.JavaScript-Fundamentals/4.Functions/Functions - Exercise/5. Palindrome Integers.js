function palindromeInts(arr) {
  for (let num of arr) {
    let isPalindrome = checkIfPalindrome(num); //
    console.log(isPalindrome);
  }
  function checkIfPalindrome(number) {
    let numAsStr = number.toString();
    let reversedStr = numAsStr.split("").reverse().join("");
   

    if (numAsStr === reversedStr) {
      return true;
    } else {
      return false;
    }
  }
 }
palindromeInts([123, 323, 421, 121]);
