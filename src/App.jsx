import { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import Header from "./components/header";
import HomePage from "./pages/home";
import Shop from "./pages/shop";
import SignInAndSignUp from "./pages/signIn&SignUp";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const unSubscribeFromAuth = useRef(null)

  useEffect(() => {
    unSubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) setCurrentUser(userAuth)

      const snapShot = await createUserProfileDocument(userAuth)
      snapShot && setCurrentUser({
        id: snapShot.id,
        ...snapShot.data()
      });
    })
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/signin' element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
