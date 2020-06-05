

import React, { useState, useEffect } from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FormControl, InputLabel, Input, FormHelperText, TextField, classes} from '@material-ui/core';
import '../pages/pagestyle/loginPage.css';
import Select from 'react-select';


export default function LoginPage(props) {
const history = useHistory();
const [formInput, setFormInput] = useState({});
const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log("formInput here",formInput)
  const res = await fetch (process.env.REACT_APP_SERVER + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formInput)
  });
  if(res.status===200){const body=await res.json()
  localStorage.setItem("token",body.data.token)
  props.setUser(body.data.user)
  history.push("/");
   } else
  (alert("cannot log in with your email/password"))
}
const handleChange=(e)=>{
  setFormInput({...formInput, [e.target.name] : e.target.value })      
}


    return (
<Container fluid className="loginBackground">
<img className="loginbgimage1" src="/images/background/test1.png"></img>
<Row className="loginrow1">login</Row>
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
    <Form.Label className="labelemail">Email address:</Form.Label>
    <Form.Control className="loginemailinput" type="email" placeholder="" name="email" value={formInput.email}  />
  </Form.Group>

  <Form.Group className="grouppassword" controlId="formBasicPassword">
    <Form.Label className="labelpassword">Password:</Form.Label>
    <Form.Control className="loginpasswordinput" type="password" placeholder="" name="password" value={formInput.password} /> 
  </Form.Group> 


<Container className="forgotpass" >
  
<Button className="nextbtn" variant="" type="submit">
Next
</Button>
  
  Forgot your password?</Container>


  <Container className="newopenword">
    <span> New to Openword?</span> 
    <Link  to='/signup'>      
    Sign up now</Link>

        </Container>

</Form>
</Col>


  </Row>



</Container>












      
// <div className="loginBackground">
// <Container className="usercontainer1">
// <img className="bg" src="/images/background/test.png"></img>


//       <Form className="loginForm">
//         <Container className="openwordLogincontain" style={{textAlign:"center"}}>
//         <div className="log-in">
//           Log in   </div>

//           <div className="openwordlogintitle"> Openword</div>
//         <div>Come for books. Stay for a great community.</div>
//         </Container>


//         <Container className="continuewith">
//           <div  className="continuewith2">  Continue with:  </div></Container>
//         <Container className="loginbtnsWrapper">

// {/* <a href={`${process.env.REACT_APP_SERVER}/auth/facebook`}>
// <button className="loginbtnsfb" ><i class=" lgpageicons fab fa-facebook-f"></i></button> </a> */}

// <a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/facebook`}>
//   <i class="lgpageiconsspecial fab fa-facebook-f"></i></a>

// <a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/google`}>
//   <i class="lgpageiconsspecial fab fa-google"></i></a>

// <a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/github`}>
//   <i class="lgpageiconsspecial fab fa-github"></i>
//   </a>


//   </Container>

//   <Form.Group className="loginFormGroup" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     {/* <i class="emailicon fas fa-user"></i> */}
//     <Form.Control  type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   {/* <Form.Group className="loginFormGroup" controlId="formBasicUsername">
//     <Form.Label>Username</Form.Label>
//     <Form.Control type="username" placeholder="username" />
//   </Form.Group> */}

//   <Form.Group className="loginFormGroup" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     {/* <i class=" passwordicon fas fa-key"></i> */}
//     <Form.Control type="password" placeholder="Password" /> 
// <Container className="forgotpass" >Forgot your password?</Container>

//   </Form.Group> 

//   <Button className="nextbtn" variant="primary" type="submit">
//     Next
//   </Button> 

//   <Container style={{textAlign:"center"}}>
//     <span> New to Openword?</span> 
//     <Link  to='/signup'>      Sign up now</Link>

//         </Container>

// </Form>
// </Container>











// <Container className="usercontainer2"> 
// <img className="bg1" src="/images/background/test1.png"></img>

// <Form className="loginForm">
//         <Container className="openwordLogincontain" style={{textAlign:"center"}}>
//         <div className="log-in">
//           Sign up  </div>

//           <div className="openwordlogintitle"> Openword</div>
//         <div>Come for books. Stay for a great community.</div>
//         </Container>


//         <Container className="continuewith">
//           <div  className="continuewith2">  Continue with:  </div></Container>
//         <Container className="loginbtnsWrapper">

// {/* <a href={`${process.env.REACT_APP_SERVER}/auth/facebook`}>
// <button className="loginbtnsfb" ><i class=" lgpageicons fab fa-facebook-f"></i></button> </a> */}

// <a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/facebook`}>
//   <i class="lgpageiconsspecial fab fa-facebook-f"></i></a>

// <a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/google`}>
//   <i class="lgpageiconsspecial fab fa-google"></i></a>

// <a className="authgg" href={`${process.env.REACT_APP_SERVER}/auth/github`}>
//   <i class="lgpageiconsspecial fab fa-github"></i>
//   </a>


//   </Container>

//   <Form.Group className="loginFormGroup" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     {/* <i class="emailicon fas fa-user"></i> */}
//     <Form.Control  type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   {/* <Form.Group className="loginFormGroup" controlId="formBasicUsername">
//     <Form.Label>Username</Form.Label>
//     <Form.Control type="username" placeholder="username" />
//   </Form.Group> */}

//   <Form.Group className="loginFormGroup" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     {/* <i class=" passwordicon fas fa-key"></i> */}
//     <Form.Control type="password" placeholder="Password" /> 
// <Container className="forgotpass" >Forgot your password?</Container>

//   </Form.Group> 

//   <Button className="nextbtn" variant="primary" type="submit">
//     Next
//   </Button> 

//   <Container style={{textAlign:"center"}}>
//     <span> New to Openword?</span> 
//     <Link  to='/signup'>      Sign up now</Link>

//         </Container>

// </Form>
// </Container>







// </div>




    )
}
