
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let year = document.querySelector(".date");
year.innerHTML = new Date().getFullYear();

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');  
    menuIcon.classList.toggle('fa-bars');  
    navbar.classList.toggle("nav_active");
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        console.log(id)

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("nav_active");
            });
            document.querySelector(`header nav ul li a[href*="${id}"]`).classList.add("nav_active");
        
        }
    });

    
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("fa-xmark");  
    menuIcon.classList.add("fa-bars");  
    navbar.classList.remove("nav_active");
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .fortfolio-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: "left" });
ScrollReveal().reveal('.home-content p, .abou-content ', { origin: "right" });

const typed = new Typed('.multiple-text',{
    strings:["Frontent Designer","Web Designer","UI / UX Designer","Graphic Designer","Digital Marketer"],
    typeSpeed: 70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});
