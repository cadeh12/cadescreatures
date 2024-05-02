const menu = document.querySelector('nav')
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.getElementById('closeIcon');
const menuIcon = document.getElementById('menuIcon');

function toggleMenu() {
    if (menu.classList.contains("displayMenu")) {
        menu.classList.remove("displayMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("displayMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu)