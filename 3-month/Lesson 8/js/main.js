//? Homework
const signUpBtn = document.getElementById("signUpBtn");
const signInBtn = document.getElementById("signInBtn");

const arr = [];

signUpBtn.onclick = function() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    const userObj = {
        username: username,
        pass: password,
    }

    arr.push(userObj);

    console.log(arr);
};

signInBtn.onclick = function() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    if(username && password) {
        let isFound = false;
        for(let i = 0; i < arr.length; i++) {
            const isExist = username === arr[i].username && password === arr[i].pass
            if(isExist) {
                alert("Welcome to the website");
                isFound = true;
                console.log(arr[i]);
            }
        }
        if(!isFound) {
            alert("Your username or password is incorrect!")
        }
    }else {
        alert("Please enter your informations!")
    }
}
