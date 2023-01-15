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

//? Football players
// const players = [];
// const playerForm = document.querySelector("#playerForm");
// const playersList = document.querySelector("#players");
// const separatorBtn = document.querySelector("#separator")

// playerForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if(event.target[0].value.trim() && !players.includes(event.target[0].value.trim())) {
//         players.push(event.target[0].value);
//         event.target[0].value = "";
//         playersList.innerHTML = `<h2>${players.join(", ")}</h2>`
//     }
// });

// const teams = [[], []];

// separatorBtn.addEventListener("click", () => {
//     if(players.length > 8 && players.length % 2 === 0) {

//         let randomPlayer = Math.floor(Math.random() * players.length);

//         while(teams[0].length !== players.length) {
//             teams[0].push(players[randomPlayer])
//             players.splice(randomPlayer, 1)
//             randomPlayer = Math.floor(Math.random() * players.length);
//         };

//         players.forEach((p) => {
//             teams[1].push(p);
//         });

//         renderTeams();
//     } else {
//         alert("O'yinchilar soni 8 tadan kam yoki juft emas");
//     }
// });

// const teamsContainer = document.querySelector("#teams");

// function renderTeams() {
//     teams.forEach((team) => {
//         const ulList = document.createElement("ul");

//         team.forEach((player) => {
//             const h4 = `<li>${player}</li>`;
//             ulList.innerHTML += h4;
//         });

//         teamsContainer.appendChild(ulList);
//     });
// };