/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("menuContainer").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("menuContainer").style.width = "0";
}

window.onclick = function(event) {
    if (!event.target.matches('#openNavBtn')) {
        if (!event.target.matches("#menuContainer")) {
            closeNav();
        }
    }
}