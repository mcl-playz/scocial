function openProfileDropdown() {
    document.getElementById("profileDropdownContent").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#profileBtn')) {
        var dropdown = document.getElementById("profileDropdownContent");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}