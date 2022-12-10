// ? Object
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

// * Amaliyot
// function sayName(firstname, surname) {
//     alert(firstname);
//     alert(surname);
//     return firstname + " " + surname;
// }

// const erkinFullname = sayName("Erkin", 'Most');
// const toshmatFullname = sayName("toshmat", 'Most');

// console.log(erkinFullname);
// console.log(toshmatFullname);

// ? if else statement
// if(3==4) {
//     console.log("3==3");
// } else if(5>9) {
//     console.log("5>3");
// } else if(0==9) {
//     console.log("0==9");
// } else {
//     console.log("Ok");
// }

// * Amaliyot
// const user = {
//     isPrivate: true,
//     username: "dabryak_04",
//     birthYear: 2007,
//     password: 587150,
// };

// const username = prompt("Enter your username");
// const password = prompt("Enter your password");

// if(username == user.username) {
//     if(Number(password) === user.password) {
//         alert("Saytga xush kelibsiz!");
//     } else {
//         alert("Your password is incorrect");
//     }
// } else {
//     alert("Sizning username noto'g'ri");
// };


const obj = {
    age: 18,
    age2: 60,
}

const username = prompt("Ismingizni kiriting:");

const userage = prompt("Online magazinimizga xush kelibsiz! \nIltimos yoshingizni kiriting:");


const result3 = obj.age - userage;

const lastResult = 2022 + result3;
const result2 = obj.age2 - userage;


if(userage >= obj.age) {
    if(userage >= obj.age2) {
        if(confirm("Do'da undan ko'ra nevarala bn maza qb o'ynamismi? Xolasez sotvolin!") == true) {
            alert("Sotib olishiz mumkin!");
        }
        else{
            alert("To'g'ri tanlov uchun rahmat!");
        }
     }
     alert("Sotib olishiz mumkin!");
} else {
    alert(`Xurmatli ${username}! ` + lastResult + "yildan keyin keling, hozir mumkin emas");
};

// const mainAge = 18;

// const username = prompt("Ismingizni kiriting:")
// const userage = prompt("Online magazinimizga xush kelibsiz! \nIltimos yoshingizni kiriting:");

// const result = mainAge - userage;

// const lastResult = 2022 + result;

// if(userage >= mainAge) {
//     alert("Sotib olishiz mumkin!");
// } else {
//     alert(`Xurmatli ${username}! ` + lastResult +"-yilda keling! Xozir sizga mumkin emas!")
// };