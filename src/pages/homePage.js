import React, {useState, useEffect} from 'react'
import {Jumbotron, Container, Form, Button, Row, Col} from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import Navbar from '../components/navbar';



export default function HomePage(props) {
console.log("props in homepagez", props.user)
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

  
  return (

        
  <div className="homepagez">
          <Navbar user={props.user} setUser={props.setUser}/>

            {/* <img className="bgimg" src="/images/appbg/1.png"></img> */}

  <Container fluid className="homepagezlinks" >
    <Row style={{paddingLeft:"9rem"}}>
      <h3 style={{marginLeft:"1.5rem"}}>REVIEWS</h3>
<h3 style={{marginLeft:"1.5rem"}}>GIVEAWAYS</h3>
<h3 style={{marginLeft:"1.5rem"}} >BROWSE</h3>
<h3 style={{marginLeft:"1.5rem"}} >EXPLORE</h3>

<div style={{marginLeft:"29.5rem"}}><i class=" socialheadicons fab fa-facebook"></i>
<i class="socialheadicons fab fa-instagram"></i>
<i class="socialheadicons fab fa-tumblr"></i></div>

</Row>
  </Container>

  <Container  className="homepagezBanner">
<img className="headerimg" src="/images/about1.jpg"></img>

</Container>




<Container  className="homepagezContent2">
  <Row  className="row1homepage">
<Col>
<Row  className="innerRow" >  
<img className="treeimg" src="/images/tree.png"></img>
 
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


  <h1 style={{marginTop:"4rem "}}><i class="fas fa-book-open"></i> Spread the knowledge. Read, share, and care.</h1>
<h3>Become Openword's member?</h3>
</Col>
  


<div className="reviewz">
<div className="ftreview">  FEATURED REVIEW:  
</div> 
<div className="separator">
        
</div>
<img style={{width:"30rem",height:"20rem"}} className="" src="/images/bookreview.jpg"></img>
<h5>
Nebbia
Wrote a review

</h5>
<p>4 hours ago
</p>
<div>
"...blue is our talisman, the center of our thought."

In real life were someone to ask you an innocuous question like: "So what's your favourite colour?", could you launch into a virtuoso performance of extracting every nuance, every flavour, every fragrance out of that colour & in the celebratory process fill it with more of these?
Forget it, cause you are not William H. Gass – you can never be him. But that's . . .
</div>
</div>
</Row>

</Container>



<Container className="bookslide1"  >
<Row className="availablerow"> <h2>   AVAILABLE FOR BORROWING:  </h2> 
 </Row> 


<Swiper {...params}>
        <div>
<img style={{height:"18rem"}} src="/images/bookthumbnail/3.jpg"></img>
<div style={{textAlign:"center",border: "1px solid black"}}>from user <h2>Illnov</h2></div>
        </div>
        <div><img style={{height:"18rem"}} src="/images/bookthumbnail/2.jpg"></img>
        <div style={{textAlign:"center",border: "1px solid black"}}>from user <h2>Illnov</h2></div>

</div>
<div><img  style={{height:"18rem"}} src="/images/bookthumbnail/comic4.jpg"></img>
<div style={{textAlign:"center",border: "1px solid black"}}>from user <h2>Illnov</h2></div>
</div>
        <div><img style={{height:"18rem"}} src="/images/bookthumbnail/1.jpg"></img>
        <div style={{textAlign:"center",border: "1px solid black"}}>from user <h2>Illnov</h2></div>

</div>
        <div><img style={{height:"18rem"}} src="/images/bookthumbnail/4.jpg"></img>
        <div style={{textAlign:"center",border: "1px solid black"}}>from user <h2>Illnov</h2></div>

</div>
        <div><img style={{height:"18rem"}} src="/images/bookthumbnail/5.jpg"></img>
        <div style={{textAlign:"center",border: "1px solid black"}}>from user <h2>Illnov</h2></div>

</div>

      </Swiper>
</Container>


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
      </Swiper>>


</Container>


<Container className="endingz">
<img className="endingimg" src="/images/read.jpg"></img>
</Container>

</div>)}



