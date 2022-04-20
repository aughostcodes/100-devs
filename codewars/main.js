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
        arr.push(2 ** i);
    }
    return arr;
}
// SOLVED

/* 6 kyu - Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once. */
// https://www.codewars.com/kata/514b92a657cdc65150000006/train
function solution(num) {
    let arr = [];
    if (num) {
        for (let i = 0; i < num; i++) {
            // if (num[i] % 3 === 0 || num[i] % 5 === 0) {
            //     arr.push(num[i]);
            console.log(i);
        }
    }
    // console.log(arr);
}
// IN PROGRESS

/* 7 kyu - String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). */
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function strEndsWith(str, ending) {
    // str = str.split('').reverse();
    // ending = ending.split('').reverse();
    // for (let i = 0; i <= str.length; i++) {
    //     console.log(ending[i]);
    //     console.log(str[i]);
    //     for (let j = 0; j <= ending.length; j++) {
    //         if (str[i] !== ending[i] || !ending[i]) {
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     }
    // }
    return str.endsWith(ending);
}
// SOLUTION; Wow, wtf

/* 8 kyu - If you can't sleep, just count sheep!!
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */
function countSheep(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}
// SOLUTION; Mine got convoluted but did pass most of the tests

/* 8 kyu - Opposite number
Very simple, given an integer or a floating-point number, find its opposite. */
function opposite(number) {
    return number - (number * 2);
}
// SOLVED; SO'd this great answer while looking for Math.abs() info. Submitted, and top answer is simply return(-number) :/

/* 8 kyu - Convert a Number to a String!
We need a function that can transform a number into a string. */
function numberToString(num) {
    return num.toString();
}
// SOLVED

/* 8 kyu - Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */
function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}
// SOLVED

/* 8 kyu - Reversed Strings
Complete the solution so that it reverses the string passed into it. */
function reverseString(str) {
    return str.split('').reverse().join('');
}
// SOLVED; Quickly, as well

/* 8 kyu - Sum of positive
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0. */
function positiveSum(arr) {
    let newArr = arr.filter(num => num >= 0)
        .reduce(((a, b) => a + b), 0);
    return newArr;
}
// SOLVED; That 0 initialValue at the end of reduce there made all the difference in passing tests

/* 8 kyu - Return Negative
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? */
function makeNegative(num) {
    return -Math.abs(num);
}
// SOLVED; Not sure why this one required Math.abs, but it was returning -0 using -(num)

/* 8 kyu - Find the smallest integer in the array
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */
function findSmallestInt(args) {
    let newArgs = args.sort((a, b) => a - b);
    return newArgs[0];
}
// SOLVED; Check out Int32Array? 
// let newArgs = new Int32Array(args);
// Damn, Math.min(...args). Oh well, got in some sort() practice

/* 8 kyu - Grasshopper-Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */
let summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}
// SOLVED; This is the current top answer as well, so that counts for something, I guess

/* 8 kyu - Square(n) Sum
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */
function squareSum(numbers) {
    let newArr = numbers.map(num => Math.pow(num, 2))
        .reduce(((a, b) => a + b), 0);
    return newArr;
}
// SOLVED; That trailing 0 in reduce again... Also, tried forEach here first

/* 8 kyu - Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string. */
function noSpace(x) {
    return x.split(' ').join('');
}
// SOLVED; Another reminder to learn regex

/* 8 kyu - Counting sheep...
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */
function countSheep(arrayOfSheep) {
    let trueSheep = arrayOfSheep.filter(sheep => sheep);
    return trueSheep.length;
}
// SOLVED; More concise, top answer:
// return arrayOfSheeps.filter(Boolean).length;

/* 8 kyu - Function 1 - hello world
Make a simple function called greet that returns the most-famous "hello world!". */
const greet = () => `hello world!`;
// SOLVED; The easiest kata so far just pushed me to 6 kyu ranking. 12:42AM 04/20/2022