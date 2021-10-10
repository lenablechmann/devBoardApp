import * as dropdownMenu from "./hamburgerMenu.js";

// make sure the DOM is fully loaded first.
document.addEventListener("DOMContentLoaded", function () {
  // dealing with hamburger menu dropdown creation and deletion
  const hamburgerMenu = document.getElementById("hamburger-menu");
  hamburgerMenu.addEventListener("click", function () {
    dropdownMenu.createHamburgerMenu();
    const hamburger = document.getElementsByClassName("hamburger-dropdown");
  });

  // a different approach to the dropdown menu, Plan:
  // first create the html for the dropdown menu dynamically (will take json in the end)
  // create onhover classes for the dropdown menu
  // eventlistener onclick for showing this menu
  // eventlistener for outside clicks to delete the show class.

  // NEW ISSUE MODAL
  const newIssueModal = document.getElementsByClassName("new-issue-modal")[0];

  // Get the button that opens the modal
  const newIssueBtn = document.getElementById("new-issue-btn");

  // Get the <span> element that closes the modal
  const spanClose = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  newIssueBtn.onclick = function () {
    console.log("hello");
    newIssueModal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  spanClose.onclick = function () {
    newIssueModal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == newIssueModal) {
      newIssueModal.style.display = "none";
    }
  };
});
