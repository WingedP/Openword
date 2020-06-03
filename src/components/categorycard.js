import React from 'react'
import { Card, ListGroupItem, ListGroup, Container, Row} from 'react-bootstrap';
import '../components/componentstyles/categorycardstyle.css';


export default function Categorycard() {
    return (<Row fluid className="categorycardswrapper">
<Card className="categorycards">
  <img className="categorybg" src="/images/categories/categorybg.png"></img>
  <Card.Body  className="categorycardbody">
    <Card.Title>Literture</Card.Title>
  </Card.Body>  
  <Card.Img className="categoryimg"  variant="top" src="/images/categories/literature.jpg"/>
</Card>

<Card className="categorycards">
  <img className="categorybg" src="/images/categories/categorybg.png"></img>
  <Card.Body  className="categorycardbody">
    <Card.Title>History</Card.Title>
  </Card.Body>  
  <Card.Img className="categoryimg"  variant="top" src="/images/categories/history.jpg"/>
</Card>

<Card className="categorycards">
  <img className="categorybg" src="/images/categories/categorybg.png"></img>
  <Card.Body  className="categorycardbody">
    <Card.Title>Sciences</Card.Title>
  </Card.Body>  
  <Card.Img className="categoryimg"  variant="top" src="/images/categories/mathematics.jpg"/>
</Card>

<Card className="categorycards">
  <img className="categorybg" src="/images/categories/categorybg.png"></img>
  <Card.Body  className="categorycardbody">
    <Card.Title>Comic</Card.Title>
  </Card.Body>  
  <Card.Img className="categoryimg"  variant="top" src="/images/categories/comic.jpg"/>
</Card>

<Card className="categorycards">
  <img className="categorybg" src="/images/categories/categorybg.png"></img>
  <Card.Body  className="categorycardbody">
    <Card.Title>Religion</Card.Title>
  </Card.Body>  
  <Card.Img className="categoryimg"  variant="top" src="/images/categories/religion.jpg"/>
</Card>


</Row>
    )
}
