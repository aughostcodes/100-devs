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

/* 8 kyu - Convert a String to a Number!
We need a function that can transform a string into a number. What ways of achieving this do you know? */
function stringToNumber(str) {
    return Number(str);
}
// SOLVED

/* 8 kyu - Basic Mathematical Operations
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. */
function basicOp(operation, val1, val2) {
    if (operation === '+') {
        return val1 + val2;
    } else if (operation === '-') {
        return val1 - val2;
    } else if (operation === '*') {
        return val1 * val2;
    } else if (operation === '/') {
        return val1 / val2;
    } else {
        return 'Please enter valid operator.'
    }
}
// SOLVED; Switch case here, also

/* 8 kyu - Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order. */
function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}
// SOLVED; Honestly figured this out pretty easily, but SO'd the map(Number) bit. Try to commit that one to memory. Looks like a lot of the solutions use map(Number) as well

/* 8 kyu - Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F */
function abbrevName(name) {
    let nameArr = name.split(' ');
    let firstInit = nameArr[0].charAt(0).toUpperCase();
    let lastInit = nameArr[1].charAt(0).toUpperCase();
    return `${firstInit}.${lastInit}`;
}
// SOLVED; But I do like this solution as well:
// return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();

/* 8 kyu - Is n divisible by x and y?
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits. */
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}
// SOLVED

/* 8 kyu - Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6] */
function maps(x) {
    return x.map(num => num * 2);
}
// SOLVED

/* 8 kyu - A Needle in the Haystack
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6") */
function findNeedle(haystack) {
    return `found the needle at position ${haystack.findIndex(element => element === 'needle')}`;
}
// SOLVED

/* 8 kyu - Convert a Boolean to a String
Implement a function which convert the given boolean value into its string representation. */
function boolToString(b) {
    return (b) ? "true" : "false";
}
// SOLVED; Also could have just b.toString()

/* 8 kyu - You Can't Code Under Pressure #1
Code as fast as you can! You need to double the integer and return it. */
function doubleInteger(i) {
    return i * 2;
}
// SOLVED

/* 8 kyu - Jenny's secret message
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. */
function secretHello(name) {
    if (name === 'Johnny') {
        return `Hello, my love!`;
    } else {
        return `Hello, ${name}!`;
    }
}
// SOLVED

/* 8 kyu - Invert values
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list. */
function invertArray(arr) {
    return arr.map(num => -(num));
}
// SOLVED

/* 8 kyu - Beginner Series #2 Clock
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
Example:
h = 0
m = 1
s = 1
result = 61000
Input constraints:
0 <= h <= 23
0 <= m <= 59
0 <= s <= 59 */
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {

}
// Skipping this for now, because... math

/* 8 kyu - Count of positives / sum of negatives
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */
function countPosSumNeg(input) {
    let pos = input.filter(num => num > 0).length;
    let neg = input.filter(num => num < 0);
    if (!input || input.length === 0) {
        return [];
    }
    if (neg.length < 1) {
        neg = 0;
    } else {
        neg = neg.reduce((a, b) => a + b);
    }
    return [pos, neg];
}
// SOLVED

/* 8 kyu - MakeUpperCase
Write a function which converts the input string to uppercase. */
function makeUpperCase(str) {
    return str.toUpperCase();
}
// SOLVED

/* 8 yu - Get the mean of an array
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer. */
function getAverage(grades) {
    return Math.floor(grades.reduce((a, b) => a + b) / grades.length);
}
// SOLVED

