//? Object
// const obj = {
//     sayHello: function() {
//         console.log("Hello");
//         return "Hello from return";
//     },
//     name: "Ibrohim",
//     sayHello2() {
//         console.log("Say Hello 2");
//         return "Say hello 2 from return";
//     },
//     sayHello3: () => {
//         console.log("Say hello 3");
//         return "Say hello 3 from return";
//     },
// }

// obj.sayHello();
// obj.sayHello2();
// console.log(obj.sayHello3());

//* Amaliyot
// function sayName(firstname, surname) {
//     alert(firstname);
//     alert(surname);
//     return firstname + " " + surname;
// }

// const erkinFullname = sayName("Erkin", 'Most');
// const toshmatFullname = sayName("toshmat", 'Most');

// console.log(erkinFullname);
// console.log(toshmatFullname);

//? if else statement
// if(3==4) {
//     console.log("3==3");
// } else if(5>9) {
//     console.log("5>3");
// } else if(0==9) {
//     console.log("0==9");
// } else {
//     console.log("Ok");
// }

//* Amaliyot
const user = {
    isPrivate: true,
    username: "dabryak_04",
    birthYear: 2007,
    password: 587150,
};

const username = prompt("Enter your username");
const password = prompt("Enter your password");

if(username == user.username) {
    if(Number(password) === user.password) {
        alert("Saytga xush kelibsiz!");
    } else {
        alert("Your password is incorrect");
    }
} else {
    alert("Sizning username noto'g'ri");
}