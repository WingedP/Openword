import React, {useState, useEffect} from 'react'
import {Jumbotron, Container, Form, Card, Button, Row, Col} from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../components/navbar';
import Categorycard from '../components/categorycard';
import LandingSection from '../components/landing-section';
import SwiperAvailableItem from '../components/availableswiper';
import Testnav from '../components/testnav';
import Moment from 'react-moment';

export default function HomePage(props) {
        
const [showBooks,setShowBooks]=useState([])

  const params = {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
  const comicparams = {
    slidesPerView: 4,
    spaceBetween: 5,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

useEffect(() => {exploreAllBooks()}, [])


  let showAllCategories = props.cat.map(el=>{
        return(
        <Container style={{display:"flex", flexDirection:"column"}}>
       {el.category} 
        </Container>
        )
  })

const exploreAllBooks = async (e) => {
        const res = await fetch(process.env.REACT_APP_SERVER + "/books?page=1&limit=6", {
          method: "GET",    
          headers: {
            "Content-Type": "application/json"
          },
        });
        if(res.status===200){
          const body = await res.json();
          setShowBooks(body.data)      
    } 
        else (alert("error in exploreAllBooks."))  
    };

console.log("explore all books", showBooks )


let renderExploreAllBooks = showBooks.length === 0 ? <div>No Book.</div>
: showBooks.map(el => {
  return (
  <Card className="homepageCard" key={el.id}>
        <Card.Img   className="homepageCardImg" variant="top" src={el.thumbnail} />

        {/* <Card.ImgOverlay className="exploreCardImg2">
        <img className="exploreBookIcon2" src="/images/closedbookicon.png"></img>
        <img className="exploreBookIcon" src="/images/openbookicon.png"></img>
          </Card.ImgOverlay> */}



        
 </Card>
      )
    })


return (        
  <div className="homepagez">
 {/* <Navbar user={props.user} setUser={props.setUser}/> */}



<Testnav user={props.user} setUser={props.setUser}/>
<LandingSection/>


<Container className="containertestttt">


<Row>
 {/* <Col><img className="treetest" src="/images/tree.png"></img></Col> */}
 <img className="treetest" src="/images/tree.png"></img>
<Col lg={8} className="containerbred">
<Row>
                <Col className="testcontentz">
                <div  className="testcontentzcol1">Here we <span className="txtread">Read</span>,</div>
                <div className="testcontentzcol2"><span className="txtlend">Lend</span> our books,</div>
                <div className="testcontentzcol3"> and <span className="txtborrow">Borrow</span> from others</div>
               </Col> 
                
                </Row>
<Row className="testcontentzIcon">
 <Col>
<div><i  style={{fontSize:"34px"}} class="fas fa-star-half-alt"></i>
</div>      
<div className="testkeeptrack">Rating</div>
</Col>       
<Col><i  style={{fontSize:"34px"}} class="fas fa-pen-fancy"></i>
<div className="testkeeptrack">Review</div>
</Col>
<Col className="testmorecontent">
<div><i style={{fontSize:"34px"}} class="fas fa-eye"></i></div>      
<div className="testkeeptrack">keep track</div>
 of our book collection</Col>


</Row>
</Col>

</Row>


</Container>

<Container style={{textAlign:"center"}}>
<div className="sprdknowledge" style={{marginTop:"2rem "}}>Spread the knowledge. <i class="fas fa-book-open"></i> Read, share, and care. </div>
<h3>Become Openword's member?</h3>

<Container style={{height:"5rem", paddingTop:"1.2rem"}} >
        <Link to='/signup'> <Button className="signupbtn"><div className="signupbtn1"></div>
Sign up</Button></Link>


</Container>

</Container>

<div className="bookseparator"><img className="bookseparatorimg" src="/images/bookseparator.png"></img></div>





{/* <Container  className="homepagezContent2">
  <Row  className="row1homepage">


<div className="reviewz">

<div className="ftreview">
<img  className="ftreviewflourish" src="/images/flourishes/1.png"></img>
<i class="fab fa-pied-piper-hat"></i> Newest Review:  </div> 
<div className="separator"></div>

<div className="reviewzcontent">
<div className="reviewtitle">
<i class="fas fa-quote-left"></i>Earth from afar <i class="fas fa-quote-right"></i></div>
<div className="reviewdetail">
        <div><i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i></div>
 <div>Written by <span style={{marginLeft:"0.4rem"}} className="reviewer">Sehuilia</span></div>

</div>
<div>8 hours ago</div>
<div style={{textAlign:"center"}}><img style={{display:"inline-block", width:"25rem", height:"20rem"}} className="" src="/images/bookreview.jpg"></img></div>
<div className="reviewtext">
"...blue is our talisman, the center of our thought." Beautiful book from huang, highly recommended.
In real life were someone to ask you an innocuous question like: "So what's your favourite colour?",
Forget it . . . <i style={{fontSize:"20px"}} class="fas fa-angle-double-right"></i> 
</div>
</div>

</div>

<div className="categoriesexplore">
<img  className="categoriesexploreflourish" src="/images/flourishes/1.png"></img>
<div className="ftreview"><i class="fab fa-pied-piper-hat"></i> Explore by genres:  </div> 
<Categorycard/> 

</div>

</Row>
</Container> */}



<Container className="bookslide">
  
<Row className="availablerow2">  

<div className="latest-available">
  <div className="tag-decor3"></div>
  <div className="latest-available-inner">LATEST AVAILABLE:</div>
  <div className="latest-available-guide">From user to user.</div>

  </div>


{/* <div className="latest-available-guide">From user to user.</div> */}

<Row className="availablerow2-inner" >
  <div className="latest-available-guide2">  Like it? There are more!
</div>

    <Link to='/explore'><button className="viewallbtn"><div className="viewallbtn2"></div>View all.</button></Link>

  </Row>


  </Row>

{/* <Row className=""> 
<h4>Like it? There's more.  
<Link to='/explore'><button className="viewallbtn"><div className="viewallbtn2"></div>View all.</button></Link>
 </h4> 
 </Row> */}


<SwiperAvailableItem/>


</Container>





<div className="bookseparator">
  <img className="bookseparatorimg" src="/images/bookseparator.png"></img>
  </div>





<div className="home-explore-section">

<div className="home-explore-text">

<div className="guide-decor"></div>
{/* <div className="guide-decor2"></div> */}

<div className="guide-decor3"></div>
{/* <div className="guide-decor4"></div> */}

<div className="guide-decor5"></div>
{/* <div className="guide-decor6"></div> */}

<div className="guide-item-1">
<div className="todo1">
<div className="todo-img-wrapper"><img className="closed-book" src="/images/closedbookicon.png"></img></div>

<div className="todo-inner-wrapper">
<div className="todo-inner">
<i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
Title:</div>
<div className="todo-inner">  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
Author:</div>
<div className="todo-inner">  <i style={{color:"gray", fontSize:"1.9rem", marginRight:"7px"}} class="markIcon fas fa-caret-right"></i>    
Borrowing price:</div>
{/* <div className="three-dots"><i class="fas fa-ellipsis-h"></i></div> */}
</div>
</div>
<div className="guide-text">Click cover to see book's detail</div>
</div>

<div  className="guide-item-2">
<div className="guide-text">Publish reviews</div>

<div className="guide-review">
<div className="guide-review-title">"Nice!" by khoa on Jul 2020 4 <i class="far fa-star"></i>
 </div>
<div>Good stuff. Book's condition is good, readable. Love it. Thanks Anna.</div>
</div>
</div>

<div  className="guide-item-3">

<div className="guide-profile">

<div className="guide-profile-item">You <i class="usericons fas fa-user-circle"></i></div>

<div className="guide-profile-collection" style={{display:"flex", justifyContent:"space-around"}}>
<i style={{color:"gold", textShadow:"2px 2px gray"}} class="fas fa-book"></i>
<i style={{color:"brown", textShadow:"2px 2px gray"}} class="fas fa-book-dead"></i>
<i style={{color:"lightgreen", textShadow:"2px 2px gray"}} class="fas fa-book-open"></i>
</div>

<div className="guide-profile-collection" style={{display:"flex", justifyContent:"space-around"}}>
<i style={{color:"hotpink", textShadow:"2px 2px gray"}} class="fas fa-book"></i>
<i style={{color:"paleturquoise", textShadow:"2px 2px gray"}} class="fas fa-book"></i>
<i style={{color:"tomato", textShadow:"2px 2px gray"}} class="fas fa-book"></i>

</div>
</div>

<div className="guide-text">Build your Collection & customizing your profile</div>

</div>

</div>


<div class="container" className="home-renderExploreAllBooks">
  <div className="home-explore-headings">
<div className="home-explore-tag-popular">
  <div className="tag-decor"></div>
  <div  className="tag-popular-text">Popular:</div>
  </div>

<div  className="home-explore-tag-genres">
  <div>Genres</div>
<div>Literature</div>
<div>History</div>
<div>Sciences</div>
<div>Comic</div>
</div>


    
    </div>
  <div class="row render-explore-row">
  <div className="tag-decor2"></div>
    {renderExploreAllBooks}
  <div style={{paddingTop:"2rem"}}>
  <Link to='/explore'><button className="viewallbtn"><div className="viewallbtn2"></div>Explore .</button></Link>

  </div>
  </div>
</div>
        
</div>
 
<div className="bookseparator">
  <img className="bookseparatorimg" src="/images/bookseparator.png"></img>
  </div>








{/* <Container className="bookslide1"  >
<Row className="availablerow"> <h2>By genres: Comic  </h2> </Row> 



<Swiper {...comicparams}>
        
        <div>
<img src="/images/bookthumbnail/comic1.jpg"></img>

        </div>
        <div><img  src="/images/bookthumbnail/comic2.jpg"></img></div>
        <div><img src="/images/bookthumbnail/comic3.jpg"></img>
</div>
        <div><img  src="/images/bookthumbnail/comic4.jpg"></img>
</div>
        <div><img  src="/images/bookthumbnail/comic5.jpg"></img>
</div>
      </Swiper>

</Container> */}





</div>)}


