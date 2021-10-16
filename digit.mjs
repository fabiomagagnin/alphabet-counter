import { ALPHABET } from './constants.mjs'

class Digit {
    position = 0
    leftBrother = null

    next() {
        if (this.position === ALPHABET.length - 1) {
            this.position = 0
            this.notifyOrCreateLeftBrother()
        } else {
            this.position++
        }
    }

    notifyOrCreateLeftBrother() {
        if (this.leftBrother) this.leftBrother.next()
        else this.leftBrother = new Digit()
    }

    current() {
        return ALPHABET[this.position]    
    }

    /**
     * @returns All digit brothers, from left to rigth
     */
    getAllBrothers() {
        return this.leftBrother ? this.leftBrother.getAllBrothers().concat(this) : [this]
    }

    printAllBrothers() {
        return this.getAllBrothers().reduce((prev, digit) => prev + digit.current(), '')
    }

}

export default Digit