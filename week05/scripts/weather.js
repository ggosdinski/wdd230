const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const apiKey = "9902ce0a677299c08d31a01b886eba7d"; 

async function apiFetch() {
  const latitude = 49.77200; 
  const longitude = 6.66798;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 

      displayResults(data); 
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`; 

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; 
  const desc = data.weather[0].description; 

  weatherIcon.setAttribute('src', iconsrc); 
  weatherIcon.setAttribute('alt', desc); 
  captionDesc.textContent = desc; // Muestra la descripción del clima
}

apiFetch(); // Llama a la función principal para obtener datos del clima
