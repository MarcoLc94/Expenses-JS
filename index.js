const Store = (function () {
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

  return {
    expense: JSON.parse(localStorage.getItem("expenses")) || initalExpenses,
    createExpense(expense) {
      expenses.push(expense);
      localStorage.setItem("expenses", JSON.stringify(expenses));
    },
    deleteExpense(expense) {
      const index = expenses.indexOf(expense);
      expenses.splice(index, 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
    },
  };
})();

// Store.expenses;
// Store.createExpense(expense);
// Store.deleteExpense(id);

const DOMHandler = function (parentSelector) {
  const parent = document.querySelector(parentSelector);
  if (!parent) throw new Error("Parent not found");
  return {
    load(module) {
      parent.innerHTML = module;
      module.addListeners();
    },
  };
};

const Header = (function () {
  const template = `
  <header class="header">
  <div class="container navbar js-navbar">
    <h2>Expenses Tracker</h2>
    <nav>
      <ul role="list" class="navbar-links">
        <li><a href="index.html">List Expenses</a></li>
        <li><a href="./new-expense.html">Add Expenses</a></li>
      </ul>
    </nav>
    <div class="navbar-icons js-navbar-menu">
      <img src="./images/lista.png" class="navbar__menu-icon" alt="Menu" />
      <img
        src="./images/cerrar.png"
        class="navbar__menu-icon-close"
        alt="Menu"
      />
    </div>
  </div>
</header>
  `;

  function listenMenu() {
    const navBar = document.querySelector(".js-navbar-menu");
    const nav = document.querySelector(".js-navbar");
    const main = document.querySelector(".js-main");
    navBar.addEventListener("click", () => {
      nav.classList.toggle("navbar--open");
      main.classList.toggle("section");
    });
  }

  return {
    toString() {
      return template;
    },
    addListeners() {
      listenMenu();
    },
  };
})();

const ExpensesView = (function () {
  const renderExpense = (expense) => {
    return `
    <li class="expense">
    <div class="expense__detail">
      <div>
        <p class="heading--xs bold">${expense.category}</p>
        <p class="content--sm gray-300">${expense.description}</p>
      </div>
      <p class="content--xl bold">$${expense.amount}</p>
    </div>
    <div expense__actions>
      <a class="js-delete" data-id="${expense.id}">Delete</a>
    </div>
  </li>
    `;
  };
  const template = `
    <ul class="expenses js-expenses">
     ${Store.expense.map((expense) => renderExpense(expense)).join("")}
    </ul>
    <a href="new-expense.html" class="block text-center">Add New Expense</a>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

const App = DOMHandler("#root");

const Layout = (function () {
  const template = `
  ${Header}
  <main class="js-main">
    <div class="container js-container">
    </div>
  </main>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {
      Header.addListeners();
    },
  };
})();
const NewExpenseView = (function () {
  const template = `
  <h2 class="heading--xs bold text-center mb-4">Add New Expense</h2>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {
    
    },
  };
})();
App.load(Layout);

const Main = DOMHandler(".js-container")
Main.load(NewExpenseView);

