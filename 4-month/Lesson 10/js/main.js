//? Amaliyot API lar bn ishlash => GET
// function myFetch(url) {
//     return new Promise((resolve, reject) => {
//         if(result) {
//             resolve(result);
//         } else {
//             reject(err);
//         }
//     });
// }

// myFetch("https://catfact.ninja/fact").then((reponse)).catch();

//? Cat facts
// const arr = [];

// document.querySelector("#catBtn").addEventListener('click', () => {
//     fetch("https://catfact.ninja/fact")
//         .then(response => {
//             return response.json()
//         }).then(response => {
//             arr.push(response.fact);
//             document.querySelector("#facts").innerHTML = arr.join(", ");
//             console.log(arr);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// });

//? Gender by name

document.querySelector("#form").addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    fetch(`https://api.genderize.io?name=${name}`)
    .then(res => {
        return res.json();
    }).then((res) => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
});

//? Axios
axios.get("http://universities.hipolabs.com/search?country=United+States")
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })