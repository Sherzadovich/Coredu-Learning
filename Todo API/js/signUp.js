// Sign Up Section
const signUpInput = document.querySelector(".signUpInput")
const signUpSecondInput = document.querySelector(".signUpSecondInput")
const buttonEl = document.querySelector(".btn")
const formEl = document.querySelector("#inputForm")


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    

    fetch("https:/todo-for-n92.cyclic.app/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: "Ibrohim2004",
            password: "2234",
        })
    })
    .then((res) => {
        return res.json()
    }).then((res) => {
        localStorage.setItem("user", JSON.stringify(res.token))
        // const arr = [];
        //     const signUpEl = signUpInput.value;
        //     const signUpInputEl = signUpSecondInput.value;

        //     if(signUpEl && signUpInputEl) {
        //         const inputObj = {
        //             id: 0,
        //             username,
        //             password,
        //         }

        //         arr.push(inputObj);
        //         console.log(arr);
        //     } else {
        //         alert("Username or Password didn't enter!")
        //     }
    }).catch(err => {
        console.log(err);
    })
})


