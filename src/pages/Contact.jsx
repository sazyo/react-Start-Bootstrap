import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

const Contact = () => (
    <section className="py-5" id="contact">
        <Container>
            <h2 className="text-center text-uppercase text-secondary mb-3 mt-5">
                Contact Me
            </h2>

            {/* Divider with star */}
            <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="border-top w-25 mx-2" style={{ height: '1px' }}></div>
                <div className="fs-4 text-secondary">★</div>
                <div className="border-top w-25 mx-2" style={{ height: '1px' }}></div>
            </div>

            <Row className="justify-content-center">
                <Col lg={8} xl={7}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    </section>
);

export default Contact;
