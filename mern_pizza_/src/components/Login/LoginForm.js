import {  useState,useEffect } from "react"
import { Button, Col, Container, Form,  Row } from "react-bootstrap"

import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store/actions/authActions'
import { Navigate } from 'react-router-dom'
import "./LoginForm.css"
const LoginForm = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth)

  const Login = () => {
    const loginInfo = { email, password }
    
    dispatch(login(loginInfo))
    
  }
   useEffect(()=>{

   },[userData,dispatch])
  if (userData.authenticate) {
    return <Navigate to="/" />
  }


  return (
    <Container  className="mx-auto">
      <Row style={{paddingTop:'150px',paddingBottom:'250px'}}>
        <Col md={{ span: 4, offset: 4 }} >
        <Form  style={{margin:'20px',padding:'15px',background:'#ededed',color:'black'}} >
          <Form.Group className="mb-3" value={email} 
            onChange={e=>{setEmail(e.target.value);}}
          controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
         
          <Form.Group className="mb-3" value={password} 
          onChange={e=>{setPassword(e.target.value);}}
          controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" 
          controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary"  onClick={Login}>
            Login
          </Button>
        </Form>
        </Col>
      </Row> 

      
    </Container>
  )
}

export default LoginForm

