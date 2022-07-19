{
    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        body.classList.toggle("body-dark");
    }

    const toggleButtonText = () => {
        const buttonElement = document.querySelector(".js-button");

        if (buttonElement.innerText === "Włącz ciemniejsze tło") {
            buttonElement.innerText = "Wyłącz ciemniejsze tło";
        } else {
            buttonElement.innerText = "Włącz ciemniejsze tło";
        };
    };

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", onChangeBackgroundClick);
        buttonElement.addEventListener("click", toggleButtonText);
    };

    init();
}