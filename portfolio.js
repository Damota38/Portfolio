function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}


const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    msg.style.display = 'block';
    form.reset();
    setTimeout(() => msg.style.display = 'none', 3000);
});