const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav =document.querySelector(".mobile_menu");
const option = document.querySelectorAll(".nav_item");

function addActive(){
    nav.classList.add("active");
}
function removeActive(){
    nav.classList.remove("active");
}

menu.addEventListener("click", addActive);
close.addEventListener("click", removeActive);
option.forEach(n => n.addEventListener("click", removeActive));