/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.opacity = "1.0";
    
    document.getElementsByClassName("container")[0].style.opacity = "0.0";
}

/* Open when someone clicks on the span element */
function openFeat() {
    document.getElementById("myNav").style.opacity = "0.0";
    document.getElementsByClassName("yay").style.opacity = "1.0";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.opacity = "0.0";
    document.getElementsByClassName("container")[0].style.opacity = "1";
}
