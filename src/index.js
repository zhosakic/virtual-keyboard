import { setDefaultLanguage, changeLanguage} from "./ChangeLanguage";
import { CreateTitle } from "./CreateTitle";
import { VirtualKeyboard } from "./CreateKeyboard";
import { eventHanding } from "./EventHandling";



setDefaultLanguage();

new CreateTitle();

new VirtualKeyboard();

eventHanding();

if (localStorage.lang === 'ru') {
    document.querySelector('.change-lang').innerHTML = 'en';
} else {
    document.querySelector('.change-lang').innerHTML = 'ru';
}




