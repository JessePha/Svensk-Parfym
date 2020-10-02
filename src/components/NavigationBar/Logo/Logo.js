import React from 'react';
import Logo from '../../../shared/Images/newLogo.jpg';
import './Logo.css';

const logo = (props) => (
    <div className='Logo' style={{height: props.height}}>
        <img src={Logo} alt="Logo" />
    </div>
);

export default logo;