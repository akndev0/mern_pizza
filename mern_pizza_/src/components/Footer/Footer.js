import { Col, Container, ListGroup, Row, Card, Stack } from "react-bootstrap"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css"
const Footer = () => {
  return (
    
      <Container fluid className="footerMain">
        <Row className="footer ">
          <Col sm={12} md={4} >
            <Card className="cart-item h-100 mx-auto">
              <Card.Header className="list-header mx-auto cart-item">Mern Pizza</Card.Header>
              <ListGroup className="list cart-item mx-auto">
                <ListGroup.Item className="list">20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK<br />69QJ+2F Alexandria, United Kingdom</ListGroup.Item>
                <ListGroup.Item className="list">PHONE - +91 123 456 789 0 , +91 123 456 789 0</ListGroup.Item>
                <ListGroup.Item className="list">EMAIL - support@lorem.com</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="cart-item h-100">
              <Card.Header className="list-header mx-auto">OPENING HOURS</Card.Header>
              <ListGroup className="list cart-item mx-auto " >
                <ListGroup.Item className="list">
                  <Stack direction="horizontal" gap={3} className="" >
                    <div className="  " >Mon - Tues :</div>
                    <div className="  ms-auto  hoursMain2" >6.00 am - 10.00 pm</div>

                  </Stack>
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  <Stack direction="horizontal" gap={3} className="" >
                    <div className="  ">Wednes - Thurs :</div>
                    <div className="  ms-auto hoursMain2" >6.00 am - 10.00 pm</div>

                  </Stack>
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  <Stack direction="horizontal" gap={3} className="" >
                    <div className="hoursMain" >Launch : </div>
                    <div className=" ms-auto  hoursMain2 ">Everyday</div>

                  </Stack>
                </ListGroup.Item>
                <ListGroup.Item className="list">
                  <Stack direction="horizontal" gap={3} className=""  >
                    <div className="  "  >Sunday :</div>
                    <div className="ms-auto  closed" >Closed</div>

                  </Stack>
                </ListGroup.Item>






              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="cart-item h-100">
              <Card.Header className="list-header cart-item mx-auto">USEFUL LINKS</Card.Header>
              <ListGroup className="list cart-item mx-auto"
              >
                <ListGroup.Item className="list">Privacy Policy</ListGroup.Item>
                <ListGroup.Item className="list">Order Tracking</ListGroup.Item>
                <ListGroup.Item className="list">Warranty and Services</ListGroup.Item>
                <ListGroup.Item className="list">About</ListGroup.Item>
                <ListGroup.Item className="list">Contact Us</ListGroup.Item>
                <ListGroup.Item className="list">Wishlist</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="break">
          <hr />

        </Row>
       
        <Row className="footer ">
          <Col className="rightscol" ><p className="rights">© Mern Pizza all Rights Reserved. </p></Col>
          <Col className="my-auto">

            <Stack direction="horizontal" gap={3} className="footerIcons" >
              <FaFacebookF className="ms-auto footerIcon"/>
              <FaTwitter className="footerIcon" />
              <FaInstagram className="footerIcon" />


            </Stack>

          </Col>
        </Row>
        
      </Container>


    
  )
}

export default Footer
