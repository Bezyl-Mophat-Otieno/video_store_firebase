import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {

  apiKey: "AIzaSyAogzzH64POHiYUNl_bEK40fC2fU-vo-xY",

  authDomain: "videouploadtest-2f3fb.firebaseapp.com",

  projectId: "videouploadtest-2f3fb",

  storageBucket: "videouploadtest-2f3fb.appspot.com",

  messagingSenderId: "270990559680",

  appId: "1:270990559680:web:3e2565e1208b25203de025"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
