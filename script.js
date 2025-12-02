
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach (a => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        topBtn.style.display ="block";
    } else {
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({ top:0, behavior:"smooth"});
});