// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR4xQnAx7BCVCpskFiTiJj2Zy9zToOpuQ",
  authDomain: "osayumi-nikki.firebaseapp.com",
  projectId: "osayumi-nikki",
  storageBucket: "osayumi-nikki.appspot.com",
  messagingSenderId: "317735333041",
  appId: "1:317735333041:web:dabc90b47d8478a9324690",
  measurementId: "G-Z7EL7ZX40E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}