
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../components/componentstyles/footer.css';



export default function Footer() {
    return (
<footer id="footer" class="footerz">


<div  class="main-footer widgets-dark typo-light">

<div className="sharing container">
HAVE FRIENDS WHO LOVE TO READ? SHARE.
<div className="sharingbtns">
<AwesomeButton className="socialbtns" type="facebook">Facebook</AwesomeButton>
<AwesomeButton  className="socialbtns"type="instagram">Instagram</AwesomeButton>
<AwesomeButton className="socialbtns"type="primary">Tumblr</AwesomeButton>
</div>
{/* <img className= "footerflourish" src="/images/flourishes/2.png"></img> */}

</div>


<div class="container-fluid">
<div class="row">
    


<div class="col-xs-12 col-sm-6 col-md-3">
<div class="widget subscribe no-box">
<img className= "footerlogo" src="/images/1.png"></img>
</div>
</div>




<div class="footerFormControl col-xs-12 col-sm-6 col-md-4">
<h5 className="footersupport"><span className="footerLetter">N</span>EWSLETTER SUBSCRIPTION<span></span></h5>

<Form className="footerForm">
<Row className="footerFormRow">
 <Form.Group  controlId="exampleForm.ControlInput1">
 <Form.Control className="emailpass" type="email" placeholder="you@gmail.com" />
   <Form.Label className="contactlabels">YOUR EMAIL</Form.Label>
  </Form.Group>
          
<Form.Group controlId="">
     <Form.Control className="emailpass" type="text" placeholder="your name" />
    <Form.Label className="contactlabels">YOUR NAME</Form.Label>
</Form.Group>
<button  className="submitbtn">
  <div className="submitbtn2" style={{fontSize:"19px", fontWeight:"bold"}}><i class="fas fa-check-double"></i></div>
</button>
</Row>

        
 </Form>  

        <div className="subscribetext">If you want to subscribe to our monthly newsletter, please fill out the form below.</div>


</div>


<div class="col-xs-12 col-sm-6 col-md-2">
<div class="widget no-box">

<h5 className="footersupport"><span className="footerLetter">S</span>UPPORT US<span></span></h5>

<h3>
<button  className="donatebtn">
  <div className="donatebtn2">
    <i class="heartdonate fas fa-hand-holding-heart"></i>
  <div style={{fontSize:"19px", fontWeight:"bold"}}>Donate</div>
  </div>
</button>


</h3>
<div className="donatetext">
Your contribution is more than a donation; it is how we will work to show the world the finest of reading culture.
</div>
</div>
</div>

<div class=" col-xs-12 col-sm-6 col-md-2">
<div class="widget no-box">
<h5 className="footersupport widget-title"><span className="footerLetter">C</span>ONTACT US:<span></span></h5>


<div className="emailending">ouropenword@gmail.com</div>
{/* <ul><li><a href="mailto:info@domain.com">ouropenword@gmail.com</a></li></ul> */}

{/* <ul class="social-footer2">
<li class=""><a title="youtube" target="_blank" href="https://www.youtube.com/"></a></li>
<li class=""><a href="https://www.facebook.com/" target="_blank" title="Facebook"></a></li>
<li class=""><a href="https://twitter.com" target="_blank" title="Twitter"></a></li>
<li class=""><a title="instagram" target="_blank" href="https://www.instagram.com/"></a></li>
</ul> */}


</div>
</div>

</div>
</div>
</div>




<div class="footer-copyright">
<div class="container">
<div class="row">
<div class="col-md-12 text-center">
<div className="copyright">Openword © 2020. All rights reserved.</div>
</div>
</div>
</div>
</div>


</footer>
      
    )
}


