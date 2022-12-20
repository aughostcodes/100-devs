'use strict';

// https://pokeapi.co/docs/v2#resource-listspagination-section

// Variables
const searchBar = document.querySelector('#query');
const randomButton = document.querySelector('.random-button');
const searchButton = document.querySelector('.search-button');
const pokeName = document.querySelector('.poke-name');
let pokeType1 = document.querySelector('.poke-type1');
let pokeType2 = document.querySelector('.poke-type2');
const frontSprite = document.querySelector('.front-sprite');

// Create random number to find random mon
const createRandom = () => { 
    return Math.floor(Math.random() * 905) + 1; // 1126? How many mons are there, actually?
}

const grabTextFromSearch = () => {
    let query = searchBar.value;
    let regex = /'/g;
    let result = query.replace(regex, '');
    return result.toLowerCase();
}

// let fetchTheMon = () => fetch(`https://pokeapi.co/api/v2/pokemon/${createRandom()}`)
// .then(res => res.json())
// .then(data => {
//     pokeName.textContent = data.name.toUpperCase();
//     frontSprite.src = data.sprites.front_default;
//     pokeType1.textContent = data.types[0].type.name;
//     pokeType2.textContent = data.types[1].type.name;

//     console.log(data.types);
//     console.log(data);
// })
// .catch(err => {
//     console.log(`error ${err}`);
// });

let searchForPoke = () => fetch(`https://pokeapi.co/api/v2/pokemon/${grabTextFromSearch()}`)
.then(res => res.json())
.then(data => {
    pokeName.textContent = data.name.toUpperCase();
    frontSprite.src = data.sprites.front_default;
    pokeType1.textContent = data.types[0].type.name;
    pokeType2.textContent = data.types[1].type.name;

    console.log(data);
})
.catch(err => {
    console.log(`error ${err}`);
});


// randomButton.addEventListener('click', fetchTheMon);
searchButton.addEventListener('click', searchForPoke);