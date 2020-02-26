// Exercise : Minimum
// Write a function min that takes two arguments and returns their minimum.

// Solution 
const min = (x, y) => {
  if (x === y) {
    return 'These are equal'
  } else if (x < y) {
    return y
  } else {
    return x
  }
}
console.log(min(2, 2))

// Define a recursive function isEven corresponding to this description.The function should accept a single parameter(a positive, whole number) and return a Boolean.

// isEven (n)
//if n === 0 ; n is even
//if n === 1 ; n is odd
// n = n-2 % 2 === 0 ; even otherwise odd

const isEven = n => {
  if (n === 0) {
    return true
  } else if (n === 1) {
    return false
  }else if (n < 0) {
    return isEven(-n)
  } else {
    // subtracts 2 from n until it hits 1 or 0
    return isEven(n - 2)
  }
}
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted(rather than counting only uppercase “B” characters).Rewrite countBs to make use of this new function.

//general use case
const countChar = (str, letter) =>{
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++
    }
  }
  return count
}
//uses countChar to return specific case
const countBs = str => {
  return(countChar(str, "B"))
}

console.log(countBs('elBBBbB'))
console.log(countChar("heellllo", 'e'))

// // Ex of Closure
// function mulitplier(factor){
//   return number => number * factor
// }

// let twice = mulitplier(2)
// console.log(twice(7))//returns 14

