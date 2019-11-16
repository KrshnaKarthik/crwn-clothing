import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.componenet';
import ShopPage from './pages/shop/shop.component';
import Header from  './components/header/header.component';
import {Route} from 'react-router-dom';



function App() {
  return (
    <div >
    <Header/>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    
    </div>
  );
}

export default App;
