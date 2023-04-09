import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlU9zawJHxcAvLfBzGW0OzhxL_yRLurgs",
  authDomain: "whatsapp-2-7093d.firebaseapp.com",
  projectId: "whatsapp-2-7093d",
  storageBucket: "whatsapp-2-7093d.appspot.com",
  messagingSenderId: "966716912089",
  appId: "1:966716912089:web:c085f78a1825068e7ae9c8",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp;

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
