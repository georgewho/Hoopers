//facebook login
function fb_login() {
    FB.login(function(response){
        checkLoginState();
    });
}

//facebook logout
function fb_logout() {
    FB.getLoginStatus(function(response) {
        if (response && response.status === 'connected') {
            FB.logout(function(response) {
                console.log('Successfully logged out of Facebook');
                window.location.replace("/login");
            });
        }
        else {
            window.location.replace("/login");
        }
    });
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
        FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
}

function changeUser(response) {
    if(typeof(Storage) !== "undefined") {
        localStorage.facebookname = response.first_name;
        localStorage.picurl = response.picture.data.url;
        localStorage.loggedIn = "loggedIn";
    }
    else {
        console.log("Your browser does not support web storage.");
    }

    window.location.replace("/home");
}
