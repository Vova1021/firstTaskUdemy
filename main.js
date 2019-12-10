let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == '' || money == null ) {
        money = +prompt("Ваш бюджет на месяц", '');
        }
    }
    start();

    let appData = {
        budget: money,
        timeData: time,      
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses : function() {
            for (let i=0; i<2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", '');
                let b = prompt("Во сколько обойдется?", '');
        
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
                console.log ("done");
                appData.expenses[a]= b;
            } else {
                console.log ("bad result");
                i--;
                }
            }
        },
        detectDayBudget: function () { 
            appData.moneyPerDay = (appData.budget / 30).toFixed(1);
            
            alert("Ежедневный бюджет:" + appData.moneyPerDay);
            },

        detectLevel : function () {
            if (appData.moneyPerDay < 100) {
                console.log("Прожиточный минимум");
            } else if (appData.moneyPerDay < 2000) {
                console.log("Жить можно");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Шикуем");
            } else {
                    console.log("Error");
                }
        },
        checkSavings: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?");
                let percent = +prompt("Под какой процент?");
        
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита"+ appData.monthIncome);
            }
        },
        chooseOptExpenses: function () {
            for (let i = 1; i <= 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            }
        },
        choseIncome: function() {
            let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", " ");
            if (typeof(items) != "string" || items == "" || typeof(items) == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }
    
            appData.income.forEach (function (itemmassive, i) {
                alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            });
    
    }
}




 