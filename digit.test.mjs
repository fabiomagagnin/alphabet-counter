import assert from 'assert/strict';
import Digit from "./digit.mjs"

const incrementDigitBy = (digit, quantity) => {
    for (let i = 0; i < quantity; i++) digit.next()
}

/**
 * Returns the equivalent decimal
 * @param digitLength number of chars to be used
 * @returns the number of increments needed to achieve the max value whith the desired length
 */
const getIncrementsForMaxValue = digitLength => {
    let max = 0
    for (let i = 1; i <= digitLength; i++) {
        max += Math.pow(26, i)
    }
    return max
}

// Instantiation test
let digit = new Digit()
assert.equal(digit.printAllBrothers(), 'A', 'A instantiate digit should start with value A')
console.log(digit.printAllBrothers())

// Testing 25 increments (all letters)
digit = new Digit()
incrementDigitBy(digit, 25)
assert.equal(digit.printAllBrothers(), 'Z', 'If next() was called 25x, value of the digit should be C')
console.log(digit.printAllBrothers())

// Testing 26 increments (first value with 2 letters)
digit = new Digit()
incrementDigitBy(digit, 26)
assert.equal(digit.printAllBrothers(), 'AA', 'If next() was called 26x, value of the digit should be AA')
console.log(digit.printAllBrothers())

digit = new Digit()
incrementDigitBy(digit, Math.pow(26, 1) - 1) // max value with one char
assert.equal(digit.printAllBrothers(), 'Z', 'If next() was called 51x, value of the digit should be AA')
console.log(digit.printAllBrothers())

digit = new Digit()
incrementDigitBy(digit, Math.pow(26, 1) + Math.pow(26, 2) - 1)
assert.equal(digit.printAllBrothers(), 'ZZ', 'Max value with two chars should be ZZ')
console.log(digit.printAllBrothers())

digit = new Digit()
let increments = getIncrementsForMaxValue(5) - 1
incrementDigitBy(digit, increments)
assert.equal(digit.printAllBrothers(), 'ZZZZZ', `After ${increments} increments, which is the max value with 5 chars, value should be ZZZZZ`)
console.log(digit.printAllBrothers())

digit = new Digit()
incrementDigitBy(digit, getIncrementsForMaxValue(5))
increments = getIncrementsForMaxValue(5)
assert.equal(digit.printAllBrothers(), 'AAAAAA', `After ${increments} increments, which is the first value with 6 chars, value should be AAAAAA`)
console.log(digit.printAllBrothers())
