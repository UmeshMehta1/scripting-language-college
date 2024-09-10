
let people = [
    { name: "Hem", age: 25 },
    { name: "Nischal", age: 30 },
    { name: "Nabin", age: 28 },
];

let remove = people.shift();
console.log("Removed person:", remove);
console.log("Array of the  person:", people);

people.unshift({ name: "Umesh", age: 35 });
console.log(" Array of people:", people);