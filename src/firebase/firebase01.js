import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAzLNE0GXxVH2me_DWUG7PQfAJKpFoL7SM",
    authDomain: "crwn-db-8bdf6.firebaseapp.com",
    projectId: "crwn-db-8bdf6",
    storageBucket: "crwn-db-8bdf6.appspot.com",
    messagingSenderId: "359262434782",
    appId: "1:359262434782:web:ddc45bf57268bff0b9594f",
    measurementId: "G-HPP4G0HWJL"
};


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
