import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
    <>
        {/* Footer content */}
        <footer className="text-white py-5" style={{ backgroundColor: '#2c3e50' }}>
            <Container>
                <Row className="text-center">
                    {/* Location */}
                    <Col lg={4} className="mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </Col>

                    {/* Around the Web */}
                    <Col lg={4} className="mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <div className="d-flex justify-content-center">
                            {['facebook-f', 'twitter', 'linkedin-in', 'dribbble'].map((icon, idx) => (
                                <a
                                    key={idx}
                                    className="btn btn-outline-light btn-social mx-2 rounded-circle"
                                    href="#!"
                                    style={{ width: '40px', height: '40px', lineHeight: '40px', padding: 0 }}
                                >
                                    <i className={`fab fa-${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </Col>

                    {/* About Freelancer */}
                    <Col lg={4}>
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="https://startbootstrap.com" className="text-info text-decoration-none">
                                {' '}Start Bootstrap
                            </a>.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>

        {/* Copyright Bar */}
        <div className="text-center text-white py-3" style={{ backgroundColor: '#1a252f' }}>
            Copyright © Your Website 2023
        </div>
    </>
);

export default Footer;
