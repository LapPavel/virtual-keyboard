const keyboard = [
  {
    code: 'Backquote',
    func: false,
    lang: { en: '`', ru: 'ё' },
  },
  {
    code: 'Digit1',
    func: false,
    lang: { en: '1', ru: '1' },
  },
  {
    code: 'Digit2',
    func: false,
    lang: { en: '2', ru: '2' },
  },
  {
    code: 'Digit3',
    func: false,
    lang: { en: '3', ru: '3' },
  },
  {
    code: 'Digit4',
    func: false,
    lang: { en: '4', ru: '4' },
  },
  {
    code: 'Digit5',
    func: false,
    lang: { en: '5', ru: '5' },
  },
  {
    code: 'Digit6',
    func: false,
    lang: { en: '6', ru: '6' },
  },
  {
    code: 'Digit7',
    func: false,
    lang: { en: '7', ru: '7' },
  },
  {
    code: 'Digit8',
    func: false,
    lang: { en: '8', ru: '8' },
  },
  {
    code: 'Digit9',
    func: false,
    lang: { en: '9', ru: '9' },
  },
  {
    code: 'Digit0',
    func: false,
    lang: { en: '0', ru: '0' },
  },
  {
    code: 'Minus',
    func: false,
    lang: { en: '-', ru: '-' },
  },
  {
    code: 'Equal',
    func: false,
    lang: { en: '=', ru: '=' },
  },
  {
    code: 'Backspace',
    func: 'backspace',
    lang: { en: '&#9003;', ru: '&#9003;' },
  },
  {
    code: 'Tab',
    func: 'tab',
    lang: { en: '&#11134; Tab', ru: '&#11134; Tab' },
  },
  {
    code: 'KeyQ',
    func: false,
    lang: { en: 'q', ru: 'й' },
  },
  {
    code: 'KeyW',
    func: false,
    lang: { en: 'w', ru: 'ц' },
  },
  {
    code: 'KeyE',
    func: false,
    lang: { en: 'e', ru: 'у' },
  },
  {
    code: 'KeyR',
    func: false,
    lang: { en: 'r', ru: 'к' },
  },
  {
    code: 'KeyT',
    func: false,
    lang: { en: 't', ru: 'е' },
  },
  {
    code: 'KeyY',
    func: false,
    lang: { en: 'y', ru: 'н' },
  },
  {
    code: 'KeyU',
    func: false,
    lang: { en: 'u', ru: 'г' },
  },
  {
    code: 'KeyI',
    func: false,
    lang: { en: 'i', ru: 'ш' },
  },
  {
    code: 'KeyO',
    func: false,
    lang: { en: 'o', ru: 'щ' },
  },
  {
    code: 'KeyP',
    func: false,
    lang: { en: 'p', ru: 'з' },
  },
  {
    code: 'BracketLeft',
    func: false,
    lang: { en: '[', ru: 'х' },
  },
  {
    code: 'BracketRight',
    func: false,
    lang: { en: ']', ru: 'ъ' },
  },
  {
    code: 'Backslash',
    func: false,
    lang: { en: '\\', ru: '\\' },
  },
  {
    code: 'Delete',
    func: 'del',
    lang: { en: 'Del', ru: 'Del' },
  },
  {
    code: 'CapsLock',
    func: 'capslock',
    lang: { en: 'Caps', ru: 'Caps' },
  },
  {
    code: 'KeyA',
    func: false,
    lang: { en: 'a', ru: 'ф' },
  },
  {
    code: 'KeyS',
    func: false,
    lang: { en: 's', ru: 'ы' },
  },
  {
    code: 'KeyD',
    func: false,
    lang: { en: 'd', ru: 'в' },
  },
  {
    code: 'KeyF',
    func: false,
    lang: { en: 'f', ru: 'а' },
  },
  {
    code: 'KeyG',
    func: false,
    lang: { en: 'g', ru: 'п' },
  },
  {
    code: 'KeyH',
    func: false,
    lang: { en: 'h', ru: 'р' },
  },
  {
    code: 'KeyJ',
    func: false,
    lang: { en: 'j', ru: 'о' },
  },
  {
    code: 'KeyK',
    func: false,
    lang: { en: 'k', ru: 'л' },
  },
  {
    code: 'KeyL',
    func: false,
    lang: { en: 'l', ru: 'д' },
  },
  {
    code: 'Semicolon',
    func: false,
    lang: { en: ';', ru: 'ж' },
  },
  {
    code: 'Quote',
    func: false,
    lang: { en: "'", ru: 'э' },
  },
  {
    code: 'Enter',
    func: 'enter',
    lang: { en: '&#9166;  Enter', ru: '&#9166;  Enter' },
  },
  {
    code: 'ShiftLeft',
    func: 'shift',
    lang: { en: '&#8679;  Shift', ru: '&#8679;  Shift' },
  },
  {
    code: 'KeyZ',
    func: false,
    lang: { en: 'z', ru: 'я' },
  },
  {
    code: 'KeyX',
    func: false,
    lang: { en: 'x', ru: 'ч' },
  },
  {
    code: 'KeyC',
    func: false,
    lang: { en: 'c', ru: 'с' },
  },
  {
    code: 'KeyV',
    func: false,
    lang: { en: 'v', ru: 'м' },
  },
  {
    code: 'KeyB',
    func: false,
    lang: { en: 'b', ru: 'и' },
  },
  {
    code: 'KeyN',
    func: false,
    lang: { en: 'n', ru: 'т' },
  },
  {
    code: 'KeyM',
    func: false,
    lang: { en: 'm', ru: 'ь' },
  },
  {
    code: 'Comma',
    func: false,
    lang: { en: ',', ru: 'б' },
  },
  {
    code: 'Period',
    func: false,
    lang: { en: '.', ru: 'ю' },
  },
  {
    code: 'Slash',
    func: false,
    lang: { en: '/', ru: '.' },
  },
  {
    code: 'ArrowUp',
    func: 'arrowup',
    lang: { en: '⯅', ru: '⯅' },
  },
  {
    code: 'ShiftRight',
    func: 'shift',
    lang: { en: 'Shift &#8679;', ru: 'Shift &#8679;' },
  },
  {
    code: 'ControlLeft',
    func: 'ctrl leftctrl',
    lang: { en: 'Ctrl', ru: 'Ctrl' },
  },
  {
    code: 'MetaLeft',
    func: 'meta',
    lang: { en: '&#8862;', ru: '&#8862;' },
  },
  {
    code: 'AltLeft',
    func: 'alt',
    lang: { en: 'Alt', ru: 'Alt' },
  },
  {
    code: 'Space',
    func: false,
    lang: { en: ' ', ru: ' ' },
  },
  {
    code: 'AltRight',
    func: 'alt',
    lang: { en: 'Alt', ru: 'Alt' },
  },
    {
    code: 'ArrowLeft',
    func: 'arrowleft',
    lang: { en: '⯇', ru: '⯇' },
  },
  {
    code: 'ArrowDown',
    func: 'arrowdown',
    lang: { en: '⯆', ru: '⯆' },
  },
  {
    code: 'ArrowRight',
    func: 'arrowrigth',
    lang: { en: '⯈', ru: '⯈' },
  },
  {
    code: 'ControlRight',
    func: 'ctrl',
    lang: { en: 'Ctrl', ru: 'Ctrl' },
  },
];

export default { keyboard };
