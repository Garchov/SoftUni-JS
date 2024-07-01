class RefurbishedSmartphones {
  availableSmartPhones = [];
  soldSmartPhones = [];

  constructor(retailer, revenue = 0) {
    this.retailer = retailer;
    this.revenue = revenue;
  }
  addSmartphone(model, storage, price, condition) {
    //check for falsy value(empty string, null, undefined)
    if (!model) {
      throw new Error("Invalid smartPhone!");
    }
    if (!Number.isInteger(storage) || storage < 0) {
      throw new Error("Invalid smartPhone!");
    }
    if (price < 0) {
      throw new Error("Invalid smartPhone!");
    }
    if (!condition) {
      throw new Error("Invalid smartPhone!");
    }
    //Create smartphone object
    let smartphone = {
      model,
      storage,
      price,
      condition,
    };
    //Add to availableSmartPhones
    this.availableSmartPhones.push(smartphone);

    //Return message
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(
      2
    )}$"`;
  }
  sellSmartphone(model, desiredStorage) {
    //find smartPhone by model
    const smartPhone = this.availableSmartPhones.find(
      (phone) => phone.model === model
    );

    // if not found throw error
    if (!smartPhone) {
      throw new Error(`{model} was not found!`);
    }

    //if storage is more or equal  then desireStorage
    let currentPrice = smartPhone.price;
    let insufficientStorage = desiredStorage - smartPhone.storage;

    // check storage if more or equal that desireStorage with less then or equal to 128 gb(-10% price)
    if (insufficientStorage > 0 && insufficientStorage <= 128) {
      currentPrice *= 0.9;
    }

    // check if storage is less than desireStorage with more then  128 gb(-20% price)
    if (insufficientStorage > 0 && insufficientStorage > 128) {
      currentPrice = currentPrice *= 0.8;
    }

    //remove smartPhone from available
    this.availableSmartPhones = this.availableSmartPhones.filter(
      (smartPhone) => smartPhone.model !== model
    );

    this.soldSmartPhones.push({
      model: smartPhone.model,
      storage: smartPhone.storage,
      price: currentPrice,
    });
    //add sold price ro revenue
    this.revenue += currentPrice;

    //return message
    return `${model} was sold for ${currentPrice.toFixed(2)}$`;
  }
  upgradePhones() {
    let messages = ["Upgraded smartphones:"];

    //if no available smartphones throw error
    if (this.availableSmartPhones.length === 0) {
      throw new Error("There are no available smartphones!");
    }

    //upgrade smartphones by double the storage and add message to messages array
    this.availableSmartPhones.forEach((phone) => {
      //double the storage
      phone.storage * 2;

      //add message
      const message = `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price}$`;
      messages.push(message);
    });
    return messages.join("\n");
  }
  salesJournal(criteria) {
    const criterias = ["storage", "model"];

    if (!criterias.includes(criteria)) {
      throw new Error("Invalid criteria!");
    }
    const sorters = {
      storage: (a, b) => b.storage - a.storage,
      model: (a, b) => a.model.localeCompare(b.model),
    };
    let messages = [
      `${this.retailer} has a total income of ${this.revenue}$``${this.soldSmartPhones.length} smartphones sold:`,
    ];
    this.soldSmartPhones.sort(sorters[criteria]).forEach((phone) => {
      messages.push(
        `${phone.model} / ${phone.storage} GB / ${phone.price.toFixed(2)}$`
      );
    });
  }
}

let retailer = new RefurbishedSmartphones("SecondLife Devices");
console.log(retailer.addSmartphone("Samsung S20 Ultra", 256, 1000, "good"));
console.log(retailer.addSmartphone("Iphone 12 mini", 128, 800, "perfect"));
console.log(retailer.addSmartphone("", 512, 1900, "good"));
