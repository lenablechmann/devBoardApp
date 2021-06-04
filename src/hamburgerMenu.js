export default function createHamburgerMenu() {
    console.log("im creating a hamburger menu");
    const topNav = document.getElementsByClassName("top-nav");
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
