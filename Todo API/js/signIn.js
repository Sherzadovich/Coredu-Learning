// Sign In Section 
const signInInput = document.querySelector(".signInInput");
const signInSecondInput = document.querySelector(".signInSecondInput");
const signInForm = document.querySelector("#signInForm");

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    fetch("https:/todo-for-n92.cyclic.app/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            username: "Ibrohim2004",
            password: "2234",
        })
    })
    .then(res => res.json())
    .then(res => console.log(res))
})