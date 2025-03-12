function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
}

  /* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function reorderContent() {
    const cardRight = document.querySelectorAll('.cardRight');
    const cardLeft = document.querySelectorAll('.cardLeft');

    if (window.innerWidth <= 1080) {
        cardRight.forEach(card =>{
            card.style.flexDirection="column"
        });
        cardLeft.forEach(card =>{
            card.style.flexDirection="column"
        });
    } else {
        cardRight.forEach(card =>{
            card.style.flexDirection="row"
        });
        cardLeft.forEach(card =>{
            card.style.flexDirection="row"
        });
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
    //if i click on a link in the menu, the menu will close
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(){
            closeNav();
        });
    });
}

window.onload = function() {
    screenSize();
};
