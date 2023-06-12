import React from 'react';
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Join Us, here where a great adventurous fun-ful awaits you.</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to={'https://github.com/Vijay263601'}><i class="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to={'https://instagram.com/vijaymajila'}><i class="ri-instagram-line"></i></Link>
                </span>
                <span>
                  <Link to={'https://facebook.com/vijay.majila.56'}><i class="ri-facebook-circle-fill"></i></Link>
                </span>
                <span>
                  <Link to={'https://www.linkedin.com/in/vijay-singh-majila-252429160/'}><i class="ri-linkedin-box-fill"></i></Link>
                </span>
                <span>
                  <Link to={'https://discord.gg/bCpaU6MQJN'}><i class="ri-discord-fill"></i></Link>
                </span>
                <span>
                  <Link to={'https://codepen.io/vijay263601'}><i class="ri-codepen-fill"></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className='footer__quick-links'>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>

                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    Address:
                  </h6>

                  <p className='mb-0'>Uttarakhand, India</p>

                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>

                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    Address:
                  </h6>

                  <p className='mb-0'>Uttarakhand, India</p>

                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>

                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class="ri-phone-fill"></i>
                    </span>
                    Phone:
                  </h6>

                  <p className='mb-0'>+918563254860</p>

                </ListGroupItem>

            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            
            <p className="copyright"> <span><i class="ri-copyright-line"></i></span> Copyright {year} design & developed by : Vijay Singh Majila. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;