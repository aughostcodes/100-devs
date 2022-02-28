// Variables
const tempInput = document.getElementById('temp-input');
let temp;
const convertButton = document.getElementById('submit-button');
const startingScale = document.getElementById('starting-scale');
const endingScale = document.getElementById('ending-scale');
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

    if (startingScaleValue === 'celsius' && endingScaleValue === 'fahrenheit') {
        console.log('converting cel to fah');
    } else if (startingScaleValue === 'fahrenheit' && endingScaleValue === 'celsius') {
        console.log('converting fah to cel');
    } else if (startingScaleValue === 'celsius' && endingScaleValue === 'kelvin') {
        console.log('converting cel to kelvin');
    }

    console.log(temp);
    console.log(startingScaleValue);
    console.log(endingScaleValue);
}

// C to F:
// F = 9/5 * C + 32
function cToF(temp) {
    return result = ((9/5) * temp + 32);
}


// K to F:
// F = 9/5 * (K - 273) + 32

// F to C:
// C = 5/9 * (F - 32)

// C to K:
// K = C + 273

// K to C:
// C = K - 273

// F to K:
// K = 5/9 * (F - 32) + 273