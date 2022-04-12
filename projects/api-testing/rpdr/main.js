'use strict';

// 153 queens total, apparently, arranged by their werkroom entrances it seems

const createRandom = () => { 
    return Math.floor(Math.random() * 153) + 1; 
}
const dragName = document.querySelector('.drag-name');
const famousQuote = document.querySelector('.quote');
const seasons = document.querySelector('.seasons');
const queenPic = document.querySelector('.queen-pic');
const seasonsHeader = document.querySelector('.seasons-header');

fetch(`http://www.nokeynoshade.party/api/queens/19`)
    .then(res => res.json())
    .then(data => {
        dragName.textContent = data.name;
        famousQuote.textContent = data.quote;
        if (data.seasons.length > 1) {
            seasonsHeader.textContent = 'Appears in seasons:';
            for (let i = 0; i < data.seasons.length; i++) {
                console.log(`${data.seasons[i].seasonNumber}`);
                let newDiv = document.createElement('div');
                newDiv.textContent = data.seasons[i].seasonNumber;
                seasons.appendChild(newDiv);
            }
        } else if (data.seasons.length <= 1) {
            seasonsHeader.textContent = 'Appears in season:';
            seasons.textContent = `${data.seasons[0].seasonNumber}`;
        }
        // seasons.textContent = `Featured in season ${data.seasons[0].seasonNumber}`;
        queenPic.src = data.image_url;
        console.log(data);
        console.log('seasons: ', data.seasons.length);
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })
