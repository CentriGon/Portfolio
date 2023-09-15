// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa4UTbdWcvCjLXi7qoc4kHjaXs2IWkSwg",
  authDomain: "devportfolio-8f447.firebaseapp.com",
  projectId: "devportfolio-8f447",
  storageBucket: "devportfolio-8f447.appspot.com",
  messagingSenderId: "679306752698",
  appId: "1:679306752698:web:9c397f7c1b470bf370c883",
  measurementId: "G-83VMYC3PNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = new getStorage(app);
export const db = getFirestore(app);
