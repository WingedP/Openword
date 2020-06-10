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
{/* <Navbar.Brand href="#home" className="testnavLogo">Openword</Navbar.Brand> */}
  
  <Link to='/'>
  <Navbar.Brand  className="testnavLogo">Openword
  <img className="navbaropenwordIcon" src="/images/openword.png"></img> 

  </Navbar.Brand>

  {/* <Navbar.Brand  className="brandIcon">
      <img className="navbaropenwordIcon" src="/images/openword.png"></img> 
  </Navbar.Brand> */}

</Link>
</Nav>
    <Nav>
    <Form  style={{position:"relative"}} inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button  className="testnavsearchbtn" variant="">
      <i class="fas fa-search"></i>
      </Button>
    </Form>
      <Nav.Link className="testnavlogin"><Link to='/login'><i  class=" loginIcon fas fa-sign-in-alt"></i></Link></Nav.Link>
      <Nav.Link  className="testnavlogout" onClick={handleLogout}><i   class=" fas fa-sign-out-alt"></i></Nav.Link>
      <Nav.Link className="userNameNav">{(props.user && props.user.name || " guest")}</Nav.Link>
      <NavDropdown alignRight={false} className="dropdownProfile" 
    title={<span><i class="testnavuserIcon fas fa-user-circle"></i></span>} id="collasible-nav-dropdown ">
    <div className="dropdownItemlist"> 



      {/* <NavDropdown.Item href="https://localhost:3000/users/me" className="itemDropdown"> */}
      <NavDropdown.Item href="https://openword-temp.netlify.app/users/me" className="itemDropdown">

        
      Profile
      <i style={{marginLeft:"4rem" }} class="fas fa-book"></i>
      <Link className="dropdownLink" to='/users/me'></Link>

        </NavDropdown.Item>



    {/* <NavDropdown.Item href="https://localhost:3000/users/me/history" className="itemDropdown"> */}
    <NavDropdown.Item href="https://openword-temp.netlify.app/users/me/history" className="itemDropdown">

        History
      <i style={{marginLeft:"3.7rem" }} class="fas fa-clipboard-list"></i>
      <Link className="dropdownLink" to='/users/me/history'></Link>
        </NavDropdown.Item>

        {/* <NavDropdown.Item className="itemDropdown" href="#action/3.2">
          <Link to='/users/me/history'>History</Link>
         <i style={{marginLeft:"3.7rem" }} class="fas fa-clipboard-list"></i>
        </NavDropdown.Item> */}





        <NavDropdown.Item className="itemDropdown" href="#action/3.3">Setting
        <i style={{marginLeft:"3.6rem" }} class="fas fa-cog"></i> 
</NavDropdown.Item>
        </div>
    </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}
