const keyArr = {
    Backquote : {
        en : '§',
        ru : 'ё',
        shiftEn : '±',
        shiftRu : 'Ё',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit1 : {
        en : '1',
        ru : '1',
        shiftEn : '!',
        shiftRu : '!',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit2 : {
        en : '2',
        ru : '2',
        shiftEn : '@',
        shiftRu : '"',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit3 : {
        en : '3',
        ru : '3',
        shiftEn : '#',
        shiftRu : '№',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit4 : {
        en : '4',
        ru : '4',
        shiftEn : '$',
        shiftRu : ';',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit5 : {
        en : '5',
        ru : '5',
        shiftEn : '%',
        shiftRu : '%',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit6 : {
        en : '6',
        ru : '6',
        shiftEn : '^',
        shiftRu : ':',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit7 : {
        en : '7',
        ru : '7',
        shiftEn : '&',
        shiftRu : '?',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit8 : {
        en : '8',
        ru : '8',
        shiftEn : '*',
        shiftRu : '*',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit9 : {
        en : '9',
        ru : '9',
        shiftEn : '(',
        shiftRu : '(',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Digit0 : {
        en : '0',
        ru : '0',
        shiftEn : ')',
        shiftRu : ')',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Minus: {
        en : '-',
        ru : '-',
        shiftEn : '_',
        shiftRu : '_',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Equal: {
        en : '=',
        ru : '=',
        shiftEn : '+',
        shiftRu : '+',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Backspace: {
        en : '<-',
        ru : '<-',
        shiftEn : '<-',
        shiftRu : '<-',
        keyType : ['key', 'functional', 'backspace'],
        Action : ['functional']
    },
    Tab: {
        en : 'Tab',
        ru : 'Tab',
        shiftEn : 'Tab',
        shiftRu : 'Tab',
        keyType : ['key', 'functional', 'backspace'],
        Action : ['functional']
    },
    KeyQ: {
        en : 'q',
        ru : 'й',
        shiftEn : 'Q',
        shiftRu : 'Й',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyW: {
        en : 'w',
        ru : 'ц',
        shiftEn : 'W',
        shiftRu : 'Ц',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyE: {
        en : 'e',
        ru : 'у',
        shiftEn : 'E',
        shiftRu : 'У',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyR: {
        en : 'r',
        ru : 'к',
        shiftEn : 'R',
        shiftRu : 'К',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyT: {
        en : 't',
        ru : 'е',
        shiftEn : 'T',
        shiftRu : 'Е',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyY: {
        en : 'y',
        ru : 'н',
        shiftEn : 'Y',
        shiftRu : 'Н',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyU: {
        en : 'u',
        ru : 'г',
        shiftEn : 'U',
        shiftRu : 'Г',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyI: {
        en : 'i',
        ru : 'ш',
        shiftEn : 'I',
        shiftRu : 'Ш',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyO: {
        en : 'o',
        ru : 'щ',
        shiftEn : 'O',
        shiftRu : 'Щ',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyP: {
        en : 'p',
        ru : 'з',
        shiftEn : 'P',
        shiftRu : 'З',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    BracketLeft: {
        en : '[',
        ru : 'х',
        shiftEn : '{',
        shiftRu : 'Х',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    BracketRight: {
        en : ']',
        ru : 'ъ',
        shiftEn : '}',
        shiftRu : 'Ъ',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Enter: {
        en : 'Ent',
        ru : 'Ent',
        shiftEn : 'Ent',
        shiftRu : 'Ent',
        keyType : ['key', 'functional', 'enter'],
        Action : ['functional']
    },
    CapsLock: {
        en : 'Caps',
        ru : 'Caps',
        shiftEn : 'Caps',
        shiftRu : 'Caps',
        keyType : ['key', 'functional', 'caps'],
        Action : ['functional']
    },
    KeyA: {
        en : 'a',
        ru : 'ф',
        shiftEn : 'A',
        shiftRu : 'Ф',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyS: {
        en : 's',
        ru : 'ы',
        shiftEn : 'S',
        shiftRu : 'Ы',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyD: {
        en : 'd',
        ru : 'в',
        shiftEn : 'D',
        shiftRu : 'В',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyF: {
        en : 'f',
        ru : 'а',
        shiftEn : 'F',
        shiftRu : 'А',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyG: {
        en : 'g',
        ru : 'п',
        shiftEn : 'G',
        shiftRu : 'П',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyH: {
        en : 'h',
        ru : 'р',
        shiftEn : 'H',
        shiftRu : 'Р',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyJ: {
        en : 'j',
        ru : 'о',
        shiftEn : 'J',
        shiftRu : 'О',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyK: {
        en : 'k',
        ru : 'л',
        shiftEn : 'K',
        shiftRu : 'Л',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    KeyL: {
        en : 'l',
        ru : 'д',
        shiftEn : 'L',
        shiftRu : 'Д',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Semicolon: {
        en : ';',
        ru : 'ж',
        shiftEn : ':',
        shiftRu : 'Ж',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Quote: {
        en : '\'',
        ru : 'э',
        shiftEn : '"',
        shiftRu : 'Э',
        keyType : ['key'],
        Action : ['key-symbol']
    },
    Backslash: {
        en : '\\',
        ru : '\\',
        shiftEn : '|',
        shiftRu : '/',
        keyType : ['key'],
        Action : ['key-symbol']
    },







};

export { keyArr };