import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Divider = ({ light = false }) => (
    <div className={`divider-custom ${light ? 'divider-light' : ''}`}>
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="divider-custom-line"></div>
    </div>
);

export default Divider;