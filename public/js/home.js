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
<<<<<<< HEAD
  $("checkbox").change(addFavGame);
=======
$('.checkbox').on('change', function(e){ // on change of state
       e.preventDefault();
       console.log("clicked");
      var endpoint = "/favoritegame/".concat(this.id);
	    console.log(endpoint);
       $.get(endpoint, callback);
})
>>>>>>> fa7742a676d2f8485b21f9fdcc88b5048adf7eec
}


function callback(result){
  console.log("callabck");
}

