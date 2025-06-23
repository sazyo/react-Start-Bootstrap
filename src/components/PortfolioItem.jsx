import React, { useState } from 'react';
import PortfolioModal from './PortfolioModal';

const PortfolioItem = ({ imgSrc, title }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className="col-md-6 col-lg-4 mb-4"
                onClick={() => setShowModal(true)}
                style={{ cursor: 'pointer' }}
            >
                <div className="position-relative overflow-hidden rounded shadow-sm">
                    {/* Overlay with plus icon */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 opacity-0 hover-opacity-100 transition">
                        <i className="fas fa-plus fa-2x text-white"></i>
                    </div>

                    {/* Image */}
                    <img
                        src={imgSrc}
                        alt={title}
                        className="img-fluid"
                    />
                </div>
            </div>

            <PortfolioModal
                show={showModal}
                onHide={() => setShowModal(false)}
                title={title}
                imgSrc={imgSrc}
            />
        </>
    );
};

export default PortfolioItem;
