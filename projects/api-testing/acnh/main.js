'use strict'

const villagerName = document.querySelector('.villagerName');
const catchphrase = document.querySelector('.catchphrase');
const birthday = document.querySelector('.birthday');

const createRandom = () => { 
    return Math.floor(Math.random() * 391) + 1;
}

fetch(`https://acnhapi.com/v1/villagers/${createRandom()}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        villagerName.textContent = data.ant00.name["name-USen"];
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })