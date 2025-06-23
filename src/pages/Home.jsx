import React from 'react';
import { Container } from 'react-bootstrap';
import avatar from '../assets/img/avataaars.svg'; // الصورة

const Home = () => (
    <header className="bg-primary text-white text-center min-vh-100 d-flex align-items-center justify-content-center">
        <Container fluid className="d-flex flex-column align-items-center">
            <img
                src={avatar}
                alt="Avatar"
                className="rounded-circle mb-4"
                style={{ width: '200px', height: '200px' }}
            />

            <h1 className="text-uppercase fw-bold mb-3">Start Bootstrap</h1>

            <div className="d-flex align-items-center mb-3">
                <div className="border-top border-white w-25 me-2" style={{ height: '1px' }}></div>
                <div className="fs-4">⭐</div>
                <div className="border-top border-white w-25 ms-2" style={{ height: '1px' }}></div>
            </div>

            <p className="fw-light fs-5">Graphic Artist - Web Designer - Illustrator</p>
        </Container>
    </header>
);

export default Home;
