# Alphabet counter
This was inspired on a real project situation where I needed to deal with excel files. Excel name it's columns with letters, so the first column is A, second is B and so on. This 'Alphabet counter' alows counting, but in the place of numbers, we have letters: `A, B, C, ..., Y, Z, AA, AB, AC, ..., ZZ, ... AAA, AAB, ...`

## Node version: 
16 or greater

## To run
`npm run count 53` (this will print 53 values, from A to BA. 53 can be any integer bigger then zero)

## To run the tests
`npm run test`

## What you'll see here
- The logic to make the alphabet counter
- Use of recursion `Digit.getAllBrothers()`
- Use of ESM (ECMAScript Modules)
- Use of Node native assert module to do some basic tests
