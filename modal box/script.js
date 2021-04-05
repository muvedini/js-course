'use strict';

const buttons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openModal);
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

closebtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});