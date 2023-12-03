document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento donde se mostrará el año actual
    const currentYearElement = document.getElementById("currentYear");
  
    // Obtener el elemento donde se mostrará la fecha de última modificación
    const lastModifiedElement = document.getElementById("lastModified");
  
    // Obtener el año actual
    const currentYear = new Date().getFullYear();
  
    // Obtener la fecha de última modificación del documento
    const lastModified = document.lastModified;
  
    // Actualizar el contenido de los elementos HTML
    if (currentYearElement) {
      currentYearElement.textContent = currentYear;
    }
  
    if (lastModifiedElement) {
      lastModifiedElement.textContent = `Last Modification: ${lastModified}`;
    }
  });
  
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = " rgb(4, 37, 57)";
    main.style.color = "#fff";
		modeButton.textContent = "🕶️";
	}
});


function updateVisitCount() {
  let count = localStorage.getItem('pageVisitCount');


  count = count ? parseInt(count) + 1 : 1;

 
  document.getElementById('visitCount').textContent = count;


  localStorage.setItem('pageVisitCount', count.toString());
}


if (localStorage.getItem('pageVisitCount')) {

  let count = localStorage.getItem('pageVisitCount');
  document.getElementById('visitCount').textContent = count;
} else {
  
  localStorage.setItem('pageVisitCount', '0');
}
updateVisitCount();

//FORMULARIO
function showRatingValue() {
  const ratingInput = document.getElementById("page_rating");
  const ratingValue = document.getElementById("rating_value");
  ratingValue.textContent = ratingInput.value;
}

document.addEventListener("DOMContentLoaded", function() {
  showRatingValue(); // Llamar a la función para mostrar el valor inicial
});

function checkPasswordMatch() {
  const password = document.getElementById("password");
  const confirm_password = document.getElementById("confirm_password");
  const password_error = document.getElementById("password_error");

  if (password.value !== confirm_password.value) {
    password_error.style.display = "inline";
    confirm_password.classList.add("error");
  } else {
    password_error.style.display = "none";
    confirm_password.classList.remove("error");
  }
}
document.getElementById('myForm').addEventListener('submit', function(event) {
  const emailInput = document.getElementById('email');
  if (!emailInput.checkValidity()) {
    event.preventDefault();
    alert('Please enter a valid email address from byui.edu domain');
  }
});

/*WEATHER*/
/* const apiKey = "895801a420abe9b45deb9903b0a12d76";
const latitude = -12.0464; 
const longitude = -77.0428;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

fetch(url) 
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    // Actualizar el contenido del elemento HTML con la información meteorológica
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `
      <p>Temperature: <span>${temperature}°C</span></p>
      <p>Description: <span>${description}</span></p>
      <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
    `;
  })
  .catch(error => {
    console.error('Error al obtener datos meteorológicos:', error);
  }); */


  

/*JSON*/ 
const learningActivities = document.querySelector('.large-card ul');

// URL del archivo JSON
const linksURL = './data/links.json';

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

function displayLinks(weeks) {
  weeks.forEach(week => {
    const weekListItem = document.createElement('li');
    const weekAnchor = document.createElement('a');
    weekAnchor.textContent = week.week + ":";

    week.links.forEach(link => {
      const linkListItem = document.createElement('li');
      const linkAnchor = document.createElement('a');
      linkAnchor.setAttribute('href', link.url);
      linkAnchor.textContent = link.title;
      linkListItem.appendChild(linkAnchor);
      weekListItem.appendChild(linkListItem);
    });

    weekListItem.appendChild(weekAnchor);
    learningActivities.appendChild(weekListItem);
  });
}

// Llama a la función para obtener y mostrar los enlaces de las actividades
getLinks();
