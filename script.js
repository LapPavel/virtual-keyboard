import keyboard from './keyboard.js';

let lang = 'en';

function createPage() {
  const bodyPage = document.querySelector('.body');
  const title = document.createElement('h1');
  const textarea = document.createElement('textarea');
  const keyboardBody = document.createElement('div');
  const info = document.createElement('p');
  const language = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'Виртуальная клавиатура';
  textarea.classList.add('textarea');
  keyboardBody.classList.add('keyboard-body');
  keyboard.keyboard.forEach((el) => {
    const key = document.createElement('div');
    key.textContent = el.lang[lang];
    key.classList.add('key', el.code);
    if (el.func) key.classList.add(el.func);
    keyboardBody.appendChild(key);
  });
  info.classList.add('info');
  info.textContent = 'Клавиатура создана в операционной системе Windows';
  language.classList.add('language');
  language.textContent = 'Для переключения языка комбинация: левыe Ctrl + Alt';
  bodyPage.append(title, textarea, keyboardBody, info, language);
}
createPage();

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
