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
    if (window.matchMedia("(max-width: 800px)").matches) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mobile").style.display = "block";
        document.getElementById("normal").style.display = "none";
    } else {
        document.getElementById("mobile").style.display = "none";
        document.getElementById("normal").style.display = "block";
    }
}
window.onload = function() {
    screenSize();
};