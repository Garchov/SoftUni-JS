function canPrint(device) {
  device.print = function () {
    console.log(`${this.name} is printing a page`);
  };
}

function canScan(device) {
  device.scan = () => {
    console.log(`${this.name} is scanning a document`);
  };
}

let printer = { name: "Lexmark" };
canPrint(printer);
printer.print();

let scanner = { name: "HP scanner" };
canScan(scanner);
scanner.scan();

let copier = { name: "Brother Copier" };
canPrint(a);
canScan(b);

