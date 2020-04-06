import { LINE_1, LINE_2, LINE_3, LINE_4, LINE_5} from "./Variables";
import { keyArr } from "./KeyArray";
import { currentStateLang } from "./ChangeLanguage";

class VirtualKeyboard {
    constructor() {

        const createKeyElements = (startNumberKey, endNumberKey ) => {
            for (let i = startNumberKey; i < endNumberKey; i++) {
                let keyCode = Object.keys(keyArr)[i];
                let keyClass = keyArr[keyCode].keyType;
                let keyAction = keyArr[keyCode].Action;
                this.keyItem = this.createElement('div', keyClass, keyCode);
                this.keyName = this.createElement('span',keyAction, keyCode);
                this.keyName.textContent = keyArr[keyCode][currentStateLang];
                this.keyItem.append(this.keyName);
                this.keyLine.append(this.keyItem);
            }
        };

        this.keyboard = document.body;

        //Создаём контейнер
        this.container = this.createElement('div', ['container', 'keyboard']);

        //Создаём рамку для всей клавиатуры
        this.keyboardFrame = this.createElement('div', ['keyboard__frame']);

        //Создаём первую линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line']);
        this.keyboardFrame.append(this.keyLine);
        createKeyElements(0, LINE_1);

        //Создаём вторую линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line', 'line-item1']);
        this.keyboardFrame.append(this.keyLine);
        createKeyElements(14, LINE_2);


        //Создаём третью линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line', 'line-item2']);
        this.keyboardFrame.append(this.keyLine);
        createKeyElements(28, LINE_3);

        //Создаём четвёртую линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line', 'line-item3']);
        this.keyboardFrame.append(this.keyLine);
        createKeyElements(41, LINE_4);

        //Создаём пятую линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line', 'line-item4']);
        this.keyboardFrame.append(this.keyLine);
        createKeyElements(54, LINE_5);

        this.keyboard.append(this.container);
        this.container.append(this.keyboardFrame);
    }

    createElement(elementTag, elementClass, elementAttributes) {

        const element = document.createElement(elementTag);

        if (elementClass) {
            for (let i = 0; i < elementClass.length; i++) {
                element.classList.add(elementClass[i]);
            }
        }

        if (elementAttributes) {
            element.setAttribute('data-code', elementAttributes);
        }

        return element;
    }
}

export { VirtualKeyboard };