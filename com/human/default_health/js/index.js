// 메인 화면 js
const sliderWrap = document.querySelector(".imgSlide");
const imgSlide = document.querySelector(".imgSlide");
const slideInner = document.querySelector(".slideInner");
const slider = document.querySelectorAll(".slider");
const slideBtn = document.querySelector("slideBtn");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;
let sliderCount = slider.length;
let sliderWidth = imgSlide.offsetWidth;

function gotoSlider(num) {
    slideInner.style.transition = "all 400ms";
    slideInner.style.transform = "translateX(" + -sliderWidth * num + "px)";
    currentIndex = num;
}


prev.addEventListener("click", () => {
    let prevIndex = (sliderCount + currentIndex - 1) % sliderCount;
    gotoSlider(prevIndex);
});

next.addEventListener("click", () => {
    let nextIndex = (currentIndex + 1) % sliderCount;
    gotoSlider(nextIndex);
});
// 메인 화면 js 끝