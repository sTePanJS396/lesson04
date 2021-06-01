let money; 
let income = 'Реклама в паблике ВК';
let period = 5;
let addExpenses;
let deposit;
let expenses1;
let expenses2;
let amount1;
let amount2;
let mission = 500000;
// Объявим все переменные


// ----------------------Код третьего урока--------------------
money = prompt('Какой твой месячный доход?');
money = Number(money);
// Спрашиваем у пользователя месячных доход, и записываем его в переменную money

addExpenses = prompt('Перечисли возможные расходы за определенный период через запятую');
// Спрашиваем у пользователя траты за период, и записываем их в переменную addExpenses

deposit = confirm('У тебя есть депозит в банке? Нажми OK, если есть.');
// В переменной deposit спрашиваем у пользователя про депозит в банке

expenses1 = prompt('Назови обязательную статью расходов.');
amount1 = prompt('Во сколько тебе это обходиться?');
amount1 = Number(amount1);

expenses2 = prompt('Может, у тебя есть еще какая-либо статья расходов? Назови ее!');
amount2 = prompt('И сколько же ты на это тратишь?!');
amount2 = Number(amount2);
// Спрашиваем у пользователя про статьи расходов

let accumulatedMonth;
let budgetDay;
// Объявим все необходимые переменные


function getExpensesMonth(amount1, amount2) {
    return amount1 + amount2;
};
getExpensesMonth(amount1, amount2);
// Вызываем функцию getExpensesMonth, передаем ей значения трат за месяц, полученные у пользователя.


function getAccumulatedMonth(money, amount1, amount2) {
    return money - amount1 - amount2;
};
accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);
// Объявляем функцию, передаем ей параметры, необходимые для вычесления накоплений за месяц,
// вызов функции присваеваем в переменную accumulatedMonth.

function getTargetMonth(accumulatedMonth, mission) {
    return Math.round(mission / accumulatedMonth);    
};
getTargetMonth(accumulatedMonth, mission);
// Фунуция getTargetMonth получит данные, и вычислит, за какой период будет достигнута 
// цель накопить определенную сумму денег

function getBudgetDay(accumulatedMonth) {
    return Math.floor(accumulatedMonth / 30);
};
budgetDay = getBudgetDay(accumulatedMonth);
// Высчитываем дневной бюджет

function getStatusIncome(budgetDay) {
    if (budgetDay >= 1200) {
        return 'У тебя высокий уровень дохода';
    } else if (600 <= budgetDay <= 1200) {
        return 'У тебя средний уровень дохода';
    } else if (0 <= budgetDay <= 600) {
        return 'К сожалению, уровень дохода у тебя низкий';
    } else {
        return 'Что-то пошло не так :(';
    }
    // Вычелсяем уровень дохода
};
getStatusIncome(budgetDay);
// Функция высчитывает уровень дохода

function showTypeOf(data) {
    return console.log(typeof data);   
};
// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);
// //Функция высчитывает типы данных


// ------------------Выводим все необходимые данные в консоль----------------------------
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
// Типы данных

console.log(getStatusIncome(budgetDay));
// Уровень дохода

console.log('Цель будет достигнута через... ' + getTargetMonth(accumulatedMonth, mission));
// Срок достижения цели накопления 

console.log('Бюджет на день: ', budgetDay);
// Бюджет на день

console.log('Расходы на месяц составили: ' + getExpensesMonth(amount1, amount2));
// Расходы за месяц

console.log(addExpenses.toLocaleLowerCase().split(', '));
// Массив трат