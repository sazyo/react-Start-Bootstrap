import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PortfolioItem from '../components/PortfolioItem';

import cabinImg from '../assets/img/portfolio/cabin.png';
import cakeImg from '../assets/img/portfolio/cake.png';
import circusImg from '../assets/img/portfolio/circus.png';
import gameImg from '../assets/img/portfolio/game.png';
import safeImg from '../assets/img/portfolio/safe.png';
import submarineImg from '../assets/img/portfolio/submarine.png';

const portfolioItems = [
    { id: 1, imgSrc: cabinImg, title: 'Log Cabin' },
    { id: 2, imgSrc: cakeImg, title: 'Tasty Cake' },
    { id: 3, imgSrc: circusImg, title: 'Circus Tent' },
    { id: 4, imgSrc: gameImg, title: 'Controller' },
    { id: 5, imgSrc: safeImg, title: 'Locked Safe' },
    { id: 6, imgSrc: submarineImg, title: 'Submarine' },
];

const Services = () => (
    <section className="py-5" id="portfolio">
        <Container>
            <div>
                <h2 className="text-center text-uppercase text-secondary mt-5 mb-3">
                    Portfolio
                </h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="border-top border-dark w-25 mx-2" style={{ height: '1px' }}></div>
                <div className="fs-4">⭐</div>
                <div className="border-top border-dark w-25 mx-2" style={{ height: '1px' }}></div>
            </div>

            <Row className="justify-content-center">
                {portfolioItems.map(item => (
                    <PortfolioItem
                        key={item.id}
                        imgSrc={item.imgSrc}
                        title={item.title}
                    />
                ))}
            </Row>
        </Container>
    </section>
);

export default Services;
