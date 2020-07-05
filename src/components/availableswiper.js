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
console.log("availableBook",availableBook)
return (       
    <Container className="availableSwiperContainer">
<Swiper {...params}>

<Card className="swipercard swipercard-bg" onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-1].id}`);}} > 



<Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-1].thumbnail}/>


<div className="card-info">


<div className="info-wrapper">


<div className="card-info-detail2">Title:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-1].title}
</div>


</div>



<div className="info-wrapper">
<div  className="card-info-detail2">Author:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-1].author}
</div></div>


<div className="info-wrapper"><div  className="card-info-detail2">Owner:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-1].owner.name}
</div></div>

<div className="info-wrapper"><div  className="card-info-detail2">Price:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-1].price}
</div></div>



<div className="info-wrapper">
<div  className="card-info-detail2">Rating:</div>
<div className="card-info-detail fontChange">
<span> {availableBook[availableBook.length-1].ratingAverage}<i class="far fa-star"></i> </span>   
   <span className="ratingQuantity">{availableBook[availableBook.length-1].ratingQuantity} voters</span>
</div></div>


</div>


      <Card.Body className="">
      {/* <Card.Title>{availableBook[availableBook.length-1].title}</Card.Title>     */}
{/* <Card.Text>From user: {availableBook[availableBook.length-1].owner.name}</Card.Text>                 */}
        </Card.Body>



 </Card>

 <Card className="swipercard swipercard-bg2" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-2].id}`);}} >
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-2].thumbnail}/>
 <div className="card-info">


<div className="info-wrapper">


<div className="card-info-detail2">Title:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-2].title}
</div>


</div>



<div className="info-wrapper">
<div  className="card-info-detail2">Author:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-2].author}
</div></div>


<div className="info-wrapper"><div  className="card-info-detail2">Owner:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-2].owner.name}
</div></div>

<div className="info-wrapper"><div  className="card-info-detail2">Price:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-2].price}
</div></div>

<div className="info-wrapper">
<div  className="card-info-detail2">Rating:</div>
<div className="card-info-detail fontChange">
<span> {availableBook[availableBook.length-2].ratingAverage}<i class="far fa-star"></i> </span>   
   <span className="ratingQuantity">{availableBook[availableBook.length-2].ratingQuantity} voters</span>
</div></div>


</div>
      {/* <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-2].title}</Card.Title> 
      <Card.Text>From user: {availableBook[availableBook.length-2].owner.name}</Card.Text>                
                   
        </Card.Body> */}
 </Card>

 <Card className="swipercard swipercard-bg3" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-3].id}`);}}>
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-3].thumbnail}/>


 <div className="card-info">


<div className="info-wrapper">


<div className="card-info-detail2">Title:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-3].title}
</div>


</div>



<div className="info-wrapper">
<div  className="card-info-detail2">Author:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-3].author}
</div></div>


<div className="info-wrapper"><div  className="card-info-detail2">Owner:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-3].owner.name}
</div></div>

<div className="info-wrapper"><div  className="card-info-detail2">Price:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-3].price}
</div></div>



<div className="info-wrapper">
<div  className="card-info-detail2">Rating:</div>
<div className="card-info-detail fontChange">
<span> {availableBook[availableBook.length-1].ratingAverage}<i class="far fa-star"></i> </span>   
   <span className="ratingQuantity">{availableBook[availableBook.length-3].ratingQuantity} voters</span>
</div></div>


</div>
      {/* <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-3].title}</Card.Title>   
      <Card.Text>From user: {availableBook[availableBook.length-3].owner.name}</Card.Text>                
                 
        </Card.Body> */}
 </Card>

 <Card className="swipercard swipercard-bg4" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-4].id}`);}}>
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-4].thumbnail}/>

 <div className="card-info">

<div className="info-wrapper">
<div className="card-info-detail2">Title:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-1].title}
</div>
</div>

<div className="info-wrapper">
<div  className="card-info-detail2">Author:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-1].author}
</div></div>


<div className="info-wrapper"><div  className="card-info-detail2">Owner:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-1].owner.name}
</div></div>

<div className="info-wrapper"><div  className="card-info-detail2">Price:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-1].price}
</div></div>



<div className="info-wrapper">
<div  className="card-info-detail2">Rating:</div>
<div className="card-info-detail fontChange">
<span> {availableBook[availableBook.length-1].ratingAverage}<i class="far fa-star"></i> </span>   
   <span className="ratingQuantity">{availableBook[availableBook.length-1].ratingQuantity} voters</span>
</div></div>


</div>
      {/* <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-4].title}</Card.Title>
      <Card.Text>From user: {availableBook[availableBook.length-4].owner.name}</Card.Text>                           
        </Card.Body> */}
 </Card>

 <Card className="swipercard swipercard-bg5" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-5].id}`);}}>
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-5].thumbnail}/>
 <div className="card-info">

<div className="info-wrapper">
<div className="card-info-detail2">Title:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-5].title}
</div>
</div>

<div className="info-wrapper">
<div  className="card-info-detail2">Author:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-5].author}
</div></div>


<div className="info-wrapper"><div  className="card-info-detail2">Owner:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-5].owner.name}
</div></div>

<div className="info-wrapper"><div  className="card-info-detail2">Price:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-5].price}
</div></div>



<div className="info-wrapper">
<div  className="card-info-detail2">Rating:</div>
<div className="card-info-detail fontChange">
<span> 
  {availableBook[availableBook.length-5].ratingAverage}

<i class="far fa-star"></i> </span>   
   <span className="ratingQuantity">{availableBook[availableBook.length-5].ratingQuantity} voters</span>
</div></div>


</div>


      {/* <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-5].title}</Card.Title>   
      <Card.Text>From user: {availableBook[availableBook.length-5].owner.name}</Card.Text>                
        </Card.Body> */}
 </Card>
 
 <Card className="swipercard swipercard-bg6" 
  onClick={()=>{history.push(`./users/books/${availableBook[availableBook.length-6].id}`);}}>
 <Card.Img className="swipeimages" variant="top" src={availableBook[availableBook.length-6].thumbnail}/>
 <div className="card-info">

<div className="info-wrapper">
<div className="card-info-detail2">Title:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-6].title}
</div>
</div>

<div className="info-wrapper">
<div  className="card-info-detail2">Author:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-6].author}
</div></div>


<div className="info-wrapper"><div  className="card-info-detail2">Owner:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-6].owner.name}
</div></div>

<div className="info-wrapper"><div  className="card-info-detail2">Price:</div>
<div className="card-info-detail fontChange">{availableBook[availableBook.length-6].price}
</div></div>



<div className="info-wrapper">
<div  className="card-info-detail2">Rating:</div>
<div className="card-info-detail fontChange">
<span> {availableBook[availableBook.length-6].ratingAverage}<i class="far fa-star"></i> </span>   
   <span className="ratingQuantity">{availableBook[availableBook.length-6].ratingQuantity} voters</span>
</div></div>


</div>


      {/* <Card.Body className="">
      <Card.Title>{availableBook[availableBook.length-6].title}</Card.Title>    
      <Card.Text>From user: {availableBook[availableBook.length-6].owner.name}</Card.Text>                
        </Card.Body> */}
 </Card>
 
</Swiper>
    </Container>


    )
}
