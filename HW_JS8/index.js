// function validateNameInput(event) {
//   const input = event.target;
//   input.value = input.value.replace(/\d/g, "");
// }

//2.
// const modal = document.getElementById("myModal");
// const openModalBtn = document.getElementById("openModalBtn");
// const closeModalBtn = document.getElementById("closeModalBtn");

// openModalBtn.onclick = function () {
//   modal.style.display = "block";
// };

// closeModalBtn.onclick = function () {
//   modal.style.display = "none";
// };

//3.
// const field = document.getElementById("field");
// const ball = document.getElementById("ball");
// const ballSize = 20;

// field.addEventListener("click", function (event) {
//   const fieldRect = field.getBoundingClientRect();
//   let x = event.clientX - fieldRect.left - ballSize / 2;
//   let y = event.clientY - fieldRect.top - ballSize / 2;

//   if (x < 0) x = 0;
//   if (y < 0) y = 0;
//   if (x + ballSize > fieldRect.width) x = fieldRect.width - ballSize;
//   if (y + ballSize > fieldRect.height) y = fieldRect.height - ballSize;

//   ball.style.left = x + "px";
//   ball.style.top = y + "px";
// });

//4.
// const lights = document.querySelectorAll(".light");
// let activeLight = 0;

// document.getElementById("nextBtn").addEventListener("click", () => {
//   lights.forEach((light) => (light.style.backgroundColor = "gray"));

//   if (activeLight === 0) {
//     lights[0].style.backgroundColor = "red";
//   } else if (activeLight === 1) {
//     lights[1].style.backgroundColor = "yellow";
//   } else {
//     lights[2].style.backgroundColor = "green";
//   }

//   activeLight = (activeLight + 1) % 3;
// });

//5
// const books = document.querySelectorAll(".book");

// books.forEach((book) => {
//   book.addEventListener("click", function () {
//     books.forEach((b) => b.classList.remove("selected"));

//     book.classList.add("selected");
//   });
// });
