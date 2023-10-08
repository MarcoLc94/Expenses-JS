const initalExpenses = [
  {
    category: "shopping",
    description: "Comprar Pan",
    amount: 5,
  },
  {
    category: "shopping",
    description: "Tequila",
    amount: 800,
  },
  {
    category: "Education",
    description: "Codeable",
    amount: 800,
  },
];

const expensesFromLocal = JSON.parse(localStorage.getItem("expenses"));
const expenses = expensesFromLocal || initalExpenses;

function createExpense(expense) {
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function deleteExpense(expense) {
  const index = expenses.indexOf(expense);
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
