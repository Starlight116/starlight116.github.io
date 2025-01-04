function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.71)";
    document.body.style.backdropFilter = "blur(2px)";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.body.style.backdropFilter = "none";
  }

function screenSize(){
    // If the screen is less than 800px wide, show the mobile menu
    if (window.matchMedia("(max-width: 900px)").matches) {
        document.getElementById("mySidenav").style.width = "0";
        document.querySelectorAll("#mobile").forEach(function(element)
        {
            element.style.display = "flex";
            element.style.flexDirection = "column";
        });
        document.querySelectorAll("#desktop").forEach(function(element)
        {
            element.style.display = "none";
        });
    } else {
        // If the screen is greater than 800px wide, show the desktop menu
        document.querySelectorAll("#mobile").forEach(function(element)
        {
            element.style.display = "none";
        });
        document.querySelectorAll("#desktop").forEach(function(element)
        {
            element.style.display = "flex";
            element.style.flexDirection = "row";
        });
    }
    // if i change the screen size, the menu will close
    window.addEventListener("resize", function(){
        closeNav();
    });
}
window.onload = function() {
    screenSize();
};