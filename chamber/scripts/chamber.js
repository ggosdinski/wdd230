document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
    });
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

