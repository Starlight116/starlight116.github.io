// Description: This file contains the javascript code for the sidenav menu.
// Author: Starlight
// Updated 20/03/2025

//open the sidenav menu
function openNav() {
    if(window.innerWidth < 1000){
        document.getElementById("sidenav").style.width = "80%";
        document.getElementById("sidenav").style.display = "flex";
    }
}

//Close/hide the sidenav menu
function closeNav() {
    if(window.innerWidth < 1000){
        document.getElementById("sidenav").style.width = "0";  
        document.getElementById("sidenav").style.display = "none";
    }    
}

//if i click on the menu icon, the menu will open
const menuIcon = document.getElementById('open');
menuIcon.addEventListener('click', function(){
    openNav();
});

//if i click on a link in the menu, the menu will close
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', function(){
        closeNav();
    });
});


//if i resize the window, the menu will close
window.addEventListener("resize", function(){
    closeNav();
    //if the window width is greater than 800px, the menu will be displayed as a flex container
    if(window.innerWidth > 999){
        document.getElementById("sidenav").style.display = "flex";
        document.getElementById("sidenav").style.width = "auto";
    }
});

//if i click on the close button, the menu will close
const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function(){
    closeNav();
});