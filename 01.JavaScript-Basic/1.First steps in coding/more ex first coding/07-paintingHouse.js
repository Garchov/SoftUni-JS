function paintingHouse(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    let greenPaintLiter = 3.4
    let redPaintLiter = 4.3
    let sideWall = x * y;
    let windowArea = 1.5 * 1.5;
    let totalAreaSideWall = 2 * sideWall - 2 * windowArea;
    backWall = x * x;
    enter = 1.2 * 2;
    totalBackAndFront = 2 * backWall - enter;
    totalArea = totalAreaSideWall + totalBackAndFront;
    greenPaint = totalArea / greenPaintLiter;

    twoRoofRectangle = 2 * (x * y);
    twoTrinagle = 2 * (x * h / 2);
    totalArea = twoRoofRectangle + twoTrinagle;
    redPaint = totalArea / redPaintLiter


    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2))


}
paintingHouse(['6', '10', '5.2']);



// 1.	x – височината на къщата – реално число в интервала [2...100]
// 2.	y – дължината на страничната стена – реално число в интервала [2...100]
// 3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]

// •	Литрите зелена боя
// •	Литритe червена боя

