import { keyArr } from "./KeyArray";
import { currentStateLang as currentState} from "./ChangeLanguage";
import { changeLanguage } from "./ChangeLanguage";

export function eventHanding() {

    let currentStateLang = currentState;

    const KEY_PRESS = document.querySelectorAll('.key');
    const INPUT_TEXT = document.querySelector('.key-value');
    const STANDARD_KEYS = document.querySelectorAll('.key-symbol');

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

            if (currentStateLang === 'ru') {
                currentStateLang = 'shiftRu';
            } else {
                currentStateLang = 'shiftEn';
            }
        }
        //Смена клавиш при нажатии на шифт
        updateKeysSymbol();

        if (pressKeyCode === 'Backspace') {
            let test = INPUT_TEXT.innerHTML.split('');
            let result = test.pop();
            INPUT_TEXT.innerHTML = test.join('');
        } else {
            INPUT_TEXT.innerHTML = INPUT_TEXT.innerHTML + keyArr[pressKeyCode][currentStateLang];
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
        }
    });

    document.addEventListener('mousedown', function(event) {
        let pressKeyCode = event.target.getAttribute('data-code');
        KEY_PRESS.forEach(event => {
            let activeKey = event.getAttribute('data-code');
            if (pressKeyCode === activeKey) {
                event.classList.add('active');
                if (activeKey === 'Lang') {
                    if (currentStateLang === 'en') {
                        currentStateLang = 'ru';
                        changeLanguage(currentStateLang);
                        document.querySelector('.change-lang').innerHTML = 'en';
                        updateKeysSymbol();
                    } else {
                        currentStateLang = 'en';
                        changeLanguage(currentStateLang);
                        document.querySelector('.change-lang').innerHTML = 'ru';
                        updateKeysSymbol();
                    }
                }
            }
        });
    });

    document.addEventListener('mouseup', function(event) {
        let pressKeyCode = event.target.getAttribute('data-code');
        KEY_PRESS.forEach(event => {
            let activeKey = event.getAttribute('data-code');
            if (pressKeyCode === activeKey) {
                event.classList.remove('active');
            }
        })
    });

    // Обвновление клавиш на клавиатуре
    function updateKeysSymbol() {
        STANDARD_KEYS.forEach(event => {
            let keyCode = event.getAttribute('data-code');
            event.innerHTML = keyArr[keyCode][currentStateLang];
        })
    }
}

