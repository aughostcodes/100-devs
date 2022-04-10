'use strict';

// 153 queens total, apparently, arranged by their werkroom entrances it seems

const createRandom = () => { 
    return Math.floor(Math.random() * 153) + 1; 
}
const dragName = document.querySelector('.drag-name');
const famousQuote = document.querySelector('.quote');
const seasons = document.querySelector('.seasons');
const queenPic = document.querySelector('.queen-pic');

fetch(`http://www.nokeynoshade.party/api/queens/${createRandom()}`)
    .then(res => res.json())
    .then(data => {
        dragName.textContent = data.name;
        famousQuote.textContent = data.quote;
        // seasons.textContent = seasons[0].seasonNumber;
        queenPic.src = data.image_url;
        console.log(data);
        // console.log('seasons[0]: ', data.seasons[0]);
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })