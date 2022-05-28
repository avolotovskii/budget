"use strict";

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');

            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appDate.expenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appDate.moneyPerDay = (appDate.budget / 30).toFixed();
        alert("Бюджет на 1 день " + appDate.moneyPerDay + " руб.");
    },
    detectLevel: function() {
        if (appDate.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appDate.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSavings: function() {
        if (appDate.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appDate.montIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего дипозита: " + (appDate.montIncome).toFixed());
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let qestOptExpenses = prompt("Статья необязательных расходов?");
            appDate.optionalExpenses[i] = qestOptExpenses;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        if (typeof(items) === "string" && (typeof(items)) != null && items != "") {
            appDate.income = items.split(", ");
            appDate.income.push(prompt('Может что-то еще?'));
            appDate.income.sort();
        } else {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        }
        appDate.income.forEach(function(elem, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + elem);
        });
    }
};

/* for (let key in appDate) {
    console.log("Наша программа включает в себя данные: " + key + " - ");
}; */

for (let key in appDate) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appDate[key]);
};