import React, {useState, useEffect} from 'react';
import {Navbar, Nav,Form,FormControl,Button, NavDropdown, Container} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import '../components/componentstyles/testnavstyle.css';

export default function Testnav(props) {
  const history = useHistory();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0 || window.scrollY === 50) {
      setScrolling(false);
    } else if (window.scrollY > 150) {
      setScrolling(true);
    }
  }

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
<Navbar className={scrolling ? "navi" :  "navisrhinked"} 
collapseOnSelect expand="lg" bg="" variant="light">
    {/* <img className={scrolling ? "testnavheaderlogoshrinked transition" : 
   "testnavheaderlogo transition"}
  src="/images/1.png"></img> */}
<Container fluid className={scrolling ? "navicontainer" : "navicontainersrhinked"}>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}

<Nav className="mr-auto">
<Navbar.Brand href="#home" className="testnavLogo">Openword</Navbar.Brand>
    </Nav>

    <Nav>
    <Form  style={{position:"relative"}} inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button  className="testnavsearchbtn" variant="">
      <i class="fas fa-search"></i>
      </Button>
    </Form>


      <Nav.Link className="testnavlogin"><Link to='/login'><i style={{color:"black"}} class=" fas fa-sign-in-alt"></i></Link></Nav.Link>
      <Nav.Link  className="testnavlogout" onClick={handleLogout}><i  style={{color:"black"}} class=" fas fa-sign-out-alt"></i></Nav.Link>
      
      <NavDropdown alignRight={false} className="dropdownProfile" 
    title={<span><i class="testnavuserIcon fas fa-user-circle"></i>
</span>} id="collasible-nav-dropdown ">
      <div className="dropdownItemlist"> 

      <NavDropdown.Item className="">
        <Link to='/users/me'>Profile</Link>
        </NavDropdown.Item>
        <NavDropdown.Item className="" href="#action/3.2">History</NavDropdown.Item>
        <NavDropdown.Item className="" href="#action/3.3">Something</NavDropdown.Item>
        </div>
      </NavDropdown>

      <Nav.Link>{(props.user && props.user.name || " guest")}</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}
