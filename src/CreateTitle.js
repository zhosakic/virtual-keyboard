
class CreateTitle {
    constructor() {
        this.mainPage = document.body;

        //Создаём контейнер
        this.container = this.createElement('div', ['container']);

        //Создаём заголовок
        this.title = this.createElement('h1', ['headline']);
        this.title.textContent = 'Виртуальная клавиатура для Apple-устройств';

        //Создаём описание для клавиатуры
        this.description = this.createElement('p', ['description']);
        this.description.textContent = `Переключение раскладки комбинация клавиш ctrl+alt. Дизайн Джони Айв..., ну почти :)`;

        //Создаём поле для вывода набранных символов
        this.keyValue = this.createElementInput('textarea', ['key-value'], 'disabled');

        this.mainPage.append(this.container);
        this.container.append(this.title);
        this.container.append(this.description);
        this.container.append(this.keyValue);

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
            element.setAttribute('disabled', elementAttributes);
        }
        return element;
    }
}

export { CreateTitle }