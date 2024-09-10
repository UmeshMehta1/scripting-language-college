//Write a function named calculate BMI that takes a person&#39;s weight in kilograms
// and height in meters as arguments and returns their BMI (body mass index). Test
// the function with different weight and height values and log the returned value to
// the console.

function calculateBMI(w , h){
    return w/(h*h);
}

console.log(calculateBMI(60, 1.75));