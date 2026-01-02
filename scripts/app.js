async function loadPartial(id, file) {
  const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
}

async function loadPage(page) {
  const content = document.getElementById("content");

  try {
    const res = await fetch(`../pages/${page}.html`);
    content.innerHTML = await res.text();
  } catch {
    content.innerHTML = "<p>Erreur de chargement</p>";
  }
}

// Chargement initial
(async () => {
  await loadPartial("header", "../pages/header.html");
  await loadPartial("footer", "../pages/footer.html");

  const page = location.hash.replace("#", "") || "home";
  loadPage(page);
})();

// Navigation
window.addEventListener("hashchange", () => {
  const page = location.hash.replace("#", "") || "home";
  loadPage(page);
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".project-button");
  if (!btn) return;


  document.getElementById("overlay").classList.add("active");
  document.body.classList.add("modal-open");
});
// Fermer le modal lorsque le bouton de fermeture est activé
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("close")
  ) {
    document.getElementById("overlay").classList.remove("active");
    document.body.classList.remove("modal-open");
  }
});

//bouton pour retour en haut de page
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});