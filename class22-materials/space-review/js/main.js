//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arrOfNums = [10, 20, 30, 40];
const reduced = arrOfNums.reduce((a, b) => (a + b));
console.log(reduced);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arrSquared(arr) {
    let result = [];
    result = arr.map(element => element ** 2);
    return result;
}
console.log(arrSquared([4, 9, 12]));

//Create a function that takes string
//Print the reverse of that string to the console
function str(word) {

}

//Create a function that takes in a string
//Alert if the string is a palindrome or not