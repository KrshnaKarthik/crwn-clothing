import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.componenet';
import ShopPage from './pages/shop/shop.component';
import Header from  './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {Route} from 'react-router-dom';
import{auth} from './firebase/firebase.utils'



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser:  null
    }
  }

 unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({currentUser: user});
    }  )
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div >
      <Header currentUser={this.state.currentUser}/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndSignUpPage}/>
      
      </div>
    );

  }
 
}

export default App;
