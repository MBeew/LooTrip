import { auth } from "./auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuario logueado:", user.email);
    // Puedes mostrar elementos privados o cargar datos aquí
  } else {
    console.log("No hay usuario logueado.");
    // Redirigir al login si no está autenticado
    if (!window.location.href.includes("login.html") && !window.location.href.includes("register.html")) {
      window.location.href = "login.html";
    }
  }
});
