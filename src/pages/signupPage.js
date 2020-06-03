



import React, { useState, useEffect } from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FormControl, InputLabel, Input, FormHelperText, TextField, classes} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom'
import '../pages/pagestyle/signupPage.css';


export default function SignupPage() {
  const [formInput, setFormInput] = useState({});
  const history = useHistory()

  const handleChange = (e) => {
    setFormInput({...formInput, [e.target.name]: e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log("formInput here",formInput)
    const res = await fetch (process.env.REACT_APP_SERVER + "/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formInput)
    });
    if(res.status===201){
      alert("Register successfully, go to login")
      history.push("/")
     } else
    (alert("cannot register with this email/password"))
  }


    return (

<Container fluid className="signupBackground">
<img className="signupbgimage1" src="/images/background/test2.png"></img>

<Row className="loginrow1">Sign up</Row>
<Row className="loginrow2">
<Col xm={12} sm={12} lg={6} className="usercontainer1">

<Form onSubmit={handleSubmit} onChange={handleChange} className="loginForm">
        <Container className="openwordLogincontain">
          <div className="openwordlogintitle"> Openword</div>
        <div>Come for books. Stay for a great community.</div>
        </Container>

<Container className="ctnwith"><Container className="ctnwithdash">
<div className="ctnwith2">Continue with</div></Container></Container>

   <Container className="loginbtnsWrapper">

{/* <a href={`${process.env.REACT_APP_SERVER}/auth/facebook`}>
<button className="loginbtnsfb" ><i class=" lgpageicons fab fa-facebook-f"></i></button> </a> */}

<a className="authfb" href={`${process.env.REACT_APP_SERVER}/auth/facebook`}>
  <i class=" fab fa-facebook-f"></i></a>

<a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/google`}>
<img className="ggiconz" src="/images/buttonicons/google.png"></img>

  </a>

<a className="authgh" href={`${process.env.REACT_APP_SERVER}/auth/github`}>
  <i class=" fab fa-github"></i>
  </a>

  </Container>

  <Container className="orwith"><Container className="orwithdash">
  <div className="orwith2"> or</div>
  </Container></Container>

  
  <Form.Group className="groupemail" controlId="formBasicEmail">
    <Form.Label className="labelemail">Username:</Form.Label>
    <Form.Control className="loginemailinput" type="text" placeholder="" name="name" value={formInput.name}  />
  </Form.Group>


  <Form.Group className="groupemail" controlId="formBasicEmail">
    <Form.Label className="labelemail">Email address:</Form.Label>
    <Form.Control className="loginemailinput" type="email" placeholder="" name="email" value={formInput.email}  />
  </Form.Group>

  <Form.Group className="grouppassword" controlId="formBasicPassword">
    <Form.Label className="labelpassword">Password:</Form.Label>
    <Form.Control className="loginpasswordinput" type="password" placeholder="" name="password" value={formInput.password} /> 
  </Form.Group> 


<Container className="forgotpass" >
  
<Button className="nextbtn" variant="primary" type="submit">
    Next
  </Button> 
  Forgot your password?</Container>



</Form>
</Col>


  </Row>



</Container>





    )
}
