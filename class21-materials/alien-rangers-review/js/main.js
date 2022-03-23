//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['Rupaul\'s Drag Race', 'Futurama', 'South Park', 'The Oblongs', 'Daria', 'Ren & Stimpy'];
// for (let i = 0; i < shows.length; i++) {
//     console.log(shows[i]);
// }
shows.forEach(show => console.log(show));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1, 2, 3, 4, 5, 13, 14, 15, 17, 20, 21, 22];
let onlyEvens = arr => arr.filter(num => num % 2 === 0);
console.log(onlyEvens(nums));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function alertSumLowAndHigh(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr[1] + sortedArr[sortedArr.length - 2]);
}
