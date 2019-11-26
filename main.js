let money = +prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,      
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

    for (let i=0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');

    // let i = 0;
    // while (i<2) {
    //     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    //     let b = prompt("Во сколько обойдется?", '');    
    // i++;

    // let i = 0;
    // do {
    //     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    //     let b = prompt("Во сколько обойдется?", '');
    //     i++;
    //  while (i<2);


    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50 ) {
        console.log ("done");
        appData.expenses[a]= b;
    } else {

    }
}


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Прожиточный минимум");
} else if (appData.moneyPerDay < 2000) {
    console.log("Жить можно");
} else if (appData.moneyPerDay > 2000) {
    console.log("Шикуем");
} else {
        console.log("Error");
    }
