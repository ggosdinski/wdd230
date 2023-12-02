document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    
    
    menuToggle.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
    });

    // json MEMBERS
    
    const memberContainer = document.getElementById('member-container');
    const jsonFile = './data/members.json'; 
    
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            data.miembros.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.classList.add('member');
    
                memberElement.innerHTML = `
                    <h2>${member.nombre}</h2>
                    <img src="${member.imagen}" alt="${member.nombre}">
                    <p><strong>Dirección:</strong> ${member.direccion}</p>
                    <p><strong>Teléfono:</strong> ${member.telefono}</p>
                    <p><strong>Sitio web:</strong> <a href="${member.sitio_web}" target="_blank">${member.sitio_web}</a></p>
                    <p><strong>Nivel de membresía:</strong> ${member.nivel_de_membresia}</p>
                    <p><strong>Información adicional:</strong> ${member.additional_info}</p>
                    <p><strong>Rubro:</strong> ${member.rubro}</p>
                `;
    
                memberContainer.appendChild(memberElement);
            });
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });


    document.getElementById('lastModified').innerText = document.lastModified;

    // Function to get the time difference between two dates in days
    function getDaysDifference(currentDate, lastVisitDate) {
        const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
        return Math.floor(Math.abs((currentDate - lastVisitDate) / oneDay));
    }

    // Get the current date and time
    const currentDate = new Date();
    const visitMessage = document.querySelector('.visit-message');

    const lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit === null) {
        // First visit - display welcome message
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const daysDifference = getDaysDifference(currentDate, lastVisitDate);

        if (daysDifference < 1) {
            // Less than a day - display message
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            // More than a day - display days difference
            const daysText = daysDifference === 1 ? 'day' : 'days';
            visitMessage.textContent = `You last visited ${daysDifference} ${daysText} ago.`;
        }
    }

    // Store current visit date in localStorage
    localStorage.setItem('lastVisit', currentDate.toISOString());

    // Toggle between grid and list view for members
   
});
