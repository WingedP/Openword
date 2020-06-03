import React,{useState,useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom';
import Swiper from 'react-id-swiper';
import { Form, Button, Container, Modal, Row, Col, Card, Badge } from 'react-bootstrap';
import './componentstyles/availableswiperstyle.css';
import 'swiper/css/swiper.css';


export default function Availableswiper() {
  const history = useHistory();
    let [availableBook, setAvailableBook]=useState([]);
    const params = {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }


    const getAvailableBook = async () => {
        const res = await fetch (process.env.REACT_APP_SERVER + `/books?availability=true&page=1&limit=30`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if(res.status === 200){
            const body = await res.json();
            // console.log(body.data)
            setAvailableBook(body.data)
        } 
        else (alert("cannot get available books"))
      }


useEffect(()=>{getAvailableBook()},[])
if(availableBook.length <= 0)return<div>Loading</div>;
return (       
    <Container className="availableSwiperContainer">
        
<Swiper {...params}>

<Card className="swipercard" onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-1].id}`);}} > 
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-1].thumbnail}/>
      <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-1].title}</Card.Title>    
<Card.Text>From user: {availableBook[availableBook.length-1].owner.name}</Card.Text>                
        </Card.Body>
 </Card>

 <Card className="swipercard" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-2].id}`);}} >
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-2].thumbnail}/>
      <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-2].title}</Card.Title> 
      <Card.Text>From user: {availableBook[availableBook.length-2].owner.name}</Card.Text>                
                   
        </Card.Body>
 </Card>

 <Card className="swipercard" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-3].id}`);}}>
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-3].thumbnail}/>
      <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-3].title}</Card.Title>   
      <Card.Text>From user: {availableBook[availableBook.length-3].owner.name}</Card.Text>                
                 
        </Card.Body>
 </Card>

 <Card className="swipercard" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-4].id}`);}}>
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-4].thumbnail}/>
      <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-4].title}</Card.Title>
      <Card.Text>From user: {availableBook[availableBook.length-4].owner.name}</Card.Text>                
                    
        </Card.Body>
 </Card>

 <Card className="swipercard" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-5].id}`);}}>
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-5].thumbnail}/>
      <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-5].title}</Card.Title>   
      <Card.Text>From user: {availableBook[availableBook.length-5].owner.name}</Card.Text>                
        </Card.Body>
 </Card>
 
 <Card className="swipercard" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-6].id}`);}}>
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-6].thumbnail}/>
      <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-6].title}</Card.Title>    
      <Card.Text>From user: {availableBook[availableBook.length-6].owner.name}</Card.Text>                
        </Card.Body>
 </Card>
 
</Swiper>
    </Container>


    )
}
