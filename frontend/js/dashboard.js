import { auth } from './auth.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const usernameEl = document.getElementById('username');
  const logoutBtn = document.getElementById('logoutBtn');

  onAuthStateChanged(auth, user => {
    if (user) {
      const displayName = user.displayName || user.email.split('@')[0];
      usernameEl.textContent = `Hola, ${displayName}`;
    } else {
      window.location.href = 'login.html';
    }
  });

  logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
      window.location.href = 'login.html';
    }).catch((error) => {
      console.error('Error al cerrar sesión:', error);
      alert('Error al cerrar sesión, intenta de nuevo.');
    });
  });

  // Código carrusel (opcional: aquí o en otro archivo, según prefieras)
  const carousel = document.querySelector('.carousel-recomendaciones');
  if (carousel) {
    let scrollAmount = 0;
    const card = carousel.querySelector('.card-recomendacion');
    const cardWidth = card.offsetWidth + 16; // ajusta gap si es necesario

    setInterval(() => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
        scrollAmount = 0;
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollAmount += cardWidth;
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000);
  }
});
