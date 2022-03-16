// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let theTruth = true;
alert(theTruth);

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = 'grey';
console.log(favColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNums(n1, n2, n3, n4) {
    return (n1 + n2 + n3) / n4;
}

console.log(fourNums(2, 3, 4, 5));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNums(num1, num2) {
    console.log(num1 ** num2);
}

twoNums();

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function tester(troof, strang) {
    troof ? alert(strang) : console.log(strang);
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function takesANum(num) {
    for (let i = 1; i <= num; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('FIZZBUZZ');
        } else if (i % 3 === 0) {
            console.log('FIZZ');
        } else if (i % 5 === 0) {
            console.log('BUZZ');
        } else {
            console.log(i);
        }
    }
}