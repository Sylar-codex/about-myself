function Toggle() {
    document.getElementById('nav-links').classList.toggle("show");
}
document.getElementById('icon').addEventListener('click', Toggle);
document.getElementById('nav-home').addEventListener('click', Toggle);
document.getElementById('nav-about').addEventListener('click', Toggle);
document.getElementById('nav-projects').addEventListener('click', Toggle);
document.getElementById('nav-contact').addEventListener('click', Toggle);

