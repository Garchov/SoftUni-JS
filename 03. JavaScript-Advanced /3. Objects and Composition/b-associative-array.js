
let phonebook = {
    'Ivan Ivanov': '123-456-789-12',
    'Georgie Georgiev': '456-789-223-12',
    'Peter Petrov': '321-654-453-23',
}

//Access specific number
console.log(phonebook['Ivan Ivanov']);

//Iterate through all numbers with for-in
for (const el in phonebook) {
    console.log(el);
}

//Iterate with Object.values
let values=Object.values(phonebook);
console.log(values);//  ['123-456-789-12', '456-789-223-12', '321-654-453-23'] then we can use for of/while / foreach/ for  etc.

//Iterate with Object.keys
let keys=Object.keys(phonebook);
console.log(keys);//  ['Ivan Ivanov', 'Georgie Georgiev', 'Peter Petrov']

//Iterate with Object.entries
let entries=Object.entries(phonebook);
console.log(entries);//  [['Ivan Ivanov', '123-456-789-12'], ['Georgie Georgiev', '456-789-223-12'], ['Peter Petrov', '321-654-453-23']]