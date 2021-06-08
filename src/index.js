import * as dropdownMenu from './hamburgerMenu.js';

// make sure the DOM is fully loaded first.
document.addEventListener('DOMContentLoaded', function(){

    // dealing with hamburger menu dropdown creation and deletion
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', function(){
        dropdownMenu.createHamburgerMenu();
    });
    // remove dropdown if user clicks outside
    const hamburger = document.getElementsByClassName("hamburger-dropdown")[0];
    if (hamburger) {
        console.log("dropdown exists");
    }
    
    window.onclick = function(event) {
        if (!event.target.matches('.hamburger-menu')) {
            console.log("youve clicked outside.");
        }
      }
});

