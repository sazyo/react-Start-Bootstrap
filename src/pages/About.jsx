import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Divider from '../components/Divider';

const About = () => (
    <section className="bg-primary text-white py-5 mt-5" id="about">
        <Container>

            <h2 className="text-center text-uppercase mt-5 mb-3">About</h2>


            <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="border-top border-white w-25 mx-2" style={{ height: '1px' }}></div>
                <div className="fs-4">⭐</div>
                <div className="border-top border-white w-25 mx-2" style={{ height: '1px' }}></div>
            </div>


            <Row className="justify-content-center">
                <Col lg={4} className="mb-3">
                    <p className="lead text-center text-lg-start">
                        Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes
                        the complete source files including HTML, CSS, and JavaScript as well as optional SASS
                        stylesheets for easy customization.
                    </p>
                </Col>
                <Col lg={4}>
                    <p className="lead text-center text-lg-start">
                        You can create your own custom avatar for the masthead, change the icon in the dividers,
                        and add your email address to the contact form to make it fully functional!
                    </p>
                </Col>
            </Row>


            <div className="text-center mt-4">
                <a
                    className="btn btn-outline-light btn-lg"
                    href="https://startbootstrap.com/theme/freelancer/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fas fa-download me-2"></i>
                    Free Download!
                </a>
            </div>
        </Container>
    </section>
);

export default About;
