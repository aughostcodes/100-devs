// *Variables*
// Create a variable and console log the value

let theVariable = 'a string';
console.log(theVariable);

// Create a variable, add 10 to it, and alert the value

let addTenHere = 5;
addTenHere += 10;
// alert(addTenHere);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNums(num1, num2, num3, num4) {
    return num1 - num2 - num3 - num4; 
}
// alert(subtractFourNums());

// Create a function that divides one number by another and returns the remainder

function divide(a, b) {
    return a / b;
}
console.log(divide(100, 99));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function compareSumTo50(num1, num2) {
    if ((num1 + num2) > 50) {
        alert('Jumanji');
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyAndDivideBy3(num1, num2, num3) {
    if (((num1 * num2 * num3) % 3) === 0) {
        alert('Zebra');
    }
}