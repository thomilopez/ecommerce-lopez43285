// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEQeotZhd-gax9_Q8IcBDvcqFpE5sNU-Y",
    authDomain: "ecommerce-lopez43285.firebaseapp.com",
    projectId: "ecommerce-lopez43285",
    storageBucket: "ecommerce-lopez43285.appspot.com",
    messagingSenderId: "399267107427",
    appId: "1:399267107427:web:76e57b27051060bb695e56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);