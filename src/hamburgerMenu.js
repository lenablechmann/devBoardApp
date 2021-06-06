export default function createHamburgerMenu() {
    const topNav = document.getElementsByClassName("top-nav");
    const hamburger = document.getElementsByClassName("hamburger-dropdown")
    console.log(hamburger);
    if (hamburger.length < 1) {
        const hamburgerHTML = `
            <section class="hamburger-dropdown">
                <ul class="project-list-dropdown">
                    <li class="project-link" id="project-1">Project 1</li>
                    <li class="project-link" id="project-2">Project 2</li>
                    <li class="project-link" id="project-3">Project 3</li>
                    <li class="create-project"> 
                        New Project
                    </li>
            </section>
        `;
        topNav[0].insertAdjacentHTML('afterend', hamburgerHTML);
    }

    else {
        hamburger[0].innerHTML = '';
        hamburger[0].remove();
    }

}
