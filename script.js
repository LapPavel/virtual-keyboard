import { keyboardValues, keyboardKeys } from './keyboard.js';

let lang = 'en';
let caps = false;
console.log(keyboardValues);

function createPage() {
  const bodyPage = document.querySelector('.body');
  const title = document.createElement('h1');
  const textarea = document.createElement('textarea');
  const info = document.createElement('p');
  const language = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'Виртуальная клавиатура';
  textarea.classList.add('textarea');
  keyboardKeys.classList.add('keyboard-body');
  info.classList.add('info');
  info.textContent = 'Клавиатура создана в операционной системе Windows';
  language.classList.add('language');
  language.textContent = 'Для переключения языка комбинация: левыe Ctrl + Alt';
  bodyPage.append(title, textarea, keyboardKeys, info, language);
}
createPage();

const textarea = document.querySelector('.textarea');
const funBtn = '.shift, .enter, .backspace, .capslock, .leftctrl, .tab, .ctrl, .alt, .del';

function changeShift(shiftKey) {
  const whichCase = (caps && !shiftKey) || (!caps && shiftKey) ? 'toUpperCase' : 'toLowerCase';
  Array.from(document.querySelectorAll('.key')).forEach((el) => {
    if (!keyboardValues[el.id].func) {
      if (Object.hasOwn(keyboardValues[el.id], 'altvalue')) {
        const l = el;
        l.textContent = shiftKey
          ? keyboardValues[el.id].altvalue[lang]
          : keyboardValues[el.id][lang];
      } else {
        const l = el;
        l.textContent = l.textContent[whichCase]();
      }
    }
  });
}

document.addEventListener('keydown', (event) => {
  // event.preventDefault();
  const key = document.querySelector(`#${event.code}`);
  if (!key) {
    return;
  }
  if (event.key === 'CapsLock') {
    caps = event.getModifierState('CapsLock');
    const capsStatus = caps ? 'add' : 'remove';
    key.classList[capsStatus]('key_active');
    changeShift(event.shiftKey);
    /* const shift = document.querySelectorAll('.shift');
    shift[event.location - 1].classList.add('key_active');
    const keys = document.querySelectorAll(`.key:not(${funBtn})`);
    keys.forEach((el) => {
      const l = el;
      l.textContent = l.textContent.toUpperCase();
    }); */
  } else {
    key.classList.add('key_active');
    textarea.textContent += key.textContent;
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
