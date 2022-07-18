let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.24, 128.45, 176.87, 1450.00]
}

function sum(array) {
    let total = 0;
    for(let value of array){
        total += value
    }
    return total
}
 
function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    const total = calculateIncomes - calculateExpenses
    const itsOk = total >= 0
    let balanceText = 'Negative' 
    if (itsOk){
        balanceText = 'Positive'

    console.log(`Your balance is ${balanceText}: $${total}`)
    }
}
calculateBalance()