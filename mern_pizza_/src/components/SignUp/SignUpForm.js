import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import './SignUpForm'
import { useSelector, useDispatch } from 'react-redux'
import { signup } from '../../store/actions/authActions'
import { Navigate } from "react-router-dom"
import "./SignUpForm.css"
const SignUpForm = () => {

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [cfPassword, setCfPassword] = useState()
  const [check, setCheck] = useState()
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth)
  const SignUp = () => {
 
    const user = { firstName, lastName, email, password }


    dispatch(signup(user))
  }
  

  if (userData.authenticate) {
    return <Navigate to="/" />
  }

  return (
    <Container  className="mx-auto" >

      <Row style={{paddingTop:'150px',paddingBottom:'250px'}}  >
        <Col md={{ span: 4, offset: 4 }}>
          
         
            <Form className="bg-white "  style={{margin:'20px',padding:'15px',background:'#ededed',color:'black'}}  >


              <Form.Group className="mb-3 " value={firstName}
                onChange={e => {

                  setFirstName(e.target.value);
                }}
                controlId="firstName">
                <Form.Label className="">First name</Form.Label>
                <Form.Control type="password" placeholder="First name" />
              </Form.Group>
              <Form.Group className="mb-3" value={lastName} controlId="lastName"

                onChange={e => {
                  setLastName(e.target.value);
                }}
              >
                <Form.Label>Last name</Form.Label>
                <Form.Control type="password" placeholder="Last name" />
              </Form.Group>

              <Form.Group className="mb-3" value={email}
                onChange={e => {

                  setEmail(e.target.value);
                }}
                controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" value={password} controlId="Password"
                onChange={e => {

                  setPassword(e.target.value);
                }}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" value={cfPassword} controlId="confirmPassword"
                onChange={e => {

                  setCfPassword(e.target.value);
                }}
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Group className="mb-3" value={check} controlId="check"
                onChange={e => {

                  setCheck(e.target.value);
                }}>
                <Form.Check type="checkbox" label="Terms & Conditions" />
              </Form.Group>
               <div className="ms-auto d-flex justify-content-end">
               <Button className="text-uppercase" variant="primary" onClick={SignUp}>
                SIGN UP
              </Button>
              </div>
            </Form>
          
          
        </Col>
      </Row>
    </Container>
  )
}

export default SignUpForm
