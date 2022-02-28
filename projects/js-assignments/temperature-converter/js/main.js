// Variables
const tempInput = document.getElementById('temp-input');
let temp;
const convertButton = document.getElementById('submit-button');
const startingScale = document.getElementById('starting-scale');
const endingScale = document.getElementById('ending-scale');
let startingScaleValue;
let endingScaleValue;

// Event listeners
convertButton.addEventListener('click', convertTemp);

// Get temperature input from user

function convertTemp() {
    temp = tempInput.valueAsNumber;
    startingScaleValue = startingScale.options[startingScale.selectedIndex].value;
    endingScaleValue = endingScale.options[endingScale.selectedIndex].value;
    console.log(temp);
    console.log(startingScaleValue);
    console.log(endingScaleValue);
}

// Determine starting scale and ending scale

// Store in variable

// C to F:
// F = 9/5 * C + 32

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