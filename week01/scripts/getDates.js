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
  