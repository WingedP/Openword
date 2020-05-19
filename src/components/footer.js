import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



export default function Footer() {
    return (


        <footer id="footer" class="footerz">
<div class="main-footer widgets-dark typo-light">
    
<div className="bookshelfbanner">
<img className="bookshelfimg" src="/images/bookshelf.jpg"></img>
</div>


<div className="sharing container">
HAVE FRIENDS WHO LOVE TO READ? SHARE.
<div>
<AwesomeButton className="socialbtns" type="facebook">Facebook</AwesomeButton>
<AwesomeButton  className="socialbtns"type="instagram">Instagram</AwesomeButton>
<AwesomeButton className="socialbtns"type="primary">Tumblr</AwesomeButton>
</div>
</div>


<div class="container">
<div class="row">
    

<div class="col-xs-12 col-sm-6 col-md-3">
<div class="widget subscribe no-box">
<p className="mt-2">A book a day keep your worries a day. But sharing with other people make it count. A book a day keep your worries a day. But sharing with other people make it count.A book a day keep your worries a day. But sharing with other people make it count.</p>
</div>
</div>


<div class="col-xs-12 col-sm-6 col-md-4"   >
<div class="widget no-box">
<h5 class="widget-title">NEWSLETTER SUBSCRIPTION
<span></span></h5>
If you want to subscribe to our monthly newsletter, please fill out the form below.


<Form className="">
 <div className="row">         
 
 <Form.Group  className=" col-6" controlId="exampleForm.ControlInput1">
            <Form.Label className="contactlabels">YOUR EMAIL</Form.Label>
            <Form.Control className="emailpass" type="email" placeholder="you@gmail.com" />
          </Form.Group>
          
          
          <Form.Group className=" col-6" controlId="">
            <Form.Label className="contactlabels">YOUR NAME</Form.Label>
            <Form.Control className="emailpass" type="text" placeholder="your name" />
          </Form.Group>

          </div>
 
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="contactlabels">Message:</Form.Label>
            <Form.Control className="textareatextarea" as="textarea" rows="3" 
            placeholder="your message"/>
          </Form.Group>

          <div className="animated-box3 in3">
            <button className="contactbtn" >Submit</button>
            </div>

        </Form>





</div>
</div>


<div class="col-xs-12 col-sm-6 col-md-2">
<div class="widget no-box">
<h5 class="widget-title">QUICK LINKS<span></span></h5>
<ul class="thumbnail-widget">
<li>
<div class="thumb-content"><a href="#.">Get Started</a></div>
</li>
<li>
<div class="thumb-content"><a href="#.">Top Leaders</a></div>
</li>
<li>
<div class="thumb-content"><a href="#.">Success Stories</a></div>
</li>
</ul>
</div>
</div>

<div class="col-xs-12 col-sm-6 col-md-2">

<div class="widget no-box">
<h5 class="widget-title">CONTACT US<span></span></h5>

<ul><li><a href="mailto:info@domain.com">ouropenword@gmail.com</a></li></ul>
<ul class="social-footer2">
<li class=""><a title="youtube" target="_blank" href="https://www.youtube.com/"></a></li>
<li class=""><a href="https://www.facebook.com/" target="_blank" title="Facebook"></a></li>
<li class=""><a href="https://twitter.com" target="_blank" title="Twitter"></a></li>
<li class=""><a title="instagram" target="_blank" href="https://www.instagram.com/"></a></li>
</ul>
</div>
</div>

</div>
</div>
</div>

<div class="footer-copyright">
<div class="container">
<div class="row">
<div class="col-md-12 text-center">
<p>Openword © 2020. All rights reserved.</p>
</div>
</div>
</div>
</div>


</footer>
      
    )
}
