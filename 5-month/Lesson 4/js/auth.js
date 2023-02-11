const signUpFormEl = document.querySelector("#signUpForm");

signUpFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
     .then(res => res.json())
    .then(res => {
        if(res.token)    {
            localStorage.setItem("token", JSON.stringify(res.token));
            window.location.replace("index.html");
        }
    });
});