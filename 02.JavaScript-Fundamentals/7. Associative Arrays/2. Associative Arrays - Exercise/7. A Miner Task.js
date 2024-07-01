// function minerTask(input) {
//   let resourcesList = {};
//   for (let index = 0; index < input.length; index += 2) {
//     let resource = input[index];
//     let quantity = Number(input[index + 1]);

//     if (resource in resourcesList) {
//       resourcesList[resource] += quantity;
//     } else {
//       resourcesList[resource] = quantity;
//     }
//   }
//   for (const key in resourcesList) {
//     console.log(`${key} -> ${resourcesList[key]}`);
//   }
// }
// minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
// minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);

function minerTask(input) {
      let resourcesList = {};
      for (let index = 0; index < input.length; index += 2) {
        let resource = input[index];
        let quantity = Number(input[index + 1]);
    
        if (resource in resourcesList) {
          resourcesList[resource] += quantity;
        } else {
          resourcesList[resource] = quantity;
        }
      }
      let entries = Object.entries(resourcesList); // създаваме в масив от масив [['gold',155], ['silver'.10] и т.н]
      for (const [resource,qty] of entries) {
        console.log(`${resource} -> ${qty}`);
      }
    }
    minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
    minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);