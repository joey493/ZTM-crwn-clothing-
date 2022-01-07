// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQHWERL0urhfyBTSYT61kq3jBFZx1ulZI",
    authDomain: "db-crwn-24efa.firebaseapp.com",
    projectId: "db-crwn-24efa",
    storageBucket: "db-crwn-24efa.appspot.com",
    messagingSenderId: "739253984609",
    appId: "1:739253984609:web:3554c6fc6eb1b651e23920"
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