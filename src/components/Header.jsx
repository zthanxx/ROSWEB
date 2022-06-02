
  import React,{Component} from "react";
import { Navbar,Nav,Container} from "react-bootstrap";
class Header extends Component {
  
    render() {
      return( <Container><Navbar bg="light"  expand="lg" collapseOnSelect>
     
        <Navbar.Brand href="#home">ROS WEB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
       
    </Navbar> </Container>);
  }
}
  export default Header;
  