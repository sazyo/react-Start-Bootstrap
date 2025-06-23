import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Divider from './Divider';

const PortfolioModal = ({ show, onHide, title, imgSrc }) => (
    <Modal
        show={show}
        onHide={onHide}
        size="xl"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title className="text-secondary text-uppercase">
                {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <Divider />
                        <img
                            className="img-fluid rounded mb-5"
                            src={imgSrc}
                            alt={title}
                            style={{ maxWidth: '100%' }}
                        />
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Mollitia neque assumenda ipsam nihil, molestias magnam.
                        </p>
                        <Button variant="primary" onClick={onHide}>
                            <i className="fas fa-xmark fa-fw me-1"></i>
                            Close Window
                        </Button>
                    </div>
                </div>
            </div>
        </Modal.Body>
    </Modal>
);

export default PortfolioModal;