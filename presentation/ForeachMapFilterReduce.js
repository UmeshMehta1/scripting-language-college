//Foreach
// const forNum= [1, 3, 6, 7, 9, 10]
// forNum.forEach((num)=>console.log(num+2))

//map

// const mapNum = [1, 3, 6, 7, 9,2]
// const mapNum2 = mapNum.map((num)=>{
// return  num+2

// })
   

// console.log(mapNum2)


//Filter
const fNum =[1, 90, 3, 4, 20, 50 , 33, 44]
const fNum2 = fNum.filter((num)=>num>20)
// console.log(fNum)


//Reduce
const rNum = [1, 3, 4, 5]
const rNum2 = rNum.reduce((acc,cur)=>acc+cur,5)
console.log(rNum2)