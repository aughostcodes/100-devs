// Variables
const tempInput = document.getElementById('temp-input');
const convertButton = document.getElementById('submit-button');
const startingScale = document.getElementById('starting-scale');
const endingScale = document.getElementById('ending-scale');
const display = document.querySelector('.display');
let temp;
let startingScaleValue;
let endingScaleValue;
let result;

// Event listeners
convertButton.addEventListener('click', convertTemp);

function convertTemp() {
    // Get temperature input from user
    temp = tempInput.valueAsNumber;
    
    // Determine starting scale and ending scale and store in variable
    startingScaleValue = startingScale.options[startingScale.selectedIndex].value;
    endingScaleValue = endingScale.options[endingScale.selectedIndex].value;

    // Conditionals regarding which scales are selected
    if (startingScaleValue === 'celsius' && endingScaleValue === 'fahrenheit') {
        cToF(temp);
    } else if (startingScaleValue === 'fahrenheit' && endingScaleValue === 'celsius') {
        fToC(temp);
    } else if (startingScaleValue === 'celsius' && endingScaleValue === 'kelvin') {
        cToK(temp);
    }

    console.log(temp);
    console.log(startingScaleValue);
    console.log(endingScaleValue);
}

// C to F:
// F = 9/5 * C + 32
function cToF(temp) {
    result = ((9/5) * temp + 32).toFixed(2);
    display.textContent = result;
}

// K to F:
// F = 9/5 * (K - 273) + 32
function kToF(temp) {
    result = ((9/5) * (temp - 273) + 32).toFixed(2);
    display.textContent = result;
}

// F to C:
// C = 5/9 * (F - 32)
function fToC(temp) {
    result = ((5/9) * (temp - 32)).toFixed(2);
    display.textContent = result;
}

// C to K:
// K = C + 273
function cToK(temp) {
    result = (temp + 273).toFixed(2);
    display.textContent = result;
}

// K to C:
// C = K - 273
function kToC(temp) {
    result = (temp - 273).toFixed(2);
    display.textContent = result;
}

// F to K:
// K = 5/9 * (F - 32) + 273
function fToK(temp) {
    result = ((5/9) * (temp - 32) + 273).toFixed(2);
    display.textContent = result;
}