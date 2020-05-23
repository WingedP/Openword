



import React, { useState, useEffect } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FormControl, InputLabel, Input, FormHelperText, TextField, classes} from '@material-ui/core';
import {Link} from 'react-router-dom';


export default function SignupPage() {

  const [formInput, setFormInput] = useState({});



    return (
<div className="signupBackground">
  
      <Form className="loginForm">
        <Container className="openwordLogincontain" style={{textAlign:"center"}}>
        <div className="log-in">
          Sign up  </div>

          <div className="openwordlogintitle"> Openword</div>
        <div>Come for books. Stay for a great community.</div>
        </Container>

        <Container className="continuewith">
          <div className="continuewith2">  Continue with:  </div></Container>
        <Container className="loginbtnsWrapper">
        <button className="hoverlgbtnz loginbtnsfb" ><i class=" lgpageicons fab fa-facebook-f"></i></button>
        <button className="hoverlgbtnz loginbtnsgg" ><i class="lgpageicons fab fa-google"></i></button>
        <button className="hoverlgbtnz loginbtnsgh" ><i class="lgpageicons fab fa-github"></i></button>
        </Container>

  <Form.Group className="loginFormGroup" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    {/* <i class="emailicon fas fa-user"></i> */}
    <Form.Control  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  {/* <Form.Group className="loginFormGroup" controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="username" />
  </Form.Group> */}

  <Form.Group className="loginFormGroup" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    {/* <i class=" passwordicon fas fa-key"></i> */}
    <Form.Control type="password" placeholder="Password" /> 
<Container className="forgotpass" >Forgot your password?</Container>

  </Form.Group> 

  <Button className="nextbtn" variant="primary" type="submit">
    Next
  </Button> 

  <Container style={{textAlign:"center"}}>
    <span> New to Openword?</span> 
    <Link  to='/signup'>      Sign up now</Link>

        </Container>

</Form>








</div>
    )
}
