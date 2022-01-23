const burger = document.querySelector(".main-nav__burger");
const header_menu = document.querySelector(".main-nav");

    burger.onclick = function() {
    burger.classList.toggle("active");
    header_menu.classList.toggle("active");
}

    header_menu.onclick = function() {
    burger.classList.remove("active");
    header_menu.classList.remove("active");
}    
