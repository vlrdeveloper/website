const btn = document.querySelector(".btn");
const main = document.querySelector(".main-box");
const errorMessage = document.querySelector(".error");
const image = document.querySelector(".reaction-img");

const correctUsername = "salman";
const correctPassword = "sss";

main.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username === correctUsername && password === correctPassword) {
    image.src = "happy.png";
    setTimeout(() => {
      window.location.href = "page2.html";
    }, 3000);
  } else {
    image.src = "angry.png";
    errorMessage.style.display = "block";
  }
});
