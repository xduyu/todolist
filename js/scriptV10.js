// const expensesNew = document.getElementById('expenses__new')
// const expensesSum = document.getElementById('expenses__sum')
const expensesBtn = document.getElementById('expensesBtn')
const expensesList = document.getElementById('expenses__list')
const expensesTotal = document.getElementById('expenses__total')
const expenses__filter = document.getElementById('filter__category')
const nameInput = document.getElementById('expenses__new');
const sumInput = document.getElementById('expenses__sum');
const categoryInput = document.getElementById('expenses__category')

console.log(categoryInput)
let expense = [];

expensesBtn.addEventListener('click', () => {
    const sum = +sumInput.value;
    const name = nameInput.value;
    const category = categoryInput.value;
    console.log(category)
    if (name && !isNaN(sum)) {
        expense.push({ name: name, sum: sum, category: category })
        renderExpense()
    }
    console.log(name)
})

expenses__filter.addEventListener('change', renderExpense)

function renderExpense() {
    const filterValue = expenses__filter.value;

    expensesList.innerHTML = '';

    const filteredExpense = (filterValue === "Все" ? expense : expense.filter(el => {
        return el.category == filterValue
    }))

    console.log(filterValue)

    filteredExpense.forEach((el, index) => {
        const liItem = document.createElement('li')
        liItem.classList.add('exp__list-item')
        liItem.innerHTML = `Название: ${el.name} <b> Сумма: ( ${el.sum} ) </b>  Категория: ${el.category}`

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete__btn')
        deleteButton.textContent = `Удалить`;
        liItem.append(deleteButton)

        expensesList.append(liItem)

        deleteButton.addEventListener('click', () => {
            expense.splice(index, 1)
            renderExpense()
        })
    });
}