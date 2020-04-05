import { keyArr } from "./KeyArray";
import { currentStateLang as currentState} from "./ChangeLanguage";
import { changeLanguage } from "./ChangeLanguage";




export function eventHanding() {

    let currentStateLang = currentState;
    let capsLockActive = false;
    let arrowType;

    const KEY_PRESS = document.querySelectorAll('.key');
    const INPUT_TEXT = document.querySelector('.key-value');
    const STANDARD_KEYS = document.querySelectorAll('.key-symbol');
    const CAPS_LOCK_RU = document.querySelectorAll('.caps-ru');
    const CAPS_LOCK_EN = document.querySelectorAll('.caps-en');
    const CAPS_LOCK_KEY = document.querySelector('.caps');

    //Нажатие клавиши вниз
    document.addEventListener('keydown', function(event) {

        event.preventDefault();

        let pressKeyCode = event.code;

        KEY_PRESS.forEach(event => {
            let activeKey = event.getAttribute('data-code');
            if (pressKeyCode === activeKey) {
                event.classList.add('active');
            }
        });

        if (pressKeyCode === 'ShiftLeft' || pressKeyCode === 'ShiftRight') {

            if (currentStateLang === 'ru' || currentStateLang === 'shiftRu') {
                currentStateLang = 'shiftRu';
            } else {
                currentStateLang = 'shiftEn';
            }

            //Смена клавиш при нажатии на шифт
            updateKeysSymbol();

            //Проверяем если CapsLock включён и нажимаем шифт надо снова взвести CapLock
            if (capsLockActive) {
                if (currentStateLang === 'ru' || currentStateLang === 'shiftRu') {
                    currentStateLang = 'shiftRu';
                } else {
                    currentStateLang = 'shiftEn';
                }
                updateKeysSymbolCapsLock();
            }
        }


        if (pressKeyCode === 'Backspace') {
            let test = INPUT_TEXT.innerHTML.split('');
            let result = test.pop();
            INPUT_TEXT.innerHTML = test.join('');
        } else {
            INPUT_TEXT.innerHTML = INPUT_TEXT.innerHTML + keyArr[pressKeyCode][currentStateLang];
        }

        //Отрабатываем включение CapsLock
        if (pressKeyCode === 'CapsLock') {
            capsLockActive = !capsLockActive;
            if (capsLockActive) {
                pressKeyCode = 'ShiftLeft';
                if (currentStateLang === 'ru') {
                    currentStateLang = 'CapsRu';
                } else {
                    currentStateLang = 'CapsEn';
                }
                updateKeysSymbolCapsLock();
            }
        }

        //Обрабатываем нажатие стрелок.
        if (pressKeyCode === 'ArrowRight' ||
            pressKeyCode === 'ArrowUp'||
            pressKeyCode === 'ArrowDown' ||
            pressKeyCode === 'ArrowLeft') {

             arrowType = pressKeyCode;

            arrowKeyPress(arrowType);
        }

        //Переключение языка
        if (pressKeyCode === 'AltLeft') {
            if (event.ctrlKey) {
                switchLanguage(currentStateLang);
            }
        }
    });

    //Отпускание клавиши
    document.addEventListener('keyup', function(event) {
        let pressKeyCode = event.code;

        KEY_PRESS.forEach(event => {
            let activeKey = event.getAttribute('data-code');
            if (pressKeyCode === activeKey) {
                event.classList.remove('active');
            }
        });

        if (pressKeyCode === 'ShiftLeft' || pressKeyCode === 'ShiftRight') {
            if (currentStateLang === 'shiftRu') {
                currentStateLang = 'ru';
            } else {
                currentStateLang = 'en';
            }
            //Смена клавиш при нажатии на шифт
            updateKeysSymbol();

            //Проверяем если CapsLock включён и нажимаем шифт надо снова взвести CapLock
            if (capsLockActive) {
                if (currentStateLang === 'ru') {
                    currentStateLang = 'shiftRu';
                } else {
                    currentStateLang = 'shiftEn';
                }
                updateKeysSymbolCapsLock();
            }
        }

        //Отрабатывает отключение CapsLock
        if (pressKeyCode === 'CapsLock') {
            capsLockActive = !capsLockActive;
            if (!capsLockActive) {
                pressKeyCode = '';
                if (currentStateLang === 'CapsRu') {
                    currentStateLang = 'ru';
                } else {
                    currentStateLang = 'en';
                }
                updateKeysSymbolCapsLock();
            }
        }
    });

    document.addEventListener('mousedown', function(event) {
        let pressKeyCode = event.target.getAttribute('data-code');
        KEY_PRESS.forEach(event => {
            let activeKey = event.getAttribute('data-code');
            if (pressKeyCode === activeKey) {
                event.classList.add('active');
                if (activeKey === 'Lang') {
                    switchLanguage()
                }
            }
        });

        //Нажатие мышкой на Backspace
        if (pressKeyCode === 'Backspace') {
            let test = INPUT_TEXT.innerHTML.split('');
            let result = test.pop();
            INPUT_TEXT.innerHTML = test.join('');
        } else {
            if (pressKeyCode !== null) {
                INPUT_TEXT.innerHTML = INPUT_TEXT.innerHTML + keyArr[pressKeyCode][currentStateLang];
            }
        }

        //Нажатие мышкой на CapsLock
        if (pressKeyCode === 'CapsLock') {
            if (!capsLockActive) {
                CAPS_LOCK_KEY.classList.add('active');

                pressKeyCode = '';
                if (currentStateLang === 'ru') {
                    currentStateLang = 'CapsRu';
                } else {
                    currentStateLang = 'CapsEn';
                }
                updateKeysSymbolCapsLock();

                capsLockActive = !capsLockActive
            } else {
                CAPS_LOCK_KEY.classList.remove('active');

                pressKeyCode = '';
                if (currentStateLang === 'CapsRu') {
                    currentStateLang = 'ru';
                } else {
                    currentStateLang = 'en';
                }
                updateKeysSymbolCapsLock();

                capsLockActive = !capsLockActive
            }
        }

        if (pressKeyCode === 'ArrowRight' ||
            pressKeyCode === 'ArrowUp'||
            pressKeyCode === 'ArrowDown' ||
            pressKeyCode === 'ArrowLeft') {

            arrowType = pressKeyCode;

            arrowKeyPress(arrowType);
        }

    });

    document.addEventListener('mouseup', function(event) {
        KEY_PRESS.forEach( event => {
            event.classList.remove('active');
        });

        if (capsLockActive){
            CAPS_LOCK_KEY.classList.add('active');
        }
    });

    // Обвновление клавиш на клавиатуре
    function updateKeysSymbol() {
        STANDARD_KEYS.forEach(event => {
            let keyCode = event.getAttribute('data-code');
            event.innerHTML = keyArr[keyCode][currentStateLang];
        })
    }

    // Обновление после нажатия на клавишу CapsLock
    function updateKeysSymbolCapsLock() {
        if (currentStateLang === 'CapsRu' || currentStateLang === 'ru') {
            CAPS_LOCK_RU.forEach(event => {
                let keyCode = event.getAttribute('data-code');
                event.innerHTML = keyArr[keyCode][currentStateLang];
            })
        } else {
            CAPS_LOCK_EN.forEach(event => {
                let keyCode = event.getAttribute('data-code');
                event.innerHTML = keyArr[keyCode][currentStateLang];
            })
        }
    }

    function arrowKeyPress() {
        switch (arrowType) {
            case 'ArrowLeft':
                INPUT_TEXT.innerHTML = INPUT_TEXT.innerHTML + '&#8592;' ;
                break;

            case 'ArrowDown':
                INPUT_TEXT.innerHTML = INPUT_TEXT.innerHTML + '&#8595;' ;
                break;

            case 'ArrowUp':
                INPUT_TEXT.innerHTML = INPUT_TEXT.innerHTML + '&#8593;' ;
                break;

            case 'ArrowRight':
                INPUT_TEXT.innerHTML = INPUT_TEXT.innerHTML + '&#8594;' ;
                break;
        }
    }

    function switchLanguage() {
        switch (currentStateLang) {
            case 'en':
                currentStateLang = 'ru';
                changeLanguage(currentStateLang);
                document.querySelector('.change-lang').innerHTML = 'en';
                updateKeysSymbol();
                break;

            case 'ru':
                currentStateLang = 'en';
                changeLanguage(currentStateLang);
                document.querySelector('.change-lang').innerHTML = 'ru';
                updateKeysSymbol();
                break;

            case 'CapsRu':
                currentStateLang = 'en';
                changeLanguage(currentStateLang);
                document.querySelector('.change-lang').innerHTML = 'ru';
                updateKeysSymbol();
                currentStateLang = 'CapsEn';
                updateKeysSymbolCapsLock();
                break;

            case 'CapsEn':
                currentStateLang = 'ru';
                changeLanguage(currentStateLang);
                document.querySelector('.change-lang').innerHTML = 'en';
                updateKeysSymbol();
                currentStateLang = 'CapsRu';
                updateKeysSymbolCapsLock();
                break;
        }
    }
}