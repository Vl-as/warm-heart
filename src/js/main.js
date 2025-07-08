import "../sass/style.scss";
import { createIcons, icons } from "lucide";

createIcons({ icons });


const burgerMenu = document.querySelector(".burger__menu");
const burgerOverlay = document.querySelector(".burger__overlay");
const burgerOpen = document.querySelector(".burger__open");
const burgerClose = document.querySelector(".burger__close");


function initInnerAccordion (){
    const toggles = document.querySelectorAll(".footer__title");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const column = toggle.closest(".footer__column");
        column.classList.toggle("footer__column_active");
      });
    });
}

function openBurger() {

  burgerOpen.addEventListener("click", () => {

    burgerMenu.classList.add("burger__menu_active");
    burgerOverlay.classList.add("burger__overlay_active");
    document.body.classList.add("burger__lock");
  })
}

function closeBurger (){
  burgerClose.addEventListener("click", () =>{
    burgerMenu.classList.remove("burger__menu_active");
    burgerOverlay.classList.remove("burger__overlay_active");
    document.body.classList.remove("burger__lock")
  })
}


openBurger();
closeBurger()
initInnerAccordion()
