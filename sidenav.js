function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    document.querySelector('overlay').style.backgroundColor = "rgba(0,0,0,0.71)";
    document.querySelector('overlay').style.backdropFilter = "blur(2px)";
}

  /* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('overlay').style.backgroundColor = "rgba(0,0,0,0)";
    document.querySelector('overlay').style.backdropFilter = "none";
}

function reorderContent() {
    const container = document.querySelector('.hero');
    const image = document.querySelector('.picture');
    const text = document.querySelector('.text');

    if (window.innerWidth <= 900) {
        // Place l'image avant le texte
        if (container.firstChild !== image) {
            container.insertBefore(image, text);
        }
    } else {
        // Place l'image après le texte
        if (container.firstChild !== text) {
            container.appendChild(image);
        }
    }
}

function screenSize(){
    const mobile = document.getElementById("mobile");
    const desktop = document.getElementById("desktop");
    const sidenav = document.getElementById("mySidenav");
    const container = document.querySelector('.hero');
    reorderContent();
    // If the screen is less than 900px wide, show the mobile menu
    if (window.matchMedia("(max-width: 900px)").matches) {
        sidenav.style.width = "0";
        mobile.style.display = "block";
        desktop.style.display = "none";
        container.style.flexDirection = "column";
    } else {
        // If the screen is greater than 900px wide, show the desktop menu
        mobile.style.display = "none";
        desktop.style.display = "block";
        container.style.flexDirection = "row";
    }
    // if i change the screen size, the menu will close
    window.addEventListener("resize", function(){
        closeNav();
    });
}
window.onload = function() {
    screenSize();
};