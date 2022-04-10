'use strict';

// https://pokeapi.co/docs/v2#resource-listspagination-section

// Variables
const goButton = document.querySelector('.go-button');
const pokeName = document.querySelector('.poke-name');
let pokeType1 = document.querySelector('.poke-type1');
let pokeType2 = document.querySelector('.poke-type2');
const frontSprite = document.querySelector('.front-sprite');

// Create random number to find random mon
const createRandom = () => { 
    return Math.floor(Math.random() * 905) + 1; // 1126? How many mons are there, actually?
}

let fetchTheMon = () => fetch(`https://pokeapi.co/api/v2/pokemon/${createRandom()}`)
.then(res => res.json())
.then(data => {
    pokeName.textContent = data.name.toUpperCase();
    frontSprite.src = data.sprites.front_default;
    pokeType1.textContent = data.types[0].type.name;
    pokeType2.textContent = data.types[1].type.name;

    console.log(data.types);
    console.log(data);
})
.catch(err => {
    console.log(`error ${err}`);
});



goButton.addEventListener('click', fetchTheMon);