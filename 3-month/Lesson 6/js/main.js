//? Truethy vs Falsy values
//* Falsy values => "", 0, null, undefined, false
// const text = prompt("Text");
// if(text) {
//     console.log(text);
// } else {
//     console.log("This is Empty value");
// };

//? Ternary operator
// const text = prompt("Firstname");

// let x = 19;
// const num = x < 18 ? console.log("Hello under 18") : console.log("Hello bobo");
// const user = text ? text : "Hurmatli mijoz";

// console.log(user);

// let user = null;

// if(text) {
//     user = text;
// } else {
//     user = "Xurmatli mijoz!"
// }
// console.log(user);

//? Logical and (&&) vs or (||)
// console.log((4==6 || 7==9) && 6 == 6);
// console.log(4==4 || 6 == 9);

//? DOM => Document object model
// window.alert = null;
// alert("Hello");
// console.log(window);

//? Array
// const username = [
//     {name: "Ibrohim", friends: ["Olim", "Qobil", "Anvar"]}, 
//     {name: "Ismoil"}, 
//     {name: "Abror"}, 
//     {name: "Toshmat"}
// ];
// username[3] = "Eshmat";

// console.log(username[0].name);
// console.log(username[0].friends[1]);
// const user = {
//     user1: "Ibrohim",
//     user2: "Ismoil",
//     user3: "Abror",
// }

//? Length, adding new elements
// const users = ["Ibrohim", "Ismoil", "Palonchi", "Pistonchi"];

// users[users.length] = "Toshmat";
// users[users.length] = "Eshmat";

// console.log(users[users.length - 1]);  //! last element

//* Amaliyot
// const users = [];

// function addUser() {
//     const username = prompt("Enter your name");
//     users[users.length] = username;
//     console.log(users);
// }

// addUser();

const users = {
    username: null,
    pass: null,
}

function signUp() {
    const user = prompt("Enter your username:");
    const password = prompt("Enter password:");

    users.username = user;
    users.pass = password;
     
    if(user) {
        users.username = user;
        if(password) {
            users.pass = password;
        } else {
        alert("You did not enter your password");
        }
    } else{
        alert("You did not enter your username");
    };

    console.log(users);
};

function signIn() {
    const user = prompt("Enter your username:");
    const password = prompt("Enter password:");

    if(user == users.username) {
        if(password == users.pass) {
            alert("Welcome to website")
        } else {
            alert("Your password is incorrect");
        }
    } else {
        alert("Your username is incorrect");
    }
};