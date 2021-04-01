import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Header;