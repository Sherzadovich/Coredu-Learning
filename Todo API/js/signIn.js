// Sign In Section 
const signInInput = document.querySelector(".signInInput");
const signInSecondInput = document.querySelector(".signInSecondInput");
const signInForm = document.querySelector("#signInForm");

const json = JSON.parse(localStorage.getItem("token"))
signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = signInInput.value;
    const seconInputValue = signInSecondInput.value

    const password = json[0].password;
    const username = json[0].username;

    if(password === seconInputValue && username === inputValue) {
        window.location.replace("index.html")
    } else {
        alert("Your password or username is incorrect!")
    }
    
    fetch("https:/todo-for-n92.cyclic.app/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            username: username,
            password: password,
        })
    })
    .then(res => res.json())
    .then(res => console.log(res))
})