//? datasets
// const todos = [
//     {id: 1, task: "Todo 1", isEditing: false},
//     {id: 2, task: "Todo 2", isEditing: false},
//     {id: 3, task: "Todo 3", isEditing: false},
// ];

// const todosContainer = document.querySelector(".todos")
// render();

// const todosEl = document.querySelectorAll(".todoBtn");




// function render() {
//  /   todosContainer.innerHTML = "";
//   /  todos.forEach(todo => {
//         const template = todo.isEditing ? `
//         <div>
//             <input value="${todo.task}" />
//             <button data-id="${todo.id}">Save</button>
//         </div>
//         ` 
//         : `
//         <div style="display: flex; gap: 20px; align-items: center;">
//             <h2>${todo.task}</h2>
//             <button data-id="${todo.id}" class="todoBtn">Edit</button>
//         </div>
//         `;

//         todosContainer.innerHTML += template; //! This form is shortened form of todosContainer.innerHTML = todosContainer.innerHTML + template
//     })
// }

// todosEl.forEach(todoEl => {
//     todoEl.addEventListener('click', function() {
//         const foundDataIndex = todos.findIndex(todoObj => todoObj.id === Number(this.dataset.id));
//         if(foundDataIndex !== -1) {
//             todos[foundDataIndex].isEditing = !todos[foundDataIndex].isEditing;
//             render();
//         }
//     });
// });


//? for in vs for of  
// const arr = [1,2,3,4,5,6];

// const user = {
//     name: "Ibrohim",
//     age: 20,
// };

// for(key in user) {  //! for in array bilan object uchun ishlaydi
//     console.log(user[key]);
// }

// for(index in arr) {
//     console.log(index);
// }

// for(qwerty of arr) {  //! for of faqatgina array uchun ishlaydi
//     console.log(qwerty);
// }

//? while
// let i = 0;

// while(i < 10) { //! qavs ichidagi amal false bo'lguncha ishlidi
//     console.log(i);
//     i++;
// };