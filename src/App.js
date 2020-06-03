import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Link, Redirect, useHistory } from "react-router-dom";
import Navbar from './components/navbar';

import Footer from './components/footer';
import HomePage from './pages/homePage';
import Sidebar from './components/sidebar';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import Explore from './pages/explorePage';
import ProfilePage from './pages/profilePage';
import SingleBookPage from './pages/singleBookPage';
import BookingPage from './pages/bookingPage';
import UserHistoryPage from './pages/userHistoryPage';

import P from "./components/P";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import profilePage from './pages/profilePage';


function App() {
  const [user, setUser] = useState(null);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    checkUser();
    getAllCategory();
  }, []);

  const checkUser = async () => {
    const urlToken = window.location.href.split("?token=")[1]
      ? window.location.href.split("?token=")[1].split("#")[0]
      : null;
    // console.log("your urlToken :", urlToken);
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

  const getAllCategory = async (e) => {
    const res = await fetch(process.env.REACT_APP_SERVER + "/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(res.status===200){
      const catData = await res.json();
      setCat(catData.data)      
} 
    else (alert("error in getCategory."))  
  };



  return (
    <div className="App">
      <Sidebar/>
      <Switch>
        {/* <Route path="/" user={user} setUser={setUser} exact component={HomePage}/> */}
        {/* <Route path="/login" exact component={LoginPage} /> */}
        <Route path="/" exact render={() => (<HomePage 
        cat={cat} setCat={setCat}
        user={user} setUser={setUser}/>)}/> 
        <Route path="/login" exact render={() => (<LoginPage user={user} setUser={setUser}/>)}/> 
        <Route path="/signup" exact component={SignupPage}/>
        <Route path="/users/me" exact render={() =>(<ProfilePage
        cat={cat} setCat={setCat}
        user={user} setUser={setUser}/>)}/>
        <Route path="/explore" exact component={Explore}/>
        <Route path="/users/books/:id" exact render={(props)=><SingleBookPage {...props}/>}/>
        <Route path="/users/me/history" exact render={(props)=><UserHistoryPage {...props}/>}/>
        <Route path="/users/books/borrowingform/:id" exact render={(props)=><BookingPage {...props} />}/>

        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
