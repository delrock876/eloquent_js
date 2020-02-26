// EXERCISE : LOOPING A TRIANGLE

// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// Solution 1
for (let pound = '#'; pound.length < 8; pound += '#') {
  console.log(pound)
}

// Solution including spaces
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#'
      } else {
        stair += ' '
      }
    }
    console.log(stair)
  }
}
steps(7)

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5(and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log('Fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.At each position of the grid there is either a space or a "#" character.The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

let chessboard = ''
let size = 8

for(let x = 0; x < size; x++){
  for(let y = 0; y < size; y++){
    if((y + x) % 2 === 0){
      chessboard += ' '
    }else {
      chessboard += '#'
    }
  }
  chessboard+= '\n'
}
console.log(chessboard)










// let yourName;

// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName)

// switch (prompt("What is the weather like?")) {
//   case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//   case "sunny":
//     console.log("Dress lightly.");
//   case "cloudy":
//     console.log("Go outside.");
//     break;
//   default:
//     console.log("Unknown weather type!");
//     break;
// }