// export default function HomePage() {
//     return (
//     <div className="homepagez" style={{margin:"0", padding:"0"}}>


      
//             <Jumbotron className="header" fluid>
//             <img className="headerimg" style={{height:"600px"}} src="./images/4.jpg" alt=""/>
//             <img className="" style={{height:"600px", width:"34rem" }} src="./images/3.jpg" alt=""/>
//             </Jumbotron>


// <Container fluid className="midsectionz">
// <Container fluid className="categoryfilter">
// <Button className="btnfilter" variant="" size="lg">
//       Large button
//     </Button>
//     <Button className="btnfilter2" variant="" size="lg">
//       Large button
//     </Button>
//     <Button className="btnfilter3" variant="" size="lg">
//       Large button
//     </Button>

// </Container>
// <div className="separator"></div>

// <Container fluid className="aboutus">
// <Row>
//     <Col>ABOUT US
//     <div  >DISCOUNT

//         </div>
//         <img  style={{width:"28rem"}} src="./images/about3.jpg"></img>
// </Col>
    
//     <Col>
//     <Row>ROW 1
//     <img  style={{width:"28rem"}} src="./images/about1.jpg"></img>

//     </Row>
//     <Row>ROW 1
//     <img  style={{height:"14rem"}} src="./images/vintage.JPG"></img>

//     <img  style={{height:"14rem"}} src="./images/vintage.JPG"></img>

//     </Row>

//     </Col>
//   </Row>

// </Container>

// </Container>

// <Container fluid className="ending"> </Container>

// <Jumbotron className="footerz" fluid>
//   <div className="contacttext">
//   <div className="contacticontag"><div className="contacticontag2"></div></div>
// GET IN TOUCH 
// </div>
//       <div className="contactsubtext">Want me to be a part of your journey?</div>

//       <div className="contactwrapper fluid-container">

//         <Form className="col-sm-6">
//  <div className="row">         
 
//  <Form.Group  className=" col-6" controlId="exampleForm.ControlInput1">
//             <Form.Label className="contactlabels">YOUR EMAIL</Form.Label>
//             <Form.Control className="emailpass" type="email" placeholder="you@gmail.com" />
//           </Form.Group>
          
          
//           <Form.Group className=" col-6" controlId="">
//             <Form.Label className="contactlabels">YOUR NAME</Form.Label>
//             <Form.Control className="emailpass" type="text" placeholder="your name" />
//           </Form.Group>

//           </div>
 
//           <Form.Group controlId="exampleForm.ControlTextarea1">
//             <Form.Label className="contactlabels">Message:</Form.Label>
//             <Form.Control className="textareatextarea" as="textarea" rows="3" 
//             placeholder="Whisper to me your deepest wishes and darkest secrets. Criticisms and job's offers are also welcome."/>
//           </Form.Group>

//           <div className="animated-box3 in3">
//             <button className="contactbtn" >Submit</button>
//             </div>

//         </Form>

//         <div className="contact col-sm-6">
//           <div className="contact1">

//             <div className="contactinfo">
//               <div className="contactfind">FIND ME:</div>

        
//               <br />
//               <br />
//               <div className="d-flex align-items-center">© Nhan Nguyen 2020.</div>
//             </div>

//             <div className="contactinfo">
//               <div  className="contactfind">CONTACT INFO:</div>
//               {/* <div className="st-separator"></div> */}

//               <div><i class="fas fa-mobile-alt" style={{ marginRight: "6px" }}></i>032 6657 304</div>
//               <div><i class="fas fa-map-marker-alt" style={{ marginRight: "6px" }}></i>12 D1 Long Hau, Can Giuoc ward, Long An district
//     </div>
//               <div><i class="fas fa-envelope" style={{ marginRight: "6px" }}></i>elysiawepts25@gmail.com</div>
//             </div>

//           </div>


//         </div>
//       </div>



//             </Jumbotron>

// </div>


//     )
// }
