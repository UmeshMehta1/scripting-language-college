/*
Write a javascript program to create an array of strings and use map() to create a
new array where each string is capitalized. Print the new array.
*/
 let stringsArray = ["hello", "world", "javascript", "programming"];

let capitalizedArray = stringsArray.map( (str) => {
   return str.toUpperCase();
});


console.log(capitalizedArray);
