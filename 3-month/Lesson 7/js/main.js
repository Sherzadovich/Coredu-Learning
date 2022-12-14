//? Switch statement
// const text = prompt("Enter text:");

// switch(text) {
//     case "3":
//         console.log("Hello 3");
//         break;
//     case "4":
//         console.log("Hello 4");   
//         break;
//     default:
//         console.log("Hello default");
//         break;     
// }


// if(text === "Ibrohim") {
//     console.log("Hello Ibrohim");
// } else {
//     console.log("Hello Vs");
// }


//? Array methods => push, pop, unshift, shift
// const arr = [1, 2, 3];
// arr[arr.length] = "Ibrohim";
// arr[arr.length] = "Ismoil";

//* push => add new element from end of the array
// const add = arr.push("Ibrohim", "Isom"); //! Returns length of the array = 2
// const add2 = arr.push("Ismoil"); //! Returns length of the array = 3
//* pop => delete last element from end of the array
// const deletedEl = arr.pop() //! returns deleted element
// arr.pop() //! delete last element from array
//* unshift => adds new element from start of the array
// arr.unshift(8);
// arr.unshift(9);
// const data = arr.unshift(7); //! Returns length of the array
//* shift => delete last element from start of the array
// const data = arr.shift(); //!returns deleted element
// arr.shift();

// console.log(data);
// console.log(arr);


//? for loop
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// const arr = ["Jahongir", "Jasur", "Mirvohid", "Ismoil", "Abbos", "Eshmat", "Toshmat", "Ronaldo", "Messi"];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//* Amaliyot
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function finder(array) {
//     for(let i = 0; i < array.length; i++) {
//         switch(array[i] % 2) {
//             case 0:
//                 console.log(`${array[i]} juft son`);
//                 break;
//             default:
//                 console.log(`${array[i]} toq son`);    
//         }
//     }
// };

// finder(arr);

//? ! => not
// if(!false) {
//     console.log("Hello");
// }

// const text = "Ismoil";

// if(2 == 3) {
//     console.log("Hello");
// } else if("Ibrohim" !== text) {
//     console.log(text + " Ibrohimga teng emas");
// }

// if(!err) {
//     console.log("Salom dunyo");
// }

//? DOM => document object model
// document.getElementById("btn").textContent = "push here";
// console.dir();

// const btnEl = document.getElementById("btn");
// let isClicked = false;

// function modifier() {
//     btnEl.textContent = btnEl.textContent === 'click' ? "push here" : 'click';
    // if(!isClicked) {
    //     btnEl.textContent = 'push here';
    //     isClicked = true;
    // } else {
    //     btnEl.textContent = 'click';
    //     isClicked = false;
    // }
// }
// function modifier() {
//     if(btnEl.textContent === 'click') {
//         btnEl.textContent = 'push here';
//     } else {
//         btnEl.textContent = 'click';
//     }
// }

//* getElementById, getElementByClassName, getElementByName, getElementByTagName
// const btnEl = document.getElementById("btn");

// const pEls = document.getElementsByClassName("text");
// console.log(pEls[2]);

// const inputEls = document.getElementsByName("car");
// console.log(inputEls);

// const pTagEls = document.getElementsByTagName("input");
// console.log(pTagEls);


//? Practice
const arr = [];

function signUp() {
    const username = prompt("Enter your username:");
    const pass = prompt("Enter your password:");
    
    arr.push({username});
    arr.push({pass});

    // arr.push(obj.username);
    // arr.push(obj.password);
    console.log(arr);
};

function signIn() {
    const username = prompt("Enter your username:");
    const pass = prompt("Enter your password:");

    if(username == arr.length) {
        if(pass == arr.length) {
            alert("welcome website");
        } else {
            alert("Your password is incorrect");
        }
    } else {
        alert("Your username is incorrect")
    }
};