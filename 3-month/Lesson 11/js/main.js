//? API => Application programming interface
// const recognition = new webkitSpeechRecognition();
// recognition.lang = "uz-UZ";

// const btnEl = document.querySelector("#btn");

// btnEl.addEventListener("click", () => {
//     recognition.start();
// });

// const colors = {
//     qizil: "red",
//     yashil: "Green",
//     sariq: "Yellow",
// }

// colors.qizil
// colors["qizil"]

// recognition.onresult = (e) => {
//     console.log(e.results[0][0].transcript);
//     btnEl.style.backgroundColor = colors[e.results[0][0].transcript]
// };

//? Math
//* Math.round()
// console.log(Math.round(4.5)); // 5
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.4)); // 4
//* Math.ceil()
// console.log(Math.ceil(4.8)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.5)); // 5
//* Math.floor()
// console.log(Math.floor(4.5)); // 4
// console.log(Math.floor(4.9)); // 4
// console.log(Math.floor(4.3)); // 4
// console.log(Math.floor(-4.7)); // -5
//* Math.trunc()
// console.log(Math.trunc(4.5)); // 4
// console.log(Math.trunc(4.9)); // 4
// console.log(Math.trunc(4.3)); // 4
// console.log(Math.trunc(-4.7)); // -4
//* Math.max() vs Math.min()
// console.log(Math.max(1,30,-50,400,-2)); // 400
// console.log(Math.min(1,30,-50,400,-2)); // -50

//? Math.random()
// const arr = ["Ibrohim", "Akbar", "Islom", "Ahror", "Zafar"]
// const index = Math.floor(Math.random() * arr.length)

// console.log(arr[index], index);