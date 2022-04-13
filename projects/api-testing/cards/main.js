const drawButton = document.querySelector('.draw-button');
const player1Card = document.querySelector('#player1-card');
const player2Card = document.querySelector('#player2-card');
const resultArea = document.querySelector('.result-area');
let player1Pile = [];
let player2Pile = [];
// let player2Pile = window.localStorage.setItem('', JSON.stringify([]));
// let player2Pile = localStorage.setItem([], '');
let deckId = '';

drawButton.addEventListener('click', drawTwo);

// Initial fetch to get random shuffled deck ID
fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => {
        deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`);
    });

function drawTwo() {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
    // const pileUrl = `https://deckofcardsapi.com/api/deck/${deckId}/pile/${player1Pile}/add/?cards=AS,2S`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            player1Card.src = data.cards[0].image;
            player2Card.src = data.cards[1].image;
            let player1Value = convertFaceCards(data.cards[0].value);
            console.log(`🚀 ~ drawTwo ~ player1Value`, player1Value);
            let player2Value = convertFaceCards(data.cards[1].value);
            console.log(`🚀 ~ drawTwo ~ player2Value`, player2Value);

            if (player1Value > player2Value) {
                resultArea.textContent = `Player 1 wins this round`;
                player1Pile.push(data.cards[0]);
            } else if (player2Value > player1Value) {
                resultArea.textContent = `Player 2 wins this round`;
                player2Pile.push(data.cards[1]);
            } else {
                resultArea.textContent = `Prepare for war!`;
            }


            console.log(`🚀 ~ drawTwo ~ player1Pile`, player1Pile);
            console.log(`🚀 ~ drawTwo ~ player2Pile`, player2Pile);


        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
}

function convertFaceCards(val) {
    if (val === 'ACE') {
        return 14;
    } else if (val === 'KING') {
        return 13;
    } else if (val === 'QUEEN') {
        return 12;
    } else if (val === 'JACK') {
        return 11;
    } else {
        return Number(val);
    }
};

// function convertFaceCardsSwitch(val) {
//     switch (val) {
//         case 'ACE':
//             return 14;
//             break;
//         case 'KING':
//             return 13;
//             break;
//         case 'QUEEN':
//             return 12;
//             break;
//         case 'JACK':
//             return 11;
//             break;
//         default:
//             return Number(val);
//     }
// }