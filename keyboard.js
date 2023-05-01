const keyboard = [
  {
    code: 'Backquote',
    func: false,
    value: { en: '`', ru: 'ё' },
    altvalue: { en: '~', ru: 'Ё' },
  },
  {
    code: 'Digit1',
    func: false,
    value: { en: '1', ru: '1' },
    altvalue: { en: '!', ru: '!' },
  },
  {
    code: 'Digit2',
    func: false,
    value: { en: '2', ru: '2' },
    altvalue: { en: '@', ru: '"' },
  },
  {
    code: 'Digit3',
    func: false,
    value: { en: '3', ru: '3' },
    altvalue: { en: '#', ru: '№' },
  },
  {
    code: 'Digit4',
    func: false,
    value: { en: '4', ru: '4' },
    altvalue: { en: '$', ru: ';' },
  },
  {
    code: 'Digit5',
    func: false,
    value: { en: '5', ru: '5' },
    altvalue: { en: '%', ru: '%' },
  },
  {
    code: 'Digit6',
    func: false,
    value: { en: '6', ru: '6' },
    altvalue: { en: '^', ru: ':' },
  },
  {
    code: 'Digit7',
    func: false,
    value: { en: '7', ru: '7' },
    altvalue: { en: '&', ru: '?' },
  },
  {
    code: 'Digit8',
    func: false,
    value: { en: '8', ru: '8' },
    altvalue: { en: '*', ru: '*' },
  },
  {
    code: 'Digit9',
    func: false,
    value: { en: '9', ru: '9' },
    altvalue: { en: '(', ru: '(' },
  },
  {
    code: 'Digit0',
    func: false,
    value: { en: '0', ru: '0' },
    altvalue: { en: ')', ru: ')' },
  },
  {
    code: 'Minus',
    func: false,
    value: { en: '-', ru: '-' },
    altvalue: { en: '_', ru: '_' },
  },
  {
    code: 'Equal',
    func: false,
    value: { en: '=', ru: '=' },
    altvalue: { en: '+', ru: '+' },
  },
  {
    code: 'Backspace',
    func: 'backspace',
    value: { en: '⌫', ru: '⌫' },
  },
  {
    code: 'Tab',
    func: 'tab',
    value: { en: '⭾ Tab', ru: '⭾ Tab' },
  },
  {
    code: 'KeyQ',
    func: false,
    value: { en: 'q', ru: 'й' },
  },
  {
    code: 'KeyW',
    func: false,
    value: { en: 'w', ru: 'ц' },
  },
  {
    code: 'KeyE',
    func: false,
    value: { en: 'e', ru: 'у' },
  },
  {
    code: 'KeyR',
    func: false,
    value: { en: 'r', ru: 'к' },
  },
  {
    code: 'KeyT',
    func: false,
    value: { en: 't', ru: 'е' },
  },
  {
    code: 'KeyY',
    func: false,
    value: { en: 'y', ru: 'н' },
  },
  {
    code: 'KeyU',
    func: false,
    value: { en: 'u', ru: 'г' },
  },
  {
    code: 'KeyI',
    func: false,
    value: { en: 'i', ru: 'ш' },
  },
  {
    code: 'KeyO',
    func: false,
    value: { en: 'o', ru: 'щ' },
  },
  {
    code: 'KeyP',
    func: false,
    value: { en: 'p', ru: 'з' },
  },
  {
    code: 'BracketLeft',
    func: false,
    value: { en: '[', ru: 'х' },
    altvalue: { en: '{', ru: 'Х' },
  },
  {
    code: 'BracketRight',
    func: false,
    value: { en: ']', ru: 'ъ' },
    altvalue: { en: '}', ru: 'Ъ' },
  },
  {
    code: 'Backslash',
    func: false,
    value: { en: '\\', ru: '\\' },
    altvalue: { en: '|', ru: '/' },
  },
  {
    code: 'Delete',
    func: 'del',
    value: { en: 'Del', ru: 'Del' },
  },
  {
    code: 'CapsLock',
    func: 'capslock',
    value: { en: 'Caps Lock', ru: 'Caps Lock' },
  },
  {
    code: 'KeyA',
    func: false,
    value: { en: 'a', ru: 'ф' },
  },
  {
    code: 'KeyS',
    func: false,
    value: { en: 's', ru: 'ы' },
  },
  {
    code: 'KeyD',
    func: false,
    value: { en: 'd', ru: 'в' },
  },
  {
    code: 'KeyF',
    func: false,
    value: { en: 'f', ru: 'а' },
  },
  {
    code: 'KeyG',
    func: false,
    value: { en: 'g', ru: 'п' },
  },
  {
    code: 'KeyH',
    func: false,
    value: { en: 'h', ru: 'р' },
  },
  {
    code: 'KeyJ',
    func: false,
    value: { en: 'j', ru: 'о' },
  },
  {
    code: 'KeyK',
    func: false,
    value: { en: 'k', ru: 'л' },
  },
  {
    code: 'KeyL',
    func: false,
    value: { en: 'l', ru: 'д' },
  },
  {
    code: 'Semicolon',
    func: false,
    value: { en: ';', ru: 'ж' },
    altvalue: { en: ':', ru: 'Ж' },
  },
  {
    code: 'Quote',
    func: false,
    value: { en: "'", ru: 'э' },
    altvalue: { en: '"', ru: 'Э' },
  },
  {
    code: 'Enter',
    func: 'enter',
    value: { en: '⏎  Enter', ru: '⏎  Enter' },
  },
  {
    code: 'ShiftLeft',
    func: 'shift',
    value: { en: '⇧  Shift', ru: '⇧  Shift' },
  },
  {
    code: 'KeyZ',
    func: false,
    value: { en: 'z', ru: 'я' },
  },
  {
    code: 'KeyX',
    func: false,
    value: { en: 'x', ru: 'ч' },
  },
  {
    code: 'KeyC',
    func: false,
    value: { en: 'c', ru: 'с' },
  },
  {
    code: 'KeyV',
    func: false,
    value: { en: 'v', ru: 'м' },
  },
  {
    code: 'KeyB',
    func: false,
    value: { en: 'b', ru: 'и' },
  },
  {
    code: 'KeyN',
    func: false,
    value: { en: 'n', ru: 'т' },
  },
  {
    code: 'KeyM',
    func: false,
    value: { en: 'm', ru: 'ь' },
  },
  {
    code: 'Comma',
    func: false,
    value: { en: ',', ru: 'б' },
    altvalue: { en: '<', ru: 'Б' },
  },
  {
    code: 'Period',
    func: false,
    value: { en: '.', ru: 'ю' },
    altvalue: { en: '>', ru: 'Ю' },
  },
  {
    code: 'Slash',
    func: false,
    value: { en: '/', ru: '.' },
    altvalue: { en: '?', ru: ',' },
  },
  {
    code: 'ArrowUp',
    func: false,
    value: { en: '⯅', ru: '⯅' },
  },
  {
    code: 'ShiftRight',
    func: 'shift',
    value: { en: 'Shift ⇧', ru: 'Shift ⇧' },
  },
  {
    code: 'ControlLeft',
    func: 'leftctrl',
    value: { en: 'Ctrl', ru: 'Ctrl' },
  },
  {
    code: 'MetaLeft',
    func: 'meta',
    value: { en: '⊞', ru: '⊞' },
  },
  {
    code: 'AltLeft',
    func: 'alt',
    value: { en: 'Alt', ru: 'Alt' },
  },
  {
    code: 'Space',
    func: 'space',
    value: { en: ' ', ru: ' ' },
  },
  {
    code: 'AltRight',
    func: 'alt',
    value: { en: 'Alt', ru: 'Alt' },
  },
  {
    code: 'ArrowLeft',
    func: false,
    value: { en: '⯇', ru: '⯇' },
  },
  {
    code: 'ArrowDown',
    func: false,
    value: { en: '⯆', ru: '⯆' },
  },
  {
    code: 'ArrowRight',
    func: false,
    value: { en: '⯈', ru: '⯈' },
  },
  {
    code: 'ControlRight',
    func: 'ctrl',
    value: { en: 'Ctrl', ru: 'Ctrl' },
  },
];

const keyboardValues = {};

const keyboardKeys = document.createElement('div');
keyboard.forEach((el) => {
  keyboardValues[el.code] = el.value;
  keyboardValues[el.code].func = el.func;
  if (Object.hasOwn(el, 'altvalue')) {
    keyboardValues[el.code].altvalue = el.altvalue;
  }
  const key = document.createElement('div');
  key.textContent = el.value.en;
  key.id = el.code;
  key.classList.add('key');
  if (el.func) key.classList.add(el.func);
  keyboardKeys.appendChild(key);
});

export { keyboardValues, keyboardKeys };
