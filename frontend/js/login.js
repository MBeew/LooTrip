// login.js
import { auth } from './auth.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Esperar que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login exitoso
        alert("Inicio de sesión exitoso ✅");
        window.location.href = 'dashboard.html'; // Redirigir al dashboard
      })
      .catch((error) => {
        console.error(error);
        alert("Error al iniciar sesión: " + error.message);
      });
  });
});
