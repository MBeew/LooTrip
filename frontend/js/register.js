// frontend/js/register.js

import { auth } from "./auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Usuario registrado con éxito");
        window.location.href = "login.html";  // Redirige a login tras registro
      })
      .catch((error) => {
        alert("Error: " + error.message);
        console.error(error);
      });
  });
});
