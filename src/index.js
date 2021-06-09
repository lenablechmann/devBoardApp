import * as dropdownMenu from './hamburgerMenu.js';

// make sure the DOM is fully loaded first.
document.addEventListener('DOMContentLoaded', function(){

    // dealing with hamburger menu dropdown creation and deletion
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', function(){
        dropdownMenu.createHamburgerMenu();
        const hamburger = document.getElementsByClassName("hamburger-dropdown");
    });
    
});

