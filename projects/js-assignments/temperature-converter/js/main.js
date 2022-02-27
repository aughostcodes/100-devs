// Variables
let tempInput = document.getElementById('temp-number').valueAsNumber;
let convertButton = document.getElementById('submit-button');
let startingScale = document.getElementById('starting-scale');
let endingScale = document.getElementById('ending-scale');
let startingScaleValue = startingScale.options[startingScale.selectedIndex].text;

// Event listeners
convertButton.addEventListener('click', convertTemp);

// Get temperature input from user

function convertTemp() {
    console.log('button works');
    console.log(typeof(tempInput));
    console.log(parseInt(tempInput));
    console.log(startingScaleValue);
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