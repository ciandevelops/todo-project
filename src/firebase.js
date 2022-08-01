// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFBML7n9uWTFfCpZqD-9ZioI6lPISUs7o",
  authDomain: "todo-project-fc85a.firebaseapp.com",
  projectId: "todo-project-fc85a",
  storageBucket: "todo-project-fc85a.appspot.com",
  messagingSenderId: "311829611906",
  appId: "1:311829611906:web:e8675c6fca767570047b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);