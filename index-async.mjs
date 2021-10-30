import Digit from "./digit.mjs";

const quantity = Number(process.argv[2])

if (isNaN(quantity) || !Number.isInteger(quantity) || quantity < 1) {
    console.log(`'${process.argv[2]}' should be an integer bigger then zero!`)
    process.exit(1)
}

console.log(`Counting until ${quantity}...`)

const digit = new Digit()

const print = () => {
    console.log(new Date().toISOString(), digit.currentIndex(), digit.printAllBrothers())
}
console.time('elapsedTime')
const intervalStatus = setInterval(print, 3000)
const intervalIncrementer = setInterval(() => {
    for (let i = 1; i <= 1000; i++) {

        if (digit.currentIndex() === quantity) {
            clearInterval(intervalIncrementer)
            clearInterval(intervalStatus)
            print()
            console.timeEnd('elapsedTime')
            break
        } else digit.next()
    }
}, 0)
