function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}


const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

     // Récupérer les valeurs du formulaire
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    // Créer le sujet et le corps du message
    const subject = encodeURIComponent(`Message de ${name} - Portfolio`);
    const body = encodeURIComponent(`Nom: ${name}
Email: ${email}

Message:
${message}`);

    // Créer le lien mailto
    const mailtoLink = `mailto:a.damota.dw@gmail.com?subject=${subject}&body=${body}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;

    // Afficher le message de confirmation
    msg.style.display = 'block';
    form.reset();
    setTimeout(() => msg.style.display = 'none', 3000);
});