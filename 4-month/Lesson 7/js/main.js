//? Amaliyot
// const formEl = document.querySelector("#form");
// const userContainer = document.querySelector("#users");


// function getData() {
//     return JSON.parse(localStorage.getItem("users")) || [];
// }

// let usersList = getData();

// render();

// formEl.addEventListener("submit", (e) => {
//     e.preventDefault();
//     usersList.push(e.target[0].value);
//     render();
// });

// function render(isCleared = false) {
//     if(usersList.length > 0 && !isCleared) {
//         localStorage.setItem("users", JSON.stringify(usersList))
//     }
//         userContainer.textContent = usersList.join(", ");
// }

// document.querySelector("#clear").addEventListener("click", function() {
//     localStorage.clear();
//     localStorage.removeItem("users");  
//     usersList = getData();
//     render(true)
// });

//? IIFE => immadietly invoked function expression
// (
//     function() 
//     {
//     render()
// }
// )();

// //? Rest vs Spread
// //* Object destructuring
// function func({job, ...others}) {
//     console.log(job, others);
// }

// func({name: "Ibrohim", job: "developer", age: 20})