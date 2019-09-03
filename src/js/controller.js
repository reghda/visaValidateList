const VisaController = function (model, view) {
    this._model = model;
    this._view = view;

    //добавляет одну персоную. Делает Саня
    this._view._add.addEventListener('click', event => {
        //через this._view с формы достаем данные
        //создаем экземпляр Person и добавляем в модель через  this._model методом this.addPerson
        //this._view метод this.showPerson
    });

    //очистка форм и модель. Делает Таня
    this._view._clear.addEventListener('click', event => {

    });

    //генерирует персоны. Делает Стас
    this._view._generator.addEventListener('click', event => {

    });

    //запускает проверку на визу. Делает Рома
    this._view._start.addEventListener('click', event => {

    });
};