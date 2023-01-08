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

//? Reverse
// const arr = [1, 2, 3, 4];
// const reversedArr = arr.reverse();
// console.log(reversedArr);