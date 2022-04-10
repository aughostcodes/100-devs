'use strict';

// 153 queens total, apparently, arranged by their werkroom entrances it seems

const createRandom = () => { 
    return Math.floor(Math.random() * 153) + 1; 
}
const dragName = document.querySelector('.drag-name');
const famousQuote = document.querySelector('.quote');
const seasons = document.querySelector('.seasons');
const queenPic = document.querySelector('.queen-pic');

fetch(`http://www.nokeynoshade.party/api/queens/30`)
    .then(res => res.json())
    .then(data => {
        dragName.textContent = data.name;
        famousQuote.textContent = data.quote;
        if (data.seasons.length > 1) {
            for (let i = 0; i < data.seasons.length; i++) {
                console.log(`${data.seasons[i].seasonNumber}`);
                let newDiv = document.createElement('div');
                newDiv.textContent = data.seasons[i].seasonNumber;
                seasons.appendChild(newDiv);
            }
        } else {
            seasons.textContent = `${data.seasons[0].seasonNumber}`;
        }
        // seasons.textContent = `Featured in season ${data.seasons[0].seasonNumber}`;
        queenPic.src = data.image_url;
        console.log(data);
        console.log('seasons: ', data.seasons.length);
        console.log(data.seasons[0].seasonNumber)
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })
