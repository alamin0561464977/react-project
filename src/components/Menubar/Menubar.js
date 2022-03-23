import React from 'react';
import './Menubar.css'
const Menubar = (props) => {
    return (
        <div className='menubar'>
            <div className='logo'>
                <h3>AmaZon</h3>
            </div>
            <div className='li'>
                <li>Home</li>
                <li>Cart<sup>{props.count}</sup></li>
                <li>Contact</li>
                <li>Login</li>
            </div>
        </div>
    );
};

export default Menubar;