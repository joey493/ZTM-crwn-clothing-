// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6XHIEvKkCEU_exfKoheiS2OO44V2FAGY",
    authDomain: "hooks-crwn-db.firebaseapp.com",
    projectId: "hooks-crwn-db",
    storageBucket: "hooks-crwn-db.appspot.com",
    messagingSenderId: "381599503440",
    appId: "1:381599503440:web:acc842dee2567fdf2a6d55",
    measurementId: "G-C2JY0P60Y4"
};


// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize firestore
const firestore = getFirestore()

// Initialize auth
export const auth = getAuth()


// save user => create user profile
export const createUserProfileDocument = async (userAuth, additionData) => {
    // make sure that user is existed
    if (!userAuth) return;

    const userRef = doc(firestore, `users/${userAuth.uid}`) // create new Doc

    // get document data
    const snapShot = await getDoc(userRef)

    if(!snapShot.exists()) {
        const {displayName, email } = userAuth
        const createdAt = new Date()

        try { // set new doc data and save it 
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionData
            })
        } catch(error) {
            console.log('error at creating users', error)
        }
    }

    return snapShot
}

// google sign in
const provider = new GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});

export const googlSignIn = () => signInWithPopup(auth, provider)