//? Homework
// const signUpBtn = document.getElementById("signUpBtn");
// const signInBtn = document.getElementById("signInBtn");

// const arr = [];

// signUpBtn.onclick = function() {
//     const username = prompt("Enter your username:");
//     const password = prompt("Enter your password:");

//     const userObj = {
//         username: userA   aQ`21qname,
//         pass: password,
//     }

//     arr.push(userObj);

//     console.log(arr);
// };

// signInBtn.onclick = function() {
//     const username = prompt("Enter your username:");
//     const password = prompt("Enter your password:");

//     if(username && password) {
//         let isFound = false;
//         for(let i = 0; i < arr.length; i++) {
//             const isExist = username === arr[i].username && password === arr[i].pass
//             if(isExist) {
//                 alert("Welcome to the website");
//                 isFound = true;
//                 console.log(arr[i]);
//             }
//         }
//         if(!isFound) {
//             alert("Your username or password is incorrect!")
//         }
//     }else {
//         alert("Please enter your informations!")
//     }
// };


//? Array methods
//* concat()
// const arr = ["a", "b", "c"];

// const newArr = arr.concat(["Ibrohim", "s"], ["Ismoil"]); // 2ta arrayni bir-biriga qoshib beradi

// console.log(arr);
// console.log(newArr);

//* join()
// const arr = ["a", "b", "c"];

// const strArr = arr.join(" "); // array ichidagi value lani orasiga narsa qoshadi

// console.log(strArr);

//* slice()
// const arr = ["a", "b", "c"];
// const slicedArr = arr.slice(0,2);
// const slice2 = arr.slice(-2,-1); // array orasidan kesb olib beradi
// console.log(slice2);

//* indexOf()
// const arr = ["a", "b", "c"];
// console.log(arr.indexOf("b"));

//* includes()
// const arr = ["a", "b", "c"];
// console.log(arr.includes("x"));
// console.log(arr.includes("c"));

//? String methods
// const str = "Ibrohim";
// //todo ["I", "b", "r", "o", "h", "i", "m"];
// console.log(str[5]);

//* length
// console.log(str.length);

//* trim()
// const string = "         hello     ";
// console.log(string.trim());

//* toUpperCase, toLowerCase
// const name1 = "IBROHIM";
// const name2 = "ibrohim";
// console.log(name1.toLowerCase());
// console.log(name2.toUpperCase());

//* charAt()
// const name = "Ibrohim";
//  console.log(name.charAt(5));

//* subString()
// const username = "Ibrohim";
// console.log(username.substring(1,3));
// console.log(username.substring(1));

//* search()
// const text = "Hello world";  // nechinchi position da turganini chiqaradi
// console.log(text.search("world"));

//* match()
// const username = "Abbos maktabga borb keldi";
// console.log(username.match("keldi")); // aynan shu element haqida ma'lumot beradi

//* split()
// const users = "Ibrohim-Ismoil-Abror-Asal-Anora-Akbar";
// console.log(users.split("-"));

//? Input dan ma'lumotlarni olish
// const inputEl = document.querySelector("#nameInput");
// const btn = document.querySelector("button");

// btn.onclick = function() {
//     console.log(inputEl.value);
// };