import "../sass/style.scss";

function initInnerAccordion (){
    const toggles = document.querySelectorAll(".footer__title");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const column = toggle.closest(".footer__column");
        column.classList.toggle("footer__column_active");
      });
    });
}

initInnerAccordion()
