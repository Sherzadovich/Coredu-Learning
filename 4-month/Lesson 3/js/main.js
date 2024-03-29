//? filter (Higher order function)

// const array = [1,2,3,4,5,6,7,8,9,10];

// function finder(array) {
//     for(let i = 0; i < array.length; i++) {
//         switch(array[i] % 2) {
//             case 0:
//                 console.log(array[i]);
//                 break;    
//         }
//     }
// };

// finder(array);

//! Vazifa
// const newArray = myFilter(arr, (num) => num === 2)
// console.log(newArray);


//? Yechim
// const arr = [1,2,3,4,5,6,7,8,9,10];

// function myFilter(arr, cb) {
//     const result = [];
//     for(let i=0; i<arr.length; i++) {
//         const filteredData = cb(arr[i], i);
//         if(filteredData) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const newArray = myFilter(arr, (element, i) => {
//     return element % 2=== 0;
// });

// console.log(newArray);

//? Reduce
// const array1 = [1,2,3,4];

// 100 + 1 + 2 + 3 + 4
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, 
//     100
// );

// console.log(sumWithInitial);

//! Yechim
// const array = [20, 13, 15];

// function reduceFunction(arr, call) {
//     const result = [];
//     for(let i = 0; i < arr.length; i++) {
//         const reducedArr = call(arr[i], i);
//         result.push(reducedArr);
//     }
//     return result;
// }

// const reduced = reduceFunction(array, (e, i) => e);

// console.log(reduced);

//? Reverse
// const arr = [1, 2, 3, 4];
// const reversedArr = arr.reverse();
// console.log(reversedArr);

//! yechim

// const arr = [1, 2, 3, 4];


// function reverser(arr) {
//     for(let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }

// reverser(arr);

//? Find
// const user = [
//     {
//         id: 1,
//         name: "Ibrohim"
//     },
//     {
//         id: 2,
//         name: "Ismoil"
//     },
//     {
//         id: 3,
//         name: "Shohjahon"
//     }
// ];

// const foundUser = user.find((user) => user.name === "Ibrohim");

// console.log(foundUser);

//! Yechim

// const user = [
//     {
//         id: 1,
//         name: "Ibrohim"
//     },
//     {
//         id: 2,
//         name: "Ismoil"
//     },
//     {
//         id: 3,
//         name: "Shohjahon"
//     }
// ];

// function findUser(arr) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i].name === "Ibrohim") {
//             console.log(arr[i]);
//         }
//     }
// };

// findUser(user);

//? loop from backwards

// const user = [
//     {
//         id: 1,
//         name: "Ibrohim"
//     },
//     {
//         id: 2,
//         name: "Ismoil"
//     },
//     {
//         id: 3,
//         name: "Shohjahon"
//     }
// ];

// for(let i=0 ; i<user.length; i++) {
//     console.log(i);
// };

// for(let i=user.length-1; i>=0; i--) {
//     console.log(user[i]);
// };