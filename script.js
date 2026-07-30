//==================================================
// GREBY INTRO ANIMATION
// SECTION 1 - SELECT ELEMENTS
//==================================================


// Intro container

const intro = document.getElementById("intro");


// Main website

const website = document.getElementById("website");


// Logo elements

const introLogo = document.getElementById("intro-logo");

const navLogo = document.getElementById("nav-logo");


// Product icons

const phone = document.querySelector(".phone");

const laptop = document.querySelector(".laptop");

const headphones = document.querySelector(".headphones");

const watch = document.querySelector(".watch");


// Brand text

const letters = document.querySelectorAll("#brand-name span");

const tagline = document.getElementById("brand-tagline");


//==================================================
// INITIAL SETTINGS
//==================================================


website.style.display = "none";

introLogo.style.opacity = "0";

letters.forEach(letter => {

    letter.style.opacity = "0";

});


tagline.style.opacity = "0";


// Hide product icons at start

const products = [

    phone,

    laptop,

    headphones,

    watch

];


products.forEach(product => {

    product.style.opacity = "0";

});