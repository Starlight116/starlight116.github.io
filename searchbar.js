// Description: This file contains the javascript code for the search bar and the project cards.
// Author: Starlight
// Updated 20/03/2025

let data = [];

const searchBox = document.getElementById('search-box');
const resultsContainer = document.getElementById('results-container');

function displayData(dataToDisplay) {
    resultsContainer.innerHTML = '';
    console.log('Affichage des données:', dataToDisplay);

    if (dataToDisplay.length > 0) {
        dataToDisplay.forEach(item => {
            const lien = document.createElement('a');
            lien.href = item.lien;
            const card = document.createElement('div');
            card.className = dataToDisplay.indexOf(item) % 2 === 0 ? 'cardRight' : 'cardLeft';
            const insideCard = document.createElement('div');
            insideCard.className = dataToDisplay.indexOf(item) % 2 === 0 ? 'insideCardRight' : 'insideCardLeft';
            const image = document.createElement('img');
            image.src = item.image;
            image.className = 'cardImage';
            const title = document.createElement('h3');
            title.textContent = item.nom;
            const description = document.createElement('p');
            description.textContent = item.description;
            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'tags';
            item.tags.forEach(tag => {
                const tagElement = document.createElement('p');
                tagElement.textContent = tag;
                tagElement.className = 'tag';
                tagsContainer.appendChild(tagElement);
            });

            if (dataToDisplay.indexOf(item) % 2 === 0) {
                card.appendChild(image);
            }
            insideCard.appendChild(title);
            insideCard.appendChild(description);
            insideCard.appendChild(tagsContainer);
            
            card.appendChild(insideCard);
            if (dataToDisplay.indexOf(item) % 2 !== 0) {
                card.appendChild(image);
            }
            lien.appendChild(card);         
            resultsContainer.appendChild(lien);
        });
    } else {
        const message = document.createElement('p');
        message.textContent = 'Aucun résultat trouvé.';
        resultsContainer.appendChild(message);
    }
}

fetch('ressources/dataProjet.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
        console.log('Données chargées:', data);
        displayData(data);
    })
    .catch(error => {
        console.error('Erreur lors du chargement des données:', error);
    });

// Ajouter un écouteur d'événement sur la barre de recherche
searchBox.addEventListener('input', function(event) {
    const query = event.target.value.trim().toLowerCase();
    console.log('Recherche:', query);

    if (query.length >= 3) {
        // Filtrer les données uniquement en fonction des tags
        const filteredData = data.filter(item =>
            item.tags.some(tag => tag.toLowerCase().includes(query))
        );
        displayData(filteredData);
    } else if (query.length === 0) {
        // Afficher toutes les données si la barre de recherche est vide
        displayData(data);
    } else {
        // Vider les résultats si la recherche est trop courte
        resultsContainer.innerHTML = '';
    }
});