'use strict';

let currScore0 = Number(document.querySelector('#current--0').textContent);
let count = 0;
// console.log(currScore0);
let currScore1 = Number(document.querySelector('#current--1').textContent);
// console.log(currScore1);
let score0 = Number(document.querySelector('#score--0').textContent);
let score1 = Number(document.querySelector('#score--1').textContent);

document.querySelector('.btn--roll').addEventListener('click', function () {
  //   console.log('rolled invoke');

  if (count % 2 == 0) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);

    console.log(diceNumber);

    if (diceNumber == 1) {
      document.querySelector('.dice').setAttribute('src', 'dice-1.png');
      currScore0 = 0;
    } else if (diceNumber == 2) {
      document.querySelector('.dice').setAttribute('src', 'dice-2.png');
      currScore0 = currScore0 + 2;
    } else if (diceNumber == 3) {
      document.querySelector('.dice').setAttribute('src', 'dice-3.png');
      currScore0 = currScore0 + 3;
    } else if (diceNumber == 4) {
      document.querySelector('.dice').setAttribute('src', 'dice-4.png');
      currScore0 = currScore0 + 4;
    } else if (diceNumber == 5) {
      document.querySelector('.dice').setAttribute('src', 'dice-5.png');
      currScore0 = currScore0 + 5;
    } else {
      document.querySelector('.dice').setAttribute('src', 'dice-6.png');
      currScore0 = currScore0 + 6;
    }
    document.querySelector('#current--0').textContent = currScore0;
    document.querySelector('#score--0').textContent =
      Number(document.querySelector('#score--0').textContent) + currScore0;
  } else {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);

    console.log(diceNumber);

    if (diceNumber == 1) {
      document.querySelector('.dice').setAttribute('src', 'dice-1.png');
      currScore1 = 0;
    } else if (diceNumber == 2) {
      document.querySelector('.dice').setAttribute('src', 'dice-2.png');
      currScore1 = currScore1 + 2;
    } else if (diceNumber == 3) {
      document.querySelector('.dice').setAttribute('src', 'dice-3.png');
      currScore1 = currScore1 + 3;
    } else if (diceNumber == 4) {
      document.querySelector('.dice').setAttribute('src', 'dice-4.png');
      currScore1 = currScore1 + 4;
    } else if (diceNumber == 5) {
      document.querySelector('.dice').setAttribute('src', 'dice-5.png');
      currScore1 = currScore1 + 5;
    } else {
      document.querySelector('.dice').setAttribute('src', 'dice-6.png');
      currScore1 = currScore1 + 6;
    }
    document.querySelector('#current--1').textContent = currScore1;
    document.querySelector('#score--1').textContent =
      Number(document.querySelector('#score--1').textContent) + currScore0;
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  document.querySelector('#current--0').textContent = String(0);
  count = count + 1;

  if (count % 2 == 0) {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    console.log('Player 0 is active');
  } else {
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    console.log('Player 1 is active');
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  count = 0;

  if (count % 2 == 0) {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  } else {
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
  }
});
