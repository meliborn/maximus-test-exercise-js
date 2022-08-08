// The rules for Roman numerals are as follows:

// The basic symbols are I (= 1), V (= 5), X (= 10), L (= 50), C (= 100), D (= 500), and M (= 1000).

// If a letter is immediately followed by one of equal or lesser value, 
//   the two numbers are added; thus, XX = 20, XV = 15, VI = 6.

// Some other examples of roman numerals are:
// 8 = VIII
// 2021 = MMXXI current year

// Lets write a routine to output a regular number in roman numerals (i.e. 13 -> XIII)

// We have node and jest test library
//

const fs = require('fs');
const rawdata = fs.readFileSync('test/all_tests.json');
const asserts = JSON.parse(rawdata);


const solution = (num) => {
    // Place any logic in this function
}


test('test', () => {
    Object.entries(asserts).forEach(([key, value]) => {
        expect(solution(key)).toBe(value)
    })
});