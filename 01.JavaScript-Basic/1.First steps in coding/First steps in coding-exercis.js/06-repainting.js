function repainting(input) {

    let nylonQty = Number(input[0]);
    let paintQty = Number(input[1]);
    let thinnerQty = Number(input[2]);
    let workHours = Number(input[3]);

   
    let totalNylonQty = nylonQty + 2;
    let nylonPrice = totalNylonQty * 1.50;

    let extraPaintQty = 0.1 * paintQty;
    let totalPaintQty = PaintQty + extraPaintQty;
    let paintPrice = totalPaintQty * 14.50;

    let thinnerPrice = thinnerQty * 5;

    let materialsPrice = nylonPrice + paintPrice + thinnerPrice + 0.40;
    let workesPayPerHour = 0.3 * materialsPrice;
    let totalWorkersPay = workHours * workersPayPerHour;

console.log(materialsPrice + totalWorkersPay);



}
repainting(["5", "10", "10", "1"])