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