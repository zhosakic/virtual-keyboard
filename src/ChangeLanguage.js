import {VirtualKeyboard} from "./CreateKeyboard";

let currentStateLang;

function setDefaultLanguage() {

    if (localStorage.lang === undefined || localStorage.lang === null) {
        localStorage.lang = 'en';
        currentStateLang = localStorage.lang;
    } else {
        currentStateLang = localStorage.lang;
    }
}

function changeLanguage(currentLang) {

    localStorage.setItem('lang', currentLang);
    currentStateLang = currentLang;

}

export { setDefaultLanguage, changeLanguage, currentStateLang }