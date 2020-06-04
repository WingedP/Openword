import React, { useState, useEffect } from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import BorrowingForm from '../components/borrowingform';
import '../pages/pagestyle/bookingPage.css';

export default function BookingPage(props) {
useEffect(() => { getSingleBook()}, []);
 let { id } = useParams(); 
let [singleBookData, setSingleBookData] = useState({});

const getSingleBook = async () => {
    const res = await fetch (process.env.REACT_APP_SERVER + `/users/books/borrowingform/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
    if(res.status === 200){
        const body = await res.json();
        setSingleBookData(body.data)
    } 
    else (alert("something wrong with this book's data"))
  }

//   if(singleBookData == {})return<div>Loading</div>;
return (
  <div className="bookingPage">
<div className="bookingpageTitle" style={{textAlign:"center"}}>BOOKING PAGE HERE! SIGN THIS FORM, AND YOU'RE GOOD TO GO.</div>
<div className="bookingPageMainSection"  >
<BorrowingItem singleBookData={singleBookData}/>
<BorrowingForm singleBookData={singleBookData}/>
</div>   
</div>
)}


//function borrowingForm is in component
function BorrowingItem (props) {
let bookdata=props.singleBookData;
    return (
        <div className="borrowingItem">
            YOUR DESIRED BOOK, READY:
   <img src={bookdata.thumbnail}></img>
        </div>
    )
}
