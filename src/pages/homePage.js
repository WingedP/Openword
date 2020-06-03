import React, {useState, useEffect} from 'react'
import {Jumbotron, Container, Form, Card, Button, Row, Col} from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import Navbar from '../components/navbar';
import Categorycard from '../components/categorycard';
import SwiperAvailableItem from '../components/availableswiper';
import Testnav from '../components/testnav';

export default function HomePage(props) {

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

  let showAllCategories = props.cat.map(el=>{
        return(
        <Container style={{display:"flex", flexDirection:"column"}}>
       {el.category} 
        </Container>
        )
  })


return (        
  <div className="homepagez">
          {/* <Navbar user={props.user} setUser={props.setUser}/> */}
                <Testnav user={props.user} setUser={props.setUser}/>
            {/* <img className="bgimg" src="/images/appbg/1.png"></img> */}

<Container fluid className="homepagezlinks" >
        <Row  className="homepagezlinksrow" lg={12} md={6} sm={6}>       
        <Col className="colhome" xs={6}><button className="linkhomepagez">Review</button></Col>   
        <Col className="colhome"  xs={6}>        <button className="linkhomepagez">Giveaways</button></Col>   
        {/* <Col className="colhome"  xs={6}><button className="linkhomepagez">Browse</button></Col>    */}
        <Col className="colhome"  xs={6}>        <button className="linkhomepagez">Explore</button></Col>   
 </Row>
  </Container>

<Container className="homepagezBannertest">
<img className="testbannerimg" src="/images/read.jpg"></img>
<Container className="bannerintro" >Hi, We are 
<div className="bannerintrotitle" >Openword.</div>
<div>We bring <span className="readerspan">readers</span><br/> and <span className="readerspan">books</span> <div>together.</div> </div>
<Button className="aboutusbtn">
<div className="aboutusbtn1"></div>
About us</Button>
</Container>

</Container>

<div className="bookseparator"><img className="bookseparatorimg" src="/images/bookseparator.png"></img></div>


<Container className="containertestttt">
<Row>
 <Col><img className="treetest" src="/images/tree.png"></img></Col>

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
<Button className="signupbtn">
<div className="signupbtn1"></div>
Sign up</Button>

</Container>

</Container>

<div className="bookseparator"><img className="bookseparatorimg" src="/images/bookseparator.png"></img></div>










<Container  className="homepagezContent2">
  <Row  className="row1homepage">
{/* <Col>
<Row  className="innerRow" >  
 <div>
 <div className="introwrapperimg" ><img className="" src="/images/closing.jpg"></img></div>
 <div className="introwrapper">
  <h1>  1000 new users</h1> each month</div>
</div>


        <div>           
<div className="introwrapperimg" ><img className="" src="/images/closing2.png"></img></div>
    
  <div  className="introwrapper"><h1>Great book</h1> shared for free!</div>
  </div>

 <div>
  <div className="introwrapperimg"><img className="" src="/images/closing.jpg"></img></div>
  <div  className="introwrapper">Wanna share
  <h1>your collection?</h1></div>
 </div>
 </Row>
</Col> */}
  


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
 <div>Written by <span className="reviewer">Sehuilia</span></div>

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
</Container>







<Container className="bookslide">
<Row className="availablerow"> <div>  
{/* <img  className="availablerowimg" src="/images/6.png"></img> */}
<img  className="availablerowflourish" src="/images/flourishes/2.png"></img>
        AVAILABLE FOR BORROWING:  </div></Row> 


{/* <Swiper {...params}>
        <div  className="swipeimg">
<img className="swiperavailimg" style={{height:"18rem"}} src="/images/bookthumbnail/3.jpg"></img>
<div className="swiperavailbookdetail">from user 
<div>Illnov</div>
<div>The Silmarillion by J.R.R Tolkien</div>
<div>last updated: 8 hours ago</div>
</div>
        </div>

        <div className="swipeimg">
        <img className="swiperavailimg" style={{height:"18rem"}} src="/images/bookthumbnail/2.jpg"></img>

        <div className="swiperavailbookdetail">from user 
<div>Illnov</div>
<div>The Silmarillion by J.R.R Tolkien</div>
<div>last updated: 8 hours ago</div>
</div>

</div>
<div className="swipeimg"><img className="swiperavailimg" style={{height:"18rem"}} src="/images/bookthumbnail/comic4.jpg"></img>
<div className="swiperavailbookdetail">from user 
<div>Illnov</div>
<div>The Silmarillion by J.R.R Tolkien</div>
<div>last updated: 8 hours ago</div>
</div></div>
        <div className="swipeimg"><img className="swiperavailimg" style={{height:"18rem"}} src="/images/bookthumbnail/1.jpg"></img>
        <div className="swiperavailbookdetail">from user 
<div>Illnov</div>
<div>The Silmarillion by J.R.R Tolkien</div>
<div>last updated: 8 hours ago</div>
</div>
</div>
        <div className="swipeimg"><img className="swiperavailimg" style={{height:"18rem"}} src="/images/bookthumbnail/4.jpg"></img>
        <div className="swiperavailbookdetail">from user 
<div>Illnov</div>
<div>The Silmarillion by J.R.R Tolkien</div>
<div>last updated: 8 hours ago</div>
</div>
</div>
        <div className="swipeimg"><img className="swiperavailimg" style={{height:"18rem"}} src="/images/bookthumbnail/5.jpg"></img>
        <div className="swiperavailbookdetail">from user 
<div>Illnov</div>
<div>The Silmarillion by J.R.R Tolkien</div>
<div>last updated: 8 hours ago</div>
</div>
</div>

      </Swiper> */}



<SwiperAvailableItem/>


</Container>


<Row className="availablerow"> <h4>   Like it? There's more.  <button className="viewallbtn">View all.</button> </h4> 
 </Row> 


<Container className="bookslide1"  >
<Row className="availablerow"> <h2>   By genres: Comic  </h2> 
 </Row> 



<Swiper {...comicparams}>
        <div>
<img src="/images/bookthumbnail/comic1.jpg"></img>

        </div>
        <div><img  src="/images/bookthumbnail/comic2.jpg"></img>
</div>
        <div><img src="/images/bookthumbnail/comic3.jpg"></img>
</div>
        <div><img  src="/images/bookthumbnail/comic4.jpg"></img>
</div>
        <div><img  src="/images/bookthumbnail/comic5.jpg"></img>
</div>
      </Swiper>

</Container>





</div>)}


