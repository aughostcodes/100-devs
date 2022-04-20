const url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs/random`;
const fetchDinoButton = document.querySelector('.fetch-dino');

fetchDinoButton.addEventListener('click', fetchDino);

function fetchDino() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}
