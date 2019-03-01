'use strict';



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

    //listen for clicks on map for google analytics
    $("#mainMap").click(clickMap);
    $("#mapArea1").click(clickMap);
    $("#mapArea2").click(clickMap);
    $("#mapArea3").click(clickMap);
}


function callback(result) {
    console.log("callabck");
}

//sends an event to analytics whenever map is clicked
function clickMap(e) {
    e.preventDefault();
    console.log("clicked on the map!");

    ga("send", "event", 'map', 'click');
}