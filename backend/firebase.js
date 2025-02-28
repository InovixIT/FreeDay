// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8-qTw2I8CN8WNJOwyj1z1-tXOjZ6j79A",
  authDomain: "freeday-f52b3.firebaseapp.com",
  projectId: "freeday-f52b3",
  storageBucket: "freeday-f52b3.firebasestorage.app",
  messagingSenderId: "222091399453",
  appId: "1:222091399453:web:35e5af73971c48924e51f4",
  measurementId: "G-3DSHXZKEG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
