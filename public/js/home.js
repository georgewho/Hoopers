'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
// need to link the click function/custom checkbox of the star
$("checkbox").change(addFavGame);
}

function addFavGame(e){
  e.preventDefault();
  if(this.checked) {
    console.log("clicked");
}

}