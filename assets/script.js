const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "./assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	}
];

// Variables
const btnSliderPrevious = document.querySelector("#btnSliderPrevious");
const btnSliderNext = document.querySelector("#btnSliderNext");
const dotsContainer = document.querySelector(".dots");

const sliderActiveImage = document.querySelector(".banner-img");
const sliderActiveText = document.querySelector("p"); 

let currentSlide = 0;


/**
 * Créez et ajoutez les éléments .dot enfants en fonction de la longueur du tableau slides
 */
function createAllSliderDots(){
    for (let j = 0; j < slides.length; j++) {
	    const dot = document.createElement("div");
	    dot.classList.add("dot")
	    dotsContainer.appendChild(dot);
    }
}

/**
 * Fonction pour mettre à jour les bullets dynamiquement 
 */
function changeActiveDot(newDotActiveIndex) {
	//dotsList.forEach((dot, index) => {
	//	if (index === newDotActiveIndex) {
	//		dot.classList.add("dot_selected");
	//	} else {
	//		dot.classList.remove("dot_selected");
	//	}
	//);

    // Sélectionnez à nouveau les éléments .dot après les avoir ajoutés
    const dotsList = dotsContainer.querySelectorAll(".dot");

    // Supprime la classe dot_selected pour tous le monde
    dotsList.forEach(dot => {
        dot.classList.remove("dot_selected");
    })

    // Ajout la classe dot_selected au dot qui à l'index newDotActiveIndex
    dotsList[newDotActiveIndex].classList.add('dot_selected')
}

/**
 * Affiche la slide en fonction du slideIndex
 */
function displaySlide(slideIndex){
    sliderActiveImage.src = slides[slideIndex].image;
	sliderActiveText.innerHTML = slides[slideIndex].tagLine;
}

/**
 * Écouteurs d'événements pour le bouton gauche (précédent)
 */
btnSliderPrevious.addEventListener("click", function () {
	currentSlide--;

	if (currentSlide < 0) { 
		currentSlide = slides.length - 1;
	}
    
    displaySlide(currentSlide)

	changeActiveDot(currentSlide);
})

/**
 * Écouteurs d'événements pour le bouton droite (suivant)
 */
btnSliderNext.addEventListener("click", function () {
	currentSlide++;

	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}

    displaySlide(currentSlide);

	changeActiveDot(currentSlide);
});


createAllSliderDots();

changeActiveDot(currentSlide);



