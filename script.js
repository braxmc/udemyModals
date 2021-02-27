'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtns = document.querySelectorAll('.show-modal');

// adds hidden class, closes modals
function addHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// removes hidden class, opens modals
function removeHidden() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

console.log(openBtns)
// loops through modals
for(let i = 0; i < openBtns.length; i++) {
  // opens modals
  openBtns[i].addEventListener('click', removeHidden);

  // closes modals
  closeBtn.addEventListener('click', addHidden);
  overlay.addEventListener('click', addHidden);
};