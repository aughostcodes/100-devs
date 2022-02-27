let button = document.getElementById('check');
let inputWindow = document.querySelector('#placeToSee');

check.addEventListener('click', checkClick);
// check.addEventListener('keyup', function(e) {
//   if (Element.keyCode === 13) {
//     checkClick();
//   }
// });

function checkClick() {
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