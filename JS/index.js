function toggleProject(button) {
    const projectCard = button.closest(".project-card");
    const fullDesc = projectCard.querySelector(".project-full");

    if (fullDesc.style.display === "block") {
        fullDesc.style.display = "none";
        button.textContent = "More";
    } else {
        fullDesc.style.display = "block";
        button.textContent = "Less";
    }
}
const roles = [
    "Full Stack Developer",
    "Java Developer",
    "Frontend Developer"
];

let index = 0;
const roleElement = document.getElementById("dynamic-role");

function changeRole() {
    index = (index + 1) % roles.length;
    roleElement.textContent = roles[index];
}

setInterval(changeRole, 2000); // change every 2 seconds

const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});
