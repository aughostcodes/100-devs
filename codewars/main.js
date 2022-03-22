// Codewars Kata Exercises //

/* 8 kyu - Volume of a Cuboid
Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
*/
function getVolumeOfCuboid(length, width, height) {
    return (length * width * height);
}
// SOLVED

/* 7 kyu - JavaScript Array Filter
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given. */
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(function (n) {
        return n % 2 === 0;
    });
}
// SOLUTION

/* 7 kyu - Testing 1-2-3
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between. */
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript //
const number = array =>
    array.map((val, idx) => `${idx + 1}: ${val}`);
// SOLUTION

/* 8 kyu - Powers of 2
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ). */
function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(2**i);
    }
    return arr;
}
// SOLVED


/* 8 kyu - Sum of positive
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0. */
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
    let positiveArr = [];
    if (arr.length === 0) {
        return 0;
    } else {
        positiveArr = arr.filter(num => num >= 0); 
    }
    let result = positiveArr.reduce((a, b) => a + b);
    return result;
}
// IN PROGRESS