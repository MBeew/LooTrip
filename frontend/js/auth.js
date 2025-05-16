
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAgCgtd_nknI1SfF44G-G0M8tEPl0vkFOE",
  authDomain: "looptrip-ad9e1.firebaseapp.com",
  projectId: "looptrip-ad9e1",
  storageBucket: "looptrip-ad9e1.firebasestorage.app",
  messagingSenderId: "1078923284179",
  appId: "1:1078923284179:web:8c298e18a8b3b7748ace26",
  measurementId: "G-WYPMHZEE7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

