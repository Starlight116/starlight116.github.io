let sidenav = document.getElementById("sidenav");
let openbtn = document.getElementById("openbtn");
let closebtn = document.getElementById("closebtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add("active");
}
function closeNav() {
    sidenav.classList.remove("active");
}