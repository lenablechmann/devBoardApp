import createHamburgerMenu from './hamburgerMenu.js';

// make sure the DOM is fully loaded first.
document.addEventListener('DOMContentLoaded', function(){
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', function(){
        createHamburgerMenu();
    });
});

