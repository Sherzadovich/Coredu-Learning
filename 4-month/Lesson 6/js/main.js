//? JSON => JavaScript Object Notation
const user = {
    name: "Ibrohim",
    age: 20,
    isMarried: false
};

const jsonUser = JSON.stringify(user); // JSON format  {"name":"Ibrohim","age":20,"isMarried":false}
// console.log(jsonUser);
// const parsedUser = JSON.parse(jsonUser); // object format {name: 'Ibrohim', age: 20, isMarried: false}
// console.log(parsedUser);

//? Storages => localStorage, Cookie Storage, session storage
// localStorage.setItem("myUser", jsonUser)

// const parsedData = JSON.parse(localStorage.getItem("myUser"));

// console.log(parsedData);