//? Fetch
// fetch("http://xolisnazar.uz/api/index/getLastNews").then(response => {
//     return response.json();
// }).then(response => {
//     console.log(response);
// }).catch(err => {
//     console.log(err);
// });

// let isLoading = false;

// document.querySelector("#loadData").addEventListener("click", () => {
//     isLoading = true;
//     loader();
//     fetch("http://xolisnazar.uz/api/index/getLastNews")
//     .then(response => {
//         return response.json()
//     }).then(response => {
//         const news = response.lastNews;
    
//         news.forEach(news => {
//             const template = `
//             <div>
//                 <h2>${news.titleKr}</h2>
//             </div>
//             `;
    
//             document.body.innerHTML += template;
//         });

//         isLoading = false;
//         loader();
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })


// function loader() {
//     if(isLoading) {
//         const spinner = document.querySelector("#spinner");
//         spinner.style.display = "block";
//     } else {
//         spinner.style.display = "none";
//     }
// }