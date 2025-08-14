function toggleMode() {
    document.body.classList.toggle("dark");
    let icon = document.querySelector(".mode-toggle i");
    if (document.body.classList.contains("dark")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
}

function toggleContactMenu() {
    let menu = document.getElementById("contactMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}
