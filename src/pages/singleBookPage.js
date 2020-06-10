import React, { useState, useEffect } from 'react';
import {Link, useParams, useHistory } from "react-router-dom";
import { Form, Button, Container, Modal, Row, Col, Card, Badge } from 'react-bootstrap';
import '../pages/pagestyle/singleBookPage.css';
import Moment from 'react-moment';

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
? <div className="noReviewBox">There's no review here.</div>  
: showReviews.map(el=>{
  return(
<Container fluid className="reviewContainer">
  <div  className="reviewContainer1">  
 <div> <span style={{fontWeight:"bold"}}>"{el.title}"</span> 
 <span>by {el.user.name}</span> <span style={{fontSize:"13px", color:"gray"}}>on <Moment format="MMM YYYY"  date={el.createAt} withTitle/></span>
   </div> 
  <div style={{marginRight:"0.5rem"}}>{el.rating}<i class="far fa-star"></i></div>

</div>
  <div>  {el.content} </div>

</Container>
  )
  })



  const StarRating = ()=>{
    console.log("rating", rating)
    return(
    <div>   {[...Array(5)].map((star, i)=>{let ratingValue = i + 1;
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

const postReview = async (e) =>{
  e.preventDefault();
  console.log("getReviewInput", getReviewInput)
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
// console.log(singleBookData)
  return (
    <div className="bookdata">
      <Container fluid className="containerBookdata">

<Row  className="breadCrumbRow">
  <Link className="bcItem" to='/'>Home</Link> / 
  <Link className="bcItem" to='/explore'>Explore</Link> / 
  <Link className="bcItem" to='/users/me'>Your collection</Link> / 
  <Link className="bcItem">{singleBookData.title}</Link> 
 
  </Row>

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
<span className="line1">Owned by:</span>


<span> {singleBookData.owner && singleBookData.owner.name}
<img className="singleBookPageuserAvatarImage" src="/images/avatar/1.jpg"></img>
</span>
</div>  

  <div className="line">
  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
<span className="line1">Available: </span> {singleBookData.availability == true ? "yes" : "no"}  </div>

    <div className="line">
  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
<span className="line1">until: </span><Moment format="DD/MMM/YYYY"  date={singleBookData.until} withTitle/></div>  



<div className="descriptionline">  
<div className="descriptionline1">
 <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
 
  Description: </div>



<div className="singleBookDescription">{singleBookData.description}</div>
</div>  

<div className="line">
<i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
 
  <span className="line1">  Borrowing price: </span>
  <span className="pricebox" > 
    <span className="pricebox2">{singleBookData.price}</span > <span className="pricebox3">VNĐ</span>     </span></div>           
    
    
    <button onClick={()=>{setShowBorrowModal(true)}} className="borrowbtn"><div className="borrowbtn2"></div>Borrow?</button>

           
           {/* <button onClick={()=>{setShowBorrowModal(true)}}> Borrow? </button> */}
           
        
         </div> 

</Row>




</Container>

<Container fluid className="reviewSectionWrapper">
  <Row>
<div className="reviewSection">
<div  className="reviewSection1">Reviews:</div>       

{renderGetReviews}

</div>

<div className="reviewSection3" >
<div  className="reviewSection1">Write your review:</div>       


      <Form className="writereviewsection" onChange={handleReviewChange} onSubmit={postReview}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Title: <span className="titlelabelinfo">Required: One-line summary of your review</span></Form.Label>
      <Form.Control name="title" type="text" placeholder="Review's title" />
    </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Write review:
    <span className="titlelabelinfo">The text portion of your review.</span>
    </Form.Label>

    <Form.Control name="content" as="textarea" rows="2" />
      </Form.Group>

<div  className="ratingandsubmit"    >
<div><span className="">Give rating : <StarRating/></span></div>
<Button className="publishbtn" type="submit">
  <div className="publishbtn2"></div>Publish
</Button>
</div>
 {/* <Button variant="primary" type="submit">Submit</Button> */}
      <Form.Text>Other users can always see your reviews on book page.</Form.Text>

 <Container fluid style={{marginTop:"1rem"}}>
<div>
All reviews must meet the our standards of community guidlines, 
      <Link>terms of service</Link> and <Link>community rules</Link> .
</div>
</Container>

      </Form>
      </div>    
  </Row>


</Container>





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

