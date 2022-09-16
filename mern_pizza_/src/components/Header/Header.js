import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "../../store/actions/authActions";
import { getCartItems } from '../../store/actions/cartActions';
import "./header.css"
const Header = () => {

  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const [collapse,setCollapse]=useState(0)
 
  const [scrollStatus,setScrollStatus]=useState(0)
  const dispatch = useDispatch();
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setScrollStatus(!scrollStatus)
      : setScrollStatus(scrollStatus)
  }


  useEffect(() => {
   
    window.removeEventListener('scroll', listenScrollEvent);
    window.addEventListener("scroll", listenScrollEvent)
    return () => window.removeEventListener('scroll', listenScrollEvent);
    
  }, []);

  useEffect(()=>{
    if (auth.authenticate===true) {
       dispatch(getCartItems());
    }
     
  },[dispatch,auth.authenticate])

  const logout = (params) => {
    dispatch(signout())
  }
 
  const renderLoggedInLinks = () => {
    return <Nav.Link  className="navlink"  onClick={logout}>Log Out</Nav.Link>

  }
 

  const renderAuthLinks = () => {
    return (<>
      <Nav.Link  className="navlink"  href="/login">Login</Nav.Link>
      <Nav.Link  className="navlink"  href="/signup">SignUp</Nav.Link>
    </>)
  }

  return (
   
      <Navbar  bg={collapse || scrollStatus ?  "dark" : "transparent" } variant="dark" fixed="top" 
   collapseOnSelect expand="lg" className="navbar ">
        <Container >
          
          <Navbar.Brand  className="navlink" href="/">Mern Pizza</Navbar.Brand>
          <Navbar.Toggle onClick={()=>setCollapse(!collapse)}   aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav className="me-auto">
            

              <Nav.Link className="navlink" href="/">Home</Nav.Link>
              <Nav.Link   className="navlink" href="/products">Menu</Nav.Link>
              <Nav.Link  className="navlink"  href="/">Our Story</Nav.Link>
              

             
            </Nav>
            
            <Nav>
              <Nav.Link  className="navlink"   href="/cart">
                <div  className='cartIconWrapper' >
                 <FaShoppingCart className='cartIcon' />
                 <span className='cartIconLength' >{cart.cartItems.length !=null && auth.authenticate ?cart.cartItems.length : "0"}</span> 
                </div>
              </Nav.Link>
             
              {auth.authenticate ? renderLoggedInLinks() : renderAuthLinks()}
             
             
            


            </Nav>
          </Navbar.Collapse>
        
         </Container>
        </Navbar>
    
  )
}

export default Header
