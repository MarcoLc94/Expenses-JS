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
const createInput = function ({ id, label, type = "text", placeholder = "" }) {
  //<div class="input">
  //<label for="category" class="content-xs overline">Category</label>
  //<input
  //  type="text"
  //  id="Category"
  //  name="Category"
  //  class="input__container"
  ///>
  return `
    <div class="input">
    <label for="${id}" class="content-xs overline">${label}</label>
    <input placeholder="${placeholder}" type="${type}" id="${id}" name="${id}" class="input__container"/>
    </div>
  `;
};
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
      <ul role="list" class="navbar-links js-navbar-links">
        <li><a data-ref="expenses">List Expenses</a></li>
        <li><a data-ref="add-expense">Add Expenses</a></li>
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
  function listenNavigation() {
    const ul = document.querySelector(".js-navbar-links");
    ul.addEventListener("click", (event) => {
      const ref = event.target.dataset.ref;
      switch (ref) {
        case "expenses":
          Main.load(ExpensesView);
          break;
        case "add-expense":
          Main.load(NewExpenseView);
        default:
          break;
      }
    });
  }

  return {
    toString() {
      return template;
    },
    addListeners() {
      listenMenu();
      listenNavigation();
    },
  };
})();

const ExpensesView = (function () {
  function listenAddNewExpense() {
    const linkAdd = document.querySelector(".js-link-add-expense");
    linkAdd.addEventListener("click", () => {
      Main.load(NewExpenseView);
    });
  }
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
    <a class="block text-center js-link-add-expense">Add New Expense</a>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {
      listenAddNewExpense();
    },
  };
})();

const App = DOMHandler("#root");

const FooterView = (function () {
  const template = `
  <footer class="footer">codeable 2023</footer>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

const Layout = (function () {
  const template = `
  ${Header}
  <main class="js-main">
    <div class="container js-container">
    </div>
  </main>
  ${FooterView}
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
  <form action="#" class="flex flex-column gap-4 js-expense-form">
    ${createInput({ id: "category", label: "category" })}
    ${createInput({ id: "description", label: "description" })}
    ${createInput({ id: "amount", label: "amount", type: "number" })}
          <button
            type="submit"
            class="overline button--primary button button-lg full-width"
          >
            Add Expense
          </button>
        </form>
  `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
})();

App.load(Layout);
const Main = DOMHandler(".js-container");
Main.load(ExpensesView);

// const example = (function () {
//   const template = `

//   `;

//   return {
//     toString() {
//       return template;
//     },
//     addListeners() {
//     },
//   };
// })();
