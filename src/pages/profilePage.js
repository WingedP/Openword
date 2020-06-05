

import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Modal, Row, Col, Card, Badge, FormControl } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import '../pages/pagestyle/profilePage.css';
import Select from 'react-select';

export default function (props) {
  const history = useHistory();
  const categoryArray = props.cat;
  let [myCollection, setMyCollection] = useState([]);
  let [deletedId, setDeletedId] = useState(null);
  // console.log("userCollection profilepage: ",userCollection)
  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [uploadPic, setUploadPic] = useState("")
  const [uploadBook, setUploadBook] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const options = categoryArray.map(el => {
    return { value: el._id, label: el.category }
  })
  // console.log("options: ",options)

  useEffect(() => {
    getUsersBook()
  }, []);

  const getUsersBook = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER + `/books/mybook`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
    if (res.status === 200) {
      const body = await res.json();
      setMyCollection(body.data)
    }
    else (alert("cannot upload user book collection"))
  }


const deleteUsersBook = async (id) => {
    const res = await fetch(process.env.REACT_APP_SERVER + `/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
    if (res.status === 204) {
      const body = await res.json();
      setMyCollection(body.data)
    }
    else (alert("cannot delete user book"))
  }


  let renderUserCollection = myCollection.length === 0 ?
    <div>You don't have any book yet, upload some!</div>
    : myCollection.map(el => {

      // console.log(el.id)
      return (

        <Card className="cardhere"  onClick={() => {history.push(`./books/${el.id}`);}} key={el.id}>

          <Card.Img
            className="cardImg" variant="top" src={el.thumbnail} />
              <Card.ImgOverlay>
            <button id="deletebookbtn" className="deletebookbtn" onClick={() => {
              setDeletedId(el.id)
              setShowDeleteModal(true)
            }}>
              <i style={{ fontSize: "2rem" }} class=" deleteIcon far fa-times-circle"></i></button>
           </Card.ImgOverlay>
          <Card.Body className="profileBookCardBody">
            <Card.Title>Title: {el.title}</Card.Title>
          </Card.Body>

          {/* <button onClick={()=>{deleteUsersBook(el.id)}}
// onClick={() => setShowDeleteModal(true)}
>  
<i style={{fontSize:"2rem"}} class="far fa-times-circle"></i>
</button> */}



        </Card>







      )
    })
  const handleSelectedChange = (value) => {
    setSelectedOption(value)
    console.log(`Option selected:`, selectedOption);
  }
  const handleChange = (e) => {
    setUploadBook({ ...uploadBook, [e.target.name]: e.target.value })
  }
  const uploadBookData = async () => {
    let available = true;
    let newBook = { ...uploadBook, thumbnail: uploadPic }
    newBook.category = selectedOption.map(el => el.value);
    if (newBook.availability == "on") { newBook.availability = available }
    const res = await fetch(process.env.REACT_APP_SERVER + `/books/addbook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(newBook)
    });
    if (res.status === 201) { const body = await res.json();
      alert("successfully upload book's data");
      console.log(body)
    } 
    else (alert("cannot upload book's data"))
  }
  const uploadFile = async (e) => {
    e.preventDefault();
    const selectedFile = document.getElementById('upload_form').files[0];
    console.log("selectedFile", selectedFile)
    var formdata = new FormData();
    formdata.append("image", selectedFile);
    const res = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_IMGUR}`
      },
      body: formdata
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data)
      if (data.success) {
        // console.log("hahahhahaha")
        setUploadPic(data.data.link)
        console.log("uploadPic", uploadPic )
      }
      else { console.log("cannot upload because of", data.message) }
    } else { alert("cannot upload") }
  }

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("logout token", token)
      const req = await fetch(process.env.REACT_APP_SERVER + "/auth/logout", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      if (req.status === 204) {
        props.setUser(null);
        localStorage.removeItem("token");
        history.push("/");
      } else alert("cannot log out");
    } catch (err) {
      console.log(err);
    }
  };

  if (myCollection.length <= 0) { console.log("user has no book") };
  console.log("uploadBook", uploadBook)
  return (
    <Container fluid className="profilepage">
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <i class="fas fa-exclamation"></i>
You sure you want to remove this book from your collection?

<button onClick={() => { deleteUsersBook(deletedId) }}><i class="fas fa-check"></i>Yes</button>
        <button><i class="fas fa-times"></i>No, I change my mind.</button>
      </Modal>
      <Container fluid className="userSection">


        <div className="profilePageControl">
          <img className="profileIcon" src="/images/1.png"></img>

        </div>


        <div className="profileAboutMe">
          <i style={{ fontSize: "2.2rem", color: "ivory", float: "right", paddingRight: "5px", paddingTop: "5px" }} class="fas fa-user-edit"></i>

          <div style={{ marginTop: "4rem", backgroundColor: "gray" }}>About: {(props.user && props.user.about)}</div>
          <div style={{ marginTop: "0rem", backgroundColor: "gray" }}>Gender: {(props.user && props.user.gender)}</div>
          <div style={{ marginTop: "0rem", backgroundColor: "gray", overflow: "hidden" }}>Email: {(props.user && props.user.email)}</div>

          {/* {(props.user && props.user.name || " guest")} */}
          {/* <i class="fas fa-pen-nib"></i> */}
        </div>


        <div className="userProfile">
          <div className="profileUserName">{(props.user && props.user.name || " guest")}</div>

          <div className="userProfileMenu">
            <Form style={{ position: "relative" }} inline>
              <FormControl className="profileFormControl" type="text" placeholder="    Search your collection" className="mr-sm-2" />
              <Button style={{ position: "absolute", }} variant=""><i class="fas fa-search"></i></Button>
            </Form>
            <button className="userProfileLogout" onClick={handleLogout}>Logout
       <i style={{ fontSize: "2rem" }} class="fas fa-door-open"></i>
            </button>
  <Link to='/' style={{ marginLeft: "1rem", textDecoration: 'none', color: "black" }}><i style={{ fontSize: "2rem" }} class="fas fa-home"></i></Link>
  <Link to='/users/me/history' style={{ marginLeft: "1rem", textDecoration: 'none', color: "black" }}>
   <i style={{fontSize:"2rem"}} class="fas fa-envelope-open-text"></i> </Link>



          </div>

        </div>

        <div className="userAvatar" >
          <img className="userAvatarImage" src="/images/avatar/1.jpg"></img>


        </div>

      </Container>

      <Container className="mycollectionWrapper">
        <div className="mycollection">
          <div> <i style={{ fontSize: "2rem" }} class="fas fa-box-open"></i>  Your collection: </div>
          <div><i style={{ fontSize: "2rem" }} class="fas fa-book"></i> Books owned: </div>

          <div><i style={{ fontSize: "2rem" }} class="fas fa-address-book"></i> Books borrowed: </div>

          <button className="userProfileAddBook" onClick={() => setShow(true)}> Add book
            <i style={{ marginLeft: "0.5rem", fontSize: "2rem" }} class="fas fa-folder-plus"></i> </button>
        </div>
      </Container>

      <Container className="renderUserCollection">
        <Row className="renderUserCollectionRow" xs={2} sm={3} md={6} lg={12}>
          {renderUserCollection}
        </Row>
      </Container>





      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton><Modal.Title id="example-custom-modal-styling-title">  Say something about your book:</Modal.Title></Modal.Header>
        <Modal.Body>
          <Container className="addbookcontainer">
            <Form onSubmit={uploadBookData} onChange={handleChange}>

              <Form.Group controlId="formBasicEmail">

                <Form.Label>Title:</Form.Label>
                <Form.Control name="title" type="text" placeholder="Book's title" />
                <Form.Label>Author:</Form.Label>
                <Form.Control name="author" type="text" placeholder="Author" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price:</Form.Label>
                <Form.Control name="price" type="" placeholder="Price" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description:</Form.Label>
                <Form.Control name="description" as="textarea" rows="2" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Condition:</Form.Label>
                <Form.Control name="condition" as="select" size="sm" custom>
                  <option>Like-new</option>
                  <option>Good</option>
                  <option>Acceptable</option>
                  <option>Moderate</option>
                </Form.Control>
              </Form.Group>

              {/* <Form.Group>
                <Form.Label>Categories:</Form.Label>
                <Form.Control  name="category" as="select" size="sm" custom>
                  <option>Literature</option>
                  <option>History</option>
                  <option>Religion</option>
                  <option>Sciences</option>
                  <option>Comic</option>
                </Form.Control>
              </Form.Group> */}


              <Form.Group>
                <Form.Label>Category:</Form.Label>

                <Select name="category"
                  isMulti={true}
                  value={selectedOption}
                  onChange={handleSelectedChange}
                  options={options} />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Text>Allow others to borrow your book?</Form.Text>
                <Form.Label>Availability:</Form.Label>
                <Form.Check type="checkbox" name="availability" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Duration:</Form.Label>
                <Form.Text>How long you will you lend this out?</Form.Text>
                <input name="until" type="date" name="until" min="2020-04-01" max="2030-04-30" />
              </Form.Group>


              <Form.File
                name="thumbnail"
                style={{ marginBottom: "2rem" }}
                id="upload_form"
                label="Book's thumbnail"
                custom
              />
          <Button variant="primary" type="button" onClick={uploadFile} >  upload</Button>

              <Container style={{ width: "fit-content", height: "fit-content", border: "0.5px solid gray" }}>
                <img style={{ width: "5rem" }} src={uploadPic} />
              </Container>

              <Button variant="primary" type="submit" >
                Submit
  </Button>
            </Form>

          </Container>
        </Modal.Body>
      </Modal>

    </Container>





  )
}

















//Client ID:5e08b1b2a7ee5f1
//Client secret:95d63859c7bcf521f59e6cc6b3437389119b6e57