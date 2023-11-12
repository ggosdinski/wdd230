document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
    });
});

document.getElementById('lastModified').innerText = document.lastModified;

