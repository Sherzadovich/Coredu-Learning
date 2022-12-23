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
const searchInput = document.querySelector("#search");

document.addEventListener("keyup", (event) => {
    if(event.key === "Q") {
    searchInput.focus();
    }
});