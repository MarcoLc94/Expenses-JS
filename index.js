const expenses = [
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
];

{
  /* <li class="expense">
  <div class="expense__detail">
    <div>
      <p class="heading--xs bold">Shopping</p>
      <p class="content--sm gray-300">Nintendo Switch</p>
    </div>
    <p class="content--xl bold">$500</p>
  </div>
  <div expense__actions>
    <a href="#">Delete</a>
  </div>
</li>; */
}

function createExpenseEl(expense) {
  //create elements
  const li = document.createElement("li");
  const expenseDetail = document.createElement("div");
  const container = document.createElement("div");
  const category = document.createElement("p");
  const description = document.createElement("p");
  const amount = document.createElement("p");
  const expenseAction = document.createElement("div");
  const deleteLink = document.createElement("a");
  //setup element
  li.classList.add("expense");
  expenseDetail.classList.add("expense__detail");
  category.className = "heading--xs bold";
  category.textContent = expense.category;
  description.className = "content--sm gray-300";
  description.textContent = expense.description;
  amount.className = "content--xl bold";
  amount.textContent = `$${expense.amount}`;
  expenseAction.className = "expense__actions";
  deleteLink.className = "href=#";
  deleteLink.textContent = "Delete";
  //build template
  container.append(category, description);
  expenseAction.append(deleteLink);
  expenseDetail.append(container, amount);
  li.append(expenseDetail, expenseAction);
  return li;
}

const expenseList = document.querySelector(".js-expenses");
const expense = createExpenseEl(expenses[0]);
expenseList.append(expense);

function renderExpenses(expenses) {
  const expenseList = document.querySelector(".js-expenses");
  expenseList.innerHTML = "";
  expenses.forEach((expense) => {
    const expenseEl = createExpenseEl(expense);
    expenseList.append(expenseEl);
  });
  //   const listLiExpenses = expenses.map((expense) => createExpenseEl(expense));
  //   expenseList.append(...listLiExpenses);
}
renderExpenses(expenses);
