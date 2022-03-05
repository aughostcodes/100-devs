//Create a conditonal that checks their age
let age;
let h1Click = document.querySelector('h1');
let display = document.querySelector('p');
h1Click.addEventListener('click', checkAge);

function checkAge() {
    age = Number(document.querySelector('#danceDanceRevolution').value);

//If under 16, tell them they can not drive
    if (age < 16) {
        display.textContent = 'Cannot drive yet.';
    }

//If under 18, tell them they can't hate from outside the club, because they can't even get in
    if (age >= 16 && age < 18) {
        display.textContent = 'Can\'t hate from outside the club.';
    }

//If under 21, tell them they can not drink
    if (age >= 18 && age < 21) {
        display.textContent = 'Cannot drink yet.';
    }

//If under 25, tell them they can not rent cars affordably
    if (age >= 21 && age < 25) {
        display.textContent = 'Cannot rent a car affordably.';
    }
//If under 30, tell them they can not rent fancy cars affordably
    if (age >= 25 && age < 30) {
        display.textContent = 'Cannot rent a fancy car affordably.';
    }
//If under over 30, tell them there is nothing left to look forward too
    if (age >= 30) {
        display.textContent = 'I guess there\'s nothing left to look forward to.'
    }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
