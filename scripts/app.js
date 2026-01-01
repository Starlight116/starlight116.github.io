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