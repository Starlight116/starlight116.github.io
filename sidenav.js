function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
}

  /* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function reorderContent() {
    const container = document.querySelector('.hero');
    const image = document.querySelector('.picture');
    const text = document.querySelector('.text');
    const cardRight = document.querySelectorAll('.cardRight');
    const cardLeft = document.querySelectorAll('.cardLeft');

    if (window.innerWidth <= 900) {
        // Place l'image avant le texte
        if (container.firstChild !== image) {
            container.insertBefore(image, text);
        }
        cardRight.forEach(card =>{
            card.style.flexDirection="column"
        });
        cardLeft.forEach(card =>{
            card.style.flexDirection="column"
        });
    } else {
        // Place l'image après le texte
        if (container.firstChild !== text) {
            container.appendChild(image);
        }
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

function adjustStarshineHeight() {
    document.getElementById('starshine').style.height = document.body.scrollHeight + 'px';
}

const observer = new MutationObserver(updateStarshineHeight);
observer.observe(document.getElementById('results-container'), { childList: true, subtree: true });

window.onload = function() {
    screenSize();
    adjustStarshineHeight();
};

window.onresize = function() {
    screenSize();
    adjustStarshineHeight();
};