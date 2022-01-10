import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-Up-page/signIn&signUp.component';

import './App.css';

class App extends Component {

  unSubscribeFromAuth = null // still don't get it 

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
        if(!userAuth) setCurrentUser(userAuth)

        const snapShot = await createUserProfileDocument(userAuth) 

        snapShot &&
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
      })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' 
            render={() => this.props.currentUser 
              ? <Redirect to='/'/> 
              : <SignInAndSignUp />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({currentUser: user.currentUser})

const mapStateDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapStateDispatchToProps)(App);
