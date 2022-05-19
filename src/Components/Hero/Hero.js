import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
        return (
                <>
                    <section className="hero">
                        <Container className="c_custom">
                            <Row className="pt-4">
                                <Col sm={12} className="order-sm-1 order-1 d-sm-block d-none">
                                    
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </>
        );
};

export default Hero;