function openMenu() {
    document.getElementById("sidebar").style.width = "250px";
    document.body.classList.add("menu-open");
}

function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
    document.body.classList.remove("menu-open");
}
