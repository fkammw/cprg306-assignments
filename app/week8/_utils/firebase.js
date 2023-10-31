// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6siw-myJ1fKWWGtBvUwMP9ZTFhiU9lhE",
  authDomain: "cprg306-assignments-b.firebaseapp.com",
  projectId: "cprg306-assignments-b",
  storageBucket: "cprg306-assignments-b.appspot.com",
  messagingSenderId: "163917945449",
  appId: "1:163917945449:web:df7ca88ce535c256aa60f8",
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

