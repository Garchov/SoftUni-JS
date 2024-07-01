// function catFactory(catsData) {
//     class Cat {
//       constructor(name, age) {
//         this.name = name;
//         this.age = age;
//       }
//       meow() {
//         console.log(`${this.name}, age ${this.age} says Meow`);
//       }
//     }
  
//     let cats = [];
  
//     for (let catData of catsData) {
//       let token = catData.split(" ");
//       let catName = token[0];
//       let catAge = token[1];
//       let myCat = new Cat(catName, catAge);
//       cats.push(myCat);
//       myCat.meow();
//     }
//   }
  
//   catFactory(["Mellow 2", "Tom 5"]);
//   catFactory(["Candy 1", "Poppy 3", "Nyx 2"]);

function cats(catsAsString) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let parseCats = [];
  for (let cats of catsAsString) {
    let [cat, age] = cats.split(" ");
    let catsInfo = new Cat(cat, Number(age));

    parseCats.push(catsInfo);
  }
  for (let cat of parseCats) {
    cat.meow();
  }
 
}
cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
