let arrayFavorieten = [];

function navigationButtons(type) {
    // Get the current state of the button pressed
    let button = document.getElementsByName("button-" + type)[0];
    let buttonState = button.checked;
    let menuItems = document.getElementsByClassName("menu-kaart-item");


    disableOtherButtons(type);
    if (type == "favorieten") {
        // Loop through all the buttons
        for (let i = 0; i < button.length; i++) {
            // Check if the button is favorieten
            if (button[i].name != "button-favorieten") {
                // If the button is not favorieten, set the button to false
                button[i].checked = false;
            }
        }

        // Loop through all menu items
        for (let i = 0; i < menuItems.length; i++) {
            let menuItem = menuItems[i];
            let menuItemType = menuItem.getAttribute("data-pizza-name");

            // Check if the menu item is in the array
            if (arrayFavorieten.includes(menuItemType)) {
                menuItem.style.display = "block";
            }
            // If the menu item is not in the array, hide it
            else {
                menuItem.style.display = "none";
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
                    menuItem.style.display = "grid";
                } else {
                    menuItem.style.display = "none";
                }
            }
        }
    }
}

function disableOtherButtons(type) {
    let buttons = document.getElementsByName("button-" + type);
    if (type == "favorieten") {
        for (let i = 0; i < buttons.length; i++) {
            // If the button is favorieten is checked, disable all the other buttons
            // If the button is favorieten is not checked, enable all the other buttons
            if (buttons[i].checked) {
                for (let j = 0; j < buttons.length; j++) {
                    if (buttons[j].name != "button-favorieten") {
                        buttons[j].disabled = true;
                    }
                }
            } else {
                for (let j = 0; j < buttons.length; j++) {
                    if (buttons[j].name != "button-favorieten") {
                        buttons[j].disabled = false;
                    }
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

    position = findPos(node);
    
    confetti("tsparticles", {
        angle: 90,
        count: 25,
        position: position,
        spread: 90,
        startVelocity: 60,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 50,
        colors: ["#fff", "#f00"],
        shapes: ["square", "circle"],
        scalar: 1,
        zIndex: 2000,
        disableForReducedMotion: true
      });
}

function findPos(obj){
    var curleft = 0;
    var curtop = 0;
 
    if (obj.offsetParent) {
       do {
          curleft += obj.offsetLeft;
          curtop += obj.offsetTop;
       } while (obj = obj.offsetParent);
       return {X:curleft,Y:curtop};
    }
 }