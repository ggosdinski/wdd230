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

// WEATHER

const apiKey = '895801a420abe9b45deb9903b0a12d76';
const chamberLocation = 'Buenos Aires';

// Function to fetch current weather data
async function getCurrentWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${chamberLocation}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.log('Error fetching current weather:', error);
    }
}

// Function to display current weather data
function displayCurrentWeather(data) {
    const currentTemp = data.main.temp;
    const currentDesc = data.weather[0].description;
    document.getElementById('current-temp').innerText = `Temperature: ${currentTemp}°C`;
    document.getElementById('current-description').innerText = `Description: ${currentDesc}`;
}

// Function to fetch 3-day forecast
async function getThreeDayForecast() {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${chamberLocation}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        displayThreeDayForecast(data);
    } catch (error) {
        console.log('Error fetching forecast:', error);
    }
}

// Function to display 3-day forecast
function displayThreeDayForecast(data) {
    const forecastData = data.list.filter((item) => item.dt_txt.includes('12:00:00'));
    const forecastContainer = document.getElementById('forecast-data');
    
    forecastData.slice(0, 3).forEach((day) => {
        const date = new Date(day.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = day.main.temp;
        
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `<p>${dayOfWeek}</p><p>Temperature: ${temp}°C</p>`;
        
        forecastContainer.appendChild(forecastItem);
    });
}

// Call functions to fetch and display weather data
getCurrentWeather();
getThreeDayForecast();


// Advertisements
const membersJSON = 
{
    "miembros": [
      {
        "nombre": "Empresa Alpha",
        "direccion": "Av. Corrientes 1234, Buenos Aires, Argentina",
        "telefono": "+54 9 11 2345-6789",
        "sitio_web": "http://www.empresaAlpha.com.ar",
        "imagen": "./images/1.jpg",
        "nivel_de_membresia": "Platinum",
        "additional_info": "Leading technology company",
        "rubro": "Technology"
      },
      {
        "nombre": "Empresa Beta",
        "direccion": "Calle Florida 567, Córdoba, Argentina",
        "telefono": "+54 9 351 9876-5432",
        "sitio_web": "http://www.empresaBeta.com.ar",
        "imagen": "./images/2.jpg",
        "nivel_de_membresia": "Gold",
        "additional_info": "Financial services provider",
        "rubro": "Finance"
      },
      {
        "nombre": "Empresa Gamma",
        "direccion": "Av. San Martín 890, Rosario, Argentina",
        "telefono": "+54 9 341 6543-2109",
        "sitio_web": "http://www.empresaGamma.com.ar",
        "imagen": "./images/3.jpg",
        "nivel_de_membresia": "Silver",
        "additional_info": "Chemical products manufacturing",
        "rubro": "Chemicals"
      },
      {
        "nombre": "Empresa Delta",
        "direccion": "Av. Libertador 4321, Mendoza, Argentina",
        "telefono": "+54 9 261 8901-2345",
        "sitio_web": "http://www.empresaDelta.com.ar",
        "imagen": "./images/4.jpg",
        "nivel_de_membresia": "Bronze",
        "additional_info": "Software development",
        "rubro": "Technology"
      },
      {
        "nombre": "Empresa Epsilon",
        "direccion": "Calle Belgrano 999, Salta, Argentina",
        "telefono": "+54 9 387 7654-3210",
        "sitio_web": "http://www.empresaEpsilon.com.ar",
        "imagen": "./images/5.jpg",
        "nivel_de_membresia": "Gold",
        "additional_info": "Consultancy services",
        "rubro": "Consultancy"
      },
      {
        "nombre": "Empresa Zeta",
        "direccion": "Av. Rivadavia 5678, San Juan, Argentina",
        "telefono": "+54 9 264 5432-1098",
        "sitio_web": "http://www.empresaZeta.com.ar",
        "imagen": "./images/6.jpg",
        "nivel_de_membresia": "Platinum",
        "additional_info": "Retail business",
        "rubro": "Retail"
      },
      {
        "nombre": "Empresa Eta",
        "direccion": "Av. 9 de Julio 2468, La Plata, Argentina",
        "telefono": "+54 9 221 8765-4321",
        "sitio_web": "http://www.empresaEta.com.ar",
        "imagen": "./images/7.jpg",
        "nivel_de_membresia": "Silver",
        "additional_info": "Automotive industry",
        "rubro": "Automotive"
      },
      {
        "nombre": "Empresa Theta",
        "direccion": "Calle Sarmiento 333, Neuquén, Argentina",
        "telefono": "+54 9 299 4321-8765",
        "sitio_web": "http://www.empresaTheta.com.ar",
        "imagen": "./images/8.jpg",
        "nivel_de_membresia": "Bronze",
        "additional_info": "Logistics services",
        "rubro": "Logistics"
      }
    ]
  }
  
function getQualifiedMembers() {
    return membersJSON.miembros.filter(member => member.nivel_de_membresia === "Silver" || member.nivel_de_membresia === "Gold");
}

// Función para mostrar anuncios destacados aleatorios
function displayRandomSpotlightAds() {
    const qualifiedMembers = getQualifiedMembers();

    // Obtener dos o tres miembros aleatorios
    const randomMembers = [];
    while (randomMembers.length < 3 && qualifiedMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
        randomMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
    }

    const spotlightAdsContainer = document.getElementById('spotlightAds');

    // Mostrar anuncios destacados en la página
    randomMembers.forEach(member => {
        const adElement = createAdvertisementElement(member);
        spotlightAdsContainer.appendChild(adElement);
    });
}

// Función para crear elementos de anuncio
function createAdvertisementElement(member) {
    const adElement = document.createElement('div');
    adElement.classList.add('advertisement');

    const imageElement = document.createElement('img');
    imageElement.src = member.imagen;
    imageElement.alt = member.nombre;
    adElement.appendChild(imageElement);

    const nameElement = document.createElement('p');
    nameElement.textContent = member.nombre;
    adElement.appendChild(nameElement);

    const additionalInfoElement = document.createElement('p');
    additionalInfoElement.textContent = member.additional_info;
    adElement.appendChild(additionalInfoElement);

    return adElement;
}

// Llamar a la función para mostrar anuncios destacados aleatorios
displayRandomSpotlightAds();

//banner
// Función para verificar el día de la semana y mostrar el banner
function showBanner() {
    const today = new Date().getDay(); // Obtener el día de la semana (0: domingo, 1: lunes, ..., 6: sábado)
    const banner = document.getElementById('banner');

    if (today >= 1 && today <= 3) { // Mostrar solo los lunes, martes y miércoles (días 1, 2 y 3)
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

// Función para cerrar el banner
function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
}

// Mostrar el banner cuando se carga la página
window.onload = function() {
    showBanner();
};
 