function hide() {
    const register = document.getElementsByClassName("register");
    
    if (register[0].style.display === "none") {
        register[0].style.display = "block";
    } else {
        register[0].style.display = "none";
    }
}