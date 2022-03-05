//Create a function that grabs the number of snacks from the input and tells you to stop that many times
let input = document.querySelector('input');
let h2Click = document.getElementById('help');
let stopDisplay = document.getElementById('stops');

h2Click.addEventListener('click', displayInputStops);

function displayInputStops() {
    // reset the display container if new input is entered without refresh
    stopDisplay.textContent = '';
    for (let i = 0; i < input.value; i++) {
        let createdDiv = document.createElement('div');
        createdDiv.textContent = 'Stop chugging malk!';
        stopDisplay.appendChild(createdDiv);
    }
}