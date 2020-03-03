// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to(and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.Run the example program and see whether it does indeed return 55.

// SOLUTION
// const returnAll = (start, end)=>{
//   let arr = []
//   for(let i = start; i <= end; i++){
//     arr.push(i)
//   }
//   return arr
// }
// console.log(returnAll(1, 5))

// const findSum = (array)=>{
//   let sum = 0
//   //iterate through array
//   for(let i = 0 ; i < array.length; i++){
//     //at each index sum = sum+[i]
//     sum += array[i]
//   }
//   return sum
// }

// console.log(findSum(returnAll(0,5)))


// Arrays have a reverse method that changes the array by inverting the order in which its elements appear.For this exercise, write two functions, reverseArray and reverseArrayInPlace.The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.Neither may use the standard reverse method.

//reverse array
//takes in array as argument
//for each number in the array
//set newArr = arr[i] +  newArr
//return arr

const reverseArray = array =>{
  let newArray = []
  for(let i = array.length-1; i >= 0; i--){
    newArray.push(array[i])
  }
return newArray
}
console.log(reverseArray([1,2,3,4]))

const reverseInPlace=(array)=>{
 let temp
 for(let i = 0; i < array.length/2; i++){
   temp = array[i]
   array[i] = array[array.length -1 -i]
   array[array.length -1 -i] = temp
 }
 return array
}
console.log(reverseInPlace([1,2,3,4,5,6,7,8]))

// myArr = [1,2,3,4,5,6]
// console.log(myArr[myArr.length-1-0])