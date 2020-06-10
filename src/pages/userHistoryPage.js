import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Form, Button, Container, Modal, Row, Col, Card, Badge, FormControl } from 'react-bootstrap';
import Testnav from '../components/testnav';
import '../pages/pagestyle/userHistoryPage.css';


export default function UserHistoryPage(props) {
const [userCart,setUserCart]=useState([]);
const [lenderCart,setLenderCart]=useState([]);

useEffect(() => {   
getUserCarts();
getLenderCarts();
}, [])

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
    else (console.log("error in getUserCarts."))  
  };

  
const getLenderCarts = async (e) => {
    const res = await fetch(process.env.REACT_APP_SERVER + "/users/me/lender/history", {
      method: "GET",    
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    }); 
    if(res.status===200){const body = await res.json();
      setLenderCart(body.data)    
      // alert("successfully get user History!")  
} 
    else (console.log("error in getLenderCarts."))  
  };

const updateStatus = async (id) => {
    const res = await fetch(process.env.REACT_APP_SERVER + `/users/me/updatecart/${id}`, {
      method: "PUT",    
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        "status":"confirmed"
      })
    });
    console.log("iddddd:",id)
    if(res.status===201) {  
      const body = await res.json();
      console.log("body.data",body.data)
      setUserCart([body.data]) 
      setLenderCart([body.data])      
} 
else (alert("error in updateStatus."))  
};  


let renderLenderHistory = lenderCart.length === 0 ?
<div>No history yet.</div>
: lenderCart.map(el => {
  return (
    <Container className="historyList">
      <div>
    <div>Borrower: {el.borrower.name}</div>
    <div>Lender: {el.lender.name}</div> 
    <div>Book: {el.book.title}</div> 
    <div>id: {el._id}</div> 

    </div>
<div>
  <div>Status: {el.status}</div>
<div><button onClick={()=>updateStatus(el._id)}>Confirmed?</button></div>
</div>
 </Container>
  ) 
})

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
{/* <div><button>Confirmed?</button></div> */}
</div>


      </Container>
  )
})


// if(userCart.length <=0){return (<div>No history.  </div>)}
    return (
        <div className="history1">
<Testnav user={props.user} setUser={props.setUser}/>
<Container className="history2"><div>History</div> <div className="">More</div>
</Container>
<Container className="history3"> BORROWER LOG: {renderUserHistory}
</Container>
<Container className="history3"> LENDER LOG:
  {renderLenderHistory}
</Container>
        </div>
    )
}
