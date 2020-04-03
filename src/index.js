import { keyArr } from "./KeyArray";
import { eventHanding } from "./EventHandling";
import { currentStateLang } from "./Variables";

const LINE_1 = 14;
const LINE_2 = 27;

class VirtualKeyboard {
    constructor() {
        // this.keyboard = document.getElementById('keyboard');
        this.keyboard = document.body;

        //Создаём контейнер
        this.container = this.createElement('div', ['container']);

        //Создаём заголовок
        this.title = this.createElement('h1', ['headline']);
        this.title.textContent = 'Виртуальная клавиатура для Apple-устройств';

        //Создаём описание для клавиатуры
        this.description = this.createElement('p', ['description']);
        this.description.textContent = `Переключение раскладки комбинация клавиш cmd+space(пробел)`;

        //Создаём поле для вывода набранных символов
        this.keyValue = this.createElementInput('textarea', ['key-value'], 'disabled');

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


        this.keyboard.append(this.container);
        this.container.append(this.title);
        this.container.append(this.description);
        this.container.append(this.keyValue);
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

    createElementInput(elementTag, elementClass, elementAttributes) {
        const element = document.createElement(elementTag);
        if (elementClass) {
            for (let i = 0; i < elementClass.length; i++) {
                element.classList.add(elementClass[i]);
            }

        }
        if (elementAttributes) {
            element.setAttribute('disabled12', elementAttributes);
        }
        return element;
    }
}

new VirtualKeyboard();

eventHanding();


