//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function print21() {
    for (let i = 0; i < 21; i++) {
        console.log(21);
    }
}

print21();

//Bonus can you make it print '21' 21 times to the dom?
let displayDiv = document.querySelector('#savageSays');

function display21() {
    for (let i = 0; i < 21; i++) {
        // Discord user's solution:
        // document.querySelector('body').innerHTML += '<p>' + 21 + '</p>';
        let createdText = document.createElement('p');
        createdText.textContent = '21';
        displayDiv.appendChild(createdText);
    }
}

display21();