'use strict';

// 153 queens total, apparently, arranged by their werkroom entrances it seems

const createRandom = () => { 
    return Math.floor(Math.random() * 153) + 1; 
}
const dragName = document.querySelector('.drag-name');
const famousQuote = document.querySelector('.quote');

fetch(`http://www.nokeynoshade.party/api/queens/all`)
    .then(res => res.json())
    .then(data => {
        console.log([createRandom].id);
        console.log(data);
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })