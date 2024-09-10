// SHOW HIDDEN - PASSWORD
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        // Change password to text
        if (input.type === 'password') {
            //Switch to text
            input.type = 'text'

            // Change icon
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            //Change to password
            input.type = 'password'

            // Change icon
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('login-pass', 'login-eye')
showHiddenPass('register-pass', 'register-eye')

// Ajout de la gestion de la bascule entre les formulaires
document.getElementById('showRegisterForm').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLoginForm').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Importer les utilisateurs (dans un vrai scénario, cela serait géré côté serveur)
// Note: Assurez-vous d'inclure users.js avant login.js dans votre HTML
// <script src="users.js"></script>
// <script src="login.js"></script>

document.querySelector('#loginForm form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[name="email"]').value;
    const password = this.querySelector('input[name="password"]').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'client.html';
    } else {
        alert('Email ou mot de passe incorrect.');
    }
});

document.querySelector('#registerForm form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[name="email"]').value;
    const password = this.querySelector('input[name="password"]').value;

    if (users.some(u => u.email === email)) {
        alert('Cet email est déjà utilisé.');
    } else {
        users.push({ email, password });
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        document.getElementById('showLoginForm').click();
    }
});