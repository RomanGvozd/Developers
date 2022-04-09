const slider = document.querySelector(".stages__slider-line");
const buttonLeft = document.querySelector(".stages__button-left");
const buttonRight = document.querySelector(".stages__button-right");

let slide = 0;

const screenWidth = window.screen.width;

const move = (value) => slider.setAttribute("style", `transform:translateX(-${value}%)`);

buttonLeft.addEventListener('click', ()=> {
    if (slide > 0) {
        if (screenWidth <= 700) {
            move(slide = slide - 100);
        } else {
            move(slide = slide - 50);
        }
    }
});

buttonRight.addEventListener('click', ()=> {
    if (screenWidth <= 700) {
        if (slide <= 300) {
            if (screenWidth <= 700) {
                move(slide = slide + 100);
            } else {
                move(slide = slide + 50);
            }
        }
    } else {
        if (slide <= 100) {
            if (screenWidth <= 700) {
                move(slide = slide + 100);
            } else {
                move(slide = slide + 50);
            }
        }
    }

});

