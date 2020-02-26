console.log("I'm testing this \nnewline stuff.\n") //works!

console.log("This " + "is " + "ridiculous")

console.log(`We prefer template
literals\n`)
          
// typeOf - a unary(only takes on value)operator -> produces a string that tells you the value of the data type passed
console.log(typeof 24.5)
console.log(typeof 'number')
console.log(typeof false + '\n')

// strings are ordered is roughly alphabetic but not really what you’d expect to see in a dictionary: uppercase letters are always “less” than lowercase ones, so "Z" < "a"
console.log('apple' > 'Apple\n') // returns true

//Automatic Type Conversion
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


