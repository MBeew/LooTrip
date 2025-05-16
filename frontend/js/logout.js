import { auth } from "./auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

export function logoutUser() {
  signOut(auth)
    .then(() => {
      alert("Has cerrado sesión correctamente.");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error);
      alert("Error al cerrar sesión, intenta nuevamente.");
    });
}
