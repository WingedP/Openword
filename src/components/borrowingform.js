import React, { useState, useEffect } from 'react';
import {Jumbotron, Container, Form, Card, Button, Row, InputGroup, FormControl, Col} from 'react-bootstrap';
import './componentstyles/borrowingform.css';
import {Link, useHistory} from 'react-router-dom';


export default function Borrowingform(props) {
  let [formInput, setFormInput] = useState({});
  let bookDetail = props.singleBookData;
  // console.log("bookDetail", bookDetail)

  // 1 POST request for cart to create borrowing form in DB
  const postBorrowForm = async (e) => {
    e.preventDefault();
    const res = await fetch (process.env.REACT_APP_SERVER + `/createcart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(formInput)
    }); if(res.status===201){const body = await res.json();
    } 
    else (alert("cannot send this borrow form"))
  }

  const handleBorrowFormChange=(e)=>{setFormInput({...formInput, [e.target.name] : e.target.value })      
}

  console.log("formInput",formInput)
    return (
<Form className="borrowingForm" onChange={handleBorrowFormChange} onSubmit={postBorrowForm} >
<Form.Row>
    <Container>You want to borrow <span style={{fontSize:"2rem"}}>{bookDetail.title}</span> 
    from <span style={{fontSize:"2rem"}}>{(bookDetail.owner && bookDetail.owner.name || "user" )}</span> </Container>
<Container for="" > Your full name right below: </Container> 
    <Col> 
      <Form.Control name="firstname" placeholder="First name" />
    </Col>
    <Col>
      <Form.Control name="lastname" placeholder="Last name" />
    </Col>
  </Form.Row>

<Form.Row // style={{border:"1px solid black"}}
> 

<Form.Group style={{marginLeft:"1rem"}} >
    <Form.Label for="inlineFormInputGroup" >
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl name="username" id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>  
</Form.Group>


  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email" placeholder="name@example.com" />
  </Form.Group>

  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control name="address" placeholder="1234 Main St" />
  </Form.Group>

<Form.Group>  
    <Form.Label>Duration:</Form.Label>
     <Form.Text>You will borrow this until...</Form.Text>
<div style={{display:"flex"}}>
  <div>From: <input name="from" type="date" min="2020-04-01" max="2030-04-30"/> </div>
  <div>To:<input name="to" type="date" min="2020-04-01" max="2030-04-30"/></div>
</div>



    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>A message to the user (optional):</Form.Label>
    <Form.Control name="message" as="textarea" rows="3" />
  </Form.Group>

  <Container>
    <div>  You are liable for any loss or damages you cause to the item. 
      <Link>      Read more.
</Link>
</div>
    <div>  You cannot cancel within 48 hours of the start of the rental.
    <Link>      See cancellation policy.
</Link> 
</div>


  </Container>

  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
    )
}
