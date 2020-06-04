import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Form, Button, Container, Modal, Row, Col, Card, Badge, FormControl } from 'react-bootstrap';
import Testnav from '../components/testnav';
import '../pages/pagestyle/userHistoryPage.css';


export default function UserHistoryPage(props) {
const [userCart,setUserCart]=useState([]);
useEffect(() => {getUserCarts()}, [])

// 1 GET request for User (you, since it's your history page)
// 1 GET request for Cart from user
const getUserCarts = async (e) => {
    const res = await fetch(process.env.REACT_APP_SERVER + "/users/me/history", {
      method: "GET",    
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    }); 
    if(res.status===200){
      const body = await res.json();
      setUserCart(body.data)    
      // alert("successfully get user History!")  
} 
    else (alert("error in getUserCarts."))  
  };

  const updateStatus = async (e) => {
    const res = await fetch(process.env.REACT_APP_SERVER + "/cart/updatecart", {
      method: "PUT",    
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
    if(res.status===201){
      const body = await res.json();
      setUserCart(body.data)    
} 
else (alert("error in updateStatus."))  
};



// case 1: (someone asks for your confirmation, you need to confirm)
// case 2: (you asks the other user to confirm your borrow form, it's pending or shit)
// might need 1 GET request for... 

console.log("userCart", userCart)
let renderUserHistory = userCart.length === 0 ?
<div>No history yet.</div>
: userCart.map(el => {
  return (
    <Container className="historyList">
      <div>
    <div>Borrower: {el.borrower.name}</div>
    <div>Lender: {el.lender.name}</div> 
    <div>Book: {el.book.title}</div> 
    </div>
<div>
  <div>Status: {el.status}</div>
<div><button>Confirmed?</button></div>
</div>


      </Container>
  )
})


// if(userCart.length <=0){return (<div>No history.  </div>)}
    return (
        <div className="history1">
<Testnav user={props.user} setUser={props.setUser}/>
<Container className="history2">CART</Container>
<Container className="history3"> {renderUserHistory}</Container>
        </div>
    )
}
