const VisaModel = function () {
    this._persons = [];

    //получить массив персон
    this.getPersons = () => {
        return this._persons.slice();
    };

    //добавить одну персону
    this.addPerson = (person) => {
        this._persons.push(person);
        //передать в функцию с представления для вывода на экран
    };

    //добавить массив персон
    this.Persons = (persons) => {
        this._persons = this._persons.concat(persons);
    };

    //очистить весь массив
    this.clear = () => {
        this._persons = [];
    };

    this.getSizeArrayPersons = () => {
      return this._persons.length;
    };
};