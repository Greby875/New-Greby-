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

});//==================================================
// SECTION 2 - START INTRO ANIMATION
//==================================================

window.addEventListener("load", () => {

    // Show logo

    introLogo.style.animation = "logoPop 1s forwards";

    // Phone

    setTimeout(() => {

        phone.style.opacity = "1";

        phone.style.animation = "flyIntoBag .8s forwards";

    }, 800);

    // Laptop

    setTimeout(() => {

        laptop.style.opacity = "1";

        laptop.style.animation = "flyIntoBag .8s forwards";

    }, 1400);

    // Headphones

    setTimeout(() => {

        headphones.style.opacity = "1";

        headphones.style.animation = "flyIntoBag .8s forwards";

    }, 2000);

    // Watch

    setTimeout(() => {

        watch.style.opacity = "1";

        watch.style.animation = "flyIntoBag .8s forwards";

    }, 2600);

    // Logo bounce

    setTimeout(() => {

        introLogo.style.animation = "bounce .6s";

    }, 3400);//==================================================
// SECTION 3 - BRAND NAME & TAGLINE ANIMATION
//==================================================

// Reveal the letters one by one

setTimeout(() => {

    letters.forEach((letter, index) => {

        setTimeout(() => {

            letter.style.opacity = "1";

            letter.style.animation = "revealLetter .5s forwards";

        }, index * 250);

    });

}, 3800);


// Show the tagline

setTimeout(() => {

    tagline.style.opacity = "1";

    tagline.style.animation = "fadeIn 1s forwards";

}, 5400);//==================================================
// SECTION 4 - SHOW MAIN WEBSITE
//==================================================

// Hide intro and display website

setTimeout(() => {

    // Fade out intro

    intro.style.transition = "opacity 1s ease";

    intro.style.opacity = "0";

}, 7000);


// Remove intro from screen

setTimeout(() => {

    intro.style.display = "none";

    website.style.display = "block";

    website.style.animation = "fadeIn 1s forwards";

}, 8000);


// Smooth scroll for navigation links

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

});//==================================================
// SECTION 5 - WEBSITE INTERACTIONS
//==================================================

// Shop Now Button

const shopBtn = document.getElementById("shop-btn");

if (shopBtn) {

    shopBtn.addEventListener("click", () => {

        document.getElementById("products").scrollIntoView({

            behavior: "smooth"

        });

    });

}


// Product Buttons

document.querySelectorAll(".product-card button").forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = '<i class="fas fa-check"></i> Added';

        button.style.background = "#16a34a";

        setTimeout(() => {

            button.innerHTML = "Add to Cart";

            button.style.background = "";

        }, 2000);

    });

});


// Newsletter Form

const newsletterForm = document.querySelector("#newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("🎉 Thank you for subscribing to Greby!");

        this.reset();

    });

}


// Footer Year

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =

    `© ${new Date().getFullYear()} GREBY. All Rights Reserved.`;

}


// End of Greby Script
