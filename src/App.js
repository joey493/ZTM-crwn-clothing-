import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-Up-page/signIn&signUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
        if(!userAuth) this.setState({currentUser: userAuth});

        const snapShot = await createUserProfileDocument(userAuth) 

        snapShot &&
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
      })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
