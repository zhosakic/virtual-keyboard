const keyArr = {
    Backquote : {
        en : '§',
        ru : 'ё',
        shiftEn : '±',
        shiftRu : 'Ё',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-ru'],
        CapsEn : '§',
        CapsRu : 'Ё'
    },
    Digit1 : {
        en : '1',
        ru : '1',
        shiftEn : '!',
        shiftRu : '!',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '',
        CapsRu : '1'

    },
    Digit2 : {
        en : '2',
        ru : '2',
        shiftEn : '@',
        shiftRu : '"',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '2',
        CapsRu : '2'
    },
    Digit3 : {
        en : '3',
        ru : '3',
        shiftEn : '#',
        shiftRu : '№',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '3',
        CapsRu : '3'
    },
    Digit4 : {
        en : '4',
        ru : '4',
        shiftEn : '$',
        shiftRu : ';',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '4',
        CapsRu : '4'
    },
    Digit5 : {
        en : '5',
        ru : '5',
        shiftEn : '%',
        shiftRu : '%',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '5',
        CapsRu : '5'
    },
    Digit6 : {
        en : '6',
        ru : '6',
        shiftEn : '^',
        shiftRu : ':',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '6',
        CapsRu : '6'
    },
    Digit7 : {
        en : '7',
        ru : '7',
        shiftEn : '&',
        shiftRu : '?',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '7',
        CapsRu : '7'
    },
    Digit8 : {
        en : '8',
        ru : '8',
        shiftEn : '*',
        shiftRu : '*',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '8',
        CapsRu : '8'
    },
    Digit9 : {
        en : '9',
        ru : '9',
        shiftEn : '(',
        shiftRu : '(',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '9',
        CapsRu : '9'
    },
    Digit0 : {
        en : '0',
        ru : '0',
        shiftEn : ')',
        shiftRu : ')',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '0',
        CapsRu : '0'
    },
    Minus: {
        en : '-',
        ru : '-',
        shiftEn : '_',
        shiftRu : '_',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '-',
        CapsRu : '-'
    },
    Equal: {
        en : '=',
        ru : '=',
        shiftEn : '+',
        shiftRu : '+',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '=',
        CapsRu : '='
    },
    Backspace: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'backspace'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    Tab: {
        en : '    ',
        ru : '    ',
        shiftEn : '    ',
        shiftRu : '    ',
        keyType : ['key', 'functional', 'tab'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    KeyQ: {
        en : 'q',
        ru : 'й',
        shiftEn : 'Q',
        shiftRu : 'Й',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'Q',
        CapsRu : 'Й'
    },
    KeyW: {
        en : 'w',
        ru : 'ц',
        shiftEn : 'W',
        shiftRu : 'Ц',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'W',
        CapsRu : 'Ц'
    },
    KeyE: {
        en : 'e',
        ru : 'у',
        shiftEn : 'E',
        shiftRu : 'У',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'E',
        CapsRu : 'У'
    },
    KeyR: {
        en : 'r',
        ru : 'к',
        shiftEn : 'R',
        shiftRu : 'К',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'R',
        CapsRu : 'К'
    },
    KeyT: {
        en : 't',
        ru : 'е',
        shiftEn : 'T',
        shiftRu : 'Е',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'T',
        CapsRu : 'Е'
    },
    KeyY: {
        en : 'y',
        ru : 'н',
        shiftEn : 'Y',
        shiftRu : 'Н',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'Y',
        CapsRu : 'Н'
    },
    KeyU: {
        en : 'u',
        ru : 'г',
        shiftEn : 'U',
        shiftRu : 'Г',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'U',
        CapsRu : 'Г'
    },
    KeyI: {
        en : 'i',
        ru : 'ш',
        shiftEn : 'I',
        shiftRu : 'Ш',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'I',
        CapsRu : 'Ш'
    },
    KeyO: {
        en : 'o',
        ru : 'щ',
        shiftEn : 'O',
        shiftRu : 'Щ',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'O',
        CapsRu : 'Щ'
    },
    KeyP: {
        en : 'p',
        ru : 'з',
        shiftEn : 'P',
        shiftRu : 'З',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'P',
        CapsRu : 'З'
    },
    BracketLeft: {
        en : '[',
        ru : 'х',
        shiftEn : '{',
        shiftRu : 'Х',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-ru'],
        CapsEn : '[',
        CapsRu : 'Х'
    },
    BracketRight: {
        en : ']',
        ru : 'ъ',
        shiftEn : '}',
        shiftRu : 'Ъ',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-ru'],
        CapsEn : ']',
        CapsRu : 'Ъ'
    },
    Enter: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'enter'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    CapsLock: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'caps'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    KeyA: {
        en : 'a',
        ru : 'ф',
        shiftEn : 'A',
        shiftRu : 'Ф',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'A',
        CapsRu : 'Ф'
    },
    KeyS: {
        en : 's',
        ru : 'ы',
        shiftEn : 'S',
        shiftRu : 'Ы',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'S',
        CapsRu : 'Ы'
    },
    KeyD: {
        en : 'd',
        ru : 'в',
        shiftEn : 'D',
        shiftRu : 'В',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'D',
        CapsRu : 'В'
    },
    KeyF: {
        en : 'f',
        ru : 'а',
        shiftEn : 'F',
        shiftRu : 'А',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'F',
        CapsRu : 'А'
    },
    KeyG: {
        en : 'g',
        ru : 'п',
        shiftEn : 'G',
        shiftRu : 'П',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'G',
        CapsRu : 'П'
    },
    KeyH: {
        en : 'h',
        ru : 'р',
        shiftEn : 'H',
        shiftRu : 'Р',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'H',
        CapsRu : 'Р'
    },
    KeyJ: {
        en : 'j',
        ru : 'о',
        shiftEn : 'J',
        shiftRu : 'О',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'J',
        CapsRu : 'О'
    },
    KeyK: {
        en : 'k',
        ru : 'л',
        shiftEn : 'K',
        shiftRu : 'Л',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'K',
        CapsRu : 'Л'
    },
    KeyL: {
        en : 'l',
        ru : 'д',
        shiftEn : 'L',
        shiftRu : 'Д',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'L',
        CapsRu : 'Д'
    },
    Semicolon: {
        en : ';',
        ru : 'ж',
        shiftEn : ':',
        shiftRu : 'Ж',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-ru'],
        CapsEn : ';',
        CapsRu : 'Ж'
    },
    Quote: {
        en : '\'',
        ru : 'э',
        shiftEn : '"',
        shiftRu : 'Э',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-ru'],
        CapsEn : '\'',
        CapsRu : 'Э'
    },
    Backslash: {
        en : '\\',
        ru : '\\',
        shiftEn : '|',
        shiftRu : '/',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '\\',
        CapsRu : '\\'
    },
    ShiftLeft: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'left-shift'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    IntlBackslash: {
        en : '`',
        ru : ']',
        shiftEn : '~',
        shiftRu : '[',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '`',
        CapsRu : ']'
    },
    KeyZ: {
        en : 'z',
        ru : 'я',
        shiftEn : 'Z',
        shiftRu : 'Я',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'Z',
        CapsRu : 'Я'
    },
    KeyX: {
        en : 'x',
        ru : 'ч',
        shiftEn : 'X',
        shiftRu : 'Ч',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'X',
        CapsRu : 'Ч'
    },
    KeyC: {
        en : 'c',
        ru : 'с',
        shiftEn : 'C',
        shiftRu : 'С',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'C',
        CapsRu : 'С'
    },
    KeyV: {
        en : 'v',
        ru : 'м',
        shiftEn : 'V',
        shiftRu : 'М',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'V',
        CapsRu : 'М'
    },
    KeyB: {
        en : 'b',
        ru : 'и',
        shiftEn : 'B',
        shiftRu : 'И',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'B',
        CapsRu : 'И'
    },
    KeyN: {
        en : 'n',
        ru : 'т',
        shiftEn : 'N',
        shiftRu : 'Т',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'N',
        CapsRu : 'Т'
    },
    KeyM: {
        en : 'm',
        ru : 'ь',
        shiftEn : 'M',
        shiftRu : 'Ь',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-en', 'caps-ru'],
        CapsEn : 'M',
        CapsRu : 'Ь'
    },
    Comma: {
        en : ',',
        ru : 'б',
        shiftEn : '<',
        shiftRu : 'Б',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-ru'],
        CapsEn : ',',
        CapsRu : 'Б'
    },
    Period: {
        en : '.',
        ru : 'ю',
        shiftEn : '>',
        shiftRu : 'Ю',
        keyType : ['key'],
        Action : ['key-symbol', 'caps-ru'],
        CapsEn : '.',
        CapsRu : 'Ю'
    },
    Slash: {
        en : '/',
        ru : '.',
        shiftEn : '?',
        shiftRu : ',',
        keyType : ['key'],
        Action : ['key-symbol'],
        CapsEn : '/',
        CapsRu : '.'
    },
    ShiftRight: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'right-shift'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    Lang: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'lang'],
        Action : ['change-lang'],
        CapsEn : '',
        CapsRu : ''
    },

    ControlLeft: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'left-control'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    AltLeft: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'alt'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    MetaLeft: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'cmd'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    Space: {
        en : ' ',
        ru : ' ',
        shiftEn : ' ',
        shiftRu : ' ',
        keyType : ['key', 'functional', 'space'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    MetaRight: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'cmd'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    AltRight: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'alt'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    ArrowLeft: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'arrow', 'arrow-left'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    ArrowDown: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'arrow', 'arrow-down'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    ArrowUp: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'arrow', 'arrow-up'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },
    ArrowRight: {
        en : '',
        ru : '',
        shiftEn : '',
        shiftRu : '',
        keyType : ['key', 'functional', 'arrow', 'arrow-right'],
        Action : ['functional'],
        CapsEn : '',
        CapsRu : ''
    },

};

export { keyArr };