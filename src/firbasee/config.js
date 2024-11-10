// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS_TdG48SkR2U-P8XoAscK9Am91kSwnOA",
  authDomain: "hamada-93821.firebaseapp.com",
  projectId: "hamada-93821",
  storageBucket: "hamada-93821.firebasestorage.app",
  messagingSenderId: "583185774637",
  appId: "1:583185774637:web:7d0ebe80904a43ec2420a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 