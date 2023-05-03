import { keyboardValues, keyboardKeys } from './keyboard.js';

let lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
let caps = false;

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
const keysShift = document.querySelectorAll('.shift');

function changeShift(shiftKey) {
  const whichCase = (caps && !shiftKey) || (!caps && shiftKey) ? 'toUpperCase' : 'toLowerCase';
  Array.from(document.querySelectorAll('.key')).forEach((el) => {
    if (!keyboardValues[el.id].func) {
      if (Object.hasOwn(keyboardValues[el.id], 'altvalue')) {
        const l = el;
        l.textContent = shiftKey
          ? keyboardValues[el.id].altvalue[lang][whichCase]()
          : keyboardValues[el.id][lang][whichCase]();
      } else {
        const l = el;
        l.textContent = l.textContent[whichCase]();
      }
    }
  });
}

function addChar(str) {
  const position = textarea.selectionStart;
  const text = textarea.value;
  textarea.value = text.slice(0, position) + str + text.slice(textarea.selectionEnd);
  textarea.selectionStart = position + str.length;
  textarea.selectionEnd = textarea.selectionStart;
}

function delChar() {
  if (textarea.selectionStart !== textarea.selectionEnd) {
    addChar('');
  } else {
    const position = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, position) + textarea.value.slice(position + 1);
    textarea.selectionStart = position;
    textarea.selectionEnd = textarea.selectionStart;
  }
}

function eraseChar() {
  if (textarea.selectionStart !== textarea.selectionEnd) {
    addChar('');
  } else {
    const position = textarea.selectionStart - 1;
    const text = textarea.value;
    textarea.value = text.slice(0, position) + text.slice(textarea.selectionEnd);
    textarea.selectionStart = position;
    textarea.selectionEnd = textarea.selectionStart;
  }
}

function changeLanguage(shift = false) {
  Array.from(document.querySelectorAll('.key')).forEach((el) => {
    const l = el;
    l.textContent = keyboardValues[el.id][lang];
  });
  changeShift(shift);
}

changeLanguage();

document.addEventListener('keydown', (event) => {
  event.stopImmediatePropagation();
  const key = document.getElementById(event.code);
  textarea.focus();
  if (!key) {
    event.preventDefault();
    return;
  }

  if (event.code === 'CapsLock' && !event.repeat) {
    caps = !caps;
    const capsStatus = caps ? 'add' : 'remove';
    key.classList[capsStatus]('key_active');
    changeShift(event.shiftKey);
  } else {
    key.classList.add('key_active');
    if (!keyboardValues[event.code].func) {
      event.preventDefault();
      addChar(key.textContent);
    } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      event.preventDefault();
      changeShift(event.shiftKey);
    } else if (event.code === 'Backspace') {
      event.preventDefault();
      eraseChar();
    } else if (event.code === 'Tab') {
      event.preventDefault();
      addChar('\t');
    } else if (event.code === 'Enter') {
      event.preventDefault();
      addChar('\n');
    } else if (event.code === 'Delete') {
      event.preventDefault();
      delChar();
    } else if (event.code === 'Space') {
      event.preventDefault();
      addChar(' ');
    } else if (event.ctrlKey && event.altKey && !event.repeat) {
      event.preventDefault();
      lang = lang === 'ru' ? 'en' : 'ru';
      localStorage.setItem('lang', lang);
      changeLanguage(event.shiftKey);
    }
  }
});

document.addEventListener('keyup', (event) => {
  event.stopImmediatePropagation();

  const key = document.getElementById(event.code);
  if (!key) {
    event.preventDefault();
    return;
  }

  if (event.code !== 'CapsLock') {
    key.classList.remove('key_active');
    if (event.key === 'Shift') {
      event.preventDefault();
      changeShift(event.shiftKey);
    }
  }
});

keyboardKeys.addEventListener('click', (event) => {
  if (event.target.classList.contains('shift')) {
    const shift = !event.target.classList.contains('key_active');
    changeShift(shift);
    keysShift.forEach((el) => el.classList[shift ? 'add' : 'remove']('key_active'));
  } else {
    const option = {
      bubbles: true,
      code: event.target.id,
    };
    if ([...keysShift].find((el) => el.classList.contains('key_active'))) {
      option.shiftKey = true;
    }
    const pressKeyDown = new KeyboardEvent('keydown', option);
    keyboardKeys.dispatchEvent(pressKeyDown);
    const pressKeyUp = new KeyboardEvent('keyup', option);
    keyboardKeys.dispatchEvent(pressKeyUp);
  }
});
