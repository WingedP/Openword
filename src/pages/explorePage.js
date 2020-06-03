import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Modal, Row, Col, Card, Badge } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

export default function ExplorePage() {
    let history = useHistory();

const [showBooks,setShowBooks]=({})

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

let renderExploreAllBooks = showBooks.length === 0 ? <div>No Book.</div>
: showBooks.map(el => {
      return (
        <Card className="cardhere" key={el.id}>
        <Card.Img onClick={() => {    history.push(`./books/${el.id}`);
        }}
          className="cardImg" variant="top" src={el.thumbnail} />
        <Card.Body
          className="belrevwefewf">
          <Card.Title>Book's title: {el.title}</Card.Title>
          <Card.Text className="">{el.createAt}</Card.Text>

        </Card.Body>





      </Card>
      )
    })





    return (
        <div>
            Explore page here.
            {renderExploreAllBooks}
        </div>
    )
}

