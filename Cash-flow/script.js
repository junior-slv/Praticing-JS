let family = {
    incomes: [1020, 1230, 520],
    expenses: [320.24, 128.45, 176.87, 1450.00]
  };
  
  function getBalance() {
    const incomes = family.incomes.reduce((prev, cur) => {
      prev += cur;
      return prev;
    }, 0);
  
    const total = family.expenses.reduce((prev, cur) => {
      prev -= cur;
      return prev;
    }, incomes);
    console.log(`Your balance is ${total >= 0? "positive":"negative"}: R$ ${total}`);
  };
  getBalance()