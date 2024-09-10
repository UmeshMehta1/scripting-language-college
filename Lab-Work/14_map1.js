/*
 Write a javascript program to create an array of objects representing students
where each object has a name and age property. Use the map() method to
create a new array containing only the ages of the students. Print the new array.
*/
let student=[
    {pname:"Hem Narayan", age: 21},
    {pname:"Ram", age: 99},
    {pname:"Sita", age: 20},
    {pname:"Umesh", age: 40}

];
let newAge = student.map((std)=>{
    return std.age;
});
console.log(newAge);
