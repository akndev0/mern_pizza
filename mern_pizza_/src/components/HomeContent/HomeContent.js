import React from 'react'
import { Col, Container, Row, Stack, Image, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "./HomeContent.css"
const HomeContent = () => {
  return (
    <div style={{marginTop:"-50px"}}>
       <Container fluid  style={{zIndex:"20",height:"700px",
    background:  `url(/Header-Background.png)`, backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}} >
       <Row className=" mx-auto" style={{maxWidth:"1320px", marginTop:"50px",paddingTop:"50px"}} >
         <Col sm={12} md={6} className="bg-title" style={{marginTop:"75px"}}>
            <Stack>
               <div>
                  <Image  src="./logo.png" alt="logo" width={200} />
               </div>
               <div>
                 <p className="text-title">Italian Food</p>
               </div>
               <div>
                  <p className="text-Subtitle text-uppercase">Lorem Ipsum Dolor</p>
               </div>
               <div>
                  <Button className="button border border-none p-2 px-5 my-3 btnCustom">Read More</Button>
               </div>
               <div>
                  <p className="body-text ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna.
                  </p>
               </div>
            </Stack>
          </Col>
         <Col sm={12} md={6} className="bg-img">
           <div  className="wrapper ">

           
          
           
             <Image  src="./leaf.png" alt="leaf"  className="leaf" width={400}  />
         
            
             <Image fluid src="./p-1.png" alt="leaf"  className="pizza" width={600} />
           
            
             <Image  src="./souce.png" alt="leaf"  className="souce" width={200} />
        
           </div>
         
         </Col>
       </Row>
       </Container>
      <Container className='mt-5 '>
        {/* section 2 */}
        <Row >
          <Col>
            <p className='text-center  section2-title '>Lorem Ipsum  Dolor</p>
    
          </Col>
        </Row>
        <Row>
          <Col >


            <p className='section2-text mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>

          </Col>
        </Row>
        <Row>
          <Col>
            <Image fluid src="./p-1.png" alt="PANEER MAKHANI PIZZA" className='section2-img' />
            <p className='section2-img-title mt-3'>PANEER MAKHANI</p>
            <p className='section2-img-info'>Lorem ipsum dolor sit amet,
              consectetur  adipisicing...
            </p>
          </Col>
          <Col>
            <Image fluid src="./p-3.png" alt="pizza" className='section2-img' />
            <p className='section2-img-title mt-3'>MUSHROOM & CHEESE</p>
            <p className='section2-img-info'>Lorem ipsum dolor sit amet,
              consectetur  adipisicing...
            </p>
          </Col>
          <Col>
            <Image fluid src="./p-4.png" alt="pizza" className='section2-img' />
            <p className='section2-img-title mt-3'>FRESH VEGGIE</p>
            <p className='section2-img-info'>Lorem ipsum dolor sit amet,
              consectetur  adipisicing...
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Link to={`/products`}>
            <Button className='section2-button p-4 btnCustom '>Show More</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      {/* Section 3 */}
      <Container fluid  className="section3 text-center mx-auto">
        <Row >
          <Col>
            <p className='section3-title '>Lorem Ipsum  Dolor</p>
          </Col>
        </Row>
        <Row className='section3-body  mx-auto'>
          <Col>
            <p className='section3-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur

            </p>
          </Col>
          <Col>
            <p className='section3-info'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip.


            </p>

          </Col>
        </Row>
        <Row>
          <Col>
            <Button className='section3-button p-3 px-md-5 py-md-3 m-5'>
              <p className='section3-button-text p-0 m-0 border border-none btnCustom'>
                MORE INFO</p></Button>
          </Col>
        </Row>
      </Container>
      {/* 4 */}
      
      {/* 5 */}
      <Container fluid  className="text-center mx-auto section5" style={{
        background: "url(/Header-Background.png)", backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <Row className='mx-auto' style={{maxWidth:"1320px"}}>
          <Col>
            <div style={{position:'relative',}}>
              <Image fluid src='./leafs2.png' alt='leafs2' className='section5-leaf' style={{position:'absolute',}}
              />
              <div className='section5-leaf-wrapper'>
                <p
                  className='text-white  section5-title mx-auto'>Lorem Ipsum Dolor Sit Amer</p>
                <p className="section5-info mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                </p>
              </div>
              <div className='section5-pizza' style={{position:'absolute',}}>
                <Image fluid src='./pizzapart2.png' alt='pizzapart12' className='section5-pizzapart12'

                />
                <Image fluid src='./pizzapart1.png' alt='pizzapart1' className='section5-pizzapart1'


                />

              </div>

            </div>
          </Col>
        </Row>



      </Container>

      <Container className='section6'>
        <Row >
          <Col>
            <p className='section6-bottom-title'>Lorem Ipsum</p>
            <p className='section6-bottom-info'>Lorem ipsum dolor sit amet, consecte
              sectetur adipisicing elit, tation omne
              ullamco laboris nisi ut aliqolore.</p>
          </Col>
          <Col>
            <p className='section6-bottom-title'>Lorem Ipsum</p>
            <p className='section6-bottom-info'>Lorem ipsum dolor sit amet, consecte
              sectetur adipisicing elit, tation omne
              ullamco laboris nisi ut aliqolore.</p>
          </Col>
          <Col>
            <p className='section6-bottom-title'>Lorem Ipsum</p>
            <p className='section6-bottom-info'>Lorem ipsum dolor sit amet, consecte
              sectetur adipisicing elit, tation omne
              ullamco laboris nisi ut aliqolore.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack>
              <div>
                <p className='section6-quote mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
              </div>
              <div>
                <p className='section6-quote-info  mx-auto'>Lorem ipsum</p>
              </div>
            </Stack>
          </Col>
        </Row>

      </Container>
      {/* 7 */}
      <Container fluid  className='section7'>
        <Row className='mx-auto' style={{maxWidth:"1320px"}} >
          <Col >
            <div className='section7-wrapper '>
              <Image fluid src='./leafs3.png' alt='leafs3'
                className="section7-newsletter-img"

              />
              <div className='section7-newsletter ' >
                <p className='section7-newsletter-text  text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
                <Form className='mx-auto section7-form'>
                  {/* <Stack direction="horizontal"   > */}
                  <div className='section7-newsletter-form'>
                    <div className='section7-newsletter-form-wrapper'  >
                      <Form.Group className=" " controlId="formBasicEmail">

                        <Form.Control className=" newsletter-form-group-control" type="email" placeholder="Enter email" />

                      </Form.Group>
                    </div>

                    <div className='section7-newsletter-button-wrapper '>
                      <Button className='section7-newsletter-button  btnCustom' type="submit">
                        Submit
                      </Button>
                    </div>
                    </div>
                  {/* </Stack> */}
                </Form>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </div>

  )
}

export default HomeContent