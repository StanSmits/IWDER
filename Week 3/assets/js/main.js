let arrayFavorieten = [];

function navigationButtons(type) {
    // Get the current state of the button pressed
    let button = document.getElementsByName("button-" + type)[0];
    let buttonState = button.checked;
    let menuItems = document.getElementsByClassName("menu-kaart-item");


    if (type == "favorieten") {
        // Loop through all the menu items
        for (let i = 0; i < menuItems.length; i++) {
            // Get the pizza type of the current menu item
            let menuItem = menuItems[i];
            let menuItemType = menuItem.getAttribute("data-pizza-name");
            // Check if the pizza is in the array
            if (arrayFavorieten.includes(menuItemType)) {
               // If the button is pressed, show the menu item
               if (buttonState) {
                menuItem.style.display = "block";
            } else {
                menuItem.style.display = "none";
            }
            }
        }
    } else {
        for (let i = 0; i < menuItems.length; i++) {
            // Get the pizza type of the current menu item
            let menuItem = menuItems[i];
            let menuItemType = menuItem.getAttribute("data-pizza-type");
            // If the pizza type of the current menu item matches the type of the button pressed
            if (menuItemType == type) {
                // If the button is pressed, show the menu item
                if (buttonState) {
                    menuItem.style.display = "block";
                } else {
                    menuItem.style.display = "none";
                }
            }
        }
    }
}

function favorietButton(node) {
    // Get the pizza type of the current menu item
    let menuItem = node.parentNode;
    let menuItemType = menuItem.getAttribute("data-pizza-name");

    // Check if the pizza is in the array
    if (arrayFavorieten.includes(menuItemType)) {
        // Remove the pizza from the array
        arrayFavorieten = arrayFavorieten.filter(item => item !== menuItemType);
    }
    // Add the pizza to the array
    else {
        arrayFavorieten.push(menuItemType);
    }
}