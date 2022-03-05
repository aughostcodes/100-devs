// *Variables*
// Declare a variable, assign it a value, and alert the value
const again = 'here is some value';
// alert(again);

// Create a variable, divide it by 10, and console log the value
let divideBy10 = 40;
divideBy10 /= 10;
console.log(divideBy10);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function timesThree(n1, n2, n3) {
    return n1 * n2 * n3;
}
// alert(timesThree(3, 4, 2));

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoSubtractTwo(n1, n2, n3, n4) {
    return ((n1 + n2) - n3 - n4);
}
console.log(addTwoSubtractTwo(100, 50, 25, 1));

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winner(n1, n2, n3) {
    let result = (100 + n1 - n2) / n3;
    // console.log(result);
    if (result > 25) {
        console.log('A WINNER!');
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfTheWeek() {
    let day = prompt('Enter a day:');
    day = day.toLowerCase();
    if (day === 'saturday' || day === 'sunday') {
        console.log('Weekend');
    } else {
        console.log('Weekday');
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num) {
    for (let i = 1; i <= num; i += 3) {
        console.log(i)
    }
}
