// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzLNE0GXxVH2me_DWUG7PQfAJKpFoL7SM",
    authDomain: "crwn-db-8bdf6.firebaseapp.com",
    projectId: "crwn-db-8bdf6",
    storageBucket: "crwn-db-8bdf6.appspot.com",
    messagingSenderId: "359262434782",
    appId: "1:359262434782:web:ddc45bf57268bff0b9594f",
    measurementId: "G-HPP4G0HWJL"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// google sign-in
export const auth = getAuth()
const provider = new GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});

export const googlSignIn = () => signInWithPopup(auth, provider)