// *Variables*
// Create a variable and console log the value
let torrance = 'dunst';
console.log(torrance);

// Create a variable, add 10 to it, and alert the value
let add10 = 50
add10 += 10;
// alert(add10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNums(n1, n2, n3, n4) {
    return (n1 - n2 - n3 - n4);
}
// alert(subtractFourNums(100, 50, 25, 3));

// Create a function that divides one number by another and returns the remainder
function divideTwoNums(n1, n2) {
    return (n1 / n2);
}
console.log(divideTwoNums(100, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addJumanji(n1, n2) {
    if (n1 + n2 > 50) {
        alert('Jumanji');
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyZebra(n1, n2, n3) {
    if (n1 * n2 * n3 % 3 === 0) {
        alert('Zebra');
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopWordXTimes(word, num) {
    for (let i = 0; i < num; i++) {
        console.log(word);
    }
}