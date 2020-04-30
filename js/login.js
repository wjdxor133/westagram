const userId = document.querySelector("#userId");
const userPw = document.querySelector("#userPw");
const loginBtn = document.querySelector(".loginBtn");

function check() {
  if (userId.value.length === 0 || userPw.value.length === 0) {
    loginBtn.style.backgroundColor = "#b2dffc";
  } else {
    loginBtn.style.backgroundColor = "#83ccfb";
  }
}

userId.addEventListener("keyup", check);

userPw.addEventListener("keyup", check);

check();
