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


