'use strict'; //TODO Строгий режим стандарта ES6

let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let btnStart = document.querySelector('#start-calculation');
let expenseItems = document.querySelectorAll('.expenses-item');
let expensiveApprove = document.getElementById('expensive-approve');
let optionalExpenses = document.querySelectorAll('.expenses-optional');
let optionalApprove = document.getElementById('optional-approve');
let calculateBudgetPerDay = document.getElementById('calculate-budget-per-day');
let incomeMoney = document.getElementById('income-money');
let capital = document.getElementById('capital');
let sumCapital = document.getElementById('sum-capital');
let depositInterest = document.getElementById('deposit-interest');

let resultIncome = document.getElementById('result-income');
let budgetPerDay = document.getElementById('budget-per-day');
let incomeLevel = document.getElementById('income-level');
let mandatoryExpenses = document.getElementById('mandatory-expenses');
let optionalExpense = document.getElementById('optional-expense');
let additionalIncome = document.getElementById('additional-income');
let capitalPerMonth = document.getElementById('capital-per-month');
let capitalPerYear = document.getElementById('capital-per-year');


let budget = 0;
let time;
let allExpenses = 0;
let date = new Date(Date.parse("1999-05-25"));
let perDay = 0;

let data = {
    budget: budget,
    budgetPerDay: perDay,
    expenses: {},
    allExpenses: allExpenses,
    date: date,
    expenseOptional: {},
    income: [],
    savings: false
};

btnStart.addEventListener('click', function () {
    btnStart.setAttribute('disabled', 'true');
    let money = +prompt("Введите ваш бюджет", "");
    data.budget = money;
    data.budgetPerDay = (money / 30).toFixed(1);
    resultIncome.textContent = money;

    expenseItems.forEach(function (item) {
        item.removeAttribute('disabled');
    });
    expensiveApprove.removeAttribute('disabled');

    let userDate = prompt("Введите дату в формате: YYY-MM-DD", "");
    setDate(userDate);
});

expensiveApprove.addEventListener('click', function () {
    this.setAttribute('disabled', "true");
    let name;
    let expenses;
    expenseItems.forEach(function (item, index) {
        item.setAttribute('disabled', "true");
        if (index % 2 == 0) {
            name = item.value;
        } else {
            expenses = +item.value;
            allExpenses += expenses;
            data.expenses[name] = expenses;
        }
    });
    data.allExpenses = allExpenses;
    mandatoryExpenses.textContent = allExpenses;

    optionalExpenses.forEach(function (item) {
        item.removeAttribute('disabled');
    });
    optionalApprove.removeAttribute('disabled');
});

optionalApprove.addEventListener('click', function () {
    let sum = 0;
    optionalExpenses.forEach(function (item, index) {
        item.setAttribute('disabled', 'true');
        data.expenseOptional[index] = item.value;
        sum += +item.value;
    });
    data.allExpenses += sum;
    optionalExpense.textContent = sum;
    calculateBudgetPerDay.removeAttribute('disabled');

    optionalApprove.setAttribute('disabled', 'true');
});

calculateBudgetPerDay.addEventListener('click', function () {
    incomeMoney.removeAttribute('disabled');
    budgetPerDay.textContent = data.budgetPerDay;
    incomeLevel.textContent = getIncomeLevel(data);
    calculateBudgetPerDay.setAttribute('disabled', 'true');
    capital.removeAttribute('disabled');
});

incomeMoney.addEventListener('input', function () {
    let items = incomeMoney.value;
    data.income = items.split(",");
    let result = 0;
    data.income.forEach(function (item) {
        result += +item;
    });
    additionalIncome.textContent = result;
});

capital.addEventListener('click', function () {
    if (this.checked) {
        incomeMoney.setAttribute('disabled', 'true');
        sumCapital.removeAttribute('disabled');
        depositInterest.removeAttribute('disabled');
        data.savings = true;
    } else {
        sumCapital.setAttribute('disabled', 'true');
        depositInterest.setAttribute('disabled', 'true');
        data.savings = false;
    }
});

sumCapital.addEventListener('input', function () {
    let capital = sumCapital.value;
    let percent = depositInterest.value;
    calculateDepositInterest(capital, percent);
});

depositInterest.addEventListener('input', function () {
    let capital = sumCapital.value;
    let percent = depositInterest.value;
    calculateDepositInterest(capital, percent);
});

function calculateDepositInterest(capital, percent) {
    if (capital != 0 && capital !== undefined && percent != 0 && percent !== undefined) {
        let a = (capital / 100).toFixed(0) * percent;

        capitalPerMonth.textContent = (a / 12).toFixed(0);
        capitalPerYear.textContent = a;
    } else {
        capitalPerMonth.textContent = 0;
        capitalPerYear.textContent = 0;
    }
}

function setDate(userDate) {
    let date = new Date(Date.parse(userDate));
    data.date = date;
    day.value = date.getDate();
    month.value = date.getMonth() + 1;
    year.value = date.getFullYear();
}

function getIncomeLevel(data) {
    let result = data.budget - data.allExpenses;
    let level = "";
    if (result > 0) {
        console.log(result);
        if (result >= 30000 && result < 40000) {
            level = "Низкий"
        } else if (result >= 40000 && result < 50000) {
            level = "Средний"
        } else if (result >= 50000) {
            level = "Высокий"
        }
    }
    return level;
}
