
// let names = document.querySelector(".name").value;
let theplayer = document.querySelector(".theplayer");
// let btn = document.querySelector(".button");

// btn.addEventListener("click", function () {
    theplayer.innerHTML = "Hello " + JSON.parse(localStorage.getItem('names'));

// });