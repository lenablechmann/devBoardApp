import * as dropdownMenu from "./hamburgerMenu.js";
import * as createNewIssueModal from "./newIssueModal.js";

// make sure the DOM is fully loaded first.
document.addEventListener("DOMContentLoaded", function () {
  // dealing with hamburger menu dropdown creation and deletion
  // REDO hamburger dropdown similar to modals
  const hamburgerMenu = document.getElementById("hamburger-menu");
  hamburgerMenu.addEventListener("click", function () {
    dropdownMenu.createHamburgerMenu();
    const hamburger = document.getElementsByClassName("hamburger-dropdown");
  });

  // NEW ISSUE MODAL
  const newIssueModal = document.getElementsByClassName("new-issue-modal")[0];
  const newIssueBtn = document.getElementById("new-issue-btn");
  const spanClose = document.getElementsByClassName("close")[0];
  newIssueBtn.onclick = function () {
    // turn this function into something that parses input inside Modal
    createNewIssueModal();
    newIssueModal.style.display = "block";
  };
  spanClose.onclick = function () {
    newIssueModal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == newIssueModal) {
      newIssueModal.style.display = "none";
    }
  };

  // NEW PROJECT MODAL
  // COOKIE ACCEPTANCE MODAL
});
