function clearPage() {
    // Get all the menu items
    let menuItems = document.getElementsByClassName("menu-kaart-item");

    // Loop through all the menu items
    for (let i = 0; i < menuItems.length; i++) {
        // Hide all the menu items
        menuItems[i].style.display = "none";
    }
}