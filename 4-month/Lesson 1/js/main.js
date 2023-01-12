//? Date objects
    // const date = new Date();
    // console.log(date.getDay());   // Day
    // console.log(date.getDate());  // Date
    // const arr = ["January","February","March","April","May","June","July",
    // "August","September","October","November","December"]
    // console.log(arr[date.getMonth()]); // Month
    // console.log(date.getFullYear());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());

    //? Watch
    // const hoursEl = document.querySelector("#hours");
    // const minutesEl = document.querySelector("#minutes");
    // const secondsEl = document.querySelector("#seconds");

    // let date = new Date();

    // setInterval(() => {
    //     hoursEl.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    //     minutesEl.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    //     secondsEl.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    //     date = new Date();
    // }, 1000);

    //? Callback function
    //* function ichiga argument sifatida jo'natilgan function callback function deyiladi
    // function callbackHandler(firstName, birthYear, call) {
    //     const currentYear = new Date().getFullYear();
    //     const age = currentYear - Number(birthYear);
    //     const template = `${firstName} bu yil ${age} yoshda`;
    //     const returnedData = call(template);
    //     console.log(returnedData);
    //     return firstName + " " + age;
    // };

    // const data = callbackHandler("Abbos", 2009, (t) => {
    //     console.log(t);
    //     return "Hello world";
    // });

    // console.log(data);