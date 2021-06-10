import * as dropdownMenu from './hamburgerMenu.js';

// make sure the DOM is fully loaded first.
document.addEventListener('DOMContentLoaded', function(){

    // dealing with hamburger menu dropdown creation and deletion
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', function(){
        dropdownMenu.createHamburgerMenu();
        const hamburger = document.getElementsByClassName("hamburger-dropdown");
    });

    // a different approach to the dropdown menu, Plan:
    // first create the html for the dropdown menu dynamically (will take json)
    // create onhover classes for the dropdown menu
    // eventlistener onclick for showing this menu
    // eventlistener for outside clicks to delete the show class.
    
}); 

