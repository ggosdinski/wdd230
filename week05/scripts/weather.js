const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const apiKey = "9902ce0a677299c08d31a01b886eba7d"; // Reemplaza 'tu_clave_de_API' con tu clave de API de OpenWeatherMap

async function apiFetch() {
  const latitude = 49.77200; // Reemplaza estos valores con la latitud y longitud correctas de tu ubicación
  const longitude = 6.66798;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Solo para pruebas

      displayResults(data); // Llama a la función para mostrar los resultados en la página HTML
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Muestra la temperatura

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // URL del icono
  const desc = data.weather[0].description; // Descripción del clima

  weatherIcon.setAttribute('src', iconsrc); // Establece la imagen del icono
  weatherIcon.setAttribute('alt', desc); // Establece el texto alternativo del icono
  captionDesc.textContent = desc; // Muestra la descripción del clima
}

apiFetch(); // Llama a la función principal para obtener datos del clima
