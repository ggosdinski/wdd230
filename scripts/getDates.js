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
