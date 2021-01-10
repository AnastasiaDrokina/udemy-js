'use strict';
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);
console.log(document.querySelector('.message').textContent);
console.log((document.querySelector('.number').textContent = 13));
console.log((document.querySelector('.score').textContent = 10));
console.log(document.querySelector('.guess').value);
console.log((document.querySelector('.guess').value = 23));
