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
    $('.checkbox').on('change', function(e) { // on change of state
        e.preventDefault();
        console.log("clicked");
        var endpoint = "/favoritegame/".concat(this.id);
        console.log(endpoint);
        $.get(endpoint, callback);
    })

    //listen for clicks on map
    $("#mainMap").click(clickMap);
    $("#mapArea1").click(clickMap);
    $("#mapArea2").click(clickMap);
    $("#mapArea3").click(clickMap);
}


function callback(result) {
    console.log("callabck");
}

function clickMap(e) {
    e.preventDefault();
    console.log("clicked on the map!");

    ga("send", "event", 'map', 'click');
}