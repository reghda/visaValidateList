const VisaView = function (model) {
    this._model = model;

    //кнопки
    this._add = document.getElementById('addPerson');
    this._clear = document.getElementById('clearPersons');
    this._start = document.getElementById('startGetVisa');
    this._generator = document.getElementById('generatorPersons');

    //форма для добавления одной персоны
    this._firstName = document.getElementById('firstName');
    this._lastName = document.getElementById('lastName');
    this._age = document.getElementById('age');
    this._money = document.getElementById('money');
    this._sex = document.getElementById('sex');
    this._health = document.getElementById('healthy');
    this._passport = document.getElementById('passport');

    //форма валидации
    this._quantity = document.getElementById('quantityPersons');
    this._ageMin = document.getElementById('ageMin');
    this._ageMax = document.getElementById('ageMax');
    this._moneyMin = document.getElementById('moneyMin');
    this._moneyMax = document.getElementById('moneyMax');
    this._healthyMin = document.getElementById('healthyMin');
    this._healthyMax = document.getElementById('healthyMax');

    //добавить одного
    this.showPerson = () => {

    };

    //вывод анкет персон
    this.showProfile = () => {
        let persons = this._model.getPersons();
        //
    };

    //вывод персон, которые проходят проверку на получения визы
    this.showVisa = () => {
        let persons = this._model.getPersons();
        //получить массив персон через функцию с модели
    };

    //очистка анкет и формы на проверку получения визы
    this.clear = () => {

    };

    //очистка формы после добавления персоны
    this.reset = () =>{

    };
}