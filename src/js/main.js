/* ==========================================
            MOBILE NAVIGATION MENU
========================================== */

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");

// Open Mobile Menu
menuBtn.addEventListener("click", () => {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

// Close Mobile Menu
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
});


/* ==========================================
                FAQ ACCORDION
========================================== */

const faqs = document.querySelectorAll(".faqs");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        const icon = faq.querySelector(".faqs__icon i");

        icon.classList.toggle("uil-plus");
        icon.classList.toggle("uil-minus");
    });
});


/* ==========================================
             NAVBAR SCROLL EFFECT
========================================== */

window.addEventListener("scroll", () => {
    document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 0);
});


/* ==========================================
               CONTACT FORM
========================================== */

const form = document.querySelector(".contact__form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Your message has been sent successfully!");

    form.reset();
});