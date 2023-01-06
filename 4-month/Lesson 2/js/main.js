//? Onchange
// const radios = document.getElementsByName("gender");

// for(let i=0; i<radios.length; i++) {
//     radios[i].addEventListener("change", () => {
//         console.log(radios[i].value);
//     })
    // radios[i].onchange = function() {
    //     console.log(radios[i].value);
    // }
// }


// ? Higher order functions
// const radios = document.getElementsByName("gender");


// function looper(arr, callback) {
//     for(let i=0; i<arr.length; i++) {
//         callback(arr[i], i);
//     }
// }

// looper(radios, (radio) => {
//     radio.addEventListener("change", () => {
//         console.log(radio.value);
//     })
// });

// const arr = ["Ibrohim", "Sunnatilla", "Abbos", "Akbar"];

// looper(arr, (element, index) => {
//     console.log(element, index);
// });

// const arr2 = [1,2,3,4,5,6,7,8];

// looper(arr2, (e, i) => {
//     console.log(e * 2);
// });

//? Array methods => Higher order functions
// const arr = ["Ibrohim", "Sunnatilla", "Abbos", "Akbar"];

// arr.forEach((e, i, array) => {
//     console.log(e, i);
// });

//? Map => Array ichida o'zgarish bo'gandan keyin yengi array ochib beradi
// const arr = ["Ibrohim", "Sunnatilla", "Abbos", "Akbar"];

// const newArr = arr.map((element, index, arr) => element + " " + "Jalilov");
// console.log(newArr);

// function maper(arr, cb) {
//     const result = [];
//     for(let i=0; i<arr.length; i++) {
//         const returnedData = cb(arr[i], i);
//         result.push(returnedData);
//     }
//     return result;
// }

// const newArray = maper(arr, (e, i) => {
//     return e + " " + "Jalilov"
// });

// console.log(newArray);