// Write a function that takes a number as an argument and returns its factorial.
// Test the function with different numbers


let num

const func = (num) => {

    if (num === 0) {
       return console.log("provide grater then 0")
    } 

        let result = 1;

        for (let i = num; i >= 1; i--) {
            result = result * i;
        }

        return result;


    

}

console.log(func(0))
