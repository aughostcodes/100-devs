//Example fetch using DnD5eAPI - place subclasses in ul
let ul = document.querySelector('ul');
document.querySelector('button').addEventListener('click', getFetch);

function clearUl() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

function getFetch() {
    const choice = document.querySelector('input').value;
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

    clearUl();

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.index);
            console.log(data.subclasses);

            data.subclasses.forEach(obj => {
                console.log(obj.name);
                const li = document.createElement('li');
                li.textContent = obj.name;
                ul.appendChild(li);
            });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}