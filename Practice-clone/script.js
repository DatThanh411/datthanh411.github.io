function unhide() {
    var left = document.getElementsByClassName('left-menu');

    left[0].style = "left:0; transition: left .3s;";
}

function hide() {
    var left = document.getElementsByClassName('left-menu');

    left[0].style = "left:-300; transition: left .3s;";
}

function hideRight() {
    var right = document.getElementsByClassName('right-menu');

    right[0].style = "right:-300px; transition: right .3s;";
}

function unhideRight() {
    var right = document.getElementsByClassName('right-menu');

    right[0].style = "right:0; transition: right .3s;";
}


function login() {
    var login = document.getElementsByClassName('login-form');

    var register = document.getElementsByClassName('form-register');

    var border = document.getElementsByClassName('register');

    var borderLogin = document.getElementsByClassName('login');

    borderLogin[1].style = "border-bottom: 3px solid red;";
    border[0].style = "border:none;";

    login[0].style = "display:block;";
    register[0].style = "display:none;";
}

function register() {
    var login = document.getElementsByClassName('login-form');

    var register = document.getElementsByClassName('form-register');

    var border = document.getElementsByClassName('register');

    var borderLogin = document.getElementsByClassName('login');

    borderLogin[1].style = "border:none;";
    border[0].style = "border-bottom: 3px solid red;";

    register[0].style = "display:block;";
    login[0].style = "display:none;";
}