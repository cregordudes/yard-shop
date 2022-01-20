import React from 'react';
import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom';
import './pages/homepage/homepage.styles.scss'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component"
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

import CollectionPage from './pages/category/category.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
    isCurrentUser(){
      if(this.props.currentUser != null){
        return true;
      } else return false;
    }
    render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path='/shop' element={ <ShopPage /> }/>
          <Route path='/shop/:category' element= { <CollectionPage /> }/>
          <Route path='/chekout' element={ <CheckoutPage/> }/>
          <Route path='/signIn' element = {this.isCurrentUser() ? (<Navigate  to="/"/>): (<SignIn/>)}/>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
