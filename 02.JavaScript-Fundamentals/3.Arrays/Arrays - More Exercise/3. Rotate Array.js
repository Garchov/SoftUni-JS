function rotateArray(arr) {
  /*  let rotationNumber = Number(arr[arr.length - 1]); // Преобразуваме последния елемент към число
    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let newIndex = (i + rotationNumber) % (arr.length - 1);
        result[newIndex] = arr[i];
    }

    console.log(result.join(' ')); */

  let rotationNumber = Number(arr[arr.length - 1]); // Преобразуваме последния елемент към число
  arr.pop(); // Премахваме последния елемент, тъй като той е броят на завъртанията
  //rotationNumber %= arr.length; // Ако броят на завъртанията е по-голям от дължината на масива, правим модулно деление

  for (let i = 0; i < rotationNumber; i++) {
    let lastElement = arr.pop(); // Вземаме последния елемент
    arr.unshift(lastElement); // Вмъкваме го в началото на масива
  }

  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4", "2"]); // Изход: 3 4 1 2
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]); // Изход: Orange Coconut Apple Banana
