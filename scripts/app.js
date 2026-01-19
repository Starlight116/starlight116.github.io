
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
   await loadPage(page);
  if (page === "home") {
    animateHighlight();
  }
})();

// Navigation
window.addEventListener("hashchange", async () => {
  const page = location.hash.replace("#", "") || "home";
   await loadPage(page);
  if (page === "home") {
    animateHighlight();
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".project-button");
  if (!btn) return;


  document.getElementById("overlay").classList.add("active");
  document.body.classList.add("modal-open");
  //on va chercher le titre au dessus du bouton cliqué
  const projectCard = btn.closest(".project-card");
  const projectTitle = projectCard.querySelector(".project-title").innerText;
  const modalContent = document.querySelector(".modal-content");
  const modalTitle = document.querySelector(".modal-title");
  //on remplit le titre du modal avec le titre du projet  
  modalTitle.innerText = projectTitle;
  //on va chercher le contenu du projet dans le dossier projets en fonction du titre
  //on remplace les espaces par des underscores pour correspondre au nom du fichier
  //il faut aussi gérer les caractères spéciaux, il y en a dans plusieurs titres
  fetch(`../pages/projets/${projectTitle.replace(/ /g, "_").replace(/'/g, "").replace(/,/g, "").replace(/é/g, "e").replace(/:/g, "").replace(/è/g, "e").replace(/à/g, "a").replace(/ê/g, "e")}.html`)
    .then((res) => res.text())
    .then((html) => {
      modalContent.innerHTML = html;
    }).catch(() => {
      modalContent.innerHTML = "<p>Contenu indisponible.</p>";
    });
});

// on utilise le même modal pour les articles
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".blog-date-card");
  if (!btn) return;
  document.getElementById("overlay").classList.add("active");
  document.body.classList.add("modal-open");
  const articleDate = btn.closest(".blog-date-card").innerText;
  const modalContent = document.querySelector(".modal-content");
  const modalTitle = document.querySelector(".modal-title");
  modalTitle.innerText = articleDate;
  fetch(`../pages/articles/${articleDate.replace(/ /g, "_")}.html`)
    .then((res) => res.text())
    .then((html) => {
      modalContent.innerHTML = html;
      //le titre de l'article est dans une balise h2, on le récupère et on l'ajoute dans le titre du modal après le date
      const articleTitle = modalContent.querySelector("h2").innerText;
      modalTitle.innerText += " - " + articleTitle;

      //on supprime le h2 après l'avoir utilisé
      modalContent.querySelector("h2").remove();
    }).catch(() => {
      modalContent.innerHTML = "<p>Contenu indisponible.</p>";
    });
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
let typewriterRunning = false;

function animateHighlight() {
  if (typewriterRunning) return;
  typewriterRunning = true;

  const words = [
    "Web Designer",
    "Integratrice Front-End",
    "Creatrice de sites modernes",
    "UX/UI Designer",
    "Graphiste",
    "Illustratrice",
    "Character Designer",
    "Scénographe",
    "Directrice Artistique",
    "3D Artist",
    "Motion Designer",
    "Camille"
  ];

  const el = document.getElementById("highlight");
  if (!el) {
    typewriterRunning = false;
    return;
  }

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseAfterWord = 1200;
  const pauseLastWord = 3500;

  function type() {
    if (!document.body.contains(el)) {
      typewriterRunning = false;
      return;
    }

    const currentWord = words[wordIndex];
    const currentDelay =
      wordIndex === words.length - 1 ? pauseLastWord : pauseAfterWord;

    if (!isDeleting) {
      el.textContent = currentWord.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), currentDelay);
      }
    } else {
      el.textContent = currentWord.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );
  }

  type();
}