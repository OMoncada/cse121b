// Reemplaza 'Tu Nombre' con tu nombre real.
let fullName = 'Oscar Moncada';

let currentYear = new Date().getFullYear();

// Asegúrate de tener una imagen en la carpeta "images" y reemplaza 'tuimagen.png' con el nombre de tu imagen.
let profilePicture = 'images/Person.png'; 

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profile-image');

nameElement.innerHTML = `<strong>${fullName}</strong>`;
foodElement.textContent = 'Tus comidas favoritas:';
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

let favFoods = ['Pizza', 'Sushi', 'Burgers','Pizza', 'Sushi', 'Burgers','Pizza', 'Sushi', 'Burgers']; // Agrega tus comidas favoritas aquí.

favFoods.push('Pasta'); // Agrega otra comida favorita.

favFoods.shift(); // Elimina el primer elemento de la matriz.
favFoods.pop(); // Elimina el último elemento de la matriz.

foodElement.innerHTML += '<br>' + favFoods.join('<br>');

