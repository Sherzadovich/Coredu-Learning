//* Sign in
const signInFormEl = document.querySelector("#signInForm");
const secondEmailInputEl = document.querySelector("#secondEmailInput");
const secondPasswordInput = document.querySelector("#secondPasswordInput");
// const transferToLoginEl = document.querySelector(".transferToLogin");

signInFormEl.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let bodyObj = {
    username: secondEmailInputEl.value,
    password: secondPasswordInput.value,
  };
  console.log(bodyObj);

  fetch("https://todo-for-n92.cyclic.app/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObj),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
        console.log(res);
        localStorage.setItem("token", res.token);
        window.location.replace("/index.html");
      } else {
        alert("Your password or username is incorrect!");
      }
    })
    .catch((err) => console.log(err));
});
