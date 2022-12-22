//? Adding classes from js
// const textEl = document.getElementById("text");
// const btnAddEl = document.querySelector("#btnAdd");  
// const btnRemoveEl = document.querySelector("#btnRemove");
// const btnToggle = document.querySelector("#btnToggle");

// btnAddEl.onclick = function() {
//     textEl.classList.add("red");
// };

// btnRemoveEl.onclick = function() {
//     textEl.classList.remove("red");
// };

// btnToggle.onclick = function() {
//     textEl.classList.toggle("red");
// };
// textEl.classList.add("red");
// textEl.classList.remove("red");

// console.log(textEl);

//? AddEventListener() vs styling elements from js
// const btnEl = document.querySelector("#btn");

//* function ichiga argument sifatida jo'natilgan function callback deyiladi

// btnEl.addEventListener("click" , () => {
//     btnEl.style.backgroundColor = "red";    
//     btnEl.style.color = "#fff";       
//     btnEl.style.border = "none";       
// });

// btnEl.addEventListener("click" , () => {
//     console.log("Booooooooom");
// });


//? setAttribute() vs getAttribute()
// const btnEl = document.querySelector("#btn");

// const idAttr = btnEl.getAttribute("id"); // btn chiqaradi
// btnEl.setAttribute("disabled", true);

// document.body.addEventListener("click" , function () {
//     btnEl.removeAttribute("disabled");
// });

// console.log();


//? Amaliyot
// let isSignIn = false;
// const signUpForm = document.querySelector(".signUp");
// const signInForm = document.querySelector(".signIn");
// const formToggler = document.querySelector("#formToggler");

// formToggler.addEventListener("click" , function () {
//     isSignIn 
//     ? ((formToggler.textContent = "I have an account to sign in"), 
//     (isSignIn = false)) 
//     : ((formToggler.textContent = "I have to create a new account"), 
//     (isSignIn = true));
//     signUpForm.classList.toggle("show");
//     signInForm.classList.toggle("show");
// });

// const users = [];
// //* sign up
// const signUpBtn = document.querySelector("#signUpBtn");

// signUpBtn.addEventListener("click" , () => {
//     const username = signUpForm.children[1].value;
//     const password_1 = signUpForm.children[2].value;
//     const password_2 = signUpForm.children[3].value;

//     if(username && password_1 && password_2) {
//         if(password_1 === password_2) {
//             const user = {
//                 username,
//                 password: password_1,
//             }

//             users.push(user);
//             alert("Siz ro'yxatdan muvaffaqiyatli o'tdingiz!")
//         } else {
//             alert("Parollar bir-biriga mos emas!")
//         }
//     } else {
//         alert("Ma'lumotlarni to'liq kirgizing!")
//     };
//     console.log(users);
// });

// //* sign in 
// const signInBtn = document.querySelector("#signInBtn");

// signInBtn.addEventListener("click" , () => {
//     const username = signInForm.children[1].value;
//     const password_1 = signInForm.children[2].value;

//     if(users.length !== 0) {
//         let isFound = false;
//         for(let i = 0; i < users.length; i++) {
//             const user = users[i];
//             if(user.username === username && user.password === password_1) {
//                 alert("Welcome to the website!");
//                 isFound = true;
//             }
//         };
//         if(!isFound) {
//             alert("Your username or password is incorrect!")
//         }
//     } else {
//         alert("Ro'yxatdan o'tgan foydalanuvchilar yo'q!")
//     }
// });