function hide() {
    const register = document.getElementsByClassName("register");
    
    if (register.style.display === "none") {
        register.style.display = "block";
    } else {
        register.style.display = "none";
    }
}