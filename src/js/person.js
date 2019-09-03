const Person = (id, firstName, lastName, passport, age, sex, money, healthy) => {
    this.id = `${id}_${firstName}_${lastName}_${money}`;
    this.firstName = firstName;
    this.lastName = lastName;
    this.passport = passport;
    this.age = age;
    this.sex = sex;
    this.money = money;
    this.healthy = healthy;
    this.visa = false;
};