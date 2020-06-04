import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Modal, Row, Col, Card, Badge } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

export default function ExplorePage() {
let history = useHistory();
let [singleBookData, setSingleBookData] = useState({});
const [showBooks,setShowBooks]=useState([])
useEffect(() => {exploreAllBooks()}, [])

const exploreAllBooks = async (e) => {
    const res = await fetch(process.env.REACT_APP_SERVER + "/books?page=1&limit=50", {
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

// const getSingleBook = async () => {
//   const res = await fetch (process.env.REACT_APP_SERVER + `/users/books/${id}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       // "Authorization": `Bearer ${localStorage.getItem("token")}`
//     },
//   });
//   if(res.status === 200){
//       const body = await res.json();
//       // console.log(body.data)
//       setSingleBookData(body.data)
//   } 
//   else (alert("something wrong with this book's data"))
// }

let renderExploreAllBooks = showBooks.length === 0 ? <div>No Book.</div>
: showBooks.map(el => {
  return (
  <Card  onClick={() => { history.push(`./users/books/${el.id}`);}} 
  className="" style={{width:"18rem"}} key={el.id}>
        <Card.Img 
          className="cardImg" variant="top" src={el.thumbnail} />
        <Card.Body
          className="belrevwefewf">
          <Card.Title>Book's title: {el.title}</Card.Title>
          <div>Owner: <span style={{fontSize:"1rem"}}>{el.owner && el.owner.name}</span></div>

          <Card.Text className="">{el.createAt}</Card.Text>
        </Card.Body>
 </Card>
      )
    })

  if(showBooks.length<=0) return (<div>nothing here</div>)
  return (  
        <div>
            Explore page here.
<Container>
<Row className="renderUserCollectionRow" xs={2} sm={3} md={6} lg={12}>
{renderExploreAllBooks}</Row>
</Container>
        
        </div>
    )
}

