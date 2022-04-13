const drawButton = document.querySelector('.draw-button');
const player1Card = document.querySelector('#player1-card');
const player2Card = document.querySelector('#player2-card');
let deckId = '';

// Initial fetch to get random shuffled deck ID
fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`);
    });

drawButton.addEventListener('click', drawTwo);

function drawTwo() {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            player1Card.src = data.cards[0].image;
            player2Card.src = data.cards[1].image;
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
}