async function obtenerClima() {
    const ciudad = 'Lima,PE';
    const apiKey = '895801a420abe9b45deb9903b0a12d76';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Extraer la información del clima
        const temperatura = data.main.temp;
        const descripcion = data.weather[0].description;
        const humedad = data.main.humidity;
        const viento = data.wind.speed;

        // Mostrar información del clima
        const climaInfo = document.getElementById('clima-info');
        climaInfo.innerHTML = `
            <p>Temperatura: ${temperatura}°C</p>
            <p>Descripción: ${descripcion}</p>
            <p>Humedad: ${humedad}%</p>
            <p>Viento: ${viento} m/s</p>
        `;
    } catch (error) {
        console.error('Error al obtener información del clima:', error);
    }
}

obtenerClima();
