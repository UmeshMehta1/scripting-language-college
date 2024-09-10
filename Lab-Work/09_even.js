// Write a javascript program to create an array of numbers and use forEach() to
// print all the even numbers in the array.
let arr1 = [2, 5, 9, 748, 3 , 11]

let arr2=[];

arr1.forEach((num)=>{
    if(num%2===0){
     arr2.push(num)
    }
})

console.log(arr2)