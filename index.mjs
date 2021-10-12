import Digit from "./digit.mjs";

const digit = new Digit()
console.log(digit.print())
for (let i = 2; i <= 20; i++) digit.next()
console.log(digit.print())

