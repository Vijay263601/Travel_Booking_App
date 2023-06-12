import React from 'react';
import './newsletter.css';


import { Container, Row, Col } from 'reactstrap';
import maleTourisrt from '../assets/images/male-tourist.png';


const Newsletter = () => {
    return <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful travelling information.</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your email' />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>

                        <p>A good newsletter introduction should always start with a hook. This could be an interesting statistic,
                            a personal story, or a question that piques the reader's curiosity. The goal is to get the reader's
                            attention and make them want to read more.</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourisrt} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Newsletter