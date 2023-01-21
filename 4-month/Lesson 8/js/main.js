//? async vs sync
// function myFunc() {
//     console.log(2);
// }

// setTimeout(() => {
//     console.log(1);
// }, 0);

// console.log(3);

// myFunc();

//? Promise => Pending, Fullfilled and Reject
// const myPromise = new Promise((resolve, reject) => {
//     if(2===2) {
//         setTimeout(() => {
//             resolve({name: "Ibrohim"});
//         }, 2000);
//     } else {
//         reject("Error")
//     }
// });

// // console.log(myPromise);

// myPromise.then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.log(err);
// }).finally(console.log("Done"));

// console.log("Hello 2");