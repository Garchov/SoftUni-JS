function areaOfFigures(input) {
  let figureName = input[0];
  if (figureName === "square") {
    let a = Number(input[1]);
    let area = a * a;
    console.log(area.toFixed(3));
  } else if (figureName === "rectangle") {
    let a = Number(input[1]);
    let b = Number(input[2]);
    let area = a * b;
    console.log(area.toFixed(3));
  } else if (figureName === "circle") {
    let r = Number(input[1]);
    let area = Math.PI * Math.pow(r, 2);
    console.log(area.toFixed(3));
  } else if (figureName === "triangle") {
    let a = Number(input[1]);
    let b = Number(input[2]);
    let area = (a * b) / 2;
    console.log(area.toFixed(3));
  }
}

areaOfFigures(["square", "5"]);

areaOfFigures(["rectangle", "7", "2.5"]);

areaOfFigures(["circle", "6"]);

areaOfFigures(["triangle", "4.5", "20"]);

// Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle).
//Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му | (side * side)= areaFigure
//Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му (широчина x дължина )=figure
//Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга = Пи * r**2 или r.r = figure
//Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея = (едната страна x другата стана /2) = figure
