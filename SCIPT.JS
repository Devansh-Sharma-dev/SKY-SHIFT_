/* =====================================================
   SKYSHIFT TECHNOLOGIES
   JAVASCRIPT
===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }, 700);

});


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* ================= CLOSE MENU ================= */

document.querySelectorAll(".nav-menu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = contactForm.name.value;

    const company = contactForm.company.value;

    const phone = contactForm.phone.value;

    const email = contactForm.email.value;

    const service = contactForm.service.value;

    const message = contactForm.message.value;


    const whatsappMessage =

        `Hello SKYSHIFT TECHNOLOGIES PRIVATE LIMITED,

I would like to enquire about your services.

Name: ${name}

Company: ${company}

Mobile: ${phone}

Email: ${email}

Service Required: ${service}

Requirement:
${message}`;


    const whatsappURL =

        "https://wa.me/918852822344?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(whatsappURL, "_blank");

});


/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
    ".service-card, .mini-card, .process-card, .audience-card, .funding-item, .why-list > div"
);


const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.1
    }

);


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});