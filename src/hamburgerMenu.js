export function createHamburgerMenu() {
    console.log("you've clicked the menu")
}

export function deleteHamburgerMenu() {
    const hamburger = document.getElementsByClassName("hamburger-dropdown")
    if (hamburger.length >= 1) {
        hamburger[0].innerHTML = '';
        hamburger[0].remove();
    }

}
