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
