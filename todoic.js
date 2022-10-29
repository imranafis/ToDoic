window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const nameInput = document.querySelector("#name");
  const newTodoForm = document.querySelector("#new-todo-form");

  const fireBase = 5;

  const username = localStorage.getItem("username") || "";

  nameInput.value = username;

  nameInput.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });

  newTodoForm.addEventListener("submit" || "keypress", (e) => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
    };

    if (todo.content !== "") {
      if (todo.category !== "") {
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        e.target.reset();
        DisplayTodos();
      } else if (todo.category == "") {
        alert("Please Input a Category");
      }
    } else {
      alert("Please Input a Task!");
    }
  });
  DisplayTodos();
});

function DisplayTodos(todo) {
  for (todo of todos) {
    if (todo.category == "small") {
      Small();
    } else if (todo.category == "medium") {
      Medium();
    } else if (todo.category == "large") {
      Large();
    }
  }
}

function Small() {
  const subListS = document.querySelector("#sub-S");
  subListS.innerHTML = "<div class='titleS' id='tS' >*****</div>";

  todos.forEach((todo) => {
    const subSmall = document.createElement("div");
    subSmall.classList.add("sub-small");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.done;

    span.classList.add("bubble");

    if (todo.category == "small") {
      span.classList.add("small");
      subListS.appendChild(subSmall);
      console.log("small");
    } else if (todo.category == "medium") {
      span.classList.add("medium");
    } else if (todo.category == "large") {
      span.classList.add("large");
    }

    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);

    subSmall.appendChild(label);
    subSmall.appendChild(content);
    subSmall.appendChild(actions);

    function tS() {
      document.getElementById("tS").innerHTML = "";
    }

    if (todo.done) {
      subSmall.classList.add("done");
    }
    input.addEventListener("click", (e) => {
      todo.done = e.target.checked;

      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        subSmall.classList.add("done");
      } else {
        subSmall.classList.remove("done");
      }
      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));

      if (subListS.childNodes.length == 2) {
        subListS.innerHTML = "";
        tS();
      }

      Small();
    });
  });
}

function Medium() {
  const subListM = document.querySelector("#sub-M");
  subListM.innerHTML = "<div class='titleM' id='tM' >***</div>";

  const subMedium = document.createElement("div");
  subMedium.classList.add("sub-medium");

  todos.forEach((todo) => {
    const subMedium = document.createElement("div");
    subMedium.classList.add("sub-medium");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.done;

    span.classList.add("bubble");

    if (todo.category == "small") {
      span.classList.add("small");
    } else if (todo.category == "medium") {
      span.classList.add("medium");
      subListM.appendChild(subMedium);
    } else if (todo.category == "large") {
      span.classList.add("large");
    }

    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    subMedium.appendChild(label);
    subMedium.appendChild(content);
    subMedium.appendChild(actions);

    function tM() {
      document.getElementById("tM").innerHTML = "";
    }

    if (todo.done) {
      subMedium.classList.add("done");
    }
    input.addEventListener("click", (e) => {
      todo.done = e.target.checked;

      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        subMedium.classList.add("done");
      } else {
        subMedium.classList.remove("done");
      }
      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));

      if (subListM.childNodes.length == 2) {
        subListM.innerHTML = "";
        tM();
      }

      Medium();
    });
  });
}

function Large() {
  const subListL = document.querySelector("#sub-L");
  subListL.innerHTML = "<div class='titleL' id='tL' >*</div>";

  todos.forEach((todo) => {
    const subLarge = document.createElement("div");
    subLarge.classList.add("sub-large");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.done;

    span.classList.add("bubble");

    if (todo.category == "small") {
      span.classList.add("small");
    } else if (todo.category == "medium") {
      span.classList.add("medium");
    } else if (todo.category == "large") {
      span.classList.add("large");
      subListL.appendChild(subLarge);
    }

    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    subLarge.appendChild(label);
    subLarge.appendChild(content);
    subLarge.appendChild(actions);

    function tL() {
      document.getElementById("tL").innerHTML = "";
    }

    if (todo.done) {
      subLarge.classList.add("done");
    }
    input.addEventListener("click", (e) => {
      todo.done = e.target.checked;

      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        subLarge.classList.add("done");
      } else {
        subLarge.classList.remove("done");
      }
      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter((t) => t !== todo);
      localStorage.setItem("todos", JSON.stringify(todos));

      if (subListL.childNodes.length == 2) {
        subListL.innerHTML = "";
        tL();
      }
      Large();
    });
  });
}
