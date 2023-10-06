console.log("New Expense!!");
const form = document.querySelector(".js-expense-form");
console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Se hizo el submit");
  const { Category, Description, Amount } = event.target.elements;
  const newExpense = {
    category: Category.value,
    description: Description.value,
    amount: Amount.value,
  };
  console.log(newExpense);
  expenses.push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  location.assign("/");
});
