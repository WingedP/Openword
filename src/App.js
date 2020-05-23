import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Link, Redirect, useHistory } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import P from "./components/P"
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const urlToken = window.location.href.split("?token=")[1]
      ? window.location.href.split("?token=")[1].split("#")[0]
      : null;
    console.log("your urlToken :", urlToken);
    const localToken = localStorage.getItem("token")
    const token = localToken || urlToken
    if (!token) return;

    const res = await fetch(process.env.REACT_APP_SERVER + "/users/me", {
      headers: { authorization: `Bearer ${token}` }
    });

    const body = await res.json()
      if (body.status === true) {
        setUser(body.user)
      localStorage.setItem("token", token)

    } else {
      setUser(null)
      localStorage.removeItem("token")
    }
    
  };

  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" user={user} setUser={setUser} exact component={HomePage}/> */}
        <Route path="/" exact render={() => (<HomePage user={user} setUser={setUser}/>)}/> 
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} /> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
