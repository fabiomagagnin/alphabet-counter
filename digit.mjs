import { ALPHABET } from './constants.mjs'

class Digit {
    position = 0
    leftBrother = null

    next() {
        if (this.position === ALPHABET.length - 1) {
            this.position = 0
            this.notifyLeftBrother()
        } else {
            this.position++
        }
    }

    notifyLeftBrother() {
        if (this.leftBrother) this.leftBrother.next()
        else this.leftBrother = new Digit()
    }

    current() {
        return ALPHABET[this.position]    
    }

    print() {
        let digit = this
        let banner = ''
        while (digit) {
            banner = digit.current() + banner
            digit = digit.leftBrother
        }
        return banner
    }
}

export default Digit