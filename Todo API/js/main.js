const todoForm = document.querySelector("#todoForm");
const cardsEl = document.querySelector("#cards");

let todos = JSON.parse(localStorage.getItem('myUser')) || [];

render()

function render() {
    cardsEl.innerHTML = "";
    for(let i = 0; i < todos.length; i++) {
        const template = 
        todos[i].isEditing ? `
        <form class="todoCard col-md-3 p-3 bg-light d-flex flex-column align-items-end" onsubmit="return editTodo(event, ${todos[i].id})">
            <input type="text" class="form-control" id="editingTodo" placeholder="Edit your todo..." value="${todos[i].task}">
            <div>
                <button type="submit" class="btn btn-success mt-3">Save</button>
                <button type="button" class="btn btn-danger mt-3" onclick="toggleEditing(${todos[i].id})">Cancel</button>
            </div>
        </form>`
        : `
        <div class="todoCard col-md-3 p-3 ${todos[i].isCompleted ? "bg-success text-light" : "bg-light"} rounded">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="todo-${todos[i].id}"
                    ${todos[i].isCompleted ? "checked" : ""} 
                    onchange="toggleComplete(${todos[i].id})">
                    <label class="form-check-label" for="todo-${todos[i].id}" 
                    >${todos[i].task}</label>
                </div>
                <div class="d-flex justify-content-end gap-3 mt-4">
                    <button class="btn btn-warning" onclick="toggleEditing(${todos[i].id})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteTodo(${todos[i].id})">Delete</button>
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
    localStorage.setItem("myUser", JSON.stringify(todos));
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

function deleteTodo(id) {
    const isAccepted = confirm("Do you really delete this todo?")
    if(isAccepted) {
        const newArray = [];
        for(let i=0; i<todos.length; i++) {
        if(todos[i].id !== id) {
            newArray.push(todos[i]);
        }
    }
    todos = newArray;
    render();
    }
}

function toggleEditing(id) {
    for(let i=0; i< todos.length; i++) {
        if(todos[i].id === id) {
            todos[i].isEditing = !todos[i].isEditing;
        }
    }
    render();
}

function editTodo(event, id) {
    event.preventDefault();
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id === id) {
            todos[i].task = event.target[0].value;
            todos[i].isEditing = !todos[i].isEditing;
        }
    }
    render();
}