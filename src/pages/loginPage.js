












import React, { useState, useEffect } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FormControl, InputLabel, Input, FormHelperText, TextField, classes} from '@material-ui/core';
import {Link} from 'react-router-dom';


export default function LoginPage() {

  const [formInput, setFormInput] = useState({});



    return (
<div className="loginBackground">
  
      <Form className="loginForm">
        <Container className="openwordLogincontain" style={{textAlign:"center"}}>
        <div className="log-in">
          Log in   </div>

          <div className="openwordlogintitle"> Openword</div>
        <div>Come for books. Stay for a great community.</div>
        </Container>


        <Container className="continuewith">
          <div  className="continuewith2">  Continue with:  </div></Container>
        <Container className="loginbtnsWrapper">

{/* <a href={`${process.env.REACT_APP_SERVER}/auth/facebook`}>
<button className="loginbtnsfb" ><i class=" lgpageicons fab fa-facebook-f"></i></button> </a> */}

<a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/facebook`}>
  <i class="lgpageiconsspecial fab fa-facebook-f"></i></a>

<a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/google`}>
  <i class="lgpageiconsspecial fab fa-google"></i></a>

<a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/github`}>
  <i class="lgpageiconsspecial fab fa-github"></i>
  </a>


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
