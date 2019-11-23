let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let spendMoney = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
      
    expenses: { 
    [spendMoney] : howMuch
    },

    optionalExpenses: {

    },

    income: [],
    savings: false,
}



alert("ваш бюджет на один день составит: " + money/30)