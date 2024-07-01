
function travelTime(input) {

   let destination = generateDestination(input);

   function generateDestination(arr) {

       let obj = {}

       arr.forEach(line => {
           let tokens = line.split(" > ");
           let [country, city, price] = tokens;

           if (!obj.hasOwnProperty(country)) {
               obj[country] = {}
           }

           if (!obj[country].hasOwnProperty(city)) {
               obj[country][city] = price;
           }

           let oldPrice = obj[country][city];

           if (oldPrice > price) {
               obj[country][city] = price;
           }
       });

       return obj

   }

   let sorted = Object.keys(destination).sort((a, b) => a.localeCompare(b));

   for (const country of sorted) {
       console.log(`${country} -> ${cityPrice(destination[country])}`);
   }

   function cityPrice(obj) {
       let result = [];
       for (const key of Object.keys(obj)) {
           result.push(`${key} -> ${obj[key]}`);
       }
       return result.join(' ');
   }
}

travelTime([
   "Bulgaria > Sofia > 500",
   "Bulgaria > Sopot > 800",
   "France > Paris > 2000",
   "Albania > Tirana > 1000",
   "Bulgaria > Sofia > 200"
])
travelTime([
   'Bulgaria > Sofia > 25000',
   'Bulgaria > Sofia > 25000',
   'Kalimdor > Orgrimar > 25000',
   'Albania > Tirana > 25000',
   'Bulgaria > Varna > 25010',
   'Bulgaria > Lukovit > 10'
]
)
travelTime([
   'Bulgaria > Sofia > 25000',
   'aaa > Sofia > 1',
   'aa > Orgrimar > 0',
   'Albania > Tirana > 25000',
   'zz > Aarna > 25010',
   'Bulgaria > Lukovit > 10'
])