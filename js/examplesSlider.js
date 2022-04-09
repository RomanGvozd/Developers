const screenWidth = window.screen.width;

if (screenWidth <= 1000) {
    const wrapperButton = document.createElement("div");

    const buttonLeft = document.createElement("div");
    const buttonRight = document.createElement("div");

    const examplesWrapper = document.querySelector(".examples-wrapper");

    examplesWrapper.appendChild(wrapperButton);

    wrapperButton.appendChild(buttonLeft);
    wrapperButton.appendChild(buttonRight);

    wrapperButton.classList.add('examples__wrapper-button');
    buttonLeft.classList.add('examples__button-left');
    buttonRight.classList.add('examples__button-right');
}

const examplesSlider = document.querySelector(".examples__content");
const examplesLeft = document.querySelector(".examples__button-left");
const examplesRight = document.querySelector(".examples__button-right");


let examplesSlide = 27;

const examplesMove = (value) => examplesSlider.setAttribute("style", `transform:translateX(${value}%)`);

examplesLeft.addEventListener('click', ()=> {
    if (examplesSlide < 27) {
        examplesMove(examplesSlide = examplesSlide + 49.5);
    }
});

examplesRight.addEventListener('click', ()=> {
    if (examplesSlide > -22) {
        examplesMove(examplesSlide = examplesSlide - 49.5);
    }
});