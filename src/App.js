import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, Link, Redirect, useHistory} from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


function App() {
  return (
    <div className="App">
<Navbar/>
<Switch> 
<Route path="/" exact component={HomePage}/>
<Route path="/login" exact component={LoginPage}/>
</Switch>  
<Footer/>
    </div>
  );
}

export default App;
