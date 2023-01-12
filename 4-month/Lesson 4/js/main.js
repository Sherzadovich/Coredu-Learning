//? Sort
// const arr = [1,5,90,63,2,45,5];
// const users = ["Ibrohim", "Jalol", "Abdurahmon", "Fazliddin", "Kamol"];

// const sortedUsers = users.sort();
// const sortedArr = arr.sort((a,b) => a-b);
// console.log(sortedUsers);
// console.log(sortedArr);

//? This

// const user = {
//     name: "Ibrohim",
//     surname: "Jalilov",
//     age: 20,
//     sayFullName() {
//         return this.name + " " + this.surname; 
//     }
// }

// const arr = [
//     function(firstname, surname) {
//     return firstname + " " + surname;
// }
// ];
// console.log(arr[0]("Ibrohim", "Jalilov"));

// console.log(user.sayFullName());

//? 3 scopes => Function/local scope, Block scope and Global scope
//? Global
// const username = "Pistonchi";

// function logger() {
//     //? function/local scope
//     const user = "Palonchi";
//     console.log(user);
// }

// console.log(user);  //! user is not global variable

// logger();

// //? Block
// if(1) {
//     const user = "Ibrohim";
// }

// console.log(user);

//? var in block scope
// {
//     var username = "blabla";
// };
//! var is not available in global scope when it was declared in function scope
// function mufunc() {
//     var lalaku = "lalaku";
// }

// console.log(lalaku);

// var user = {name: "userbek"}; //! var o'zgaruvchilari window objectida saqlanadi