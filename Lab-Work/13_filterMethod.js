/*
Write a javascript program to create an array of strings and use the filter()
method to filter out strings that start with the letter
. Print the filtered array.
*/
const stringsArray = ["Banana", "Apple", "Cherry", "Ate", "Elderberry"];
const newArray=stringsArray.filter((fruits)=>{
  return fruits.startsWith('A');

})
console.log(newArray);