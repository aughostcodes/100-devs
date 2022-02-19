document.querySelector('#check').addEventListener('click', check);
let inputWindow = document.querySelector('#placeToSee');

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here

  if (day === 'tuesday' || day === 'thursday') {
    inputWindow.textContent = 'CLASS DAY!';
  } else if (day === 'saturday' || day === 'sunday') {
    inputWindow.textContent = 'WEEKEND!';
  } else {
    inputWindow.textContent = 'Lame ass day.';
  }

}