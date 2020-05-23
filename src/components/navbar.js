



import React, {useState, useEffect} from 'react';
import {Navbar, Nav,Form,FormControl,Button, NavDropdown} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

export default function Navi(props) {
  const history = useHistory();

  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY === 0 || window.scrollY === 50) {
      setScrolling(false);
    } else if (window.scrollY > 450) {
      setScrolling(true);
    }
  }

  // const handleLogout = async () => {
  //   const res = await fetch(process.env.REACT_APP_SERVER + "/auth/logout", {
  //     headers: {authorization: `Bearer ${localStorage.getItem('token')}`}
  //   });
  //   if(res.status===204){
  //     props.setUser(null)
  //     localStorage.removeItem("token")
  //   } else
  //   (alert("cannot log out atm"))
  // };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
     console.log("logout token",token)
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


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])


  return ( 

    
<nav style={scrolling ?{ height:"8vh"} : {height:"15vh"}} 
      className={scrolling ? "navbar-light navbar navbar-expand-lg fixed-top transition navcolor1" : 
      "navbar-dark navbar navbar-expand-lg fixed-top transition navcolor2"}>

{/* <img className="treeimg" src="/images/tree.png"></img> */}

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <img 
   className={scrolling ?  "headerlogoshrinked transition" : 
   "headerlogo transition"}


  
  src="/images/1.png"></img>
  <Link  className={scrolling? "logoNameshrinked transition": "logoName transition"} to='/'>OPENWORD</Link>
  {/* <a 
  // className={scrolling? "logoNameshrinked": "logoName"}  
  class=" navbar-brand" href="#">OPENWORD</a> */}

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      
      {/* <li class="nav-item active"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li> */}

      <li class="nav-item">
        <a class="nav-link" href="#">
        Hi,{(props.user && props.user.name || " guest")}
        </a>
      </li>

    </ul>


    <form class="formSearch form-inline my-2 my-lg-0">
      <input class="searchinput form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="searchBtn btn btn-outline-info my-2 my-sm-0" type="submit">
      <i class="fas fa-search"></i>
      </button>
    </form>

    <div>
    <Link  className="" to='/login'>      
    <button className="loginBtn"><i class=" fas fa-sign-in-alt"></i></button></Link>

      <button className="logoutBtn" onClick={handleLogout}><i class=" fas fa-sign-out-alt"></i>
</button>
    
    <i class="usericons fas fa-bell"></i>
    <i class="usericons fas fa-user-circle"></i>
    <i class="usericons fas fa-plus-circle"></i>
    </div>


  </div>
</nav>
    

  )
}




// import React, {useState, useEffect} from 'react';
// import {Navbar, Nav,Form,FormControl,Button, NavDropdown} from 'react-bootstrap';
// import {Link} from 'react-router-dom';

// export default function Navbarz() {

//   const [scrolling, setScrolling] = useState(false);
//   const handleScroll = () => {
//     if (window.scrollY === 0 || window.scrollY === 50) {
//       setScrolling(false);
//     } else if (window.scrollY > 650) {
//       setScrolling(true);
//     }
//   }
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//   }, [])

//     return (

//       <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="transition" style={{ backgroundColor: scrolling ? "white" : "transparent" }}>



  
//   <Navbar.Brand href="#home">BABEL</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>



//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//     <Link  className="" to='/login'><Button variant="outline-info">Login</Button></Link>
//     <Button variant="outline-info">Logout</Button>
//     <Nav>
//       <Nav.Link href="#deets">More deets</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Dank memes
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>



 
// )
// }
