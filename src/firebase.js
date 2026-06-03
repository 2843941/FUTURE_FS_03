import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjQ5DDHJo53zfWpBmj9GrRXcehcL885fM",
  authDomain: "strength-power-gym-47bd3.firebaseapp.com",
  projectId: "strength-power-gym-47bd3",
  storageBucket: "strength-power-gym-47bd3.firebasestorage.app",
  messagingSenderId: "672424448985",
  appId: "1:672424448985:web:87b9a525921968aa123fc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
const db = getFirestore(app);

export { db };