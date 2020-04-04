import { LINE_1, LINE_2, LINE_3, LINE_4, LINE_5} from "./Variables";
import { keyArr } from "./KeyArray";
import { currentStateLang } from "./ChangeLanguage";

class VirtualKeyboard {
    constructor() {
        this.keyboard = document.body;

        //Создаём контейнер
        this.container = this.createElement('div', ['container', 'keyboard']);

        //Создаём рамку для всей клавиатуры
        this.keyboardFrame = this.createElement('div', ['keyboard__frame']);

        //Создаём первую линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line']);
        this.keyboardFrame.append(this.keyLine);

        for (let i = 0; i < LINE_1; i++) {
            let keyCode = Object.keys(keyArr)[i];
            let keyClass = keyArr[keyCode].keyType;
            let keyAction = keyArr[keyCode].Action;
            this.keyItem = this.createElement('div', keyClass, keyCode);
            this.keyName = this.createElement('span',keyAction, keyCode);
            this.keyName.textContent = keyArr[keyCode][currentStateLang];
            this.keyItem.append(this.keyName);
            this.keyLine.append(this.keyItem);
        }

        //Создаём вторую линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line', 'line-item1']);
        this.keyboardFrame.append(this.keyLine);

        for (let i = 14; i < LINE_2; i++) {
            let keyCode = Object.keys(keyArr)[i];
            let keyClass = keyArr[keyCode].keyType;
            let keyAction = keyArr[keyCode].Action;
            this.keyItem = this.createElement('div', keyClass, keyCode);
            this.keyName = this.createElement('span',keyAction, keyCode);
            this.keyName.textContent = keyArr[keyCode][currentStateLang];
            this.keyItem.append(this.keyName);
            this.keyLine.append(this.keyItem);
        }

        //Создаём третью линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line', 'line-item2']);
        this.keyboardFrame.append(this.keyLine);

        for (let i = 28; i < LINE_3; i++) {
            let keyCode = Object.keys(keyArr)[i];
            let keyClass = keyArr[keyCode].keyType;
            let keyAction = keyArr[keyCode].Action;
            this.keyItem = this.createElement('div', keyClass, keyCode);
            this.keyName = this.createElement('span',keyAction, keyCode);
            this.keyName.textContent = keyArr[keyCode][currentStateLang];
            this.keyItem.append(this.keyName);
            this.keyLine.append(this.keyItem);
        }

        //Создаём четвёртую линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line', 'line-item3']);
        this.keyboardFrame.append(this.keyLine);

        for (let i = 41; i < LINE_4; i++) {
            let keyCode = Object.keys(keyArr)[i];
            let keyClass = keyArr[keyCode].keyType;
            let keyAction = keyArr[keyCode].Action;
            this.keyItem = this.createElement('div', keyClass, keyCode);
            this.keyName = this.createElement('span',keyAction, keyCode);
            this.keyName.textContent = keyArr[keyCode][currentStateLang];
            this.keyItem.append(this.keyName);
            this.keyLine.append(this.keyItem);
        }

        //Создаём пятую линию клавиш
        this.keyLine = this.createElement('div', ['keyboard__line', 'line-item4']);
        this.keyboardFrame.append(this.keyLine);

        for (let i = 54; i < LINE_5; i++) {
            let keyCode = Object.keys(keyArr)[i];
            let keyClass = keyArr[keyCode].keyType;
            let keyAction = keyArr[keyCode].Action;
            this.keyItem = this.createElement('div', keyClass, keyCode);
            this.keyName = this.createElement('span',keyAction, keyCode);
            this.keyName.textContent = keyArr[keyCode][currentStateLang];
            this.keyItem.append(this.keyName);
            this.keyLine.append(this.keyItem);
        }

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