import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import  Logo  from '../../assets/Logo.png';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand ><img className= 'logo'src={Logo} alt="" />          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              
      </Nav>
          <Form className="d-flex">
          <Nav.Link className='link'>
          <Nav.Link className ="font" href="#action1">Categories</Nav.Link>
          <Nav.Link href="#action2">Brands</Nav.Link>
          <Nav.Link href="#action2">Contact us</Nav.Link>
          </Nav.Link>
            <Button className='navbtn'>Sell with us</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;