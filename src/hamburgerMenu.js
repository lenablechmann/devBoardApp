export function createHamburgerMenu(jsonText) {
  // first create the html for the dropdown menu dynamically (will take json in the end)
  // write a function that parses this json and only takes project names
  // and puts them into html elements.
  //  which are then put into the page as hamburger menu. This will make sure
  //  that the real projects of the user are loaded.
  //  Meaning when this function is called, it needs to get called with a json
  //  Meaning this createHamburgerMenu() can be tested with jest.

  /* a possible json example for this app
    {
  "id": 83,
  "belongsToUser": "a8934uuo3e6267",
  "projects": [{
      "name": "todo app", 
      "issues": [
	{
	  "name": "Create wireframe", 
	  "status": "review"
	  "tags": ["blocker", "independent"]

	}, {
	  "name": "Figma design", 
	  "status": "todo"
	  "tags": ["blocker", "dependent"]
	}
      ]
    }, {
      "issues": [
	{
	  "name": "Create wireframe", 
	  "status": "review"
	  "tags": ["blocker", "independent"]

	}, {
	  "name": "Figma design", 
	  "status": "todo"
	  "tags": ["blocker", "dependent"]
	}
      ]
	}]
    }]
}
*/
  console.log("you've clicked the menu");
}

export function deleteHamburgerMenu() {
  const hamburger = document.getElementsByClassName("hamburger-dropdown");
  if (hamburger.length >= 1) {
    hamburger[0].innerHTML = "";
    hamburger[0].remove();
  }
}
