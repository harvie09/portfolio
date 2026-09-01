new Typed("#typed", {
    strings: ["Frontend Developer", "UI/UX Enthusiast"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
});

// AOS Init
AOS.init();

// Counter Animation
document.querySelectorAll(".counter").forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    const body = document.body;
    const isDark = body.getAttribute("data-bs-theme") === "dark";
    body.setAttribute("data-bs-theme", isDark ? "light" : "dark");
    themeToggle.innerHTML = isDark
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
});