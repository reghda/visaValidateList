const passportControl = new Promise(function (resolve, reject) {

    setTimeout(() => {
        let passport = true;
        let age = 22;

        if (passport === true && validateAge(age)) {
            resolve({
                visa: true
            });

        } else {
            reject("Не хватает пасспорта или допустимого возраста");
        }

        passportControl.then(function (value) {
            console.log("Пасспортный контроль пройден, Visa:", JSON.stringify(value));
        });
        passportControl.catch(function (reason) {
            console.log("Пасспортный контроль не пройден.", reason);
        });
    }, 2000);
});

const medicalExamination = new Promise(function (resolve, reject) {


    setTimeout(() => {
        let healthy = 65;

        if (validateHealthy(healthy)) {
            resolve({
                visa: true
            });

        } else {
            reject("Состояние здоровья не позволяет.");
        }
    medicalExamination.then(function (value) {
        console.log("Медосмотр пройден, Visa:", JSON.stringify(value));
    });
    medicalExamination.catch(function (reason) {
        console.log("Медосмотр не пройден", reason);
    });
},4000);
});



    const bank = new Promise(function (resolve, reject) {

        setTimeout(() => {
            let money = 20000;
            if (validateMoney(money)) {
                resolve({
                    visa: true
                });

            } else {
                reject("Недостаточно денег на личном счёте");
            }

            bank.then(function (value) {
                console.log("Банк одобрил, Visa:", JSON.stringify(value));
            });
            bank.catch(function (reason) {
                console.log("Банк не одобрил", reason);
            });
        }, 2000);
    });



        Promise.all([passportControl, medicalExamination, bank]).then(() => {
            console.log('Все инстанции пройдены!!! Поздравляем!!!')
        })
            .catch(() => {
                console.log('Что-то пошло не так, виза не получена!!')
            });

function validateAge (value) {
    return value > 18 && value < 100
};

function validateMoney (value) {
    return value > 5000
};

function validateHealthy (value) {
    return value > 0 && value < 100
};


