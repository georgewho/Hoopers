$(function() {
    initializePage();
});
function initializePage() {
        var user = localStorage.username;
        console.log(localStorage.facebookname)

        if(localStorage.loggedIn === "loggedIn") {
        $('#name').html(localStorage.facebookname);
        $('.userphoto').attr("src", localStorage.picurl);
        $('#icon').hide();
    }
    else if(user !== undefined && user !== null) {
        $('.userphoto').hide();
        $('#name').html(localStorage.facebookname);
    }
    else {
        //$('#name').html("<h2>Hello User</h2>");
        $('.userphoto').hide();
    }
}
