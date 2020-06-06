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
<Container className="reviewContainer">
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
console.log(singleBookData)
  return (
    <div className="bookdata">

      <Container fluid className="containerBookdata">

<Row className="booktitle" > 

<img  className="singleBookIcon" src="/images/6.png"></img>    
<span className="singleBookDatatitle">
  <div className="booktitleDecor"></div>
<div className="booktitleDecor2"></div>
  {singleBookData.title}</span>  
</Row>

<Row>   
<div className="singlebookthumbnailWrapper">
 <img className="singlebookthumbnail" src={singleBookData.thumbnail}></img>
</div>

<div className="detailsinglebook">

  <div className="line">
    
  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
<span className="line1">Title:</span> 

 {singleBookData.title} 

</div>    

  <div className="line">
  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
    <span  className="line1">Author:</span> {singleBookData.author}</div>    

    <div className="line">
    <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
    <span className="line1">Rating:</span> {singleBookData.ratingAverage}</div>    

  <div className="line">
  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
<span className="line1">Owned by: </span>{singleBookData.owner && singleBookData.owner.name}
<span>          <img className="singleBookPageuserAvatarImage" src="/images/avatar/1.jpg"></img>
</span>
</div>  

  <div className="line">
  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
<span className="line1">Available: </span> {singleBookData.availability == true ? "yes" : "no"}  </div>

    <div className="line">
  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
<span className="line1">until: </span>{singleBookData.until}</div>  

<div className="line">
  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
<span className="line1">Description: </span>{singleBookData.description}</div>  


    <div className="line">Borrowing price: <span className="pricebox" > <span className="pricebox2" >{singleBookData.price}</span>   VND  </span></div>           
    
    
    <button onClick={()=>{setShowBorrowModal(true)}} className="borrowbtn"><div className="borrowbtn2"></div>Borrow?</button>

           
           {/* <button onClick={()=>{setShowBorrowModal(true)}}> Borrow? </button> */}
           
        
         </div> 

         </Row>


         <div className="reviewSection">
<div  style={{fontSize:"1.4rem"}}>Review:</div>       
    {renderGetReviews}</div>

</Container>


  
      <div className="writereviewsection">
      <Form onChange={handleReviewChange} onSubmit={postReview}>
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
          Openword Librarian:
            <div className="librarianchat">"So you want to borrow this book. Ready to process?"</div>

        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="borrowModalBody">
        <img className="modalborrowImg" src="/images/background/test3.png"></img>
        <img className="modalborrowImg2" src="/images/library.jpg"></img>

  
      </Modal.Body>

      <Modal.Footer>   
        {/* <Link to='/users/books/borrowingform/:id'><Button>Request this Item</Button></Link> */}
        <Link to={`/users/books/borrowingform/${id}`}><Button>Request this Item</Button></Link>


        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

