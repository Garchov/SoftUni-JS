//? DOM - useful  properties & methods

//? document
console.log(document); // Показва целия документ
console.log(document.URL); // URL на текущия документ
console.log(document.title); // Заглавие на документа
console.log(document.all); // Всички елементи в документа
console.log(document.all[10]); // Десетият елемент от всички елементи
console.log(document.forms); // Всички форми в документа
console.log(document.links); // Всички връзки в документа
console.log(document.images); // Всички изображения в документа
console.log(document.scripts); // Всички скриптове в документа

//? window
console.log(window); // Показва обекта window
console.log(window.innerHeight); // Височина на вътрешната част на прозореца
console.log(window.innerWidth); // Ширина на вътрешната част на прозореца
console.log(window.location); // Показва обекта location
console.log(window.history); // Показва обекта history
console.log(window.screen); // Показва обекта screen
console.log(window.navigator); // Показва обекта navigator

//? location
console.log(location); // Показва обекта location
console.log(location.href); // Пълният URL
console.log(location.hash); // Част от URL след #
console.log(location.host); // Домакин и порт на URL
console.log(location.hostname); // Домакин на URL
console.log(location.pathname); // Път на URL
console.log(location.protocol); // Протокол на URL (http:, https:)
console.log(location.search); // Параметри на URL след ?

//? historyconsole.log(history);                // Показва обекта history
console.log(history.back()); // Връща една стъпка назад в историята
console.log(history.forward()); // Преминава една стъпка напред в историята
console.log(history.go(-1)); // Връща се назад с определен брой стъпки
console.log(history.length); // Броят на записите в историята
console.log(history.state); // Показва текущото състояние на историята

//? navigator
console.log(navigator); // Показва обекта navigator
console.log(navigator.appCodeName); // Кодово име на приложението (браузъра)
console.log(navigator.appName); // Име на приложението (браузъра)
console.log(navigator.cookieEnabled); // Дали бисквитките са активирани
console.log(navigator.language); // Език на браузъра
console.log(navigator.platform); // Платформа (операционна система)
console.log(navigator.userAgent); // Информация за потребителя (браузъра)

//? screenconsole.log(screen);                 // Показва обекта screen
console.log(screen.availHeight); // Височина на наличния екран
console.log(screen.availWidth); // Ширина на наличния екран
console.log(screen.colorDepth); // Брой битове за показване на цветове
console.log(screen.height); // Пълна височина на екрана
console.log(screen.width); // Пълна ширина на екрана

//? Events

//? Event Listeners

document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});
//? Event Object
document.getElementById("myButton").addEventListener("click", function (event) {
  console.log(event.type); // Тип на събитието (напр. click)
  console.log(event.target); // Елемент, върху който е настъпило събитието
});

//? Event Types

document.getElementById("myButton").addEventListener("mouseover", function () {
  console.log("Mouse over event!");
});

document.getElementById("myButton").addEventListener("mouseout", function () {
  console.log("Mouse out event!");
});

document.getElementById("myButton").addEventListener("keydown", function () {
  console.log("Key down event!");
});

//? Event Bubbling
document.getElementById("child").addEventListener("click", function () {
  console.log("Child clicked!");
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked!");
});

//? Event Propagation

document.getElementById("child").addEventListener("click", function (event) {
  event.stopPropagation(); // Спира разпространението на събитието
  console.log("Child clicked!");
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked!");
});
//? Event Capturing
document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent clicked!");
  },
  true
); // true за capturing

document.getElementById("child").addEventListener(
  "click",
  function () {
    console.log("Child clicked!");
  },
  true
); // true за capturing

//? Event Delegation

document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target && event.target.matches("button")) {
    console.log("Button inside parent clicked!");
  }
});
//? Event Loop
console.log("Start");

setTimeout(function () {
  console.log("Timeout callback");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timeout callback
