import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyADVms6zw-UowGYcUWuLheIDjqA1Jjgzk0",
  authDomain: "sifir-gamifikasi.firebaseapp.com",
  projectId: "sifir-gamifikasi",
  storageBucket: "sifir-gamifikasi.firebasestorage.app",
  messagingSenderId: "921451384128",
  appId: "1:921451384128:web:3316a47b1228349ba83ea5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };