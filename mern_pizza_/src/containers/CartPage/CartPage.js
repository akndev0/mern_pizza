import { Button, Card, Col, Container, Row, Table } from "react-bootstrap"
import Layout from "../../components/Layout/Layout"
import CartItem from "./CartItem";
import './cartPage.css'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems,updateCart } from "../../store/actions/cartActions";
const CartPage = () => {

  const cart = useSelector(state => state.cart)
  const auth = useSelector((state) => state.auth)

  const [cartItems, setCartItems] = useState(cart.cartItems)
  const [cartTotal, setCartTotal] = useState(0)
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    setCartItems(cart.cartItems);
    
     let cartTotalCalc= cart.cartItems.reduce(function (total, value) {

       return total += value.price * value.qty
     }, 0)

    setCartTotal(cartTotalCalc);
   
  }, [cart.cartItems, cartTotal,])

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    
    }
  }, [auth.authenticate,dispatch])
  


  return (
    <Layout>
      <Container fluid style={{paddingTop:"150px",minHeight:"1500px",background:"#DEE1E6"}}>
        <Row className="cart mx-auto" style={{marginTop:"10px",background:"white",
        borderRadius:"20px",maxWidth:"1200px",paddingTop:"20px",paddingBotom:"50px"}}>
          <Col lg={8} style={{minHeight:"250px"}} >
            <Table responsive="md" borderless  >
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th colSpan="2">Product Details</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>

                </tr>
              </thead>
              <tbody className="pt-2">
                
                {cartItems ? 
                    
                 cartItems.map(({ _id,desc,title,img,price,qty,orderType,orderSize }, i) => (
                    <CartItem
                   

                      i={i}
                      key={i}
                      _id={_id}
                      img={img}
                      title={title}
                      desc={desc}
                      price={price}
                      qty={qty}
                      orderType={orderType}
                      orderSize={orderSize}
                    />
                  ))
                  
    
                
                   
                : null }
              
              {!auth.authenticate ?
                <tr className="text-center align-middle">
                
                <td>
                  Login to see cart
                
                  </td>

             
                </tr>
              : null}
              </tbody>
            </Table>

          </Col>
          <Col lg={4}>
            <Card style={{borderRadius:"20px"}} >
              <Card.Header
                className="align-start chartHeader" >ORDER SUMMARY :</Card.Header>
              <Card.Body>
               <Table borderless size="sm">
                  <tbody className="order">
                    <tr style={{background:""}}>
                      <td>Subtotal</td>
                      <td>${(cartTotal*0.8).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Shipping </td>
                      <td>{cartTotal >= 50 ? "Free Shipping" : "$10.00"}</td>

                    </tr>
                    <tr>
                      <td>Vat Tax (20%)</td>
                      <td >${(cartTotal*0.2).toFixed(2)}</td>

                    </tr>
                    <tr>
                      <td>Total

                      </td>
                    
                       <td >${cartTotal.toFixed(2)}</td>



                    </tr>




                  </tbody> 
                </Table> 
                {!auth.authenticate ? <Button variant="warning ">Login to Continue</Button> :
                  <Button variant="warning " onClick={()=>dispatch(updateCart())}>Proceed to Checkout</Button>
                }

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default CartPage
