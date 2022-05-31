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

/* 8 kyu - Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.
Example:
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" */
function reverseSentence(str) {
    return str.split(' ').reverse().join(' ');
}
// SOLVED

/* 8 kyu - Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. */
function fakeBinary(x) {
    return x.split('').map(num => num < 5 ? 0 : 1).join('');
}
// SOLVED; I legit did this by myself, no Googling. Maybe it could be better, but I'm happy

/* 8 kyu - Is he gonna survive?
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return True if yes, False otherwise :) */
function hero(bullets, dragons) {
    return (bullets < dragons * 2) ? false : true;
}
// SOLVED; Can just take out the ternary: return bullets >= dragons * 2;

/* 8 kyu - Beginner Series #1 School Paperwork
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:
n= 5, m=5: 25
n=-5, m=5:  0 */
function paperwork(n, m) {
    return (n < 0 || m < 0) ? 0 : n * m;
}
// SOLVED; Feeling good about noticing when I can refactor more quickly

/* 7 kyu - Alphabet symmetry
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
solve(["abode","ABc","xyzD"]) = [4, 3, 1] */
// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
function alphabetSymmetry(arr) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    console.log('alphabet: ', alphabet);
    // let alphaIndex = alphabet.filter((letter) => (letter));
}
// IN PROGRESS

/* 8 kyu - Calculate BMI 
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese" */
function calculateBMI(weight, height) {
    let bmi = weight / (height ** 2);
    if (bmi <= 18.5) {
        return 'Underweight';
    } else if (bmi <= 25.0) {
        return 'Normal';
    } else if (bmi <= 30.0) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
// SOLVED

/* 8 kyu - Calculate average
Write a function which calculates the average of the numbers in a given list. */
function findAverage(arr) {
    if (!arr.length) {
        return 0;
    }
    return (arr.reduce(((a, b) => (a + b)), 0)) / arr.length;
}
// SOLVED

/* 8 kyu - Reversed sequence
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1] */
const reverseSequence = n => {
    const reversedArr = [];
    for (let i = n; i > 0; i--) {
        reversedArr.push(i);
    }
    return reversedArr;
}
// SOLVED; Also top solution

/* 8 kyu - DNA to RNA Conversion
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
For example:
"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. */
function convertDNAToRNA(dna) {
    let rna = dna.split('').map(base => (base === 'T') ? (base = 'U') : base).join('');
    return rna;
}
// SOLVED; Getting more and more proficient with map! The top solution is very simple regex lol

/* 8 kyu - You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.*/
const check = (a, x) => a.indexOf(x) === -1 ? false : true;
// SOLVED; Could have used a.includes(x) for more concise answer

/* 8 kyu - Are You Playing Banjo?
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo" */
function decideBanjoStatus(name) {
    if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
        return `${name} plays banjo`;
    }
    return `${name} does not play banjo`;
}
// SOLVED; I like the top solution, though:
// return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";

/* 7 kyu - Filter unused digits
Given a varying number of integer arguments, return the digits that are not present in any of them.
Example:
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted. */
// https://www.codewars.com/kata/55de6173a8fbe814ee000061
function unusedDigits(...input) {
    const absent = [];
    input = input.toString().split('').filter(entry => entry !== ',').map(Number);
    for (let i = 0; i < 10; i++) {
        if (input.indexOf(i) === -1) {
            absent.push(i);
        }
    }
    return absent.toString().split(',').join('');
}
// SOLVED; Mine is a bit more convoluted, and of course REGEX EXISTS, but lfg

/* 7 kyu - Disemvowel Trolls
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
// SOLVED; Definitely Googled this, but quick solution

/* 8 kyu - To square(root) or not to square(root)
Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number.
Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1] */
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
function squareOrSquareRoot(array) {

}

/* 8 kyu - Cat years, dog years
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */
const humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0;
    let dogYears = 0;
    // let result = [];
    for (let i = 0; i <= humanYears; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 15;
        } else if (i === 2) {
            catYears += 9;
            dogYears += 9;
        } else {
            catYears += 4;
            dogYears += 5;
        }
    }
    return result = [humanYears, catYears, dogYears];
}
// Result is not correct 10 should be [10, 56, 64] but is [10, 60, 69]

/* 8 kyu - Plural
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun. */
// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript
const plural = (n) => n !== 1;
// SOLVED

/* 7 kyu - Square Every Digit
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. */
function squareDigits(num) {
    let splitNumArr = num.toString().split('');
    return result = Number(splitNumArr.map(num => num ** 2).join(''));
}
// SOLVED; Some good alternative solutions but I'm not upset with mine for readability purposes, honestly

/* 7 kyu - Jaden Casing Strings
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */
function capitalizedFirstLetter(str) {
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}
// SOLVED? My solution above works in console but does not pass tests. Kata is written to accept prototype chaining only
// String.prototype.toJadenCase = function() {
//   return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
// };
// Need to work on understanding 'this' (even more)

/* 7 kyu - Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12 */
function dontGiveMeFive(start, end) {
    const numArr = []
    for (let i = start; i <= end; i++) {
        numArr.push(i);
    }
    return resultArr = numArr.filter(num => !(num % 5 === 0 && num % 10 !== 0));
}
// SOLUTION; Worked for smaller test numbers, but 50/500/etc do not pass tests
// Regex solution:
// function dontGiveMeFive(start, end) {
//     let count = 0
//     for (let i = start; i <= end; i++) {
//         if (!/5/.test(i)) {
//             count++
//         }
//     }
//     return count
// }
// String solution:
// function dontGiveMeFive(start, end) {
//     let res = [];
//     for (let i = start; i <= end; i++) {
//         if (!i.toString().includes('5')) res.push(i);
//     }
//     return res.length;
// }

/* 7 kyu - Odd or Even?
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).
Examples:
Input: [0]
Output: "even"
Input: [0, 1, 4]
Output: "odd"
Input: [0, -1, -5]
Output: "even" */
function oddOrEven(array) {
    if (array.length === 0) {
        return 'even';
    } else {
        const resultArr = array.reduce((a, b) => a + b);
        return Math.abs(resultArr) % 2 === 0 ? 'even' : 'odd';
    }
}
// SOLVED; Top result: return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';

/* 7 kyu - Two fighters, one winner
Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Example:
declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
Lew attacks Harry; Harry now has 3 health.
Harry attacks Lew; Lew now has 6 health.
Lew attacks Harry; Harry now has 1 health.
Harry attacks Lew; Lew now has 2 health.
Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
*/
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    do {
        if (firstAttacker === fighter1.name) {
            fighter2.health - fighter1.damagePerAttack;
        } else {
            if (firstAttacker === fighter2.name) {
                fighter1.health - fighter2.damagePerAttack;
            }
        }
    }
    while (fighter1.health > 0 || fighter2.health > 0) {
    }
    // return name of winner
}