//--- Easy
//create a variable and assign it a number
let sleep = 20;

//minus 10 from that number
sleep -= 10;

//print that number to the console
console.log(sleep);

//--- Medium
//create a variable that holds a value from the input

//add 25 to that number
// input = input.value + 25;

//alert that number
// alert(inputValue);

//--- Hard
//create a variable that holds the h1
let h1Click = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables
h1Click.addEventListener('click', function() {
    let input = Number(document.querySelector('#danceDanceRevolution').value);
    console.log(sleep + Number(input));
});
