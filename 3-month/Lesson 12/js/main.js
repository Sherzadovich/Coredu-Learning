//? Todo app
const todoForm = document.querySelector("#todoForm");
const cardsEl = document.querySelector("#cards");

const todos = [];

function render() {
    cardsEl.innerHTML = "";
    for(let i = 0; i < todos.length; i++) {
        const template = `
        <div class="todoCard col-md-3 p-3 ${todos[i].isCompleted ? "bg-success" : "bg-light"} rounded">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="todo-${todos[i].id}"
                    ${todos[i].isCompleted ? "checked" : ""} 
                    onchange="toggleComplete(${todos[i].id})">
                    <label class="form-check-label" for="todo-${todos[i].id}" 
                    >${todos[i].task}</label>
                </div>
                <div class="d-flex justify-content-end gap-3 mt-4">
                    <button class="btn btn-warning">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
        </div>
        `;

        cardsEl.innerHTML = cardsEl.innerHTML + template;
    }
};

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = event.target[0].value;

    const todo = {
        id: todos.length,
        task,
        isEditing: false,
        isCompleted: false,
    };

    todos.push(todo);
    render();
    console.log(todos);
});

function toggleComplete(id) {
    for(let i=0; i < todos.length; i++) {
        if(todos[i].id === id) {
            todos[i].isCompleted = !todos[i].isCompleted;
        }
    }
    render();
};