document.addEventListener('DOMContentLoaded', function () {
    // Simulons la récupération des informations du client connecté
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    const clientInfo = document.getElementById('client-info');
    clientInfo.innerHTML = `Email: ${currentUser.email}`;

    // Simulons la récupération des fichiers pour ce client
    const clientFiles = [
        { name: 'Site_preview.zip', url: '/files/Site_preview.zip' },
        { name: 'Design_mockup.pdf', url: '/files/Design_mockup.pdf' },
        // Ajoutez d'autres fichiers selon les besoins
    ];

    const fileList = document.getElementById('file-list');
    clientFiles.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <a href="${file.url}" download>
                <i class='bx bx-download'></i>
                ${file.name}
            </a>
        `;
        fileList.appendChild(fileItem);
    });

    // Gestion de la déconnexion
    document.getElementById('logout').addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
});