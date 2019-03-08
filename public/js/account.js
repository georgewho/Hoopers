$(function() {
    initializePage();
    saveSkill();
    saveNotes();
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

function saveSkill() {
    var skillValue = localStorage.getItem("skillValue");

    if(skillValue != null) {
        $("select[name=skill]").val(skillValue);
    }
        $("select[name=skill]").on("change", function() {
            localStorage.setItem("skillValue", $(this).val());
        });
}

function saveNotes() {
    var noteValue = localStorage.getItem("noteValue");
    
    if(noteValue != null) {
        $("input[name=notes]").val(noteValue);
    }
        $("input[name=notes]").on("change", function() {
            localStorage.setItem("noteValue", $(this).val());
    });
}

