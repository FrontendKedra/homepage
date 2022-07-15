let buttonElement = document.querySelector(".js-button");
let body = document.querySelector(".js-body");

buttonElement.addEventListener("click", () => {
    if(buttonElement.innerText === "Włącz ciemniejsze tło") {
        buttonElement.innerText = "Wyłącz ciemniejsze tło";
    }  else {
        buttonElement.innerText = "Włącz ciemniejsze tło";
}
    body.classList.toggle("body-dark");
})