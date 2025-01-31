document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-links");

    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

            if (navList.classList.contains("show")) {
                navList.classList.remove("show");
            }
        });
    });

    
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navList.classList.toggle("show");
        });
    }
});
