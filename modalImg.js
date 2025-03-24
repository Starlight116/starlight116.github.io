 // Sélectionner toutes les images et modals dans toutes les grilles
 var grids = document.querySelectorAll('.bento'); // Toutes les grilles
 grids.forEach(function(grid) {
     var images = grid.querySelectorAll('.myImg'); // Toutes les images dans cette grille
     var modals = grid.querySelectorAll('.modal'); // Tous les modals dans cette grille
     var closeBtns = grid.querySelectorAll('.closebtn'); // Tous les boutons de fermeture dans cette grille

     // Ajouter un événement "click" à chaque image
     images.forEach(function(img, index) {
         var modal = modals[index];  // Modal spécifique pour chaque image
         var modalImg = modal.querySelector('.modal-content');
         var captionText = modal.querySelector('.caption');

         img.onclick = function() {
             modal.style.display = "block";
             modalImg.src = this.src;
             modalImg.alt = this.alt;
             captionText.innerHTML = this.alt;
         };

         // Fermer le modal lorsque le bouton de fermeture est cliqué
         closeBtns[index].addEventListener("click", function() {
             modal.style.display = "none";
         });
     });
 });