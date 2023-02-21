// Sign Up Section
const signUpInput = document.querySelector(".signUpInput")
const signUpSecondInput = document.querySelector(".signUpSecondInput")
const buttonEl = document.querySelector(".btn")
const formEl = document.getElementById("inputForm")


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const signUpEl = signUpInput.value;
    const signUpInputEl = signUpSecondInput.value;
    
    if(signUpEl && signUpInputEl) {
                let arr = [];

                const inputObj = {
                    username: "Ibrohim2010",
                    password: "3456",
                }

                arr.push(inputObj);
                console.log(arr);
                localStorage.setItem("token", JSON.stringify(arr))
            } else {
                alert("Username or Password didn't enter!")
            }

    fetch("https:/todo-for-n92.cyclic.app/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: "Ibrohim2010",
            password: "3456",
        })
    })
    .then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.token))
    }).catch(err => {
        console.log(err);
    })
})


