const token = localStorage.getItem("token");
const btn = document.querySelector(".logOutBtn");
const tasksEl = document.querySelector("#tasks");
const taskEl = document.querySelector(".content");

const newTaskFormEl = document.querySelector("#new-task-form");
const newTaskInputEl = document.querySelector("#new-task-input");

const editBtnEl = document.querySelector(".edit");
const deleteBtnEl = document.querySelector(".delete");

const editEl = document.querySelector("editingProccess");
const editBtnSubmitEl = document.querySelector(".editBtnSubmit");
const editInputEl = document.querySelector(".editInput");

// console.dir(taskEl);
let todo = [];

//* Getting all todos
if (!token) {
  window.location.replace("signup.html");
} else if (token) {
  fetch("https://todo-for-n92.cyclic.app/todos/all", {
    method: "GET",
    headers: {
      "x-access-token": token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      todo = res.allTodos || [];
      render();
    })
    .catch((error) => console.log(res));
} else {
  null;
}

btn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace("signin.html");
});

//* Submit TODO

//* Render function
function render() {
  tasksEl.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    const template = todo.editing
      ? ` <form class="input-group mb-3 editingProccess">
            <input type="text" value="${todo[i].task}" class="form-control bg-dark text-light editInput" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary bg-danger text-light cancelBtn" type="button">Cancel</button>
            <button class="btn btn-outline-secondary bg-success text-light editBtnSubmit" type="submit" id="button-addon2">Submit</button>
          </form>`
      : ` 
            <div class="task ${
              todo[i].completed ? "bg-success text-light" : "bg-dark"
            }">
                <div class="content">
                    <input 
                        type="text" 
                        class="text" 
                        value="${todo[i].task}"
                        readonly>
                </div>
                <div class="actions">
                    <div class="form-check form-switch">
                        <input 
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            onchange="toggleComplete('${todo[i]._id}')"
                            ${todo[i].completed && "checked"}>
                    </div>
                    <button class="edit" onclick="todoEditing('${
                      todo[i]._id
                    }')">Edit</button>
                    <button class="delete" onclick="deleteTodo('${
                      todo[i]._id
                    }')">Delete</button>
                </div>
            </div>`;

    tasksEl.innerHTML += template;
  }
}

//* Add new todo
newTaskFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let task = newTaskInputEl.value;

  fetch("https://todo-for-n92.cyclic.app/todos/add", {
    method: "POST",
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task: task,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      todo.push(res.todo);
      render();
    })
    .catch((err) => console.log(err));

  newTaskInputEl.value = "";
});

//* Toggle complete function
function toggleComplete(smth) {
  fetch(`https://todo-for-n92.cyclic.app/todos?id=${smth}`, {
    method: "PUT",
    headers: {
      "x-access-token": token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      todo = todo.map((id) => {
        if (id._id === res.todo._id) {
          todo[id] = res.todo;
        } else {
          todo[id] = id;
        }
        return todo[id];
      });
      render();
    })
    .catch((err) => console.log(err));
}

//* Delete todo
function deleteTodo(id) {
  const isAccepted = confirm("Are you sure to delete??");
  if (isAccepted) {
    fetch(`https://todo-for-n92.cyclic.app/todos/${id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        todo = todo.filter((todo) => {
          if (
            id === res.deletedTodo._id &&
            res.deletedTodo._id === todo._id &&
            id === todo._id
          ) {
            return null;
          } else {
            return todo;
          }
        });

        render();
      })
      .catch((error) => console.log(error));
  }
}

//* Editing todos

function todoEditing(id) {
  let content = document.querySelector(".content");
  const task = content.children[0].value;
  todo.forEach((todo) => {
    if (todo._id === id) {
      todo.editing = !todo.editing;
      fetch(`https:/todo-for-n92.cyclic.app/todos/edit?id=${id}`, {
        method: "PUT",
        headers: {
          "x-access-token": token,
        },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  });
  render();
}

// function editTodo(id) {
//   const editBtnSubmit = document.querySelector(".editBtnSubmit");
//   const cancelBtn = document.querySelector(".cancelBtn");
//   const editingProccess = document.querySelector(".editingProccess");
//   const editInput = document.querySelector(".editInput");
//   // console.dir(editInput);
//   let task = editInput.value;

//   editingProccess.addEventListener("submit", (event) => {
//     event.preventDefault();
//     // console.log(editingProccess);

//     fetch(`https://todo-for-n92.cyclic.app/todos?id=${id}`, {
//       method: "PUT",
//       headers: {
//         "x-access-token": token,
//       },
//       body: JSON.stringify(task),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => console.log(error));
//   });
// }
