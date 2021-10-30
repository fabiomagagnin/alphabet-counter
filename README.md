# Alphabet counter
This was inspired on a real project situation where I needed to deal with excel files. Excel name it's columns with letters, so the first column is A, second is B and so on. This 'Alphabet counter' alows counting, but in the place of numbers, we have letters: `A, B, C, ..., Y, Z, AA, AB, AC, ..., ZZ, ... AAA, AAB, ...`

## Node version: 
16 or greater

## To run
`npm run count 53` (this will print 53 values, from A to BA. 53 can be any integer bigger then zero)

`npm run count-async 2000000` (this will show the name of the column 2 millions)

## To run the tests
`npm run test`

## Asynchronous aproach
The `Digit` class is synchronous, which means that counting until a big number would block the event loop.
For avoinding this, in the `index-async.js` I show one possible async aproach. 
It was made with two intervals `setInterval()`, one responsible for counting and other for showing the status and comproving that the event loop is not bloked.
Try counting until 2 millions for exemple, in my computer it tooks about 30 seconds.

## What you'll see here
- The logic to make the alphabet counter
- Use of recursion `Digit.getAllBrothers()`
- Use of ESM (ECMAScript Modules)
- Use of Node native assert module to do some basic tests
