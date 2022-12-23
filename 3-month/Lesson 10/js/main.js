//? Object.keys(testScore); // gives all keys
// const user = {
//     name: "userbe",
//     age: 50,
// };

// const userKeys = Object.keys(user);
// console.log(userKeys);

//? Object values(testScore); // gives all values
// const user = {
//         name: "userbe",
//         age: 50,
//     };

//     const userValues = Object.values(user);
//     console.log(userValues);

//? Object Entries(testScore); 
// const user = {
//         name: "userbe", // name bilan userbe ni bitta array qlib beradi
//         age: 50, // age bilan 50 ni bitta array qlb beradi
//     };

//     const userEnt = Object.entries(user);
//     console.log(userEnt);

//? Object fromEntries();
// const user2 = {
//         name: "userbe",
//         age: 50,
//     };


// const userFromEnt = Object.fromEntries(userEnt);
// console.log(userFromEnt);

//? keyUp, keyDown, keyPress
// const searchInput = document.querySelector("#search");

// document.addEventListener("keyup", (event) => {
//     if(event.key === "Q") {
//     searchInput.focus();
//     }
// });

//? setTimeout vs setInterval
// setTimeout(() => {
//     console.log("Boooom");
// }, 2000);


// setInterval(() => {
//     console.log("Boooom");
// }, 2000);

// const timeoutBtn = document.querySelector("#timeout");
// const intervalBtn = document.querySelector("#interval");
// const startBtn = document.querySelector("#start");

// let timer = null;
// let warning = null;

// startBtn.addEventListener("click" , () => {
//     let i = 1;
//     warning = setInterval(() => {
//         console.log(i++);
//     }, 1000);
    
//     timer = setTimeout(() => {
//         console.log("Bbbbbooooooooooooooommmmm");
//         clearInterval(warning);
//     }, 3000);
// });

// timeoutBtn.addEventListener("click", () => {
//     clearTimeout(timer);
//     clearInterval(warning);
//     alert("stopped")
// })