import Digit from "./digit.mjs";

const quantity = Number(process.argv[2])

if (isNaN(quantity) || !Number.isInteger(quantity) || quantity < 1 ) {
    console.log(`'${process.argv[2]}' should be an integer bigger then zero!`)
    process.exit(1)
}

console.log(`Printing ${quantity} value(s)...`)

const print = digit => {
    process.stdout.write(digit.printAllBrothers() + ' ')
}

const digit = new Digit()
print(digit)
for (let i = 2; i <= quantity; i++) {
    digit.next()
    print(digit)
}
