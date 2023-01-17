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


// function myArr([t,...others]) {
//     console.log(t, others);
// }

// myArr(["Redbek", "Bluebek", "Greenxon"])

//* Object distructuring
// const user = {
//     name: "Jahongir",
//     job: "WebDeveloper",
// }

// function myFunc() {
//     const { name } = user;
//     console.log(name);
// }

// myFunc();

//? Spread
//* Shallow clone
// const arr = [1,2,3,4,5];
// const newArr = arr;
// arr[0] = 9;
// console.log(newArr); // [9,2,3,4,5]
// console.log(arr); // [9,2,3,4,5]

//* Deep clone
// const arr= [1,2,3,4,5];
// const newArr = [...arr];
// arr[0] = 9;
// console.log(newArr); // [1,2,3,4,5]
// console.log(arr); // [9,2,3,4,5]

//? 
// const user = {
//     name: "Jahongir",
//     job: "WebDeveloper",
// }

// const newUser = {...user, job: "Full-Stack Developer"}

// console.log(newUser);

//? 
// function newUser({name, job, age, status, ...others}) {
//     console.log(name, job, status, age);
// }

// newUser({job: "WebDeveloper", status: "student", name: "Ibrohim", age: 20, houseNum: 45, work: null})