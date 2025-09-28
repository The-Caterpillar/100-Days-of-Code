document.addEventListener('DOMContentLoaded',() => {
    const expenseForm = document.getElementById('expense-form');
    const expenseName = document.getElementById('expense-name');
    const expenseAmount = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmountDisplay = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let totalAmount = calculateTotal();
    renderExpenses();
    updateTotal();
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseName.value.trim();
        const amount = parseInt(expenseAmount.value.trim());

        if(name !== "" && !isNaN(amount) && amount>0)
        {
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount
            }
            expenses.push(newExpense);
            saveExpensesToLocal();
            updateTotal();
            renderExpenses();

            // clear input
            expenseName.value = "";
            expenseAmount.value = "";
        }
    })

    function renderExpenses() {
        expenseList.innerHTML ="";
        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.innerHTML = `<div>
                                <span>${expense.name} - $${expense.amount}</span>
                                <button style="justify-content:end" data-id="${expense.id}">remove</button>
                            </div>`
            expenseList.appendChild(li);
        });
    }

    function updateTotal() {
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    function saveExpensesToLocal() {
        localStorage.setItem("expenses",JSON.stringify(expenses));
        localStorage.setItem("totalAmount",totalAmount);
    }

    function calculateTotal() {
        // reduce method for arrays in JS :
        // reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
        return expenses.reduce((sum,expense) => sum + expense.amount, 0)
    }

    expenseList.addEventListener('click', (e)=>{
        if(e.target.tagName === "BUTTON"){
            const id = parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter(expense => expense.id !== id);
            saveExpensesToLocal();
            updateTotal();
            renderExpenses();
        }
    })

});