import React, { useState, useEffect } from 'react';
import {Link, useParams, useHistory } from "react-router-dom";
import { Form, Button, Container, Modal, Row, Col, Card, Badge } from 'react-bootstrap';
import '../pages/pagestyle/singleBookPage.css';

export default function SingleBookPage(props) {
    let history = useHistory();
    let [singleBookData, setSingleBookData] = useState({});
    let [getReviewInput, setGetReviewInput] = useState({});
    let [showReviews, setShowReviews] = useState([]);
    let [showBorrowModal,setShowBorrowModal] = useState(false);
    let [rating,setRating]=useState(null);
    let [hoverRating,setHoverRating]=useState(null);

    let { id } = useParams(); 
    // console.log("params id",  id)  
    useEffect(() => {
      getSingleBook();
      getReviews();
    }, []);


const StarRating = ()=>{
  console.log("rating", rating)
  return(
  <div>   {[...Array(5)].map((star, i)=>{let ratingValue = i +1;
      return(<label>
  <input type="radio" name="rating" value={ratingValue}
  onClick={()=>{setRating(ratingValue)}}
  className="starRatingRadio"></input>
  <i class={ ratingValue<=(hoverRating || rating) ? "yellowColor star fas fa-star" : "normalColor star fas fa-star"}
  onMouseEnter={()=>setHoverRating(ratingValue)}
  onMouseLeave={()=>setHoverRating(null)}
  >

   </i>
</label>) 
})}

</div>)}


const getSingleBook = async () => {
        const res = await fetch (process.env.REACT_APP_SERVER + `/users/books/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
        });
        if(res.status === 200){
            const body = await res.json();
            // console.log(body.data)
            setSingleBookData(body.data)
        } 
        else (alert("something wrong with this book's data"))
      }

  const getReviews = async () => {
    const res = await fetch (process.env.REACT_APP_SERVER + `/books/${id}/reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
    if(res.status===200){const body = await res.json();
      console.log("getReview body", body.data)
    setShowReviews(body.data)} 
    else (alert("user has no book"))
  }    

let renderGetReviews = showReviews.length === 0 
? <div>no review here</div>  
: showReviews.map(el=>{
  return(
<Container>
  <div>  {el.title} </div>
  <div>  {el.content} </div>
  <div>  {el.rating} </div>
<div>by User: {el.user.name}</div>
</Container>
  )
  })


  const postReview = async () =>{
        const res = await fetch (process.env.REACT_APP_SERVER + `/books/${id}/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(getReviewInput)
        });
        if(res.status===201){const body = await res.json();
        } 
        else (alert("cannot upload review's data"))
      }
      


const handleReviewChange=(e)=>{
  setGetReviewInput({...getReviewInput, [e.target.name] : e.target.value })      
}


if(singleBookData===null && singleBookData.data===null) return<div>Loading</div>;
  return (
    <div style={{border:"1px solid black"}}>
    <div>{singleBookData.title}</div>    
    <div>Available until: {singleBookData.until}</div>  
    <div>Book's description: {singleBookData.description}</div>  
    <div>Book can be borrowed for: {singleBookData.price}</div>           
         <div><button onClick={()=>{setShowBorrowModal(true)}}> Borrow? </button></div>
   <img style={{width:"13rem"}} src={singleBookData.thumbnail}></img>
  
      <div>
        <div style={{border:"1px solid black", width:"15rem", height:"", backgroundColor:"gray"}}>
        Review box here:
    {renderGetReviews}</div>
      <Form onChange={handleReviewChange} onSubmit={postReview} style={{border:"0.5px solid gray", width:"15rem"}}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Title:</Form.Label>
      <Form.Control name="title" type="text" placeholder="Review's title" />
      
    </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Write review:</Form.Label>

    <Form.Control name="content" as="textarea" rows="2" />
      </Form.Group>

<StarRating/>

      {/* <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Rating:</Form.Label>
    <Form.Control name="rating" as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </Form.Group> */}
      
      <Button variant="primary" type="submit">Submit</Button>
      </Form>
      </div>

    <MyVerticallyCenteredModal
        show={showBorrowModal}
        onHide={() => setShowBorrowModal(false)}
      />
   </div>



    )
}





function MyVerticallyCenteredModal(props) {
  let { id } = useParams(); 

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>   
        {/* <Link to='/users/books/borrowingform/:id'><Button>Request this Item</Button></Link> */}
        <Link to={`/users/books/borrowingform/${id}`}><Button>Request this Item</Button></Link>


        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

