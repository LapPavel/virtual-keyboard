import keyboard from './keyboard.js';

const textarea = document.querySelector('.textarea');
const funBtn = '.shift, .enter, .backspace, .capslock, .leftctrl, .tab, .ctrl, .alt, .del';
console.log(keyboard);
document.addEventListener('keydown', (event) => {
  // event.preventDefault();
  console.log(event.code);
  if (event.key === 'Shift') {
    const shift = document.querySelectorAll('.shift');
    shift[event.location - 1].classList.add('key_active');
    const arr = document.querySelectorAll(`.key:not(${funBtn})`);
    arr.forEach((el) => {
      const l = el;
      l.textContent = l.textContent.toUpperCase();
    });
    console.log(event.code);
    console.log(event.location);
  } else {
    const arr = document.querySelectorAll('.key');
    console.log(event.key);
    const btn = arr[Array.from(arr).findIndex((el) => el.textContent === event.key)];
    btn.classList.add('key_active');
    textarea.textContent += btn.textContent;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    const shift = document.querySelectorAll('.shift');
    shift[event.location - 1].classList.remove('key_active');
    const arr = document.querySelectorAll(`.key:not(${funBtn})`);
    arr.forEach((el) => {
      const l = el;
      l.textContent = l.textContent.toLowerCase();
    });
  } else {
    const arr = document.querySelectorAll('.key');
    const btn = arr[Array.from(arr).findIndex((el) => el.textContent === event.key)];
    btn.classList.remove('key_active');
  }
});
